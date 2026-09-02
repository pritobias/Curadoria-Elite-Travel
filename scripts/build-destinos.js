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
  let url = String(value || "").trim();

  if (!url.startsWith("/")) {
    url = "/" + url;
  }

  if (!url.endsWith("/")) {
    url += "/";
  }

  return url;
}

function ensureDirectory(directory) {
  fs.mkdirSync(directory, {
    recursive: true
  });
}

function validateDestination(destino, index) {
  const requiredFields = [
    "cidade",
    "pais",
    "cityLabel",
    "slugPais",
    "slugCidade",
    "url",
    "texto"
  ];

  requiredFields.forEach((field) => {
    if (
      destino[field] === undefined ||
      destino[field] === null ||
      String(destino[field]).trim() === ""
    ) {
      throw new Error(
        `Destino ${index + 1}: campo obrigatório ausente ou vazio: ${field}`
      );
    }
  });

  if (
    !Array.isArray(destino.imagens) ||
    destino.imagens.length < 3
  ) {
    throw new Error(
      `Destino ${index + 1} (${destino.cidade}): são necessárias pelo menos 3 imagens.`
    );
  }

  destino.imagens.forEach((imagem, imageIndex) => {
    if (
      !imagem ||
      !imagem.tipo ||
      !imagem.arquivo
    ) {
      throw new Error(
        `Destino ${index + 1} (${destino.cidade}): imagem ${imageIndex + 1} está incompleta.`
      );
    }
  });
}

function getDestinationImages(destino) {
  const bandeira =
    destino.imagens.find(
      (imagem) =>
        imagem.tipo === "bandeira"
    ) || destino.imagens[0];

  const pontosTuristicos =
    destino.imagens.filter(
      (imagem) =>
        imagem.tipo === "ponto-turistico"
    );

  const ponto1 =
    pontosTuristicos[0] ||
    destino.imagens[1];

  const ponto2 =
    pontosTuristicos[1] ||
    destino.imagens[2];

  return {
    bandeira: bandeira.arquivo,
    ponto1: ponto1.arquivo,
    ponto2: ponto2.arquivo
  };
}

function getMetaDescription(destino) {
  const base =
    `Descubra ${destino.cidade}, ${destino.pais}, com informações selecionadas, ` +
    `materiais digitais e ferramentas da Curadoria Elite Travel para preparar sua viagem de forma autônoma.`;

  return base.length <= 160
    ? base
    : base.slice(0, 157).trim() + "...";
}


/* =========================================================
   TEMPLATE DA PÁGINA
========================================================= */

function buildDestinationHtml(destino) {
  const cidade =
    escapeHtml(destino.cidade);

  const pais =
    escapeHtml(destino.pais);

  const texto =
    escapeHtml(destino.texto);

  const destinationUrl =
    normalizeUrlPath(destino.url);

  const canonicalUrl =
    SITE_URL + destinationUrl;

  const metaDescription =
    escapeHtml(
      getMetaDescription(destino)
    );

  const pageTitle =
    `${cidade}, ${pais} | Materiais e ferramentas para viajar melhor | Curadoria Elite Travel`;

  const images =
    getDestinationImages(destino);

  const bandeira =
    escapeHtml(images.bandeira);

  const ponto1 =
    escapeHtml(images.ponto1);

  const ponto2 =
    escapeHtml(images.ponto2);

  const destinationData =
    escapeJsonForScript({
      cidade: destino.cidade,
      pais: destino.pais,
      cityLabel: destino.cityLabel,
      url: destinationUrl
    });


  return `<!DOCTYPE html>
<html lang="pt-BR">

<head>

  <!-- Google Analytics -->
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-S07L3R13WJ"
  ></script>

  <script>
    window.dataLayer =
      window.dataLayer || [];

    function gtag(){
      dataLayer.push(arguments);
    }

    function trackEvent(
      name,
      params = {}
    ){
      if (
        typeof gtag === "function"
      ){
        gtag(
          "event",
          name,
          params
        );
      }
    }

    gtag(
      "js",
      new Date()
    );

    gtag(
      "config",
      "G-S07L3R13WJ"
    );
  </script>


  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>${pageTitle}</title>

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


  <style>

    :root{
      --gold:#d4af37;
      --background:#070707;
      --panel:#11100e;
      --text:#ffffff;
      --muted:rgba(255,255,255,.76);
    }


    *{
      box-sizing:border-box;
    }


    html{
      scroll-behavior:smooth;
      background:#070707;
    }


    body{
      margin:0;
      color:var(--text);
      font-family:"Segoe UI",sans-serif;
      overflow-x:hidden;
      background:#070707;
      position:relative;
    }


    a{
      color:inherit;
    }


    button{
      font:inherit;
    }


    /* =====================================================
       FUNDO FOTOGRÁFICO CONTÍNUO
    ===================================================== */

    .page-photo-carousel{
      position:fixed;
      inset:0;
      z-index:0;
      overflow:hidden;
      pointer-events:none;
      background:#070707;
    }


    .page-photo-slide{
      position:absolute;
      inset:-3%;
      opacity:0;
      background-size:cover;
      background-repeat:no-repeat;
      background-position:center;
      transform:scale(1.055);
      transition:
        opacity 1.9s ease-in-out,
        transform 9s ease-out;
      will-change:
        opacity,
        transform;
    }


    .page-photo-slide.active{
      opacity:1;
      transform:scale(1);
    }


    .page-photo-slide:nth-child(1){
      background-image:url("${ponto1}");
    }


    .page-photo-slide:nth-child(2){
      background-image:url("${ponto2}");
    }


    .page-photo-slide:nth-child(3){
      background-image:url("${bandeira}");
    }


    .page-photo-global-overlay{
      position:fixed;
      inset:0;
      z-index:1;
      pointer-events:none;
      background:
        linear-gradient(
          180deg,
          rgba(0,0,0,.18) 0%,
          rgba(0,0,0,.22) 38%,
          rgba(0,0,0,.34) 70%,
          rgba(0,0,0,.44) 100%
        );
    }


    header,
    main,
    footer{
      position:relative;
      z-index:10;
    }


    /* =====================================================
       CABEÇALHO
    ===================================================== */

    header{
      position:fixed;
      top:0;
      left:0;
      width:100%;
      min-height:70px;
      padding:14px 32px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:20px;
      background:
        rgba(5,5,5,.74);
      backdrop-filter:
        blur(13px);
      -webkit-backdrop-filter:
        blur(13px);
      border-bottom:
        1px solid
        rgba(255,255,255,.10);
      z-index:3000;
    }


    .brand{
      display:flex;
      align-items:center;
      gap:12px;
      text-decoration:none;
      min-width:260px;
    }


    .brand img{
      width:34px;
      height:34px;
      object-fit:contain;
    }


    .brand-name{
      color:var(--gold);
      font-family:"Cinzel","Georgia",serif;
      font-size:18px;
      text-transform:uppercase;
      letter-spacing:.7px;
      line-height:1.1;
    }


    .brand-tagline{
      margin-top:2px;
      color:
        rgba(255,255,255,.74);
      font-size:11px;
    }


    nav{
      position:relative;
      display:flex;
      align-items:center;
    }


    .nav-menu{
      display:flex;
      align-items:center;
      justify-content:flex-end;
      gap:16px;
      flex-wrap:wrap;
    }


    .nav-menu a{
      color:var(--gold);
      text-decoration:none;
      font-weight:600;
      font-size:14px;
      white-space:nowrap;
    }


    .nav-sep{
      width:1px;
      height:16px;
      background:
        rgba(255,255,255,.14);
    }


    .nav-toggle{
      display:none;
      background:transparent;
      border:
        1px solid
        rgba(212,175,55,.40);
      border-radius:9px;
      padding:8px 10px;
      cursor:pointer;
    }


    .nav-toggle span{
      width:18px;
      height:2px;
      display:block;
      background:var(--gold);
      margin:4px 0;
    }


    /* =====================================================
       HERO
    ===================================================== */

    .destination-hero{
      position:relative;
      min-height:760px;
      height:92vh;
      display:flex;
      align-items:center;
      justify-content:center;
      overflow:hidden;
      background:
        linear-gradient(
          180deg,
          rgba(0,0,0,.16) 0%,
          rgba(0,0,0,.18) 45%,
          rgba(0,0,0,.46) 78%,
          rgba(0,0,0,.70) 100%
        );
    }


    .destination-hero::after{
      content:"";
      position:absolute;
      inset:0;
      pointer-events:none;
      background:
        linear-gradient(
          90deg,
          rgba(0,0,0,.22),
          rgba(0,0,0,.04) 32%,
          rgba(0,0,0,.04) 68%,
          rgba(0,0,0,.22)
        );
    }


    .hero-content{
      position:relative;
      z-index:5;
      width:min(920px,90%);
      margin:0 auto;
      text-align:center;
      transform:
        translateY(30px);
    }


    .hero-country{
      color:var(--gold);
      font-size:14px;
      letter-spacing:4px;
      text-transform:uppercase;
      font-weight:700;
      text-shadow:
        0 3px 20px
        rgba(0,0,0,.90);
    }


    .hero-content h1{
      margin:10px 0 0;
      color:#fff;
      font-family:
        "Cinzel",
        "Georgia",
        serif;
      font-size:
        clamp(
          72px,
          10vw,
          142px
        );
      line-height:.92;
      letter-spacing:2px;
      text-transform:uppercase;
      text-shadow:
        0 8px 42px
        rgba(0,0,0,.86);
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
      color:
        rgba(255,255,255,.68);
      text-align:center;
      text-transform:uppercase;
      letter-spacing:2.3px;
      font-size:12px;
      margin-bottom:10px;
    }


    .section-title{
      color:var(--gold);
      text-align:center;
      font-family:
        "Cinzel",
        "Georgia",
        serif;
      font-size:
        clamp(
          30px,
          4vw,
          44px
        );
      margin:0 0 14px;
      font-weight:600;
      text-shadow:
        0 3px 18px
        rgba(0,0,0,.75);
    }


    .section-subtitle{
      width:min(
        780px,
        100%
      );
      margin:
        0 auto 42px;
      color:
        rgba(255,255,255,.88);
      text-align:center;
      font-size:15px;
      line-height:1.8;
      text-shadow:
        0 2px 12px
        rgba(0,0,0,.85);
    }


    /* =====================================================
       MATERIAIS — FOTO AO FUNDO
    ===================================================== */

    .materials-section{
      background:
        linear-gradient(
          180deg,
          rgba(7,7,7,.78),
          rgba(9,9,9,.84)
        );
      border-top:
        1px solid
        rgba(255,255,255,.08);
      border-bottom:
        1px solid
        rgba(255,255,255,.08);
      backdrop-filter:
        blur(3px);
      -webkit-backdrop-filter:
        blur(3px);
    }


    .materials-section::before{
      content:"";
      position:absolute;
      inset:0;
      z-index:0;
      background:
        radial-gradient(
          circle at
          50% 10%,
          rgba(212,175,55,.08),
          transparent 42%
        );
      pointer-events:none;
    }


    .materials-grid{
      display:grid;
      grid-template-columns:
        repeat(
          3,
          minmax(0,1fr)
        );
      gap:18px;
    }


    .material-card{
      min-height:260px;
      padding:26px 22px;
      border-radius:18px;
      display:flex;
      flex-direction:column;
      background:
        linear-gradient(
          180deg,
          rgba(19,19,18,.90),
          rgba(7,7,7,.91)
        );
      border:
        1px solid
        rgba(212,175,55,.22);
      box-shadow:
        0 16px 45px
        rgba(0,0,0,.35);
      backdrop-filter:
        blur(10px);
      -webkit-backdrop-filter:
        blur(10px);
      transition:
        transform .25s ease,
        border-color .25s ease,
        background .25s ease;
    }


    .material-card:hover{
      transform:
        translateY(-4px);
      border-color:
        rgba(212,175,55,.52);
      background:
        linear-gradient(
          180deg,
          rgba(24,23,20,.93),
          rgba(8,8,8,.94)
        );
    }


    .material-icon{
      width:46px;
      height:46px;
      margin-bottom:20px;
      border-radius:50%;
      border:
        1px solid
        rgba(212,175,55,.34);
      display:flex;
      align-items:center;
      justify-content:center;
      color:var(--gold);
      font-size:19px;
      background:
        rgba(0,0,0,.22);
    }


    .material-card h3{
      color:var(--gold);
      margin:0 0 10px;
      font-size:19px;
      line-height:1.35;
    }


    .material-description{
      margin:0 0 18px;
      flex:1;
      color:
        rgba(255,255,255,.83);
      font-size:13.5px;
      line-height:1.65;
    }


    .material-price{
      color:#fff;
      font-size:17px;
      font-weight:700;
      margin-bottom:14px;
    }


    .material-button{
      width:100%;
      border:0;
      border-radius:10px;
      padding:12px 16px;
      background:var(--gold);
      color:#000;
      font-weight:800;
      cursor:pointer;
      transition:
        transform .20s ease,
        filter .20s ease;
    }


    .material-button:hover{
      transform:
        translateY(-1px);
      filter:
        brightness(1.04);
    }


    .loading-state,
    .empty-state,
    .error-state{
      grid-column:1/-1;
      padding:30px 20px;
      text-align:center;
      color:
        rgba(255,255,255,.82);
      border:
        1px dashed
        rgba(255,255,255,.18);
      border-radius:16px;
      background:
        rgba(10,10,10,.72);
      backdrop-filter:
        blur(8px);
    }


    /* =====================================================
       PREPARANDO SUA VIAGEM
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


    .popup-content{
      width:min(
        720px,
        100%
      );
      max-height:
        calc(
          100vh - 36px
        );
      padding:24px;
      display:flex;
      flex-direction:column;
      overflow:hidden;
      text-align:center;
      background:
        rgba(17,17,17,.98);
      border:
        1px solid
        #272727;
      border-radius:14px;
      box-shadow:
        0 25px 70px
        rgba(0,0,0,.55);
    }


    .popup-content h3{
      margin:0 0 10px;
      color:var(--gold);
    }


    .popup-content p{
      margin:0 0 14px;
      color:
        rgba(255,255,255,.82);
      line-height:1.6;
      font-size:14px;
    }


    .popup-actions{
      display:flex;
      justify-content:center;
      flex-wrap:wrap;
      gap:12px;
      margin-top:14px;
    }


    .popup-actions button{
      cursor:pointer;
      padding:11px 18px;
      border-radius:10px;
      border:0;
      background:var(--gold);
      color:#000;
      font-weight:700;
    }


    .popup-actions .btn-ghost{
      background:transparent;
      border:
        1px solid
        rgba(212,175,55,.40);
      color:var(--gold);
    }


    .popup-actions button:disabled{
      opacity:.55;
      cursor:not-allowed;
    }


    .popup-rules{
      display:none;
      flex:1 1 auto;
      min-height:0;
      overflow:auto;
      margin-top:14px;
      padding:16px;
      text-align:left;
      color:
        rgba(255,255,255,.80);
      background:#0f0f0f;
      border:
        1px solid #242424;
      border-radius:12px;
      font-size:13.5px;
      line-height:1.6;
    }


    .popup-rules strong{
      color:var(--gold);
    }


    .consent-wrap{
      display:flex;
      gap:10px;
      align-items:flex-start;
      margin-top:12px;
      padding:12px;
      text-align:left;
      color:
        rgba(255,255,255,.84);
      background:#0f0f0f;
      border:
        1px solid #242424;
      border-radius:12px;
      font-size:13.2px;
      line-height:1.55;
    }


    .consent-wrap input{
      margin-top:3px;
      accent-color:var(--gold);
    }


    .cart-list{
      flex:1 1 auto;
      min-height:0;
      overflow:auto;
      margin-top:14px;
      padding:12px;
      text-align:left;
      background:#0f0f0f;
      border:
        1px solid #242424;
      border-radius:12px;
    }


    .cart-item{
      display:flex;
      justify-content:space-between;
      gap:12px;
      padding:12px 10px;
      border-bottom:
        1px solid
        rgba(255,255,255,.09);
    }


    .cart-item:last-child{
      border-bottom:0;
    }


    .cart-item-title{
      color:#fff;
      font-weight:650;
      margin:0 0 4px;
      font-size:14px;
    }


    .cart-item-meta{
      color:
        rgba(255,255,255,.72);
      font-size:12.5px;
      line-height:1.4;
    }


    .cart-item-right{
      display:flex;
      flex-direction:column;
      align-items:flex-end;
      gap:10px;
      white-space:nowrap;
    }


    .cart-item-right button{
      cursor:pointer;
      padding:9px 13px;
      border-radius:9px;
      background:transparent;
      border:
        1px solid
        rgba(212,175,55,.40);
      color:var(--gold);
      font-weight:650;
    }


    .cart-total{
      display:flex;
      justify-content:space-between;
      gap:12px;
      align-items:center;
      margin-top:12px;
      padding:12px;
      text-align:left;
      background:#0f0f0f;
      border:
        1px solid
        rgba(255,255,255,.11);
      border-radius:12px;
    }


    .cart-total strong{
      color:var(--gold);
    }


    .total-strike{
      color:
        rgba(255,255,255,.55);
      text-decoration:line-through;
      margin-right:10px;
      font-weight:650;
    }


    .total-final{
      color:var(--gold);
      font-weight:800;
    }


    .discount-line{
      display:none;
      margin-top:8px;
      text-align:left;
      color:
        rgba(255,255,255,.72);
      font-size:12.8px;
    }


    .discount-line strong{
      color:var(--gold);
    }


    .coupon-wrap{
      margin-top:10px;
      padding:12px;
      text-align:left;
      background:#0f0f0f;
      border:
        1px solid
        rgba(255,255,255,.11);
      border-radius:12px;
    }


    .coupon-label{
      display:block;
      margin-bottom:8px;
      color:
        rgba(255,255,255,.77);
      font-size:12.5px;
    }


    .coupon-row{
      display:flex;
      gap:10px;
      align-items:center;
    }


    .coupon-input{
      flex:1;
      width:100%;
      padding:12px 14px;
      outline:none;
      color:#fff;
      background:
        rgba(10,10,10,.96);
      border:
        1px solid
        rgba(255,255,255,.11);
      border-radius:12px;
      font-size:14px;
    }


    .coupon-apply{
      min-width:120px;
      cursor:pointer;
      padding:11px 18px;
      border:0;
      border-radius:10px;
      background:var(--gold);
      color:#000;
      font-weight:700;
    }


    .coupon-msg{
      min-height:18px;
      margin-top:8px;
      font-size:12.5px;
      line-height:1.45;
    }


    .coupon-msg.ok{
      color:var(--gold);
    }


    .coupon-msg.err{
      color:
        rgba(255,255,255,.74);
    }


    .coupon-help{
      margin-top:8px;
      color:
        rgba(255,255,255,.65);
      font-size:12.5px;
      line-height:1.45;
    }


    /* =====================================================
       FOOTER
    ===================================================== */

    footer{
      padding:
        40px 24px 42px;
      text-align:center;
      color:
        rgba(255,255,255,.70);
      border-top:
        1px solid
        rgba(255,255,255,.09);
      font-size:14px;
      line-height:1.7;
      background:
        rgba(0,0,0,.94);
      backdrop-filter:
        blur(10px);
      -webkit-backdrop-filter:
        blur(10px);
    }


    footer > a{
      color:#826bf5;
      text-decoration:underline;
    }


    .footer-social{
      display:flex;
      justify-content:center;
      gap:12px;
      margin-top:16px;
    }


    .footer-social a{
      width:38px;
      height:38px;
      display:inline-flex;
      align-items:center;
      justify-content:center;
      border-radius:50%;
      border:
        1px solid
        rgba(212,175,55,.32);
      color:var(--gold);
      text-decoration:none;
      background:
        rgba(255,255,255,.02);
    }


    .footer-social svg{
      width:18px;
      height:18px;
      fill:currentColor;
    }


    /* =====================================================
       RESPONSIVO
    ===================================================== */

    @media (max-width:980px){

      header{
        padding:
          14px 16px;
      }


      .brand{
        min-width:auto;
      }


      .nav-toggle{
        display:block;
      }


      .nav-menu{
        display:none;
        position:absolute;
        top:52px;
        right:0;
        min-width:220px;
        padding:14px;
        flex-direction:column;
        align-items:flex-start;
        gap:12px;
        background:
          rgba(0,0,0,.96);
        border:
          1px solid
          rgba(255,255,255,.11);
        border-radius:14px;
      }


      header.nav-open .nav-menu{
        display:flex;
      }


      .nav-sep{
        display:none;
      }


      .destination-hero{
        min-height:680px;
        height:88vh;
      }


      .hero-content{
        transform:
          translateY(15px);
      }


      .hero-content h1{
        font-size:
          clamp(
            66px,
            15vw,
            110px
          );
      }


      .content-section{
        padding:
          70px 18px;
      }


      .materials-grid{
        grid-template-columns:
          repeat(
            2,
            minmax(0,1fr)
          );
      }


      .tools-grid{
        grid-template-columns:1fr;
      }

    }


    @media (max-width:640px){

      .brand-name{
        font-size:14px;
      }


      .brand-tagline{
        font-size:10px;
      }


      .brand img{
        width:30px;
        height:30px;
      }


      .destination-hero{
        min-height:620px;
        height:82vh;
      }


      .hero-content{
        width:88%;
        transform:
          translateY(24px);
      }


      .hero-content h1{
        font-size:
          clamp(
            56px,
            19vw,
            84px
          );
      }


      .hero-country{
        font-size:12px;
        letter-spacing:3px;
      }


      .hero-description{
        font-size:14px;
        line-height:1.7;
      }


      .materials-grid{
        grid-template-columns:1fr;
      }


      .material-card{
        min-height:0;
      }


      .cart-item{
        flex-direction:column;
      }


      .cart-item-right{
        align-items:flex-start;
      }


      .coupon-row{
        flex-direction:column;
      }


      .coupon-apply{
        width:100%;
      }

    }


    @media (
      prefers-reduced-motion:
      reduce
    ){

      .page-photo-slide{
        transition:none;
        transform:none;
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
  ></div>

  <div
    class="page-photo-slide"
  ></div>

  <div
    class="page-photo-slide"
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
        Acesse ferramentas da Curadoria para consultar informações práticas relacionadas ao destino.
      </p>


      <div class="tools-grid">

        <article class="tool-card">

          <h3>
            Documentos, vistos e saúde
          </h3>

          <p>
            Consulte informações sobre entrada no destino,
            documentação, apoio diplomático e saúde para viagem.
          </p>

          <a href="/documentos.html">
            Acessar ferramenta
          </a>

        </article>


        <article class="tool-card">

          <h3>
            Transportes em ${cidade}
          </h3>

          <p>
            Consulte informações organizadas sobre redes de transporte,
            formas de pagamento e canais oficiais para utilizar durante a viagem.
          </p>

          <a href="/transportes.html">
            Acessar ferramenta
          </a>

        </article>

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


    return 57.83;

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
        ) ||
        0
      );

    }


    return getFallbackPriceForCategory(
      category
    );

  }


  async function loadCategoryPrices(){

    categoryPricesMap.clear();


    const sb =
      ensureSupabase();


    if (!sb){
      return;
    }


    const {
      data,
      error
    } =
      await sb
        .from(
          "category_prices"
        )
        .select(
          "category, price, is_active"
        )
        .eq(
          "is_active",
          true
        );


    if (error){

      console.error(
        "Erro ao carregar preços:",
        error
      );

      return;

    }


    (data || []).forEach(
      (row) => {

        const category =
          String(
            row.category || ""
          ).trim();


        const price =
          Number(
            row.price || 0
          );


        if (
          category &&
          Number.isFinite(
            price
          ) &&
          price > 0
        ){

          categoryPricesMap.set(
            normalizeCategoryName(
              category
            ),
            price
          );

        }

      }
    );

  }


  /* =====================================================
     COMPRAS EXISTENTES
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


    const {
      data,
      error
    } =
      await sb
        .from(
          "purchase"
        )
        .select(
          "category, city, pdf_url"
        )
        .eq(
          "user_id",
          session.user.id
        )
        .limit(500);


    if (error){
      return;
    }


    (data || []).forEach(
      (row) => {

        ownedMap.set(
          purchaseKey(
            row.category ||
            "",

            row.city ||
            ""
          ),

          {
            pdf_url:
              row.pdf_url ||
              null
          }
        );

      }
    );

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


      const parsed =
        raw
          ? JSON.parse(raw)
          : [];


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
        items ||
        []
      )
    );


    updateCartBadge();

  }


  function clearCart(){

    localStorage.removeItem(
      CART_STORAGE_KEY
    );


    updateCartBadge();

  }


  function cartItemKey(
    category,
    city
  ){

    return purchaseKey(
      category,
      city
    );

  }


  function updateCartBadge(){

    const navCart =
      document.getElementById(
        "navCart"
      );


    if (navCart){

      navCart.textContent =
        "Carrinho (" +
        getCart().length +
        ")";

    }

  }


  function calcCartTotal(items){

    return (
      items ||
      []
    ).reduce(
      (
        total,
        item
      ) =>

        total +
        (
          Number(
            item.qty ||
            0
          ) *

          Number(
            item.price ||
            0
          )
        ),

      0
    );

  }


  function removeFromCart(key){

    saveCart(
      getCart().filter(
        (item) =>
          item &&
          item.key !==
          key
      )
    );


    cartPricingPreview =
      null;


    renderCart();

  }


  function addToCart(
    category,
    city
  ){

    const items =
      getCart();


    const key =
      cartItemKey(
        category,
        city
      );


    if (
      items.some(
        (item) =>
          item &&
          item.key ===
          key
      )
    ){

      return false;

    }


    const price =
      getPriceForCategory(
        category
      );


    items.push({

      key,

      category:
        String(
          category ||
          ""
        ).trim(),

      city:
        String(
          city ||
          ""
        ).trim(),

      qty:
        1,

      price:
        Number(
          price ||
          0
        )

    });


    saveCart(
      items
    );


    cartPricingPreview =
      null;


    trackEvent(
      "add_to_cart",
      {

        item_category:
          category,

        item_name:
          city,

        currency:
          "BRL",

        value:
          Number(
            price ||
            0
          )

      }
    );


    return true;

  }


  function addToCartAndOpenCart(
    category,
    city
  ){

    addToCart(
      category,
      city
    );


    openCart();

  }


  /* =====================================================
     CUPOM
  ===================================================== */

  function normalizeCouponCode(code){

    return String(
      code ||
      ""
    )
      .trim()
      .toUpperCase();

  }


  function setCartCouponCode(code){

    const value =
      normalizeCouponCode(
        code
      );


    if (!value){

      localStorage.removeItem(
        CART_COUPON_CODE_KEY
      );

    }else{

      localStorage.setItem(
        CART_COUPON_CODE_KEY,
        value
      );

    }

  }


  function getCartCouponCode(){

    return normalizeCouponCode(
      localStorage.getItem(
        CART_COUPON_CODE_KEY
      ) ||
      ""
    );

  }


  function setCouponMessage(
    text,
    kind
  ){

    const element =
      document.getElementById(
        "couponMsg"
      );


    if (!element){
      return;
    }


    element.className =
      "coupon-msg";


    if (kind){

      element.classList.add(
        kind
      );

    }


    element.textContent =
      text ||
      "";

  }


  async function applyCouponInCart(){

    const items =
      getCart();


    if (!items.length){

      setCouponMessage(
        "Seu carrinho está vazio.",
        "err"
      );

      return;

    }


    const code =
      getCartCouponCode();


    if (!code){

      cartPricingPreview =
        null;

      renderCartTotalsOnly();

      return;

    }


    const session =
      await getSession();


    if (
      !session ||
      !session.user
    ){

      setCouponMessage(
        "Faça login para validar o cupom no carrinho.",
        "err"
      );

      return;

    }


    const response =
      await apiPOST(
        "/api/create-checkout-mercadopago",

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
                  ) ||
                  1

              })
            ),

          coupon_code:
            code,

          preview_only:
            true

        }
      );


    if (
      !response.ok ||
      !response.json ||
      response.json.ok !==
      true
    ){

      cartPricingPreview =
        null;


      setCouponMessage(
        "Este cupom não está válido. Insira um cupom válido.",
        "err"
      );


      renderCartTotalsOnly();

      return;

    }


    const preview =
      response.json;


    const matchCount =
      Number(
        preview.applied &&
        preview.applied.match_count
          ? preview.applied.match_count
          : 0
      );


    if (
      matchCount > 0 &&
      preview.totals &&
      Number(
        preview.totals.discount_total ||
        0
      ) > 0
    ){

      cartPricingPreview =
        preview;


      setCouponMessage(
        "Cupom aplicado.",
        "ok"
      );

    }else{

      cartPricingPreview =
        null;


      setCouponMessage(
        "Este cupom não está válido. Insira um cupom válido.",
        "err"
      );

    }


    renderCartTotalsOnly();

  }


  /* =====================================================
     POPUP GERAL
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

          '<div class="popup-rules" id="popup-rules">' +

            '<strong>Informações Importantes</strong><br><br>' +

            'A Curadoria Elite Travel oferece exclusivamente materiais digitais de caráter informativo e orientativo, baseados em indicações, referências e conteúdos selecionados.<br><br>' +

            'Não realizamos reservas, vendas de passagens, hospedagens, experiências ou qualquer tipo de intermediação direta com fornecedores ou prestadores de serviço.<br><br>' +

            'As decisões de compra, contratação e utilização de serviços indicados nos materiais são de <strong>responsabilidade exclusiva do usuário</strong>.<br><br>' +

            'Por se tratar de conteúdo digital disponibilizado de forma imediata após a confirmação da compra, <strong>não é possível realizar cancelamentos, trocas ou reembolsos</strong>.<br><br>' +

            'Ao adquirir nossos materiais, o usuário declara estar ciente e de acordo com essas condições.' +

          '</div>' +

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


    const consent =
      document.getElementById(
        "consent-checkbox-wrap"
      );


    if (consent){

      consent.remove();

    }

  }


  function openPopup({

    title =
      "",

    text =
      "",

    showProceed =
      false,

    proceedText =
      "Ir para pagamento",

    showRules =
      false,

    requireConsent =
      false,

    onProceed =
      null,

    secondaryText =
      null,

    onSecondary =
      null

  }){

    ensurePopupExists();


    document
      .getElementById(
        "popup-title"
      )
      .textContent =
        title;


    document
      .getElementById(
        "popup-text"
      )
      .textContent =
        text;


    document
      .getElementById(
        "popup-rules"
      )
      .style.display =
        showRules
          ? "block"
          : "none";


    const proceed =
      document.getElementById(
        "popup-proceed"
      );


    proceed.style.display =
      showProceed
        ? "inline-block"
        : "none";


    proceed.textContent =
      proceedText;


    proceed.disabled =
      false;


    const secondary =
      document.getElementById(
        "popup-secondary"
      );


    if (
      secondaryText &&
      typeof onSecondary ===
      "function"
    ){

      secondary.style.display =
        "inline-block";


      secondary.textContent =
        secondaryText;


      secondary.onclick =
        () => {

          closePopup();

          onSecondary();

        };

    }else{

      secondary.style.display =
        "none";


      secondary.onclick =
        null;

    }


    const oldConsent =
      document.getElementById(
        "consent-checkbox-wrap"
      );


    if (oldConsent){

      oldConsent.remove();

    }


    if (
      showProceed &&
      requireConsent
    ){

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


        trackEvent(
          "begin_checkout",
          {

            currency:
              "BRL",

            value:
              calcCartTotal(
                finalItems
              ),

            items:
              finalItems.map(
                (item) => ({

                  item_name:
                    item.city,

                  item_category:
                    item.category,

                  price:
                    item.price,

                  quantity:
                    item.qty

                })
              )

          }
        );


        goInvoiceCart(
          finalItems,
          couponNow
        );

      }
    );

  }


  async function resumeAfterLoginIfNeeded(){

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


    try{

      const url =
        new URL(
          window.location.href
        );


      url.searchParams.delete(
        "after_login"
      );


      window.history.replaceState(
        {},
        "",
        url.pathname
      );

    }catch(error){}


    const context =
      getCheckoutContext();


    if (
      !context ||
      context.type !==
      "cart"
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


    clearCheckoutContext();


    await startCartCheckoutFlow();

  }


  /* =====================================================
     MATERIAIS
  ===================================================== */

  function getCategoryDescription(
    category
  ){

    return (
      CATEGORY_DESCRIPTIONS[
        normalizeCategoryName(
          category
        )
      ] ||

      "Material digital com indicações e referências selecionadas para apoiar suas escolhas durante a viagem."
    );

  }


  function getCategoryIcon(
    category
  ){

    return (
      CATEGORY_ICONS[
        normalizeCategoryName(
          category
        )
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


        const article =
          document.createElement(
            "article"
          );


        article.className =
          "material-card";


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


        const button =
          document.createElement(
            "button"
          );


        button.type =
          "button";


        button.className =
          "material-button";


        button.textContent =
          "Comprar agora";


        button.addEventListener(
          "click",

          () => {

            addToCartAndOpenCart(
              category,
              cityLabel
            );

          }
        );


        article.appendChild(
          icon
        );


        article.appendChild(
          title
        );


        article.appendChild(
          description
        );


        article.appendChild(
          price
        );


        article.appendChild(
          button
        );


        grid.appendChild(
          article
        );

      }
    );

  }


  /* =====================================================
     INICIALIZAÇÃO
  ===================================================== */

  document.addEventListener(
    "DOMContentLoaded",

    async () => {

      ensureSupabase();


      startPagePhotoCarousel();


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


      await loadCategoryPrices();


      await loadOwnedPurchases();


      await loadDestinationMaterials();


      await resumeAfterLoginIfNeeded();

    }
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
      destino.texto,

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
   GERAÇÃO INDIVIDUAL
========================================================= */

function generateDestination(
  destino,
  index
){

  validateDestination(
    destino,
    index
  );


  const outputDirectory =
    path.join(
      DESTINOS_OUTPUT_DIR,

      String(
        destino.slugPais
      ).trim(),

      String(
        destino.slugCidade
      ).trim()
    );


  ensureDirectory(
    outputDirectory
  );


  const outputFile =
    path.join(
      outputDirectory,
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
    `✓ ${destino.cidade}, ${destino.pais} -> ${path.relative(
      ROOT_DIR,
      outputFile
    )}`
  );

}


/* =========================================================
   EXECUÇÃO
========================================================= */

function main(){

  console.log("");


  console.log(
    "Curadoria Elite Travel — geração de destinos"
  );


  console.log(
    "---------------------------------------------"
  );


  const destinos =
    loadDestinationData();


  if (!destinos.length){

    console.log(
      "Nenhum destino cadastrado."
    );


    return;

  }


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


  console.log(
    "---------------------------------------------"
  );


  console.log(
    `${destinos.length} destino(s) gerado(s) com sucesso.`
  );


  console.log("");

}


try{

  main();

}catch(error){

  console.error("");


  console.error(
    "Erro ao gerar páginas de destino:"
  );


  console.error(
    error &&
    error.message
      ? error.message
      : error
  );


  console.error("");


  process.exit(1);

}
