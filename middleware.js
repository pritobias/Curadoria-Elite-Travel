/**
 * Curadoria Elite Travel — teste de conexão da Agenda Cultural.
 * Arquivo: middleware.js (raiz do repositório).
 *
 * IMPORTANTE: o matcher precisa ser uma string literal para que
 * a Vercel consiga analisar a configuração durante o build.
 * Esta etapa não realiza scraping e não altera outras rotas.
 */

export const config = {
  matcher: ['/agenda-cultural/pesquisar'],
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

export default function middleware(request) {
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
      etapa: 'conexao-vercel',
      mensagem: 'A execução na Vercel está respondendo.',
      pesquisa_ativa: false,
    });
  }

  if (!cidade || cidade.length > 100 || !/^\d{4}-\d{2}-\d{2}$/.test(data) || categoria.length > 60) {
    return respostaJSON({
      ok: false,
      erro: 'Informe cidade (até 100 caracteres), data (AAAA-MM-DD) e categoria opcional.',
    }, 400);
  }

  const [ano, mes, dia] = data.split('-').map(Number);
  const verificada = new Date(Date.UTC(ano, mes - 1, dia));
  if (verificada.getUTCFullYear() !== ano || verificada.getUTCMonth() !== mes - 1 || verificada.getUTCDate() !== dia) {
    return respostaJSON({ ok: false, erro: 'Data inválida.' }, 400);
  }

  return respostaJSON({
    ok: true,
    ferramenta: 'Agenda Cultural CET',
    etapa: 'conexao-vercel',
    mensagem: 'A Vercel recebeu os filtros. O motor de eventos ainda não foi conectado.',
    filtros: { cidade, data, categoria },
    pesquisa_ativa: false,
  });
}
