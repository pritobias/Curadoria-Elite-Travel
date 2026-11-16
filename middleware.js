/**
 * Curadoria Elite Travel — Agenda Cultural.
 * Arquivo: middleware.js na raiz do repositório.
 * Middleware Edge para evitar acrescentar uma função Node.js ao limite Hobby.
 * Pesquisa experimental de eventos públicos; não altera arquivos api/.
 * Ainda não integra o HTML nem controla pesquisas por e-mail no Supabase.
 */

export const config = {
  matcher: ['/agenda-cultural/pesquisar'],
};

const MAX_RESULTS = 5;
const SEARCH_TIMEOUT_MS = 4500;
const PAGE_TIMEOUT_MS = 3500;
const USER_AGENT = 'Mozilla/5.0 (compatible; CuradoriaEliteTravelResearch/0.1)';

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

function texto(value) {
  return String(value ?? '').replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim();
}

function urlPublica(value) {
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:') return null;
    if (url.username || url.password) return null;
    const host = url.hostname.toLowerCase();
    if (host === 'localhost' || host.endsWith('.localhost') ||
        host.endsWith('.local') || host.endsWith('.internal') ||
        host === '0.0.0.0' || host === '[::1]' ||
        /^\d+\.\d+\.\d+\.\d+$/.test(host) ||
        host.includes(':') || !host.includes('.')) return null;
    return url;
  } catch {
    return null;
  }
}

async function buscarHTML(url, timeoutMs) {
  const parsed = urlPublica(url);
  if (!parsed) throw new Error('URL não permitida');
  const response = await fetch(parsed.href, {
    redirect: 'manual',
    signal: AbortSignal.timeout(timeoutMs),
    headers: {
      'Accept': 'text/html,application/xhtml+xml',
      'User-Agent': USER_AGENT,
    },
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const tipo = response.headers.get('content-type') || '';
  if (!/html|xml/i.test(tipo)) throw new Error('Resposta não HTML');
  const tamanho = Number(response.headers.get('content-length') || 0);
  if (tamanho > 1_500_000) throw new Error('Página muito grande');
  return (await response.text()).slice(0, 1_500_000);
}

function decodificar(text) {
  return text.replace(/&amp;/g, '&').replace(/&quot;/g, '"')
    .replace(/&#(?:x([\da-f]+)|(\d+));/gi, (_, hex, dec) => {
      try { return String.fromCodePoint(parseInt(hex || dec, hex ? 16 : 10)); }
      catch { return ''; }
    });
}

function linksDaPesquisa(html) {
  const links = [];
  const blocos = html.match(/<li\b[^>]*class=["'][^"']*\bb_algo\b[^"']*["'][\s\S]*?<\/li>/gi) || [];
  for (const bloco of blocos) {
    const match = bloco.match(/<h2\b[^>]*>[\s\S]*?<a\b[^>]*href=["']([^"']+)["']/i);
    if (!match) continue;
    const url = urlPublica(decodificar(match[1]));
    if (url && !url.hostname.endsWith('bing.com') && !links.includes(url.href)) {
      links.push(url.href);
    }
  }
  return links.slice(0, 8);
}

function coletarEventos(node, output = []) {
  if (!node || typeof node !== 'object') return output;
  if (Array.isArray(node)) {
    for (const item of node) coletarEventos(item, output);
    return output;
  }
  const tipo = node['@type'];
  const tipos = Array.isArray(tipo) ? tipo : [tipo];
  if (tipos.some(item => typeof item === 'string' && /Event$/i.test(item))) {
    output.push(node);
  }
  if (node['@graph']) coletarEventos(node['@graph'], output);
  if (node.mainEntity) coletarEventos(node.mainEntity, output);
  if (node.itemListElement) coletarEventos(node.itemListElement, output);
  return output;
}

function eventosEstruturados(html) {
  const encontrados = [];
  const scripts = html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi);
  for (const script of scripts) {
    try { coletarEventos(JSON.parse(script[1].trim()), encontrados); }
    catch { /* ignorar dados inválidos */ }
  }
  return encontrados;
}

function textoCampo(value) {
  if (typeof value === 'string') return texto(value);
  if (value && typeof value === 'object') return texto(value.name || value.text || '');
  return '';
}

function enderecoURL(value) {
  const item = Array.isArray(value) ? value[0] : value;
  return typeof item === 'string' ? item : item?.url || item?.contentUrl || '';
}

function normalizarEvento(evento, pagina, cidade, data, categoria) {
  const inicio = String(evento.startDate || '');
  if (inicio.slice(0, 10) !== data) return null;
  const nome = textoCampo(evento.name);
  if (!nome) return null;
  const local = Array.isArray(evento.location) ? evento.location[0] : evento.location;
  const estabelecimento = textoCampo(local);
  const enderecoBruto = local?.address;
  const endereco = typeof enderecoBruto === 'string' ? texto(enderecoBruto) :
    [enderecoBruto?.streetAddress, enderecoBruto?.addressLocality,
      enderecoBruto?.addressRegion, enderecoBruto?.addressCountry]
      .filter(Boolean).map(texto).join(', ');
  const localizacao = `${estabelecimento} ${endereco}`.toLocaleLowerCase();
  if (!localizacao.includes(cidade.toLocaleLowerCase())) return null;
  const oferta = Array.isArray(evento.offers) ? evento.offers[0] : evento.offers;
  const preco = oferta?.price ?? oferta?.lowPrice ?? null;
  return {
    id: `${nome}|${inicio}|${estabelecimento}`.toLocaleLowerCase(),
    title: nome,
    starts_at: inicio,
    city: cidade,
    category_requested: categoria || 'todos',
    description: textoCampo(evento.description).slice(0, 260) || null,
    venue: estabelecimento || null,
    address: endereco || null,
    image_url: urlPublica(enderecoURL(evento.image))?.href || null,
    event_url: urlPublica(enderecoURL(evento.url))?.href || pagina,
    ticket_url: urlPublica(enderecoURL(oferta?.url))?.href || null,
    price: preco === null ? null : String(preco),
    currency: typeof oferta?.priceCurrency === 'string' ? oferta.priceCurrency : null,
    half_price: null,
    availability: null,
    event_type: Array.isArray(evento['@type']) ? evento['@type'].join(', ') : String(evento['@type'] || ''),
    source_url: pagina,
    verification: 'Dados estruturados públicos; preços e ingressos não confirmados com a bilheteria',
  };
}

async function pesquisarEventos({ cidade, data, categoria }) {
  const consulta = [categoria || 'eventos', 'em', cidade, data, 'ingressos'].join(' ');
  const busca = `https://www.bing.com/search?q=${encodeURIComponent(consulta)}&count=20`;
  const avisos = [];
  let links = [];
  try { links = linksDaPesquisa(await buscarHTML(busca, SEARCH_TIMEOUT_MS)); }
  catch (erro) { avisos.push(`Busca pública indisponível: ${erro.message}`); }
  if (!links.length) avisos.push('Nenhum link recuperado; o buscador pode bloquear consultas automatizadas.');
  const candidatos = await Promise.all(links.slice(0, 5).map(async link => {
    try {
      const html = await buscarHTML(link, PAGE_TIMEOUT_MS);
      return eventosEstruturados(html)
        .map(item => normalizarEvento(item, link, cidade, data, categoria))
        .filter(Boolean);
    } catch { return []; }
  }));
  const eventos = [];
  for (const item of candidatos.flat()) {
    if (!eventos.some(outro => outro.id === item.id)) eventos.push(item);
    if (eventos.length >= MAX_RESULTS) break;
  }
  return {
    ok: true,
    query: { city: cidade, date: data, category: categoria },
    count: eventos.length,
    events: eventos,
    warnings: avisos,
    experimental: true,
    note: 'Pesquisa experimental; a ausência de resultados não comprova ausência de eventos.',
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
      ok: true,
      ferramenta: 'Agenda Cultural CET',
      etapa: 'pesquisa-experimental-edge',
      mensagem: 'Conexão ativa. Informe cidade e data para pesquisar.',
      pesquisa_ativa: true,
    });
  }
  if (!cidade || cidade.length > 90 || categoria.length > 60 ||
      !/^\d{4}-\d{2}-\d{2}$/.test(data)) {
    return respostaJSON({ ok: false, erro: 'Informe cidade, data AAAA-MM-DD e categoria opcional.' }, 400);
  }
  const [ano, mes, dia] = data.split('-').map(Number);
  const verificada = new Date(Date.UTC(ano, mes - 1, dia));
  if (verificada.getUTCFullYear() !== ano || verificada.getUTCMonth() !== mes - 1 ||
      verificada.getUTCDate() !== dia) {
    return respostaJSON({ ok: false, erro: 'Data inválida.' }, 400);
  }
  try {
    const resultado = await pesquisarEventos({ cidade, data, categoria });
    return respostaJSON({ ferramenta: 'Agenda Cultural CET',
      etapa: 'pesquisa-experimental-edge', pesquisa_ativa: true, ...resultado });
  } catch (erro) {
    return respostaJSON({ ok: false, erro: 'Não foi possível concluir a pesquisa.',
      detalhe: String(erro?.message || 'Falha desconhecida').slice(0, 120) }, 503);
  }
}
