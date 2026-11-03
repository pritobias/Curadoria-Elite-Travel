const fs = require("fs");
const path = require("path");

/* =========================================================
   CURADORIA ELITE TRAVEL
   GERADOR AUTOMÁTICO DE PÁGINAS DE DESTINO

   Fonte editorial:
   data/destinos.json

   Saída:
   /destinos/{pais}/{cidade}/index.html

   O mesmo motor serve para todos os destinos.
========================================================= */

const ROOT_DIR = path.resolve(__dirname, "..");

const DESTINOS_DATA_PATH =
  path.join(ROOT_DIR, "data", "destinos.json");

const DESTINOS_OUTPUT_DIR =
  path.join(ROOT_DIR, "destinos");

const SITEMAP_PATH =
  path.join(ROOT_DIR, "sitemap.xml");

const SITE_URL =
  "https://www.curadoriaelitetravel.com";

const SUPABASE_URL =
  "https://lnyoqoezezisakghtmim.supabase.co";

const SUPABASE_ANON_KEY =
  "sb_publishable_7NB9Y784asZcGohMBz1ePA_ZDYhwEqf";


/* =========================================================
   UTILITÁRIOS DO GERADOR
========================================================= */

function escapeHtml(value) {

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


function escapeJsonForScript(value) {

  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");

}


function normalizeUrlPath(value) {

  let url =
    String(value || "").trim();


  if (!url.startsWith("/")) {

    url =
      "/" + url;

  }


  if (!url.endsWith("/")) {

    url += "/";

  }


  return url;

}


function ensureDirectory(directory) {

  fs.mkdirSync(
    directory,
    {
      recursive:
        true
    }
  );

}


function validateDestination(
  destino,
  index
) {

  const requiredFields = [

    "cidade",
    "pais",
    "cityLabel",
    "slugPais",
    "slugCidade",
    "url",
    "texto"

  ];


  requiredFields.forEach(
    (field) => {

      if (
        destino[field] === undefined ||
        destino[field] === null ||
        String(
          destino[field]
        ).trim() === ""
      ) {

        throw new Error(
          `Destino ${index + 1}: campo obrigatório ausente ou vazio: ${field}`
        );

      }

    }
  );


  if (
    !Array.isArray(
      destino.imagens
    ) ||
    destino.imagens.length < 3
  ) {

    throw new Error(
      `Destino ${index + 1} (${destino.cidade}): são necessárias pelo menos 3 imagens.`
    );

  }


  destino.imagens.forEach(
    (
      imagem,
      imageIndex
    ) => {

      if (
        !imagem ||
        !imagem.tipo ||
        !imagem.arquivo
      ) {

        throw new Error(
          `Destino ${index + 1} (${destino.cidade}): imagem ${imageIndex + 1} está incompleta.`
        );

      }

    }
  );

}


function getDestinationImages(
  destino
) {

  const bandeira =
    destino.imagens.find(
      (imagem) =>
        imagem.tipo ===
        "bandeira"
    ) ||
    destino.imagens[0];


  const pontosTuristicos =
    destino.imagens.filter(
      (imagem) =>
        imagem.tipo ===
        "ponto-turistico"
    );


  const ponto1 =
    pontosTuristicos[0] ||
    destino.imagens[1];


  const ponto2 =
    pontosTuristicos[1] ||
    destino.imagens[2];


  return {

    bandeira:
      bandeira.arquivo,

    ponto1:
      ponto1.arquivo,

    ponto2:
      ponto2.arquivo

  };

}


function getMetaDescription(
  destino
) {

  const base =
    `Descubra ${destino.cidade}, ${destino.pais}, com informações selecionadas, ` +
    `materiais digitais e ferramentas da Curadoria Elite Travel para preparar sua viagem de forma autônoma.`;


  return base.length <= 160
    ? base
    : base
        .slice(
          0,
          157
        )
        .trim() +
      "...";

}


/* =========================================================
   TEMPLATE DA PÁGINA
========================================================= */

function buildDestinationHtml(
  destino
) {

  const cidade =
    escapeHtml(
      destino.cidade
    );


  const pais =
    escapeHtml(
      destino.pais
    );


  const texto =
    escapeHtml(
      destino.texto
    );


  const destinationUrl =
    normalizeUrlPath(
      destino.url
    );


  const canonicalUrl =
    SITE_URL +
    destinationUrl;


  const metaDescription =
    escapeHtml(
      getMetaDescription(
        destino
      )
    );


  const pageTitle =
    `${cidade}, ${pais} | Materiais e ferramentas para viajar melhor | Curadoria Elite Travel`;


  const images =
    getDestinationImages(
      destino
    );


  const bandeira =
    escapeHtml(
      images.bandeira
    );


  const ponto1 =
    escapeHtml(
      images.ponto1
    );


  const ponto2 =
    escapeHtml(
      images.ponto2
    );


  const destinationData =
    escapeJsonForScript({

      cidade:
        destino.cidade,

      pais:
        destino.pais,

      cityLabel:
        destino.cityLabel,

      url:
        destinationUrl

    });


  return `<!DOCTYPE html>

<html lang="pt-BR">

<head>

  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>
    ${pageTitle}
  </title>

  <meta
    name="description"
    content="${metaDescription}"
  >

  <link
    rel="canonical"
    href="${canonicalUrl}"
  >

  <meta
    property="og:type"
    content="website"
  >

  <meta
    property="og:title"
    content="${pageTitle}"
  >

  <meta
    property="og:description"
    content="${metaDescription}"
  >

  <meta
    property="og:url"
    content="${canonicalUrl}"
  >

  <meta
    property="og:site_name"
    content="Curadoria Elite Travel"
  >

  <meta
    name="twitter:card"
    content="summary_large_image"
  >

  <meta
    name="twitter:title"
    content="${pageTitle}"
  >

  <meta
    name="twitter:description"
    content="${metaDescription}"
  >


  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&display=swap" rel="stylesheet">

  <script
    src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"
  ></script>


  <style>

    :root{
      --gold:#d4af37;
      --gold-soft:#ead37a;
      --black:#050505;
      --black-2:#0d0d0d;
      --panel:#121211;
      --panel-soft:#191816;
      --text:#f5f5f5;
      --muted:#cfcfcf;
      --muted-2:#a9a9a9;
      --line:rgba(212,175,55,.22);
      --danger:#ffb4b4;
      --success:#8ee7a5;
      --header-height:82px;
    }


    *{
      box-sizing:border-box;
    }


    html{
      scroll-behavior:smooth;
    }


    body{
      margin:0;
      background:
        var(--black);
      color:
        var(--text);
      font-family:
        Arial,
        Helvetica,
        sans-serif;
      -webkit-font-smoothing:
        antialiased;
      overflow-x:hidden;
    }


    body::before{
      content:"";
      position:fixed;
      inset:0;
      pointer-events:none;
      z-index:-10;
      background:
        radial-gradient(
          circle at 20% 20%,
          rgba(212,175,55,.04),
          transparent 28%
        ),
        radial-gradient(
          circle at 80% 70%,
          rgba(212,175,55,.025),
          transparent 30%
        ),
        #050505;
    }


    button,
    input{
      font:
        inherit;
    }


    button{
      cursor:pointer;
    }


    a{
      color:inherit;
    }


    img{
      max-width:100%;
    }


    /* =====================================================
       HEADER — identidade visual da página inicial
    ===================================================== */

    header{
      padding:16px 40px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      position:fixed;
      width:100%;
      top:0;
      left:0;
      z-index:1000;
      background:rgba(0,0,0,.30);
      backdrop-filter:blur(10px);
      -webkit-backdrop-filter:blur(10px);
      border-bottom:1px solid rgba(255,255,255,.08);
      gap:16px;
    }

    .brand{
      display:flex;
      align-items:center;
      gap:12px;
      min-width:240px;
      text-decoration:none;
      cursor:pointer;
    }

    .brand img{
      height:34px;
      width:34px;
      object-fit:contain;
      flex:0 0 auto;
    }

    .brand-name{
      font-family:"Cinzel",Georgia,serif;
      font-size:18px;
      color:#d4af37;
      letter-spacing:.8px;
      text-transform:uppercase;
      line-height:1.1;
    }

    .brand-tagline{
      font-size:12px;
      color:rgba(255,255,255,.7);
      line-height:1.2;
      margin-top:2px;
    }

    nav{
      display:flex;
      align-items:center;
      gap:16px;
      flex-wrap:wrap;
      justify-content:flex-end;
      position:relative;
    }

    .nav-menu{
      display:flex;
      align-items:center;
      gap:16px;
      flex-wrap:wrap;
      justify-content:flex-end;
    }

    nav a{
      color:#d4af37;
      text-decoration:none;
      font-size:14px;
      font-weight:500;
      cursor:pointer;
      white-space:nowrap;
      transition:opacity .25s ease,color .25s ease;
    }

    nav a:hover{
      opacity:.88;
    }

    .nav-sep{
      width:1px;
      height:16px;
      background:rgba(255,255,255,.12);
      display:inline-block;
      margin:0 2px;
    }

    .nav-toggle{
      display:none;
      background:transparent;
      border:1px solid rgba(212,175,55,.35);
      color:#d4af37;
      padding:10px 12px;
      border-radius:10px;
      font-weight:700;
      line-height:1;
    }

    .nav-toggle span{
      display:block;
      width:18px;
      height:2px;
      background:#d4af37;
      margin:4px 0;
      border-radius:99px;
    }

    .nav-hidden{
      display:none !important;
    }

    /* Fotografias globais: as imagens vêm de data/destinos.json. */
    .page-photo-carousel{
      position:fixed;
      inset:0;
      z-index:0;
      overflow:hidden;
      pointer-events:none;
      background-color:#050505;
      background-image:url('${ponto1}');
      background-size:cover;
      background-position:center;
    }

    .page-photo-slide{
      position:absolute;
      inset:0;
      background-size:cover;
      background-position:center;
      background-repeat:no-repeat;
      opacity:0;
      transition:opacity 1.2s ease;
    }

    .page-photo-slide.active{
      opacity:1;
    }

    .page-photo-global-overlay{
      position:fixed;
      inset:0;
      z-index:0;
      pointer-events:none;
      background:linear-gradient(180deg,rgba(0,0,0,.35),rgba(0,0,0,.48));
    }

    main{
      position:relative;
      z-index:1;
    }

    @media(max-width:980px){
      header{
        padding:14px 20px;
      }
      .brand{
        min-width:0;
      }
      .nav-toggle{
        display:block;
      }
      .nav-menu{
        display:none;
        position:absolute;
        top:calc(100% + 12px);
        right:0;
        min-width:min(320px,calc(100vw - 40px));
        padding:18px;
        background:rgba(9,9,9,.97);
        border:1px solid rgba(212,175,55,.22);
        border-radius:12px;
        box-shadow:0 18px 35px rgba(0,0,0,.4);
        flex-direction:column;
        align-items:stretch;
        gap:15px;
      }
      header.nav-open .nav-menu{
        display:flex;
      }
      .nav-sep{
        width:100%;
        height:1px;
        margin:0;
      }
    }

    @media(max-width:480px){
      .brand-name{font-size:14px;}
      .brand-tagline{font-size:10px;}
      .brand img{height:30px;width:30px;}
    }

    /* =====================================================
       HERO
    ===================================================== */

    .destination-hero{
      position:relative;
      min-height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      overflow:hidden;
      isolation:isolate;
      border-bottom:
        1px solid
        rgba(212,175,55,.12);
    }


    .destination-hero::before{
      content:"";
      position:absolute;
      inset:0;
      z-index:-4;
      background:
        linear-gradient(
          180deg,
          rgba(0,0,0,.16),
          rgba(0,0,0,.46)
        );
    }


    .destination-hero::after{
      content:"";
      position:absolute;
      inset:0;
      z-index:-2;
      background:
        radial-gradient(
          circle at center,
          rgba(0,0,0,.06),
          rgba(0,0,0,.68) 72%,
          rgba(0,0,0,.90)
        );
      pointer-events:none;
    }


    .hero-photo-layer{
      position:absolute;
      inset:0;
      z-index:-5;
      background-size:cover;
      background-position:center;
      opacity:0;
      transform:
        scale(1.03);
      transition:
        opacity 1.1s ease,
        transform 8s ease;
    }


    .hero-photo-layer.active{
      opacity:1;
      transform:
        scale(1.08);
    }


    .hero-content{
      width:min(
        980px,
        calc(
          100% -
          40px
        )
      );
      margin:0 auto;
      padding:
        70px 0;
      text-align:center;
    }


    .hero-country{
      margin-bottom:14px;
      color:
        rgba(255,255,255,.74);
      font-size:13px;
      font-weight:800;
      letter-spacing:.24em;
      text-transform:uppercase;
      text-shadow:
        0 3px 16px
        rgba(0,0,0,.95);
    }


    .hero-content h1{
      margin:0;
      color:
        var(--gold);
      font-family:
        Georgia,
        "Times New Roman",
        serif;
      font-size:
        clamp(
          58px,
          9vw,
          118px
        );
      line-height:.95;
      font-weight:700;
      text-shadow:
        0 7px 28px
        rgba(0,0,0,.90);
    }


    .hero-divider{
      width:120px;
      height:1px;
      margin:28px auto 22px;
      background:
        linear-gradient(
          90deg,
          transparent,
          var(--gold),
          transparent
        );
    }


    .hero-description{
      width:min(790px,100%);
      margin:0 auto;
      color:
        rgba(255,255,255,.98);
      font-size:16px;
      line-height:1.8;
      text-shadow:
        0 3px 16px
        rgba(0,0,0,.95);
    }


    .discovery-section{
      padding-top:72px;
      padding-bottom:72px;
      background:
        linear-gradient(
          180deg,
          rgba(13,13,12,.96),
          rgba(8,8,8,.98)
        );
    }


    .discovery-copy{
      width:min(900px,100%);
      margin:0 auto;
      color:rgba(255,255,255,.84);
      font-size:16px;
      line-height:1.8;
      text-align:left;
    }


    .discovery-copy p{
      margin:0 0 18px;
    }


    .discovery-copy p:last-child{
      margin-bottom:0;
    }


    /* =====================================================
       ESTRUTURA DAS SEÇÕES
    ===================================================== */

    .content-section{
      position:relative;
      padding:
        90px 40px;
      overflow:hidden;
    }


    .content-shell{
      width:min(
        1120px,
        100%
      );
      margin:0 auto;
      position:relative;
      z-index:3;
    }


    .section-eyebrow{
      margin-bottom:12px;
      text-align:center;
      color:
        rgba(255,255,255,.72);
      font-size:12px;
      font-weight:800;
      letter-spacing:.22em;
      text-transform:uppercase;
    }


    .section-title{
      margin:
        0 auto 18px;
      text-align:center;
      color:
        var(--gold);
      font-family:
        Georgia,
        "Times New Roman",
        serif;
      font-size:
        clamp(
          34px,
          5vw,
          58px
        );
      line-height:1.08;
    }


    .section-subtitle{
      width:min(
        760px,
        100%
      );
      margin:
        0 auto 46px;
      text-align:center;
      color:
        rgba(255,255,255,.80);
      font-size:15px;
      line-height:1.75;
    }


    /* =====================================================
       MATERIAIS
    ===================================================== */

    .materials-section{
      background:
        linear-gradient(
          180deg,
          rgba(14,14,13,.96),
          rgba(8,8,8,.98)
        );
    }


    .materials-section::before{
      content:"";
      position:absolute;
      inset:0;
      z-index:0;
      pointer-events:none;
      background:
        radial-gradient(
          circle at 20% 30%,
          rgba(212,175,55,.055),
          transparent 28%
        ),
        radial-gradient(
          circle at 80% 75%,
          rgba(212,175,55,.035),
          transparent 30%
        );
    }


    .materials-grid{
      display:grid;
      grid-template-columns:
        repeat(
          3,
          minmax(0,1fr)
        );
      gap:20px;
    }


    .material-card{
      position:relative;
      display:flex;
      flex-direction:column;
      min-height:320px;
      padding:28px;
      border-radius:20px;
      background:
        linear-gradient(
          180deg,
          rgba(24,23,21,.95),
          rgba(10,10,10,.96)
        );
      border:
        1px solid
        rgba(212,175,55,.20);
      box-shadow:
        0 18px 46px
        rgba(0,0,0,.34);
      overflow:hidden;
      transition:
        transform .22s ease,
        border-color .22s ease,
        box-shadow .22s ease;
    }


    .material-card::before{
      content:"";
      position:absolute;
      inset:0;
      pointer-events:none;
      background:
        linear-gradient(
          135deg,
          rgba(212,175,55,.05),
          transparent 38%
        );
    }


    .material-card:hover{
      transform:
        translateY(-4px);
      border-color:
        rgba(212,175,55,.42);
      box-shadow:
        0 22px 54px
        rgba(0,0,0,.46);
    }


    .material-icon{
      position:relative;
      z-index:2;
      width:46px;
      height:46px;
      display:flex;
      align-items:center;
      justify-content:center;
      margin-bottom:20px;
      border-radius:14px;
      background:
        rgba(212,175,55,.10);
      border:
        1px solid
        rgba(212,175,55,.18);
      color:
        var(--gold);
      font-size:22px;
    }


    .material-card h3{
      position:relative;
      z-index:2;
      margin:
        0 0 12px;
      color:
        var(--gold);
      font-size:21px;
      line-height:1.25;
    }


    .material-card p{
      position:relative;
      z-index:2;
      flex:1;
      margin:
        0 0 24px;
      color:
        rgba(255,255,255,.79);
      font-size:14px;
      line-height:1.72;
    }


    .material-price{
      position:relative;
      z-index:2;
      margin-bottom:16px;
      color:
        #fff;
      font-size:18px;
      font-weight:800;
    }


    .material-actions{
      position:relative;
      z-index:2;
      display:flex;
      flex-direction:column;
      gap:9px;
    }


    .material-actions button{
      width:100%;
      min-height:44px;
      padding:11px 16px;
      border-radius:10px;
      font-weight:800;
      transition:
        transform .2s ease,
        opacity .2s ease,
        background .2s ease;
    }


    .material-actions button:hover{
      transform:
        translateY(-1px);
    }


    .btn-buy{
      border:
        1px solid
        var(--gold);
      background:
        var(--gold);
      color:#000;
    }


    .btn-cart{
      border:
        1px solid
        rgba(212,175,55,.55);
      background:
        rgba(212,175,55,.06);
      color:
        var(--gold);
    }


    .btn-owned{
      border:
        1px solid
        rgba(142,231,165,.35);
      background:
        rgba(142,231,165,.08);
      color:
        var(--success);
      cursor:default;
    }


    .loading-state,
    .empty-state,
    .error-state{
      grid-column:
        1 / -1;
      padding:34px;
      border-radius:18px;
      text-align:center;
      color:
        rgba(255,255,255,.76);
      background:
        rgba(255,255,255,.035);
      border:
        1px solid
        rgba(255,255,255,.08);
    }


    .error-state{
      color:
        var(--danger);
    }


    /* =====================================================
       FERRAMENTAS
    ===================================================== */

    .tools-section{
      background:
        linear-gradient(
          180deg,
          rgba(18,18,17,.72),
          rgba(10,10,10,.84)
        );
      backdrop-filter:
        blur(5px);
      -webkit-backdrop-filter:
        blur(5px);
    }


    .tools-section::before{
      content:"";
      position:absolute;
      inset:0;
      z-index:0;
      pointer-events:none;
      background:
        linear-gradient(
          90deg,
          rgba(212,175,55,.025),
          transparent 25%,
          transparent 75%,
          rgba(212,175,55,.025)
        );
    }


    .tools-grid{
      display:grid;
      grid-template-columns:
        repeat(
          2,
          minmax(0,1fr)
        );
      gap:20px;
      width:min(
        920px,
        100%
      );
      margin:0 auto;
    }


    .tool-card{
      padding:32px 28px;
      border-radius:20px;
      text-align:center;
      background:
        linear-gradient(
          180deg,
          rgba(20,20,19,.88),
          rgba(8,8,8,.90)
        );
      border:
        1px solid
        rgba(212,175,55,.24);
      box-shadow:
        0 18px 46px
        rgba(0,0,0,.35);
      backdrop-filter:
        blur(10px);
      -webkit-backdrop-filter:
        blur(10px);
    }


    .tool-card h3{
      color:var(--gold);
      margin:0 0 12px;
      font-size:21px;
    }


    .tool-card p{
      color:
        rgba(255,255,255,.82);
      line-height:1.7;
      font-size:14px;
      margin:0 0 20px;
    }


    .tool-card a{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      min-height:44px;
      padding:11px 20px;
      border-radius:10px;
      background:var(--gold);
      color:#000;
      text-decoration:none;
      font-weight:800;
    }


    .travel-tabs{
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:8px;
      width:min(920px,100%);
      margin:0 auto 34px;
      padding:7px;
      border-radius:18px;
      background:rgba(20,20,19,.86);
      border:1px solid rgba(212,175,55,.22);
    }


    .travel-tab{
      min-height:52px;
      padding:12px 16px;
      border:0;
      border-radius:13px;
      background:transparent;
      color:rgba(255,255,255,.82);
      font-weight:800;
      cursor:pointer;
    }


    .travel-tab.active{
      background:var(--gold);
      color:#000;
    }


    .travel-panel{
      display:none;
    }


    .travel-panel.active{
      display:block;
    }


    .travel-panel-title{
      width:min(920px,100%);
      margin:0 auto 20px;
      color:var(--gold);
      font-size:22px;
    }


    .tools-grid.services-grid{
      grid-template-columns:repeat(3,minmax(0,1fr));
      width:min(1040px,100%);
    }


    /* =====================================================
       POPUPS E CARRINHO
    ===================================================== */

    .popup-bg{
      position:fixed;
      inset:0;
      display:none;
      align-items:center;
      justify-content:center;
      padding:18px;
      background:
        rgba(0,0,0,.86);
      z-index:5000;
    }


    .popup-bg.active{
      display:flex;
    }


    .popup-card{
      width:min(
        560px,
        100%
      );
      max-height:
        calc(
          100vh -
          36px
        );
      overflow:auto;
      border-radius:20px;
      padding:28px;
      background:
        linear-gradient(
          180deg,
          #171715,
          #0b0b0b
        );
      border:
        1px solid
        rgba(212,175,55,.28);
      box-shadow:
        0 24px 80px
        rgba(0,0,0,.72);
    }


    .popup-card h3{
      margin:
        0 0 12px;
      color:
        var(--gold);
      font-size:24px;
    }


    .popup-card p{
      margin:
        0 0 14px;
      color:
        rgba(255,255,255,.80);
      line-height:1.65;
    }


    .popup-actions{
      display:flex;
      gap:10px;
      flex-wrap:wrap;
      margin-top:20px;
    }


    .popup-actions button,
    .popup-actions a{
      min-height:42px;
      display:inline-flex;
      align-items:center;
      justify-content:center;
      padding:10px 16px;
      border-radius:10px;
      text-decoration:none;
      font-weight:800;
    }


    .popup-primary{
      border:
        1px solid
        var(--gold);
      background:
        var(--gold);
      color:#000;
    }


    .popup-secondary{
      border:
        1px solid
        rgba(212,175,55,.42);
      background:
        transparent;
      color:
        var(--gold);
    }


    .popup-muted{
      border:
        1px solid
        rgba(255,255,255,.14);
      background:
        rgba(255,255,255,.04);
      color:
        rgba(255,255,255,.82);
    }


    .popup-rules{
      margin:
        18px 0 0;
      padding:
        16px 18px;
      border-radius:14px;
      background:
        rgba(255,255,255,.035);
      border:
        1px solid
        rgba(255,255,255,.08);
      color:
        rgba(255,255,255,.76);
      font-size:13px;
      line-height:1.6;
    }


    .popup-rules ul{
      margin:
        10px 0 0;
      padding-left:18px;
    }


    .popup-rules li{
      margin-bottom:7px;
    }


    .consent-row{
      display:flex;
      align-items:flex-start;
      gap:10px;
      margin-top:18px;
      padding:14px;
      border-radius:12px;
      background:
        rgba(212,175,55,.055);
      border:
        1px solid
        rgba(212,175,55,.16);
    }


    .consent-row input{
      margin-top:3px;
      flex:0 0 auto;
    }


    .consent-row label{
      color:
        rgba(255,255,255,.82);
      font-size:13px;
      line-height:1.55;
      cursor:pointer;
    }


    .cart-popup-card{
      width:min(
        760px,
        100%
      );
    }


    .cart-list{
      display:flex;
      flex-direction:column;
      gap:12px;
      margin-top:18px;
    }


    .cart-item{
      display:grid;
      grid-template-columns:
        minmax(0,1fr)
        auto;
      gap:18px;
      align-items:center;
      padding:16px;
      border-radius:14px;
      background:
        rgba(255,255,255,.035);
      border:
        1px solid
        rgba(255,255,255,.08);
    }


    .cart-item-title{
      color:
        var(--gold);
      font-weight:800;
      margin-bottom:4px;
    }


    .cart-item-meta{
      color:
        rgba(255,255,255,.68);
      font-size:12px;
      line-height:1.5;
    }


    .cart-item-price{
      color:#fff;
      font-weight:800;
      white-space:nowrap;
    }


    .cart-item-remove{
      margin-top:8px;
      padding:0;
      border:0;
      background:
        transparent;
      color:
        #e4a3a3;
      font-size:12px;
      text-decoration:underline;
    }


    .cart-summary{
      margin-top:18px;
      padding-top:18px;
      border-top:
        1px solid
        rgba(255,255,255,.10);
    }


    .cart-summary-row{
      display:flex;
      justify-content:
        space-between;
      gap:18px;
      margin-bottom:8px;
      color:
        rgba(255,255,255,.78);
    }


    .cart-summary-row.total{
      margin-top:12px;
      padding-top:12px;
      border-top:
        1px solid
        rgba(255,255,255,.08);
      color:#fff;
      font-size:18px;
      font-weight:800;
    }


    .coupon-box{
      margin-top:18px;
      padding:16px;
      border-radius:14px;
      background:
        rgba(212,175,55,.045);
      border:
        1px solid
        rgba(212,175,55,.14);
    }


    .coupon-box label{
      display:block;
      margin-bottom:8px;
      color:
        rgba(255,255,255,.78);
      font-size:13px;
      font-weight:800;
    }


    .coupon-row{
      display:grid;
      grid-template-columns:
        minmax(0,1fr)
        auto;
      gap:9px;
    }


    .coupon-row input{
      width:100%;
      min-height:42px;
      padding:
        10px 12px;
      border-radius:9px;
      border:
        1px solid
        rgba(255,255,255,.14);
      background:
        rgba(255,255,255,.05);
      color:#fff;
      outline:none;
    }


    .coupon-row input:focus{
      border-color:
        rgba(212,175,55,.52);
    }


    .coupon-row button{
      min-height:42px;
      padding:
        10px 15px;
      border-radius:9px;
      border:
        1px solid
        var(--gold);
      background:
        var(--gold);
      color:#000;
      font-weight:800;
    }


    .coupon-message{
      min-height:18px;
      margin-top:8px;
      color:
        rgba(255,255,255,.66);
      font-size:12px;
    }


    .coupon-message.success{
      color:
        var(--success);
    }


    .coupon-message.error{
      color:
        var(--danger);
    }


    /* =====================================================
       FOOTER
    ===================================================== */

    footer{
      padding:
        34px 20px 42px;
      text-align:center;
      color:
        rgba(255,255,255,.58);
      font-size:12px;
      line-height:1.7;
      border-top:
        1px solid
        rgba(212,175,55,.12);
      background:#050505;
    }


    footer a{
      color:
        rgba(255,255,255,.68);
      text-decoration:none;
    }


    footer a:hover{
      color:
        var(--gold);
    }


    .footer-social{
      display:flex;
      align-items:center;
      justify-content:center;
      gap:10px;
      margin-top:18px;
    }


    .footer-social a{
      width:36px;
      height:36px;
      display:flex;
      align-items:center;
      justify-content:center;
      border-radius:50%;
      background:
        rgba(255,255,255,.035);
      border:
        1px solid
        rgba(255,255,255,.09);
      transition:
        border-color .2s ease,
        transform .2s ease,
        color .2s ease;
    }


    .footer-social a:hover{
      transform:
        translateY(-2px);
      border-color:
        rgba(212,175,55,.36);
      color:
        var(--gold);
    }


    .footer-social svg{
      width:17px;
      height:17px;
      fill:
        currentColor;
    }


    /* =====================================================
       RESPONSIVO
    ===================================================== */

    @media(
      max-width:980px
    ){

      .materials-grid{
        grid-template-columns:
          repeat(
            2,
            minmax(0,1fr)
          );
      }


      .tools-grid,
      .tools-grid.services-grid{
        grid-template-columns:1fr;
      }

    }


    @media(
      max-width:760px
    ){

      :root{
        --header-height:72px;
      }


      .destination-hero{
        min-height:76vh;
      }


      .hero-content{
        padding:
          58px 0;
      }


      .content-section{
        padding:
          70px 20px;
      }


      .materials-grid{
        grid-template-columns:1fr;
      }


      .material-card{
        min-height:0;
      }


      .travel-tabs{
        grid-template-columns:1fr;
      }


      .popup-actions{
        flex-direction:
          column;
      }


      .popup-actions button,
      .popup-actions a{
        width:100%;
      }


      .cart-item{
        grid-template-columns:1fr;
      }


      .coupon-row{
        grid-template-columns:1fr;
      }

    }


    @media(
      max-width:480px
    ){

      .hero-content h1{
        font-size:
          clamp(
            50px,
            18vw,
            76px
          );
      }


      .hero-description{
        font-size:14px;
      }


      .section-title{
        font-size:
          clamp(
            31px,
            10vw,
            42px
          );
      }


      .material-card,
      .tool-card{
        padding:
          24px 20px;
      }

    }

  </style>

</head>
<body>


<!-- =====================================================
     FUNDO CONTÍNUO DA PÁGINA
====================================================== -->

<div
  class="page-photo-carousel"
  aria-hidden="true"
>

  <div
    class="page-photo-slide active"
    style="background-image:url('${ponto1}')"
  ></div>

  <div
    class="page-photo-slide"
    style="background-image:url('${ponto2}')"
  ></div>


</div>


<div
  class="page-photo-global-overlay"
></div>


<!-- =====================================================
     CABEÇALHO
====================================================== -->

<header id="siteHeader">

  <a
    class="brand"
    href="/"
    aria-label="Curadoria Elite Travel"
  >

    <img
      src="/images/rosa-dos-ventos.png"
      alt="Rosa dos Ventos"
    >

    <div>

      <div class="brand-name">
        Curadoria Elite Travel
      </div>

      <div class="brand-tagline">
        O seu mundo, bem indicado.
      </div>

    </div>
  </a>


  <nav>

    <button
      class="nav-toggle"
      type="button"
      aria-label="Menu"
      onclick="toggleMobileNav()"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>


    <div class="nav-menu">

      <a href="/">
        Início
      </a>

      <a href="/?secao=quem">
        Quem Somos
      </a>

      <a href="/?secao=curadoria">
        Curadoria
      </a>

      <a href="/?secao=buscador">
        Buscador
      </a>

      <span class="nav-sep"></span>

      <a
        href="#"
        id="navCart"
        onclick="openCart(); return false;"
      >
        Carrinho (0)
      </a>

      <span class="nav-sep"></span>

      <a
        href="/login.html"
        id="navLogin"
      >
        Entrar
      </a>

      <a
        href="/account.html"
        id="navAccount"
        style="display:none;"
      >
        Minha conta
      </a>

      <a
        href="#"
        id="navLogout"
        style="display:none;"
      >
        Sair
      </a>

    </div>

  </nav>

</header>


<main>


  <!-- =====================================================
       HERO
  ====================================================== -->

  <section class="destination-hero">

    <div class="hero-content">

      <div class="hero-country">
        ${pais}
      </div>

      <h1>
        ${cidade}
      </h1>

      <div class="hero-divider"></div>

      <p class="hero-description">
        ${texto}
      </p>


    </div>

  </section>


  <!-- =====================================================
       DESCOBERTA
  ====================================================== -->

  <section class="content-section discovery-section">

    <div class="content-shell">

      <div class="section-eyebrow">
        Organize suas escolhas
      </div>

      <h2 class="section-title">
        Planejando uma viagem para ${cidade}, ${pais}?
      </h2>

      <div class="discovery-copy">

        <p>
          Planejar uma viagem para ${cidade} envolve escolhas que podem transformar a experiência no destino. Onde ficar, onde comer, o que fazer e como se locomover dependem do tempo disponível, dos seus interesses e da maneira como você prefere conhecer cada lugar.
        </p>

        <p>
          Ter essas informações organizadas facilita essas decisões e ajuda a encontrar opções que façam sentido para a sua viagem. Na Curadoria Elite Travel, você encontra conteúdos, ferramentas e indicações para apoiar diferentes momentos do planejamento e da experiência em ${cidade}.
        </p>

      </div>

    </div>

  </section>


  <!-- =====================================================
       MATERIAIS
  ====================================================== -->

  <section
    class="content-section materials-section"
    id="materiais"
  >

    <div class="content-shell">

      <div class="section-eyebrow">
        Curadoria Elite Travel
      </div>

      <h2 class="section-title">
        Materiais disponíveis para ${cidade}
      </h2>

      <p class="section-subtitle">
        Escolha apenas os materiais que fazem sentido para a sua viagem.
        As categorias exibidas abaixo correspondem aos conteúdos atualmente disponíveis para este destino.
      </p>

      <div
        class="materials-grid"
        id="materialsGrid"
      >

        <div class="loading-state">
          Carregando materiais disponíveis...
        </div>

      </div>

    </div>

  </section>


  <!-- =====================================================
       PREPARANDO SUA VIAGEM
  ====================================================== -->

  <section
    class="content-section tools-section"
  >

    <div class="content-shell">

      <div class="section-eyebrow">
        Antes e durante a viagem
      </div>

      <h2 class="section-title">
        Preparando sua viagem
      </h2>

      <p class="section-subtitle">
        Informações, ferramentas e serviços para organizar diferentes etapas da sua viagem.
      </p>


      <div
        class="travel-tabs"
        role="tablist"
        aria-label="Preparando sua viagem"
      >

        <button
          class="travel-tab active"
          type="button"
          data-travel-tab="planejamento"
        >
          Planejamento
        </button>

        <button
          class="travel-tab"
          type="button"
          data-travel-tab="servicos"
        >
          Serviços para a viagem
        </button>

        <button
          class="travel-tab"
          type="button"
          data-travel-tab="experiencias"
        >
          Experiências
        </button>

      </div>


      <div
        class="travel-panel active"
        data-travel-panel="planejamento"
      >

        <h3 class="travel-panel-title">
          Planejamento
        </h3>

        <div class="tools-grid">

          <article class="tool-card">

            <h3>
              Documentos
            </h3>

            <p>
              Consulte informações práticas sobre entrada no destino, documentos, apoio diplomático e saúde para viagem.
            </p>

            <a href="/documentos.html">
              Disponível →
            </a>

          </article>


          <article class="tool-card">

            <h3>
              Transportes em ${cidade}
            </h3>

            <p>
              Entenda como se deslocar no destino com redes de transporte, formas de pagamento e canais oficiais.
            </p>

            <a href="/transportes.html">
              Disponível →
            </a>

          </article>

        </div>

      </div>


      <div
        class="travel-panel"
        data-travel-panel="servicos"
      >

        <h3 class="travel-panel-title">
          Serviços para a viagem
        </h3>

        <div class="tools-grid services-grid">

          <article class="tool-card">

            <h3>
              Hospedagem
            </h3>

            <p>
              Pesquise opções de hospedagem para o destino por meio do parceiro indicado.
            </p>

            <a href="/hospedagem.html">
              Acessar →
            </a>

          </article>


          <article class="tool-card">

            <h3>
              Transfer
            </h3>

            <p>
              Consulte opções de transfer para facilitar chegadas, saídas e deslocamentos no destino.
            </p>

            <a href="/transfer.html">
              Acessar →
            </a>

          </article>


          <article class="tool-card">

            <h3>
              Seguro Viagem
            </h3>

            <p>
              Consulte opções de seguro viagem e siga para o parceiro responsável pela contratação e suporte.
            </p>

            <a href="/seguro-viagem.html">
              Acessar →
            </a>

          </article>


          <article class="tool-card">

            <h3>
              Locação de veículo
            </h3>

            <p>
              Pesquise opções de veículos para os destinos em que dirigir fizer sentido para a sua viagem.
            </p>

            <a href="/locacao.html">
              Acessar →
            </a>

          </article>


          <article class="tool-card">

            <h3>
              Aéreo
            </h3>

            <p>
              Acesse a área dedicada à pesquisa de opções aéreas para organizar sua viagem.
            </p>

            <a href="/aereo.html">
              Acessar →
            </a>

          </article>

        </div>

      </div>


      <div
        class="travel-panel"
        data-travel-panel="experiencias"
      >

        <h3 class="travel-panel-title">
          Experiências
        </h3>

        <div class="tools-grid">

          <article class="tool-card">

            <h3>
              Atividades e Experiências
            </h3>

            <p>
              Encontre atividades e experiências disponíveis para complementar sua passagem pelo destino.
            </p>

            <a href="/experiencias.html">
              Explorar →
            </a>

          </article>


          <article class="tool-card">

            <h3>
              Ingressos
            </h3>

            <p>
              Consulte ingressos para atrações, museus e outros pontos de interesse disponíveis.
            </p>

            <a href="/ingressos.html">
              Explorar →
            </a>

          </article>

        </div>

      </div>

    </div>

  </section>

</main>


<footer>

  Curadoria Elite Travel ·
  O seu mundo, bem indicado.

  <br>

  São Paulo - SP ·

  <a href="/contact.html">
    curadoriaelitetravel@gmail.com
  </a>


  <div class="footer-social">

    <a
      href="https://www.instagram.com/curadoriaelitetravel/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >

      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.25-3.1a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05Z"/>
      </svg>

    </a>


    <a
      href="https://www.linkedin.com/company/curadoria-elite-travel"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >

      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M6.5 8.25H3.25V21H6.5V8.25ZM4.88 3A1.88 1.88 0 1 0 4.9 6.75 1.88 1.88 0 0 0 4.88 3ZM21 13.7c0-3.85-2.05-5.64-4.79-5.64a4.14 4.14 0 0 0-3.74 2.05V8.25H9.22V21h3.25v-6.31c0-1.66.32-3.27 2.38-3.27 2.03 0 2.05 1.9 2.05 3.38V21H21v-7.3Z"/>
      </svg>

    </a>

  </div>

</footer>


<script
  src="https://unpkg.com/@supabase/supabase-js@2"
></script>


<script>

  /* =====================================================
     CONFIGURAÇÃO
  ===================================================== */

  const DESTINATION =
    ${destinationData};


  const SUPABASE_URL =
    ${JSON.stringify(SUPABASE_URL)};


  const SUPABASE_ANON_KEY =
    ${JSON.stringify(SUPABASE_ANON_KEY)};


  const CART_STORAGE_KEY =
    "cet_cart_v2";


  const CHECKOUT_CONTEXT_KEY =
    "cet_checkout_context_v2";


  const CART_CHECKOUT_ITEMS_KEY =
    "cet_cart_checkout_items_v2";


  const CART_LAST_CHECKOUT_STARTED_KEY =
    "cet_cart_last_checkout_started_v2";


  const CART_COUPON_CODE_KEY =
    "cet_cart_coupon_code_v1";


  let supabaseClient =
    null;


  let cartPricingPreview =
    null;


  const categoryPricesMap =
    new Map();


  const ownedMap =
    new Map();


  /* =====================================================
     DESCRIÇÕES DAS CATEGORIAS
  ===================================================== */

  const CATEGORY_DESCRIPTIONS = {

    "city guide":
      "Uma visão ampla do destino, organizada para ajudar você a compreender melhor a cidade e começar suas escolhas.",

    "gastronomia":
      "Restaurantes selecionados com diferentes propostas e faixas de preço, organizados para facilitar suas escolhas.",

    "atrações turísticas":
      "Pontos importantes do destino combinados com escolhas menos óbvias, para ampliar sua experiência na cidade.",

    "vida noturna":
      "Bares, rooftops, lounges e outras opções noturnas selecionadas para diferentes momentos da viagem.",

    "endereços para compras":
      "Regiões e endereços para diferentes estilos de compra, organizados para você encontrar opções com mais facilidade.",

    "sugestão de presentes":
      "Ideias e endereços selecionados para encontrar presentes com mais intenção durante a viagem."

  };


  const CATEGORY_ICONS = {

    "city guide":
      "◇",

    "gastronomia":
      "✦",

    "atrações turísticas":
      "⌖",

    "vida noturna":
      "☾",

    "endereços para compras":
      "⌑",

    "sugestão de presentes":
      "◈"

  };


  /* =====================================================
     CARROSSEL GLOBAL
  ===================================================== */

  function startPagePhotoCarousel(){

    const slides =
      Array.from(
        document.querySelectorAll(
          ".page-photo-slide"
        )
      );


    if (
      slides.length <= 1
    ){
      return;
    }


    const reduceMotion =
      window.matchMedia &&
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;


    if (reduceMotion){
      return;
    }


    let current =
      0;


    window.setInterval(
      () => {

        slides[current]
          .classList.remove(
            "active"
          );


        current =
          (
            current + 1
          ) %
          slides.length;


        slides[current]
          .classList.add(
            "active"
          );

      },
      6500
    );

  }


  /* =====================================================
     NAVEGAÇÃO
  ===================================================== */

  function toggleMobileNav(){

    const header =
      document.getElementById(
        "siteHeader"
      );


    if (header){

      header.classList.toggle(
        "nav-open"
      );

    }

  }


  /* =====================================================
     NORMALIZAÇÃO
  ===================================================== */

  function normalizeKeyPart(str){

    return String(
      str || ""
    )
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(
        /[\\u0300-\\u036f]/g,
        ""
      )
      .replace(
        /[—–−]/g,
        "-"
      )
      .replace(
        /\\s*-\\s*/g,
        " - "
      )
      .replace(
        /\\s+/g,
        " "
      )
      .trim();

  }


  function normalizeCategoryName(category){

    return normalizeKeyPart(
      category || ""
    );

  }


  function normalizeCityLabel(cityLabel){

    return normalizeKeyPart(
      cityLabel || ""
    );

  }


  function purchaseKey(
    category,
    cityLabel
  ){

    return (
      normalizeKeyPart(
        category
      ) +
      "||" +
      normalizeKeyPart(
        cityLabel
      )
    );

  }


  /* =====================================================
     SUPABASE E SESSÃO
  ===================================================== */

  function ensureSupabase(){

    if (supabaseClient){
      return supabaseClient;
    }


    if (!window.supabase){
      return null;
    }


    supabaseClient =
      window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_ANON_KEY
      );


    return supabaseClient;

  }


  async function getSession(){

    const sb =
      ensureSupabase();


    if (!sb){
      return null;
    }


    const { data } =
      await sb.auth.getSession();


    return (
      data &&
      data.session
    )
      ? data.session
      : null;

  }


  async function getAccessToken(){

    const session =
      await getSession();


    return (
      session &&
      session.access_token
    )
      ? session.access_token
      : null;

  }


  async function apiPOST(
    url,
    body
  ){

    const token =
      await getAccessToken();


    const headers = {
      "Content-Type":
        "application/json"
    };


    if (token){

      headers.Authorization =
        "Bearer " + token;

    }


    const response =
      await fetch(
        url,
        {
          method:
            "POST",

          headers,

          body:
            JSON.stringify(
              body || {}
            )
        }
      );


    let json =
      null;


    try{

      json =
        await response.json();

    }catch(error){}


    return {
      ok:
        response.ok,

      status:
        response.status,

      json
    };

  }


  async function refreshNavAuth(){

    const session =
      await getSession();


    const navLogin =
      document.getElementById(
        "navLogin"
      );


    const navAccount =
      document.getElementById(
        "navAccount"
      );


    const navLogout =
      document.getElementById(
        "navLogout"
      );


    if (
      !navLogin ||
      !navAccount ||
      !navLogout
    ){
      return;
    }


    if (
      session &&
      session.user
    ){

      navLogin.style.display =
        "none";


      navAccount.style.display =
        "inline";


      navLogout.style.display =
        "inline";

    }else{

      navLogin.style.display =
        "inline";


      navAccount.style.display =
        "none";


      navLogout.style.display =
        "none";

    }

  }


  async function doLogout(event){

    if (event){
      event.preventDefault();
    }


    try{

      const sb =
        ensureSupabase();


      if (sb){

        await sb.auth.signOut();

      }

    }catch(error){}


    await refreshNavAuth();

  }


  /* =====================================================
     PREÇOS
  ===================================================== */

  function formatBRL(value){

    try{

      return new Intl.NumberFormat(
        "pt-BR",
        {
          style:
            "currency",

          currency:
            "BRL"
        }
      ).format(value);

    }catch(error){

      return (
        "R$ " +
        value
      );

    }

  }


  function getFallbackPriceForCategory(
    category
  ){

    if (
      normalizeCategoryName(
        category
      ) ===
      "city guide"
    ){

      return 88.92;

    }
        return 57.89;

  }


  function getPriceForCategory(
    category
  ){

    const key =
      normalizeCategoryName(
        category
      );


    if (
      categoryPricesMap.has(
        key
      )
    ){

      return Number(
        categoryPricesMap.get(
          key
        )
      );

    }


    return getFallbackPriceForCategory(
      category
    );

  }


  async function loadCategoryPrices(){

    const sb =
      ensureSupabase();


    if (!sb){
      return;
    }


    try{

      const {
        data,
        error
      } =
        await sb
          .from(
            "category_prices"
          )
          .select(
            "category, price"
          );


      if (
        error ||
        !Array.isArray(data)
      ){
        return;
      }


      data.forEach(
        (row) => {

          if (
            !row ||
            !row.category
          ){
            return;
          }


          const key =
            normalizeCategoryName(
              row.category
            );


          const price =
            Number(
              row.price
            );


          if (
            key &&
            Number.isFinite(
              price
            )
          ){

            categoryPricesMap.set(
              key,
              price
            );

          }

        }
      );

    }catch(error){}

  }


  /* =====================================================
     COMPRAS JÁ REALIZADAS
  ===================================================== */

  async function loadOwnedPurchases(){

    ownedMap.clear();


    const session =
      await getSession();


    if (
      !session ||
      !session.user
    ){
      return;
    }


    const sb =
      ensureSupabase();


    if (!sb){
      return;
    }


    try{

      const {
        data,
        error
      } =
        await sb
          .from(
            "purchases"
          )
          .select(
            "category, city_label, status"
          )
          .eq(
            "user_id",
            session.user.id
          );


      if (
        error ||
        !Array.isArray(data)
      ){
        return;
      }


      data.forEach(
        (row) => {

          if (!row){
            return;
          }


          const status =
            normalizeKeyPart(
              row.status ||
              ""
            );


          if (
            status &&
            status !==
            "approved" &&
            status !==
            "paid" &&
            status !==
            "completed"
          ){
            return;
          }


          const key =
            purchaseKey(
              row.category,
              row.city_label
            );


          ownedMap.set(
            key,
            true
          );

        }
      );

    }catch(error){}

  }


  function userOwns(
    category,
    cityLabel
  ){

    return ownedMap.has(
      purchaseKey(
        category,
        cityLabel
      )
    );

  }


  /* =====================================================
     CARRINHO
  ===================================================== */

  function getCart(){

    try{

      const raw =
        localStorage.getItem(
          CART_STORAGE_KEY
        );


      if (!raw){
        return [];
      }


      const parsed =
        JSON.parse(
          raw
        );


      return Array.isArray(
        parsed
      )
        ? parsed
        : [];

    }catch(error){

      return [];

    }

  }


  function saveCart(items){

    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(
        Array.isArray(items)
          ? items
          : []
      )
    );


    updateCartBadge();

  }


  function clearCart(){

    localStorage.removeItem(
      CART_STORAGE_KEY
    );


    localStorage.removeItem(
      CART_COUPON_CODE_KEY
    );


    cartPricingPreview =
      null;


    updateCartBadge();

  }


  function cartItemKey(
    category,
    cityLabel
  ){

    return purchaseKey(
      category,
      cityLabel
    );

  }


  function updateCartBadge(){

    const navCart =
      document.getElementById(
        "navCart"
      );


    if (!navCart){
      return;
    }


    const cart =
      getCart();


    const quantity =
      cart.reduce(
        (
          total,
          item
        ) => {

          return (
            total +
            Number(
              item.qty ||
              1
            )
          );

        },
        0
      );


    navCart.textContent =
      "Carrinho (" +
      quantity +
      ")";

  }


  function calcCartTotal(
    items
  ){

    return (
      items ||
      []
    ).reduce(
      (
        total,
        item
      ) => {

        const qty =
          Number(
            item.qty ||
            1
          );


        const price =
          Number(
            item.price ||
            0
          );


        return (
          total +
          (
            qty *
            price
          )
        );

      },
      0
    );

  }


  function removeFromCart(
    key
  ){

    const items =
      getCart().filter(
        (item) =>
          item.key !==
          key
      );


    saveCart(
      items
    );


    cartPricingPreview =
      null;


    renderCart();

  }


  function addToCart(
    category,
    cityLabel
  ){

    if (
      userOwns(
        category,
        cityLabel
      )
    ){

      openPopup({

        title:
          "Material já disponível",

        text:
          "Este material já está disponível na sua conta.",

        secondaryText:
          "Ir para Minha conta",

        onSecondary:
          () => {

            window.location.href =
              "/account.html";

          }

      });


      return false;

    }


    const items =
      getCart();


    const key =
      cartItemKey(
        category,
        cityLabel
      );


    const existing =
      items.find(
        (item) =>
          item.key ===
          key
      );


    if (existing){

      existing.qty =
        Number(
          existing.qty ||
          1
        );

    }else{

      items.push({

        key,

        category,

        city:
          cityLabel,

        qty:
          1,

        price:
          getPriceForCategory(
            category
          )

      });

    }


    saveCart(
      items
    );


    cartPricingPreview =
      null;


    return true;

  }


  function addToCartAndOpenCart(
    category,
    cityLabel
  ){

    const added =
      addToCart(
        category,
        cityLabel
      );


    if (added){

      openCart();

    }

  }


  /* =====================================================
     CUPOM
  ===================================================== */

  function normalizeCouponCode(
    value
  ){

    return String(
      value ||
      ""
    )
      .trim()
      .toUpperCase();

  }


  function getCartCouponCode(){

    return normalizeCouponCode(
      localStorage.getItem(
        CART_COUPON_CODE_KEY
      ) ||
      ""
    );

  }


  function setCartCouponCode(
    code
  ){

    const normalized =
      normalizeCouponCode(
        code
      );


    if (normalized){

      localStorage.setItem(
        CART_COUPON_CODE_KEY,
        normalized
      );

    }else{

      localStorage.removeItem(
        CART_COUPON_CODE_KEY
      );

    }

  }


  function setCouponMessage(
    message,
    type
  ){

    const element =
      document.getElementById(
        "couponMsg"
      );


    if (!element){
      return;
    }


    element.textContent =
      message ||
      "";


    element.className =
      "coupon-msg" +
      (
        type
          ? " " + type
          : ""
      );

  }


  async function applyCouponInCart(){

    const input =
      document.getElementById(
        "couponInput"
      );


    if (!input){
      return;
    }


    const code =
      normalizeCouponCode(
        input.value
      );


    input.value =
      code;


    setCartCouponCode(
      code
    );


    if (!code){

      cartPricingPreview =
        null;


      setCouponMessage(
        "",
        ""
      );


      renderCartTotalsOnly();


      return;

    }


    const items =
      getCart();


    if (!items.length){

      setCouponMessage(
        "Seu carrinho está vazio.",
        "error"
      );


      return;

    }


    setCouponMessage(
      "Validando cupom...",
      ""
    );


    const response =
      await apiPOST(
        "/api/checkout-preview",
        {
          items:
            items.map(
              (item) => ({

                category:
                  item.category,

                city:
                  item.city,

                qty:
                  Number(
                    item.qty ||
                    1
                  )

              })
            ),

          coupon_code:
            code
        }
      );


    if (
      !response.ok ||
      !response.json
    ){

      cartPricingPreview =
        null;


      setCouponMessage(
        (
          response.json &&
          response.json.error
        ) ||
        "Não foi possível validar o cupom.",
        "error"
      );


      renderCartTotalsOnly();


      return;

    }


    cartPricingPreview =
      response.json;


    const discountTotal =
      Number(
        (
          response.json.totals &&
          response.json.totals.discount_total
        ) ||
        0
      );


    if (
      discountTotal > 0
    ){

      setCouponMessage(
        "Cupom aplicado.",
        "success"
      );

    }else{

      setCouponMessage(
        "Cupom válido, mas sem desconto para estes itens.",
        ""
      );

    }


    renderCartTotalsOnly();

  }


  /* =====================================================
     POPUP GENÉRICO
  ===================================================== */

  function ensurePopupExists(){

    if (
      document.getElementById(
        "popup"
      )
    ){
      return;
    }


    const wrap =
      document.createElement(
        "div"
      );


    wrap.innerHTML =
      '<div class="popup-bg" id="popup">' +

        '<div class="popup-content" id="popup-content">' +

          '<h3 id="popup-title"></h3>' +

          '<p id="popup-text"></p>' +

          '<div class="popup-actions">' +

            '<button class="btn-ghost" id="popup-secondary" style="display:none;"></button>' +

            '<button id="popup-proceed" style="display:none;"></button>' +

            '<button class="btn-ghost" id="popup-close">Fechar</button>' +

          '</div>' +

        '</div>' +

      '</div>';


    document.body.appendChild(
      wrap
    );


    document
      .getElementById(
        "popup-close"
      )
      .addEventListener(
        "click",
        closePopup
      );


    document
      .getElementById(
        "popup"
      )
      .addEventListener(
        "click",

        (event) => {

          if (
            event.target &&
            event.target.id ===
            "popup"
          ){

            closePopup();

          }

        }
      );

  }


  function closePopup(){

    const popup =
      document.getElementById(
        "popup"
      );


    if (popup){

      popup.classList.remove(
        "active"
      );

    }

  }


  function openPopup({

    title,
    text,
    secondaryText,
    onSecondary,
    showProceed,
    proceedText,
    onProceed,
    showRules,
    requireConsent

  }){

    ensurePopupExists();


    const titleEl =
      document.getElementById(
        "popup-title"
      );


    const textEl =
      document.getElementById(
        "popup-text"
      );


    const secondary =
      document.getElementById(
        "popup-secondary"
      );


    const proceed =
      document.getElementById(
        "popup-proceed"
      );


    titleEl.textContent =
      title ||
      "";


    textEl.textContent =
      text ||
      "";


    secondary.style.display =
      secondaryText
        ? "inline-flex"
        : "none";


    secondary.textContent =
      secondaryText ||
      "";


    secondary.onclick =
      null;


    if (
      secondaryText &&
      typeof onSecondary ===
      "function"
    ){

      secondary.onclick =
        () => {

          closePopup();

          onSecondary();

        };

    }


    proceed.style.display =
      showProceed
        ? "inline-flex"
        : "none";


    proceed.textContent =
      proceedText ||
      "Prosseguir";


    const oldRules =
      document.getElementById(
        "popup-rules"
      );


    if (oldRules){

      oldRules.remove();

    }


    const oldConsent =
      document.getElementById(
        "consent-checkbox-wrap"
      );


    if (oldConsent){

      oldConsent.remove();

    }


    if (showRules){

      const rules =
        document.createElement(
          "div"
        );


      rules.id =
        "popup-rules";


      rules.className =
        "popup-rules";


      rules.innerHTML =
        '<strong>Antes de continuar:</strong>' +

        '<ul>' +

          '<li>Os materiais são digitais e o acesso é liberado após a confirmação do pagamento.</li>' +

          '<li>Confira se o destino e a categoria selecionados estão corretos.</li>' +

          '<li>O conteúdo da Curadoria não inclui reservas ou atendimento de concierge.</li>' +

        '</ul>';


      const actions =
        document.querySelector(
          "#popup-content .popup-actions"
        );


      actions.parentNode.insertBefore(
        rules,
        actions
      );

    }


    if (requireConsent){

      const consentWrap =
        document.createElement(
          "div"
        );


      consentWrap.id =
        "consent-checkbox-wrap";
              consentWrap.className =
        "consent-wrap";


      consentWrap.innerHTML =
        '<input type="checkbox" id="consent-checkbox">' +

        '<label for="consent-checkbox">' +

          'Li e concordo que, por ser um produto digital de acesso imediato, não será possível realizar cancelamentos, trocas ou reembolsos após a confirmação da compra.' +

        '</label>';


      const actions =
        document.querySelector(
          "#popup-content .popup-actions"
        );


      actions.parentNode.insertBefore(
        consentWrap,
        actions
      );


      proceed.disabled =
        true;


      document
        .getElementById(
          "consent-checkbox"
        )
        .addEventListener(
          "change",

          (event) => {

            proceed.disabled =
              !event.target.checked;

          }
        );

    }


    proceed.onclick =
      null;


    if (
      showProceed &&
      typeof onProceed ===
      "function"
    ){

      proceed.onclick =
        async () => {

          closePopup();

          await onProceed();

        };

    }


    document
      .getElementById(
        "popup"
      )
      .classList.add(
        "active"
      );

  }


  /* =====================================================
     POPUP DO CARRINHO
  ===================================================== */

  function ensureCartPopupExists(){

    if (
      document.getElementById(
        "cartPopup"
      )
    ){
      return;
    }


    const wrap =
      document.createElement(
        "div"
      );


    wrap.innerHTML =
      '<div class="popup-bg" id="cartPopup">' +

        '<div class="popup-content">' +

          '<h3>Carrinho</h3>' +

          '<p>Confira seus materiais antes de finalizar sua escolha.</p>' +

          '<div class="coupon-wrap">' +

            '<label class="coupon-label" for="couponInput">Cupom</label>' +

            '<div class="coupon-row">' +

              '<input id="couponInput" class="coupon-input" type="text" placeholder="Ex: LANCAMENTONY10" autocomplete="off">' +

              '<button id="couponApplyBtn" class="coupon-apply" type="button">Aplicar</button>' +

            '</div>' +

            '<div id="couponMsg" class="coupon-msg"></div>' +

            '<div class="coupon-help">Se o cupom estiver ativo e dentro do período, ele será aplicado no pagamento.</div>' +

          '</div>' +

          '<div class="cart-list" id="cartList"></div>' +

          '<div class="cart-total" id="cartTotalWrap" style="display:none;">' +

            '<div><strong>Total</strong></div>' +

            '<div id="cartTotalValue"><strong>R$ 0,00</strong></div>' +

          '</div>' +

          '<div id="cartDiscountLine" class="discount-line">' +

            'Desconto aplicado: <strong id="cartDiscountValue">R$ 0,00</strong>' +

          '</div>' +

          '<div class="popup-actions">' +

            '<button class="btn-ghost" id="cartContinueBtn">Continuar comprando</button>' +

            '<button id="cartProceedBtn">Ir para pagamento</button>' +

            '<button class="btn-ghost" id="cartCloseBtn">Fechar</button>' +

          '</div>' +

        '</div>' +

      '</div>';


    document.body.appendChild(
      wrap
    );


    const couponInput =
      document.getElementById(
        "couponInput"
      );


    couponInput.value =
      getCartCouponCode();


    couponInput.addEventListener(
      "input",

      () => {

        couponInput.value =
          normalizeCouponCode(
            couponInput.value
          );


        setCartCouponCode(
          couponInput.value
        );


        cartPricingPreview =
          null;


        setCouponMessage(
          "",
          ""
        );


        renderCartTotalsOnly();

      }
    );


    document
      .getElementById(
        "couponApplyBtn"
      )
      .addEventListener(
        "click",
        applyCouponInCart
      );


    document
      .getElementById(
        "cartContinueBtn"
      )
      .addEventListener(
        "click",
        closeCart
      );


    document
      .getElementById(
        "cartCloseBtn"
      )
      .addEventListener(
        "click",
        closeCart
      );


    document
      .getElementById(
        "cartProceedBtn"
      )
      .addEventListener(
        "click",
        startCartCheckoutFlow
      );


    document
      .getElementById(
        "cartPopup"
      )
      .addEventListener(
        "click",

        (event) => {

          if (
            event.target &&
            event.target.id ===
            "cartPopup"
          ){

            closeCart();

          }

        }
      );

  }


  function renderCartTotalsOnly(){

    const items =
      getCart();


    const totalWrap =
      document.getElementById(
        "cartTotalWrap"
      );


    const totalValue =
      document.getElementById(
        "cartTotalValue"
      );


    const discountLine =
      document.getElementById(
        "cartDiscountLine"
      );


    const discountValue =
      document.getElementById(
        "cartDiscountValue"
      );


    if (!items.length){

      if (totalWrap){

        totalWrap.style.display =
          "none";

      }


      if (discountLine){

        discountLine.style.display =
          "none";

      }


      return;

    }


    const baseTotal =
      calcCartTotal(
        items
      );


    if (
      cartPricingPreview &&
      cartPricingPreview.totals
    ){

      const newTotal =
        Number(
          cartPricingPreview.totals.total ||
          0
        );


      const discountTotal =
        Number(
          cartPricingPreview.totals.discount_total ||
          0
        );


      if (
        discountTotal > 0 &&
        newTotal > 0
      ){

        totalWrap.style.display =
          "flex";


        totalValue.innerHTML =
          '<span class="total-strike">' +

            formatBRL(
              baseTotal
            ) +

          '</span>' +

          '<span class="total-final">' +

            formatBRL(
              newTotal
            ) +

          '</span>';


        discountLine.style.display =
          "block";


        discountValue.textContent =
          formatBRL(
            discountTotal
          );


        return;

      }

    }


    totalWrap.style.display =
      "flex";


    totalValue.innerHTML =
      "<strong>" +

      formatBRL(
        baseTotal
      ) +

      "</strong>";


    discountLine.style.display =
      "none";

  }


  function renderCart(){

    ensureCartPopupExists();


    const list =
      document.getElementById(
        "cartList"
      );


    const proceed =
      document.getElementById(
        "cartProceedBtn"
      );


    const items =
      getCart();


    if (!items.length){

      list.innerHTML =
        '<div style="padding:14px;color:rgba(255,255,255,.7);">Seu carrinho está vazio.</div>';


      proceed.disabled =
        true;


      renderCartTotalsOnly();


      updateCartBadge();


      return;

    }


    proceed.disabled =
      false;


    list.innerHTML =
      "";


    items.forEach(
      (item) => {

        const element =
          document.createElement(
            "div"
          );


        element.className =
          "cart-item";


        element.innerHTML =
          '<div class="cart-item-left">' +

            '<div class="cart-item-title">' +

              item.city +

            '</div>' +

            '<div class="cart-item-meta">' +

              item.category +

              ' · Quantidade: ' +

              Number(
                item.qty ||
                1
              ) +

            '</div>' +

            '<div class="cart-item-meta">' +

              formatBRL(
                Number(
                  item.price ||
                  0
                )
              ) +

            '</div>' +

          '</div>' +

          '<div class="cart-item-right">' +

            '<button data-remove="' +

              item.key +

            '">Remover</button>' +

          '</div>';


        element
          .querySelector(
            "[data-remove]"
          )
          .addEventListener(
            "click",

            () => {

              removeFromCart(
                item.key
              );

            }
          );


        list.appendChild(
          element
        );

      }
    );


    renderCartTotalsOnly();


    updateCartBadge();

  }


  function openCart(){

    ensureCartPopupExists();


    renderCart();


    document
      .getElementById(
        "cartPopup"
      )
      .classList.add(
        "active"
      );

  }


  function closeCart(){

    const popup =
      document.getElementById(
        "cartPopup"
      );


    if (popup){

      popup.classList.remove(
        "active"
      );

    }

  }


  /* =====================================================
     CONTEXTO DE CHECKOUT
  ===================================================== */

  function setCheckoutContext(obj){

    localStorage.setItem(
      CHECKOUT_CONTEXT_KEY,

      JSON.stringify(
        obj ||
        {}
      )
    );

  }


  function getCheckoutContext(){

    try{

      const raw =
        localStorage.getItem(
          CHECKOUT_CONTEXT_KEY
        );


      return raw
        ? JSON.parse(raw)
        : null;

    }catch(error){

      return null;

    }

  }


  function clearCheckoutContext(){

    localStorage.removeItem(
      CHECKOUT_CONTEXT_KEY
    );

  }


  function goLoginWithReturn(){

    const returnTo =
      window.location.pathname +
      "?after_login=1";


    window.location.href =
      "/login.html?return_to=" +
      encodeURIComponent(
        returnTo
      );

  }


  /* =====================================================
     CHECKOUT
  ===================================================== */

  function goInvoiceCart(
    items,
    couponCode
  ){

    const payload =
      (
        items ||
        []
      ).map(
        (item) => ({

          category:
            item.category,

          city:
            item.city,

          qty:
            Number(
              item.qty ||
              1
            ) ||
            1

        })
      );


    localStorage.setItem(
      CART_CHECKOUT_ITEMS_KEY,

      JSON.stringify(
        payload
      )
    );


    localStorage.setItem(
      CART_LAST_CHECKOUT_STARTED_KEY,

      String(
        Date.now()
      )
    );


    setCartCouponCode(
      couponCode ||
      getCartCouponCode()
    );


    window.location.href =
      "/checkout-success.html?step=invoice&cart=1";

  }


  async function showPolicyThenProceed(
    nextFn
  ){

    openPopup({

      title:
        "Informações Importantes",

      text:
        "Antes de prosseguir, confirme as condições abaixo.",

      showProceed:
        true,

      proceedText:
        "Ir para pagamento",

      showRules:
        true,

      requireConsent:
        true,

      onProceed:
        nextFn

    });

  }


  async function startCartCheckoutFlow(){

    const items =
      getCart();


    if (!items.length){

      openPopup({

        title:
          "Carrinho",

        text:
          "Seu carrinho está vazio."

      });


      return;

    }


    const session =
      await getSession();


    if (
      !session ||
      !session.user
    ){

      setCheckoutContext({

        type:
          "cart"

      });


      closeCart();


      goLoginWithReturn();


      return;

    }


    await loadOwnedPurchases();


    const currentItems =
      getCart();


    const filtered =
      currentItems.filter(
        (item) =>

          item &&

          !userOwns(
            item.category,
            item.city
          )
      );


    if (
      filtered.length !==
      currentItems.length
    ){

      saveCart(
        filtered
      );


      cartPricingPreview =
        null;


      renderCart();


      if (!filtered.length){

        closeCart();


        openPopup({

          title:
            "Carrinho",

          text:
            "Os materiais selecionados já estão disponíveis na sua conta.",

          secondaryText:
            "Ir para Minha conta",

          onSecondary:
            () => {

              window.location.href =
                "/account.html";

            }

        });


        return;

      }


      openPopup({

        title:
          "Carrinho",

        text:
          "Um ou mais materiais foram removidos porque você já os possui. Os demais continuam no carrinho.",

        secondaryText:
          "Voltar ao carrinho",

        onSecondary:
          openCart

      });


      return;

    }


    closeCart();


    const couponNow =
      getCartCouponCode();


    await showPolicyThenProceed(
      async () => {

        const finalItems =
          getCart();


        if (!finalItems.length){

          openPopup({

            title:
              "Carrinho",

            text:
              "Seu carrinho está vazio."

          });


          return;

        }


        goInvoiceCart(
          finalItems,
          couponNow
        );

      }
    );

  }


  /* =====================================================
     COMPRA DIRETA
  ===================================================== */

  async function startSingleCheckoutFlow(
    category,
    city
  ){

    const session =
      await getSession();


    if (
      !session ||
      !session.user
    ){

      setCheckoutContext({

        type:
          "single",

        category:
          category,

        city:
          city

      });


      goLoginWithReturn();


      return;

    }


    await loadOwnedPurchases();


    if (
      userOwns(
        category,
        city
      )
    ){

      openPopup({

        title:
          "Material já disponível",

        text:
          "Este material já está disponível na sua conta.",

        secondaryText:
          "Ir para Minha conta",

        onSecondary:
          () => {

            window.location.href =
              "/account.html";

          }

      });


      return;

    }


    await showPolicyThenProceed(
      async () => {

        const payload = [
          {

            category:
              category,

            city:
              city,

            qty:
              1

          }
        ];


        goInvoiceCart(
          payload,
          ""
        );

      }
    );

  }


  /* =====================================================
     RETORNO APÓS LOGIN
  ===================================================== */

  async function handleAfterLogin(){

    const params =
      new URLSearchParams(
        window.location.search
      );


    if (
      params.get(
        "after_login"
      ) !==
      "1"
    ){
      return;
    }


    const session =
      await getSession();


    if (
      !session ||
      !session.user
    ){
      return;
    }


    const context =
      getCheckoutContext();


    if (!context){

      params.delete(
        "after_login"
      );


      const cleanQuery =
        params.toString();


      const cleanUrl =
        window.location.pathname +
        (
          cleanQuery
            ? "?" + cleanQuery
            : ""
        );


      window.history.replaceState(
        {},
        "",
        cleanUrl
      );


      return;

    }


    clearCheckoutContext();


    params.delete(
      "after_login"
    );


    const cleanQuery =
      params.toString();


    const cleanUrl =
      window.location.pathname +
      (
        cleanQuery
          ? "?" + cleanQuery
          : ""
      );


    window.history.replaceState(
      {},
      "",
      cleanUrl
    );


    if (
      context.type ===
      "cart"
    ){

      await loadOwnedPurchases();


      const currentItems =
        getCart();


      const filtered =
        currentItems.filter(
          (item) =>

            item &&

            !userOwns(
              item.category,
              item.city
            )
        );


      if (
        filtered.length !==
        currentItems.length
      ){

        saveCart(
          filtered
        );

      }


      if (!filtered.length){

        openPopup({

          title:
            "Carrinho",

          text:
            "Os materiais selecionados já estão disponíveis na sua conta.",

          secondaryText:
            "Ir para Minha conta",

          onSecondary:
            () => {

              window.location.href =
                "/account.html";

            }

        });


        return;

      }


      await showPolicyThenProceed(
        async () => {

          goInvoiceCart(
            filtered,
            getCartCouponCode()
          );

        }
      );


      return;

    }


    if (
      context.type ===
      "single" &&
      context.category &&
      context.city
    ){

      await loadOwnedPurchases();


      if (
        userOwns(
          context.category,
          context.city
        )
      ){

        openPopup({

          title:
            "Material já disponível",

          text:
            "Este material já está disponível na sua conta.",

          secondaryText:
            "Ir para Minha conta",

          onSecondary:
            () => {

              window.location.href =
                "/account.html";

            }

        });


        return;

      }


      await showPolicyThenProceed(
        async () => {

          goInvoiceCart(
            [
              {

                category:
                  context.category,

                city:
                  context.city,

                qty:
                  1

              }
            ],
            ""
          );

        }
      );

    }

  }
    /* =====================================================
     MATERIAIS DO DESTINO
  ===================================================== */

  function getCategoryDescription(
    category
  ){

    const normalized =
      normalizeCategoryName(
        category
      );


    return (
      CATEGORY_DESCRIPTIONS[
        normalized
      ] ||
      "Material digital selecionado e organizado pela Curadoria Elite Travel para apoiar suas escolhas no destino."
    );

  }


  function getCategoryIcon(
    category
  ){

    const normalized =
      normalizeCategoryName(
        category
      );


    return (
      CATEGORY_ICONS[
        normalized
      ] ||
      "◇"
    );

  }


  async function loadDestinationMaterials(){

    const grid =
      document.getElementById(
        "materialsGrid"
      );


    if (!grid){
      return;
    }


    const sb =
      ensureSupabase();


    if (!sb){

      grid.innerHTML =
        '<div class="error-state">Não foi possível carregar os materiais disponíveis neste momento.</div>';


      return;

    }


    const {
      data,
      error
    } =
      await sb
        .from(
          "curadoria_materials"
        )
        .select(
          "category, city_label"
        )
        .eq(
          "is_active",
          true
        )
        .order(
          "category",
          {
            ascending:
              true
          }
        );


    if (error){

      console.error(
        "Erro ao carregar materiais:",
        error
      );


      grid.innerHTML =
        '<div class="error-state">Não foi possível carregar os materiais disponíveis neste momento.</div>';


      return;

    }


    const destinationKey =
      normalizeCityLabel(
        DESTINATION.cityLabel
      );


    const materials =
      (
        Array.isArray(
          data
        )
          ? data
          : []
      )
      .filter(
        (row) =>

          normalizeCityLabel(
            row.city_label ||
            ""
          ) ===
          destinationKey
      );


    if (!materials.length){

      grid.innerHTML =
        '<div class="empty-state">Nenhum material está disponível para este destino no momento.</div>';


      return;

    }


    renderMaterials(
      materials
    );

  }


  function renderMaterials(
    materials
  ){

    const grid =
      document.getElementById(
        "materialsGrid"
      );


    if (!grid){
      return;
    }


    grid.innerHTML =
      "";


    materials.forEach(
      (material) => {

        const category =
          String(
            material.category ||
            ""
          ).trim();


        const cityLabel =
          String(
            material.city_label ||
            ""
          ).trim();


        if (
          !category ||
          !cityLabel
        ){
          return;
        }


        const owned =
          userOwns(
            category,
            cityLabel
          );


        const article =
          document.createElement(
            "article"
          );


        article.className =
          owned
            ? "material-card owned"
            : "material-card";


        const icon =
          document.createElement(
            "div"
          );


        icon.className =
          "material-icon";


        icon.textContent =
          getCategoryIcon(
            category
          );


        const title =
          document.createElement(
            "h3"
          );


        title.textContent =
          category;


        const description =
          document.createElement(
            "p"
          );


        description.className =
          "material-description";


        description.textContent =
          getCategoryDescription(
            category
          );


        const price =
          document.createElement(
            "div"
          );


        price.className =
          "material-price";


        price.textContent =
          formatBRL(
            getPriceForCategory(
              category
            )
          );


        const actions =
          document.createElement(
            "div"
          );


        actions.className =
          "material-actions";


        article.appendChild(
          icon
        );


        article.appendChild(
          title
        );


        article.appendChild(
          description
        );


        if (owned){

          const ownedButton =
            document.createElement(
              "a"
            );


          ownedButton.className =
            "btn-owned";


          ownedButton.href =
            "/account.html";


          ownedButton.textContent =
            "Disponível na sua conta";


          actions.appendChild(
            ownedButton
          );

        }else{

          article.appendChild(
            price
          );


          const buyButton =
            document.createElement(
              "button"
            );


          buyButton.type =
            "button";


          buyButton.className =
            "btn-buy";


          buyButton.textContent =
            "Comprar agora";


          buyButton.addEventListener(
            "click",

            () => {

              startSingleCheckoutFlow(
                category,
                cityLabel
              );

            }
          );


          const cartButton =
            document.createElement(
              "button"
            );


          cartButton.type =
            "button";


          cartButton.className =
            "btn-cart";


          cartButton.textContent =
            "Adicionar ao carrinho";


          cartButton.addEventListener(
            "click",

            () => {

              addToCartAndOpenCart(
                category,
                cityLabel
              );

            }
          );


          actions.appendChild(
            buyButton
          );


          actions.appendChild(
            cartButton
          );

        }


        article.appendChild(
          actions
        );


        grid.appendChild(
          article
        );

      }
    );

  }


  /* =====================================================
     ABAS — PREPARANDO SUA VIAGEM
  ===================================================== */

  function initializeTravelTabs(){

    const tabs =
      Array.from(
        document.querySelectorAll(
          "[data-travel-tab]"
        )
      );


    const panels =
      Array.from(
        document.querySelectorAll(
          "[data-travel-panel]"
        )
      );


    if (
      !tabs.length ||
      !panels.length
    ){
      return;
    }


    tabs.forEach(
      (tab) => {

        tab.addEventListener(
          "click",

          () => {

            const target =
              tab.getAttribute(
                "data-travel-tab"
              );


            tabs.forEach(
              (item) => {

                item.classList.toggle(
                  "active",
                  item === tab
                );

              }
            );


            panels.forEach(
              (panel) => {

                panel.classList.toggle(
                  "active",
                  panel.getAttribute(
                    "data-travel-panel"
                  ) === target
                );

              }
            );

          }
        );

      }
    );

  }


  /* =====================================================
     INICIALIZAÇÃO DA PÁGINA
  ===================================================== */

  async function initializePage(){

    ensureSupabase();


    startPagePhotoCarousel();


    initializeTravelTabs();


    updateCartBadge();


    const logout =
      document.getElementById(
        "navLogout"
      );


    if (logout){

      logout.addEventListener(
        "click",
        doLogout
      );

    }


    await refreshNavAuth();


    await Promise.all(
      [

        loadCategoryPrices(),

        loadOwnedPurchases()

      ]
    );


    await loadDestinationMaterials();


    await handleAfterLogin();

  }


  document.addEventListener(
    "DOMContentLoaded",
    initializePage
  );

</script>


<script type="application/ld+json">
${JSON.stringify(
  {
    "@context":
      "https://schema.org",

    "@type":
      "TouristDestination",

    "name":
      destino.cidade,

    "description":
      getMetaDescription(
        destino
      ),

    "url":
      canonicalUrl,

    "containedInPlace":{
      "@type":
        "Country",

      "name":
        destino.pais
    },

    "publisher":{
      "@type":
        "Organization",

      "name":
        "Curadoria Elite Travel",

      "url":
        SITE_URL
    }
  },
  null,
  2
)}
</script>


</body>

</html>`;

}


/* =========================================================
   LEITURA DOS DESTINOS
========================================================= */

function loadDestinationData(){

  if (
    !fs.existsSync(
      DESTINOS_DATA_PATH
    )
  ){

    throw new Error(
      "Arquivo data/destinos.json não encontrado."
    );

  }


  const raw =
    fs.readFileSync(
      DESTINOS_DATA_PATH,
      "utf8"
    );


  const parsed =
    JSON.parse(
      raw
    );


  if (
    !parsed ||
    !Array.isArray(
      parsed.destinos
    )
  ){

    throw new Error(
      'data/destinos.json precisa possuir a propriedade "destinos" como array.'
    );

  }


  return parsed.destinos;

}


/* =========================================================
   SITEMAP AUTOMÁTICO
========================================================= */

function escapeXml(value){

  return String(
    value ??
    ""
  )
    .replace(
      /&/g,
      "&amp;"
    )
    .replace(
      /</g,
      "&lt;"
    )
    .replace(
      />/g,
      "&gt;"
    )
    .replace(
      /"/g,
      "&quot;"
    )
    .replace(
      /'/g,
      "&apos;"
    );

}


function buildSitemapXml(
  destinos
){

  const fixedUrls = [

    "/",

    "/documentos.html",

    "/transportes.html",

    "/hospedagem.html",

    "/transfer.html",

    "/seguro-viagem.html",

    "/locacao.html",

    "/aereo.html",

    "/experiencias.html",

    "/ingressos.html",

    "/contact.html"

  ];


  const destinationUrls =
    (
      destinos ||
      []
    ).map(
      (destino) =>
        normalizeUrlPath(
          destino.url
        )
    );


  const uniqueUrls =
    Array.from(
      new Set(
        [
          ...fixedUrls,
          ...destinationUrls
        ]
      )
    );


  const entries =
    uniqueUrls.map(
      (urlPath) => {

        const absoluteUrl =
          urlPath === "/"
            ? SITE_URL + "/"
            : SITE_URL + urlPath;


        return [
          "  <url>",
          `    <loc>${escapeXml(absoluteUrl)}</loc>`,
          "  </url>"
        ].join(
          "\n"
        );

      }
    );


  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    "",
    entries.join(
      "\n\n"
    ),
    "",
    "</urlset>",
    ""
  ].join(
    "\n"
  );

}
/* =========================================================
   GERAÇÃO DE CADA DESTINO
========================================================= */

function generateDestination(
  destino,
  index
){

  validateDestination(
    destino,
    index
  );


  const destinationDirectory =
    path.join(
      DESTINOS_OUTPUT_DIR,
      destino.slugPais,
      destino.slugCidade
    );


  ensureDirectory(
    destinationDirectory
  );


  const outputFile =
    path.join(
      destinationDirectory,
      "index.html"
    );


  const html =
    buildDestinationHtml(
      destino
    );


  fs.writeFileSync(
    outputFile,
    html,
    "utf8"
  );


  console.log(
    `✓ ${destino.cityLabel} → ${path.relative(ROOT_DIR, outputFile)}`
  );

}


/* =========================================================
   EXECUÇÃO PRINCIPAL
========================================================= */

function main(){

  console.log(
    ""
  );


  console.log(
    "=============================================="
  );


  console.log(
    " CURADORIA ELITE TRAVEL"
  );


  console.log(
    " Gerador automático de páginas de destino"
  );


  console.log(
    "=============================================="
  );


  console.log(
    ""
  );


  const destinos =
    loadDestinationData();


  if (
    !destinos.length
  ){

    throw new Error(
      "Nenhum destino encontrado em data/destinos.json."
    );

  }


  ensureDirectory(
    DESTINOS_OUTPUT_DIR
  );


  console.log(
    `Destinos encontrados: ${destinos.length}`
  );


  console.log(
    ""
  );


  destinos.forEach(
    (
      destino,
      index
    ) => {

      generateDestination(
        destino,
        index
      );

    }
  );


  const sitemapXml =
    buildSitemapXml(
      destinos
    );


  fs.writeFileSync(
    SITEMAP_PATH,
    sitemapXml,
    "utf8"
  );


  console.log(
    ""
  );


  console.log(
    `✓ Sitemap atualizado → ${path.relative(ROOT_DIR, SITEMAP_PATH)}`
  );


  console.log(
    ""
  );


  console.log(
    "=============================================="
  );


  console.log(
    " Geração concluída com sucesso."
  );


  console.log(
    "=============================================="
  );


  console.log(
    ""
  );

}


/* =========================================================
   INICIAR
========================================================= */

try{

  main();

}catch(error){

  console.error(
    ""
  );


  console.error(
    "ERRO AO GERAR AS PÁGINAS DE DESTINO:"
  );


  console.error(
    error
  );


  console.error(
    ""
  );


  process.exit(
    1
  );

}
