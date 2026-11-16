/**
 * Curadoria Elite Travel — Agenda Cultural
 * Arquivo: middleware.js (raiz do projeto)
 * Integração oficial Ticketmaster Discovery API v2 (internacional).
 * Brasil: Sympla ainda não possui integração funcional autorizada;
 * retorna status explícito, sem inventar eventos.
 * Não cria arquivos em api/, não altera pagamentos e não expõe a chave.
 * Configure TICKETMASTER_API_KEY no ambiente da Vercel quando aprovada.
 */
export const config = { matcher: ['/agenda-cultural/pesquisar'] };

const TM_ENDPOINT = 'https://app.ticketmaster.com/discovery/v2/events.json';
const MAX_EVENTS = 5;
const TIMEOUT_MS = 7500;
const COUNTRY_ALIASES = Object.freeze({
  BR: ['br', 'brasil', 'brazil'], US: ['us', 'usa', 'estados unidos', 'united states'],
  CA: ['ca', 'canada', 'canadá'], MX: ['mx', 'mexico', 'méxico'],
  FR: ['fr', 'franca', 'frança', 'france'], ES: ['es', 'espanha', 'spain'],
  GB: ['gb', 'uk', 'reino unido', 'united kingdom'], DE: ['de', 'alemanha', 'germany'],
  IT: ['it', 'italia', 'itália', 'italy'], NL: ['nl', 'holanda', 'paises baixos', 'países baixos', 'netherlands'],
  BE: ['be', 'belgica', 'bélgica', 'belgium'], IE: ['ie', 'irlanda', 'ireland'],
  AU: ['au', 'australia', 'austrália'], NZ: ['nz', 'nova zelandia', 'nova zelândia', 'new zealand'],
  SE: ['se', 'suecia', 'suécia', 'sweden'], NO: ['no', 'noruega', 'norway'],
  DK: ['dk', 'dinamarca', 'denmark'], FI: ['fi', 'finlandia', 'finlândia', 'finland'],
  PL: ['pl', 'polonia', 'polônia', 'poland'], CH: ['ch', 'suica', 'suíça', 'switzerland'],
  AT: ['at', 'austria', 'áustria'], CZ: ['cz', 'republica tcheca', 'república tcheca', 'czechia'],
  PT: ['pt', 'portugal'], AR: ['ar', 'argentina'], CL: ['cl', 'chile'],
  CO: ['co', 'colombia', 'colômbia'], JP: ['jp', 'japao', 'japão', 'japan'],
});

function responseJSON(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff',
    },
  });
}

function normalize(value) {
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase();
}

function countryCode(value) {
  const search = normalize(value);
  for (const [code, aliases] of Object.entries(COUNTRY_ALIASES)) {
    if (aliases.some(alias => normalize(alias) === search)) return code;
  }
  return /^[A-Za-z]{2}$/.test(value) ? value.toUpperCase() : null;
}

function validDate(date) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const [y, m, d] = date.split('-').map(Number);
  const parsed = new Date(Date.UTC(y, m - 1, d));
  return parsed.getUTCFullYear() === y && parsed.getUTCMonth() === m - 1 && parsed.getUTCDate() === d;
}

function nextDate(date) {
  const parsed = new Date(`${date}T00:00:00Z`);
  parsed.setUTCDate(parsed.getUTCDate() + 1);
  return parsed.toISOString().slice(0, 10);
}

function httpsURL(value) {
  try {
    const url = new URL(String(value));
    return url.protocol === 'https:' ? url.href : null;
  } catch { return null; }
}

function categorySegment(category) {
  const name = normalize(category);
  if (!name || ['todos', 'todas', 'all', 'eventos'].includes(name)) return null;
  if (['show', 'shows', 'musica', 'musical', 'concertos', 'concerts'].includes(name)) return 'Music';
  if (['esporte', 'esportes', 'sports', 'futebol'].includes(name)) return 'Sports';
  if (['teatro', 'theater', 'theatre', 'artes', 'danca', 'dança', 'musicais'].includes(name)) return 'Arts & Theatre';
  return null; // Não aplicar um filtro que possa excluir eventos por engano.
}

function dateOfEvent(event) {
  return event?.dates?.start?.localDate || null;
}

function mapEvent(event, city, date) {
  if (!event || typeof event !== 'object' || dateOfEvent(event) !== date) return null;
  const venue = event?._embedded?.venues?.[0] || null;
  const actualCity = venue?.city?.name || '';
  // A Ticketmaster pode retornar eventos de cidades vizinhas: exigir a cidade solicitada.
  if (!actualCity || normalize(actualCity) !== normalize(city)) return null;
  const name = typeof event.name === 'string' ? event.name.trim() : '';
  if (!name) return null;
  const priceRange = event.priceRanges?.find(p => p && Number.isFinite(p.min)) || null;
  const image = event.images?.find(img => img?.ratio === '16_9' && httpsURL(img.url)) ||
    event.images?.find(img => httpsURL(img?.url));
  const address = [venue?.address?.line1, venue?.address?.line2, actualCity,
    venue?.state?.stateCode, venue?.country?.countryCode].filter(Boolean).join(', ');
  const link = httpsURL(event.url);
  if (!link) return null;
  return {
    id: String(event.id || `${name}-${date}`),
    title: name,
    starts_at: event?.dates?.start?.dateTime ||
      `${date}${event?.dates?.start?.localTime ? 'T' + event.dates.start.localTime : ''}`,
    date: date,
    time_local: event?.dates?.start?.localTime || null,
    city: actualCity,
    venue: venue?.name || null,
    address: address || null,
    description: typeof event.info === 'string' ? event.info.slice(0, 260) : null,
    image_url: image ? httpsURL(image.url) : null,
    event_url: link,
    ticket_url: link,
    price: priceRange ? String(priceRange.min) : null,
    currency: priceRange?.currency || null,
    half_price: null,
    availability: event?.dates?.status?.code || null,
    event_type: event?.classifications?.[0]?.segment?.name || null,
    source: 'ticketmaster',
    source_url: link,
    verification: 'Dados da Ticketmaster Discovery API; disponibilidade e preços sujeitos a alteração',
  };
}

async function ticketmasterSearch({ city, country, date, category }) {
  const key = process.env.TICKETMASTER_API_KEY;
  if (!key) return {
    ok: false, source: 'ticketmaster', count: 0, events: [],
    error_code: 'TICKETMASTER_KEY_PENDING',
    warnings: ['Integração preparada. Aguardando aprovação da conta e configuração de TICKETMASTER_API_KEY na Vercel.'],
  };

  // Intervalo amplo em UTC para não excluir eventos próximos da meia-noite local.
  // A data local exata é validada nos resultados (dates.start.localDate).
  const start = new Date(`${date}T00:00:00Z`);
  start.setUTCDate(start.getUTCDate() - 1);
  const end = `${nextDate(nextDate(date))}T00:00:00Z`;
  const query = new URL(TM_ENDPOINT);
  query.searchParams.set('apikey', key);
  query.searchParams.set('city', city);
  query.searchParams.set('countryCode', country);
  query.searchParams.set('startDateTime', start.toISOString().replace('.000Z', 'Z'));
  query.searchParams.set('endDateTime', end);
  query.searchParams.set('size', '100');
  query.searchParams.set('sort', 'date,asc');
  const segment = categorySegment(category);
  if (segment) query.searchParams.set('segmentName', segment);

  let result;
  try {
    result = await fetch(query.href, {
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: { accept: 'application/json' },
    });
  } catch {
    return { ok: false, source: 'ticketmaster', count: 0, events: [],
      error_code: 'SOURCE_UNREACHABLE', warnings: ['Não foi possível consultar a Ticketmaster neste momento.'] };
  }
  if (!result.ok) {
    const errorCode = result.status === 401 || result.status === 403
      ? 'TICKETMASTER_KEY_REJECTED' : 'TICKETMASTER_HTTP_ERROR';
    return { ok: false, source: 'ticketmaster', count: 0, events: [],
      error_code: errorCode, warnings: [`A Ticketmaster retornou HTTP ${result.status}.`] };
  }
  let data;
  try { data = await result.json(); }
  catch { return { ok: false, source: 'ticketmaster', count: 0, events: [],
    error_code: 'INVALID_SOURCE_RESPONSE', warnings: ['A Ticketmaster não retornou JSON válido.'] }; }
  const raw = Array.isArray(data?._embedded?.events) ? data._embedded.events : [];
  const events = [];
  const seen = new Set();
  for (const item of raw) {
    const event = mapEvent(item, city, date);
    if (!event || seen.has(event.id)) continue;
    seen.add(event.id);
    events.push(event);
    if (events.length === MAX_EVENTS) break;
  }
  return { ok: true, source: 'ticketmaster', count: events.length, events,
    warnings: events.length ? [] : ['Nenhum evento foi confirmado para a cidade e a data nos resultados consultados. Isso não comprova ausência de eventos.'],
    note: 'Pesquisa oficial limitada aos resultados consultados; não garante cobertura completa do catálogo.' };
}

export default async function middleware(request) {
  if (request.method !== 'GET') return responseJSON({ ok: false, error: 'Método não permitido.' }, 405);
  const url = new URL(request.url);
  const city = (url.searchParams.get('cidade') || '').trim();
  const countryInput = (url.searchParams.get('pais') || '').trim();
  const date = (url.searchParams.get('data') || '').trim();
  const category = (url.searchParams.get('categoria') || 'todos').trim();
  if (!city && !countryInput && !date) {
    return responseJSON({ ok: true, ferramenta: 'Agenda Cultural CET',
      message: 'Informe cidade, país e data.',
      ticketmaster: process.env.TICKETMASTER_API_KEY ? 'configured' : 'pending_key',
      sympla: 'pending_source' });
  }
  if (!city || city.length > 90 || !countryInput || countryInput.length > 80 ||
      category.length > 60 || !validDate(date)) {
    return responseJSON({ ok: false, error: 'Informe cidade, país, data AAAA-MM-DD e categoria opcional.' }, 400);
  }
  const country = countryCode(countryInput);
  if (!country) return responseJSON({ ok: false, error: 'País não reconhecido.' }, 400);
  const query = { city, country, date, category };
  if (country === 'BR') {
    return responseJSON({ ferramenta: 'Agenda Cultural CET', query, ok: false,
      source: 'sympla', count: 0, events: [], error_code: 'SYMPLA_INTEGRATION_PENDING',
      warnings: ['A integração de eventos públicos da Sympla ainda não possui um método de acesso validado.'] }, 503);
  }
  const result = await ticketmasterSearch(query);
  return responseJSON({ ferramenta: 'Agenda Cultural CET', query, ...result }, result.ok ? 200 : 503);
}
