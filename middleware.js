/**
 * Curadoria Elite Travel — conexão inicial da Agenda Cultural com a Vercel.
 *
 * Arquivo de destino no GitHub: middleware.js (RAIZ do repositório).
 * NÃO substituir partner/agenda-cultural.html.
 * NÃO criar pasta api ou editar funções existentes.
 *
 * Teste após publicação:
 * https://curadoriaelitetravel.com/agenda-cultural/pesquisar
 *
 * Esta primeira etapa comprova a execução e o endereço da função.
 * Ainda NÃO pesquisa eventos, NÃO aplica limite de e-mail e NÃO altera o HTML.
 */

const CAMINHO = '/agenda-cultural/pesquisar';

// Restringe a execução a um único endereço: não intercepta compras nem outras páginas.
export const config = {
  matcher: [CAMINHO],
};

function json(dados, status = 200) {
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

  if (url.pathname !== CAMINHO) {
    return json({ ok: false, erro: 'Endereço não reconhecido.' }, 404);
  }

  if (request.method !== 'GET') {
    return json({ ok: false, erro: 'Método não permitido.' }, 405);
  }

  const cidade = (url.searchParams.get('cidade') || '').trim();
  const data = (url.searchParams.get('data') || '').trim();
  const categoria = (url.searchParams.get('categoria') || '').trim();

  // Acessar sem parâmetros é o teste inicial de conexão.
  if (!cidade && !data && !categoria) {
    return json({
      ok: true,
      ferramenta: 'Agenda Cultural CET',
      etapa: 'conexao-vercel',
      mensagem: 'A execução na Vercel está respondendo.',
      pesquisa_ativa: false,
    });
  }

  if (!cidade || cidade.length > 100 || !/^\d{4}-\d{2}-\d{2}$/.test(data) || categoria.length > 60) {
    return json({
      ok: false,
      erro: 'Informe cidade (até 100 caracteres), data (AAAA-MM-DD) e categoria opcional.',
    }, 400);
  }

  const [ano, mes, dia] = data.split('-').map(Number);
  const verificada = new Date(Date.UTC(ano, mes - 1, dia));
  if (verificada.getUTCFullYear() !== ano || verificada.getUTCMonth() !== mes - 1 || verificada.getUTCDate() !== dia) {
    return json({ ok: false, erro: 'Data inválida.' }, 400);
  }

  return json({
    ok: true,
    ferramenta: 'Agenda Cultural CET',
    etapa: 'conexao-vercel',
    mensagem: 'A Vercel recebeu os filtros. O motor de eventos ainda não foi conectado.',
    filtros: { cidade, data, categoria },
    pesquisa_ativa: false,
  });
}
