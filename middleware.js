/**
 * Curadoria Elite Travel — Agenda Cultural
 * middleware.js (raiz do projeto) — Edge Middleware
 * Pesquisa experimental em páginas públicas: Sympla (Brasil) e Ticketmaster (internacional).
 * Sem API externa, sem funções em api/, sem catálogo fixo de cidades.
 * IMPORTANTE: extração pública depende de acesso HTTP e de JSON-LD nas páginas.
 * Não garante cobertura integral da Ticketmaster ou da Sympla.
 */
export const config = { matcher: ['/agenda-cultural/pesquisar'] };

const LIMITE = 5;
const TIMEOUT = 5500;
const MAX_HTML = 1400000;

function resposta(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store', 'x-content-type-options': 'nosniff' },
  });
}

function limpar(value) {
  return String(value ?? '').replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ').trim();
}

function normalizar(value) {
  return limpar(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function urlSegura(value, allowedHosts) {
  try {
    const u = new URL(value);
    if (u.protocol !== 'https:' || u.username || u.password) return null;
    const host = u.hostname.toLowerCase();
    if (!allowedHosts.some(h => host === h || host.endsWith('.' + h))) return null;
    return u;
  } catch { return null; }
}

async function htmlPublico(url, allowedHosts) {
  const u = urlSegura(url, allowedHosts);
  if (!u) throw new Error('Domínio não autorizado');
  const response = await fetch(u.href, {
    redirect: 'follow', signal: AbortSignal.timeout(TIMEOUT),
    headers: { accept: 'text/html,application/xhtml+xml',
      'user-agent': 'Mozilla/5.0 (compatible; CuradoriaEliteTravel/1.0)' },
  });
  if (!response.ok) throw new Error('HTTP ' + response.status);
  const final = urlSegura(response.url, allowedHosts);
  if (!final) throw new Error('Redirecionamento para domínio não autorizado');
  if (!/html/i.test(response.headers.get('content-type') || '')) throw new Error('Conteúdo não HTML');
  const tamanho = Number(response.headers.get('content-length') || 0);
  if (tamanho > MAX_HTML) throw new Error('Página muito grande');
  return { html: (await response.text()).slice(0, MAX_HTML), url: final.href };
}

function jsonLd(html) {
  const eventos = [];
  const re = /<script\b[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  for (const match of html.matchAll(re)) {
    try { coletar(JSON.parse(match[1]), eventos); } catch { /* dados não estruturados */ }
  }
  return eventos;
}

function coletar(node, eventos, depth = 0) {
  if (!node || typeof node !== 'object' || depth > 8) return;
  if (Array.isArray(node)) {
    for (const item of node) coletar(item, eventos, depth + 1);
    return;
  }
  const types = Array.isArray(node['@type']) ? node['@type'] : [node['@type']];
  if (types.some(t => typeof t === 'string' && /Event$/i.test(t))) eventos.push(node);
  for (const field of ['@graph', 'mainEntity', 'itemListElement', 'item']) {
    if (node[field]) coletar(node[field], eventos, depth + 1);
  }
}

function primeiro(v) { return Array.isArray(v) ? v[0] : v; }
function valor(v) { return typeof v === 'string' ? v : (v?.name || v?.text || ''); }
function href(v) { return typeof v === 'string' ? v : (v?.url || v?.contentUrl || ''); }

function eventoNormalizado(raw, sourceUrl, cidade, data, fonte) {
  const inicio = String(raw.startDate || '');
  if (inicio.slice(0, 10) !== data) return null;
  const nome = limpar(valor(raw.name));
  if (!nome) return null;
  const local = primeiro(raw.location);
  const enderecoObj = local?.address;
  const endereco = typeof enderecoObj === 'string' ? limpar(enderecoObj) :
    [enderecoObj?.streetAddress, enderecoObj?.addressLocality, enderecoObj?.addressRegion,
      enderecoObj?.addressCountry].filter(Boolean).map(limpar).join(', ');
  const estabelecimento = limpar(valor(local));
  // A cidade precisa constar nos dados do evento, não apenas no parâmetro de pesquisa.
  if (!normalizar(estabelecimento + ' ' + endereco).includes(normalizar(cidade))) return null;
  const oferta = primeiro(raw.offers);
  const hostFonte = fonte === 'sympla' ? ['sympla.com.br'] : ['ticketmaster.com', 'ticketmaster.fr',
    'ticketmaster.es', 'ticketmaster.co.uk', 'ticketmaster.de', 'ticketmaster.it',
    'ticketmaster.nl', 'ticketmaster.be', 'ticketmaster.ie', 'ticketmaster.ca',
    'ticketmaster.com.mx', 'ticketmaster.com.au', 'ticketmaster.co.nz',
    'ticketmaster.se', 'ticketmaster.no', 'ticketmaster.dk', 'ticketmaster.fi',
    'ticketmaster.pl', 'ticketmaster.ch', 'ticketmaster.at', 'ticketmaster.cz'];
  const urlEvento = urlSegura(href(raw.url), hostFonte)?.href || sourceUrl;
  const urlIngresso = urlSegura(href(oferta?.url), hostFonte)?.href || urlEvento;
  const imagem = href(primeiro(raw.image));
  const imagemSegura = (() => { try { const u = new URL(imagem); return u.protocol === 'https:' ? u.href : null; } catch { return null; } })();
  return {
    id: [nome, inicio, estabelecimento].map(normalizar).join('|'),
    title: nome, starts_at: inicio, city: cidade, venue: estabelecimento || null,
    address: endereco || null, description: limpar(valor(raw.description)).slice(0, 260) || null,
    image_url: imagemSegura, event_url: urlEvento, ticket_url: urlIngresso,
    price: oferta?.price == null ? null : String(oferta.price),
    currency: oferta?.priceCurrency || null, half_price: null, availability: null,
    source: fonte, source_url: sourceUrl,
    verification: 'Informações extraídas de dados estruturados públicos; disponibilidade não confirmada',
  };
}

// Sites de cada mercado; nenhuma cidade é cadastrada previamente.
// País não atendido por este mapa retorna aviso explícito, não uma busca falsa.
const MERCADOS = Object.freeze({
  US: 'www.ticketmaster.com', CA: 'www.ticketmaster.ca', MX: 'www.ticketmaster.com.mx',
  FR: 'www.ticketmaster.fr', ES: 'www.ticketmaster.es', GB: 'www.ticketmaster.co.uk',
  UK: 'www.ticketmaster.co.uk', DE: 'www.ticketmaster.de', IT: 'www.ticketmaster.it',
  NL: 'www.ticketmaster.nl', BE: 'www.ticketmaster.be', IE: 'www.ticketmaster.ie',
  AU: 'www.ticketmaster.com.au', NZ: 'www.ticketmaster.co.nz',
  SE: 'www.ticketmaster.se', NO: 'www.ticketmaster.no', DK: 'www.ticketmaster.dk',
  FI: 'www.ticketmaster.fi', PL: 'www.ticketmaster.pl', CH: 'www.ticketmaster.ch',
  AT: 'www.ticketmaster.at', CZ: 'www.ticketmaster.cz',
});
const PAISES = Object.freeze({
  BR: ['br', 'brasil', 'brazil'], US: ['us', 'usa', 'estados unidos', 'united states'],
  CA: ['ca', 'canada'], MX: ['mx', 'mexico'], FR: ['fr', 'franca', 'france'],
  ES: ['es', 'espanha', 'spain'], GB: ['gb', 'uk', 'reino unido', 'united kingdom'],
  DE: ['de', 'alemanha', 'germany'], IT: ['it', 'italia', 'italy'],
  NL: ['nl', 'paises baixos', 'netherlands', 'holanda'], BE: ['be', 'belgica', 'belgium'],
  IE: ['ie', 'irlanda', 'ireland'], AU: ['au', 'australia'], NZ: ['nz', 'nova zelandia', 'new zealand'],
  SE: ['se', 'suecia', 'sweden'], NO: ['no', 'noruega', 'norway'],
  DK: ['dk', 'dinamarca', 'denmark'], FI: ['fi', 'finlandia', 'finland'],
  PL: ['pl', 'polonia', 'poland'], CH: ['ch', 'suica', 'switzerland'],
  AT: ['at', 'austria'], CZ: ['cz', 'republica tcheca', 'czechia'],
});
function codigoPais(pais) {
  const p = normalizar(pais);
  for (const [codigo, nomes] of Object.entries(PAISES)) {
    if (nomes.includes(p)) return codigo;
  }
  return null;
}

function linksEventos(html, base, allowedHosts) {
  const encontrados = new Set();
  const re = /<a\b[^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*>/gi;
  for (const m of html.matchAll(re)) {
    const raw = m[1].replace(/&amp;/g, '&');
    let url;
    try { url = new URL(raw, base); } catch { continue; }
    if (!urlSegura(url.href, allowedHosts)) continue;
    // Somente caminhos de detalhe de evento; evita páginas genéricas.
    if (!/(\/event\/|\/evento\/|\/eventos\/[^/?]+|\/manifestation\/|\/event\/[^/?]+\/)/i.test(url.pathname)) continue;
    url.hash = '';
    encontrados.add(url.href);
    if (encontrados.size >= 12) break;
  }
  return [...encontrados];
}

async function pesquisar({ cidade, pais, data, categoria }) {
  const codigo = codigoPais(pais);
  if (!codigo) return { ok: false, erro: 'País não identificado. Informe o país por nome ou código ISO.', events: [] };
  const brasileiro = codigo === 'BR';
  const host = brasileiro ? 'www.sympla.com.br' : MERCADOS[codigo];
  if (!host) return { ok: false, erro: 'Mercado Ticketmaster ainda não configurado para este país.', events: [] };
  const fonte = brasileiro ? 'sympla' : 'ticketmaster';
  const hosts = brasileiro ? ['sympla.com.br'] : [host.replace(/^www\./, '')];
  const termo = [cidade, categoria && normalizar(categoria) !== 'todos' ? categoria : ''].filter(Boolean).join(' ');
  // URLs públicas de busca: o HTML pode variar entre mercados e bloquear robôs.
  const urlBusca = brasileiro
    ? `https://${host}/eventos?search=${encodeURIComponent(termo)}`
    : `https://${host}/search?q=${encodeURIComponent(termo)}`;
  const warnings = [];
  let pagina;
  try { pagina = await htmlPublico(urlBusca, hosts); }
  catch (e) {
    return { ok: false, source: fonte, source_search_url: urlBusca, events: [],
      warnings: [`A plataforma não permitiu a leitura da pesquisa: ${e.message}`],
      note: 'Sem resultados verificáveis; não significa ausência de eventos.' };
  }
  const eventos = [];
  const vistos = new Set();
  function adicionar(raw, origem) {
    const evento = eventoNormalizado(raw, origem, cidade, data, fonte);
    if (evento && !vistos.has(evento.id)) { vistos.add(evento.id); eventos.push(evento); }
  }
  for (const item of jsonLd(pagina.html)) adicionar(item, pagina.url);
  const links = linksEventos(pagina.html, pagina.url, hosts);
  const lotes = await Promise.all(links.slice(0, 8).map(async link => {
    try { const page = await htmlPublico(link, hosts); return { page, items: jsonLd(page.html) }; }
    catch { return null; }
  }));
  for (const lote of lotes) {
    if (!lote) continue;
    for (const item of lote.items) adicionar(item, lote.page.url);
  }
  if (!eventos.length) warnings.push('Nenhum evento pôde ser verificado nos dados públicos acessíveis. A plataforma pode carregar resultados por JavaScript ou bloquear a leitura automatizada.');
  return {
    ok: true, source: fonte, source_search_url: urlBusca,
    count: Math.min(eventos.length, LIMITE), events: eventos.slice(0, LIMITE),
    warnings, experimental: true,
    note: 'Pesquisa experimental; resultados não representam cobertura integral da plataforma.',
  };
}

export default async function middleware(request) {
  if (request.method !== 'GET') return resposta({ ok: false, erro: 'Método não permitido' }, 405);
  const u = new URL(request.url);
  const cidade = (u.searchParams.get('cidade') || '').trim();
  const pais = (u.searchParams.get('pais') || '').trim();
  const data = (u.searchParams.get('data') || '').trim();
  const categoria = (u.searchParams.get('categoria') || 'todos').trim();
  if (!cidade && !pais && !data) return resposta({ ok: true, ferramenta: 'Agenda Cultural CET',
    mensagem: 'Informe cidade, país e data.', pesquisa_ativa: true,
    sources: ['Ticketmaster internacional', 'Sympla Brasil'] });
  if (!cidade || cidade.length > 90 || !pais || pais.length > 80 || categoria.length > 60 ||
      !/^\d{4}-\d{2}-\d{2}$/.test(data)) {
    return resposta({ ok: false, erro: 'Informe cidade, país, data AAAA-MM-DD e categoria opcional.' }, 400);
  }
  const [ano, mes, dia] = data.split('-').map(Number);
  const dt = new Date(Date.UTC(ano, mes - 1, dia));
  if (dt.getUTCFullYear() !== ano || dt.getUTCMonth() !== mes - 1 || dt.getUTCDate() !== dia) {
    return resposta({ ok: false, erro: 'Data inválida.' }, 400);
  }
  try {
    const resultado = await pesquisar({ cidade, pais, data, categoria });
    return resposta({ ferramenta: 'Agenda Cultural CET',
      query: { city: cidade, country: pais, date: data, category: categoria }, ...resultado },
      resultado.ok ? 200 : 422);
  } catch {
    return resposta({ ok: false, erro: 'Não foi possível concluir a pesquisa.' }, 503);
  }
}
