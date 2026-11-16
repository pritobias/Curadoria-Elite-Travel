/**
 * Curadoria Elite Travel — Agenda Cultural, pesquisa experimental.
 * Destino: middleware.js na RAIZ do repositório (substituir conteúdo).
 * Vercel Routing Middleware (Node.js). Não modifica pasta api/.
 * Consulta resultados públicos do Bing e extrai dados Event JSON-LD.
 * NÃO garante resultados, ingressos, preços nem cobertura completa.
 * NÃO aplica ainda o limite de 1 consulta/e-mail/24h (etapa Supabase).
 * NÃO está conectado ainda ao partner/agenda-cultural.html.
 */

export const config = {
  matcher: ['/agenda-cultural/pesquisar'],
  runtime: 'nodejs',
};

function respostaJSON(dados, status = 200) {
  return new Response(JSON.stringify(dados), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

const MAX_RESULTS = 5;
const SEARCH_TIMEOUT_MS = 5500;
const PAGE_TIMEOUT_MS = 4200;
const USER_AGENT = 'Mozilla/5.0 (compatible; CuradoriaEliteTravelResearch/0.1)';

function plain(value) {
  return String(value ?? '').replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim();
}

function safeHttpUrl(value) {
  try {
    const url = new URL(value);
    if (!['https:', 'http:'].includes(url.protocol)) return null;
    if (url.username || url.password) return null;
    const host = url.hostname.toLowerCase();
    if (host === 'localhost' || host.endsWith('.localhost') || host.endsWith('.local') ||
        host.endsWith('.internal') || host === '0.0.0.0' || host === '::1' ||
        /^127\./.test(host) || /^10\./.test(host) || /^192\.168\./.test(host) ||
        /^169\.254\./.test(host) || /^172\.(1[6-9]|2\d|3[01])\./.test(host) ||
        /^0\./.test(host) || /^224\./.test(host) || /^\d+$/.test(host)) return null;
    return url;
  } catch { return null; }
}

async function fetchPublic(url, timeoutMs) {
  const parsed = safeHttpUrl(url);
  if (!parsed) throw new Error('URL não permitida');
  // Não segue redirecionamentos automaticamente: evita alcançar endereços internos.
  const response = await fetch(parsed, {
    redirect: 'manual',
    signal: AbortSignal.timeout(timeoutMs),
    headers: { 'User-Agent': USER_AGENT, 'Accept': 'text/html,application/xhtml+xml' }
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const type = response.headers.get('content-type') || '';
  if (!/html|xml/i.test(type)) throw new Error('Conteúdo não HTML');
  const len = Number(response.headers.get('content-length') || 0);
  if (len > 1_500_000) throw new Error('Página grande demais');
  const text = await response.text();
  return text.slice(0, 1_500_000);
}

function decodeEntities(text) {
  return text.replace(/&amp;/g, '&').replace(/&quot;/g, '"')
    .replace(/&#(?:x([\da-f]+)|(\d+));/gi, (_, hex, dec) => {
      try { return String.fromCodePoint(parseInt(hex || dec, hex ? 16 : 10)); }
      catch { return ''; }
    });
}

function extractSearchLinks(html) {
  // Extrai apenas links explícitos dos resultados orgânicos do Bing.
  const links = [];
  const blocks = html.match(/<li\b[^>]*class=["'][^"']*\bb_algo\b[^"']*["'][\s\S]*?<\/li>/gi) || [];
  for (const block of blocks) {
    const m = block.match(/<h2\b[^>]*>[\s\S]*?<a\b[^>]*href=["']([^"']+)["']/i);
    if (!m) continue;
    const url = safeHttpUrl(decodeEntities(m[1]));
    if (url && !/bing\.com$/.test(url.hostname) && !links.includes(url.href)) links.push(url.href);
  }
  return links.slice(0, 12);
}

function collectEvents(node, output = []) {
  if (!node || typeof node !== 'object') return output;
  if (Array.isArray(node)) {
    for (const item of node) collectEvents(item, output);
    return output;
  }
  const type = node['@type'];
  const types = Array.isArray(type) ? type : [type];
  if (types.some(t => typeof t === 'string' && /(^|\/)Event$|Event$/i.test(t))) output.push(node);
  if (node['@graph']) collectEvents(node['@graph'], output);
  if (node.mainEntity) collectEvents(node.mainEntity, output);
  if (node.itemListElement) collectEvents(node.itemListElement, output);
  return output;
}

function extractStructuredEvents(html) {
  const output = [];
  const scripts = html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi);
  for (const match of scripts) {
    try { collectEvents(JSON.parse(match[1].trim()), output); }
    catch { /* ignorar JSON-LD inválido */ }
  }
  return output;
}

function asText(v) {
  if (typeof v === 'string') return plain(v);
  if (v && typeof v === 'object') return plain(v.name || v.text || '');
  return '';
}

function asUrl(v) {
  const item = Array.isArray(v) ? v[0] : v;
  return typeof item === 'string' ? item : item?.url || item?.contentUrl || '';
}

function normalizedEvent(event, pageUrl, city, date, category) {
  const start = String(event.startDate || '');
  if (!/^\d{4}-\d{2}-\d{2}/.test(start) || start.slice(0, 10) !== date) return null;
  const title = asText(event.name);
  if (!title) return null;
  const location = Array.isArray(event.location) ? event.location[0] : event.location;
  const place = asText(location);
  const addressObject = location?.address;
  const address = typeof addressObject === 'string' ? plain(addressObject) :
    [addressObject?.streetAddress, addressObject?.addressLocality, addressObject?.addressRegion,
      addressObject?.addressCountry].filter(Boolean).map(plain).join(', ');
  const locationText = `${place} ${address}`.toLocaleLowerCase();
  // Só aceita localização que mencione a cidade consultada. Isso reduz falsos positivos.
  if (!locationText.includes(city.toLocaleLowerCase())) return null;
  const offer = Array.isArray(event.offers) ? event.offers[0] : event.offers;
  const priceNumber = offer?.price ?? offer?.lowPrice ?? null;
  const price = priceNumber === null ? null : String(priceNumber);
  const currency = typeof offer?.priceCurrency === 'string' ? offer.priceCurrency : null;
  const ticketUrl = safeHttpUrl(asUrl(offer?.url))?.href || null;
  const eventUrl = safeHttpUrl(asUrl(event.url))?.href || pageUrl;
  const imageUrl = safeHttpUrl(asUrl(event.image))?.href || null;
  const description = asText(event.description).slice(0, 260);
  const eventType = Array.isArray(event['@type']) ? event['@type'].join(', ') : String(event['@type'] || '');
  // Categoria é uma preferência de busca, não uma classificação confirmada.
  return {
    id: `${title}|${start}|${place}`.toLocaleLowerCase(),
    title, starts_at: start, city, category_requested: category || 'todos',
    description: description || null, venue: place || null, address: address || null,
    image_url: imageUrl, event_url: eventUrl, ticket_url: ticketUrl,
    price: price, currency, half_price: null,
    availability: null, event_type: eventType,
    source_url: pageUrl, verification: 'dados extraídos de JSON-LD público; não confirmados com bilheteria'
  };
}

async function discoverEvents({ city, date, category = '' }) {
  if (typeof city !== 'string' || !city.trim() || city.length > 90) throw new Error('Cidade inválida');
  if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
      Number.isNaN(new Date(`${date}T12:00:00Z`).getTime()) ||
      new Date(`${date}T12:00:00Z`).toISOString().slice(0, 10) !== date) throw new Error('Data inválida');
  if (typeof category !== 'string' || category.length > 60) throw new Error('Categoria inválida');
  const cleanCity = city.trim();
  const query = [category.trim() || 'eventos', 'em', cleanCity, date, 'ingressos'].join(' ');
  const searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}&count=20`;
  const warnings = [];
  let links = [];
  try { links = extractSearchLinks(await fetchPublic(searchUrl, SEARCH_TIMEOUT_MS)); }
  catch (error) { warnings.push(`Pesquisa indisponível: ${error.message}`); }
  if (!links.length) warnings.push('Nenhum link público recuperado; o buscador pode bloquear scraping.');
  // Limita o trabalho total e consulta páginas em paralelo para reduzir latência.
  const candidates = await Promise.all(links.slice(0, 6).map(async link => {
    try {
      const html = await fetchPublic(link, PAGE_TIMEOUT_MS);
      return extractStructuredEvents(html)
        .map(raw => normalizedEvent(raw, link, cleanCity, date, category))
        .filter(Boolean);
    } catch { return []; }
  }));
  const results = [];
  for (const event of candidates.flat()) {
    if (!results.some(item => item.id === event.id)) results.push(event);
    if (results.length >= MAX_RESULTS) break;
  }
  return {
    ok: true, query: { city: cleanCity, date, category },
    count: results.length, events: results,
    warnings, experimental: true,
    note: 'Pesquisa experimental. Resultados não representam cobertura completa da cidade; preços e ingressos exigem confirmação no site oficial.'
  };
}


export default async function middleware(request) {
  const url = new URL(request.url);
  if (url.pathname !== '/agenda-cultural/pesquisar') {
    return respostaJSON({ ok: false, erro: 'Endereço não reconhecido.' }, 404);
  }
  if (request.method !== 'GET') {
    return respostaJSON({ ok: false, erro: 'Método não permitido.' }, 405);
  }
  const cidade = (url.searchParams.get('cidade') || '').trim();
  const data = (url.searchParams.get('data') || '').trim();
  const categoria = (url.searchParams.get('categoria') || '').trim();
  if (!cidade && !data && !categoria) {
    return respostaJSON({
      ok: true, ferramenta: 'Agenda Cultural CET', etapa: 'pesquisa-experimental',
      mensagem: 'A Vercel está respondendo. Informe cidade e data para pesquisar.',
      pesquisa_ativa: true,
    });
  }
  if (!cidade || cidade.length > 90 || categoria.length > 60 ||
      !/^\d{4}-\d{2}-\d{2}$/.test(data)) {
    return respostaJSON({ ok: false, erro: 'Informe cidade, data AAAA-MM-DD e categoria opcional.' }, 400);
  }
  const [ano, mes, dia] = data.split('-').map(Number);
  const verificada = new Date(Date.UTC(ano, mes - 1, dia));
  if (verificada.getUTCFullYear() !== ano || verificada.getUTCMonth() !== mes - 1 || verificada.getUTCDate() !== dia) {
    return respostaJSON({ ok: false, erro: 'Data inválida.' }, 400);
  }
  try {
    const result = await discoverEvents({ city: cidade, date: data, category: categoria });
    return respostaJSON({ ferramenta: 'Agenda Cultural CET', etapa: 'pesquisa-experimental',
      pesquisa_ativa: true, ...result });
  } catch (error) {
    return respostaJSON({ ok: false, erro: 'Não foi possível concluir a pesquisa.',
      detalhe: String(error?.message || 'Falha desconhecida').slice(0, 120) }, 503);
  }
}
