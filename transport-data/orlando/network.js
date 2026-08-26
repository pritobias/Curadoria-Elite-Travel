// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — ORLANDO
// MÓDULO: REDE DE TRANSPORTE
// ============================================================

window.ORLANDO_TRANSPORT_MODULES =
  window.ORLANDO_TRANSPORT_MODULES || {};


const ORLANDO_MAP_URL =
  "/images/mapa-transporte-orlando.jpg";


// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function createOrlandoSystemCard(
  icon,
  title,
  description,
  details
) {

  return `
    <article class="operator-card">

      <span
        style="
          display:flex;
          align-items:center;
          justify-content:center;
          width:38px;
          height:38px;
          border-radius:50%;
          border:1px solid rgba(212,175,55,.32);
          margin:0 auto 12px;
          font-size:18px;
        "
      >
        ${icon}
      </span>

      <strong>
        ${title}
      </strong>

      <p
        style="
          margin:0;
          color:var(--muted);
          font-size:11px;
          line-height:1.5;
        "
      >
        ${description}
      </p>

      ${
        details
          ? `
            <small
              style="
                display:block;
                margin-top:8px;
                color:var(--gold-soft);
                line-height:1.5;
              "
            >
              ${details}
            </small>
          `
          : ""
      }

    </article>
  `;

}


function createOrlandoLegendItem(
  symbol,
  title,
  description
) {

  return `
    <article class="legend-card">

      <span class="legend-symbol">
        ${symbol}
      </span>

      <div>

        <strong>
          ${title}
        </strong>

        <p>
          ${description}
        </p>

      </div>

    </article>
  `;

}


// ============================================================
// LIGHTBOX DO MAPA
// ============================================================

function openOrlandoNetworkMap() {

  if (
    document.getElementById(
      "orlandoNetworkMapLightbox"
    )
  ) {
    return;
  }


  const lightbox =
    document.createElement("div");


  lightbox.id =
    "orlandoNetworkMapLightbox";


  lightbox.style.cssText = `
    position:fixed;
    inset:0;
    z-index:99999;
    background:rgba(0,0,0,.93);
    display:flex;
    align-items:center;
    justify-content:center;
    padding:24px;
    box-sizing:border-box;
    cursor:zoom-out;
  `;


  lightbox.innerHTML = `

    <button
      type="button"
      id="closeOrlandoNetworkMap"
      aria-label="Fechar mapa ampliado"
      style="
        position:fixed;
        top:22px;
        right:28px;
        z-index:100001;
        width:46px;
        height:46px;
        border-radius:50%;
        border:1px solid rgba(212,175,55,.55);
        background:#090909;
        color:#d4af37;
        font-size:28px;
        line-height:1;
        cursor:pointer;
      "
    >
      ×
    </button>


    <img
      src="${ORLANDO_MAP_URL}"
      alt="Mapa ampliado da rede de transporte de Orlando"
      style="
        display:block;
        max-width:96vw;
        max-height:94vh;
        width:auto;
        height:auto;
        object-fit:contain;
        background:#fff;
        box-shadow:0 18px 60px rgba(0,0,0,.65);
        cursor:default;
      "
    />

  `;


  document.body.appendChild(
    lightbox
  );


  const closeLightbox = () => {

    lightbox.remove();

    document.removeEventListener(
      "keydown",
      escapeHandler
    );

  };


  const escapeHandler = (event) => {

    if (event.key === "Escape") {
      closeLightbox();
    }

  };


  lightbox.addEventListener(
    "click",
    (event) => {

      if (
        event.target === lightbox ||
        event.target.id ===
          "closeOrlandoNetworkMap"
      ) {
        closeLightbox();
      }

    }
  );


  document.addEventListener(
    "keydown",
    escapeHandler
  );

}


// ============================================================
// MÓDULO
// ============================================================

window.ORLANDO_TRANSPORT_MODULES["network"] = {

  kicker:
    "Orlando · visão completa",

  title:
    "Rede de Transporte",

  body() {

    return `

      <div class="network-layout">


        <!-- ==================================================
             MAPA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Mapa da rede
          </h4>

          <p class="panel-intro">
            O mapa ajuda
            a visualizar
            a rede LYNX
            e as principais conexões
            de transporte
            da região de Orlando.
          </p>

          <div
            class="official-map-wrap"
            style="
              overflow:hidden;
              border-radius:16px;
              background:#fff;
            "
          >

            <img
              class="official-map-image"
              src="${ORLANDO_MAP_URL}"
              alt="Mapa da rede de transporte de Orlando"
              loading="lazy"
              style="
                display:block;
                width:100%;
                height:auto;
                cursor:zoom-in;
              "
              onclick="openOrlandoNetworkMap()"
            />

          </div>


          <div class="official-map-actions">

            <button
              class="map-zoom-button"
              type="button"
              onclick="openOrlandoNetworkMap()"
            >
              Ampliar mapa
            </button>


            <a
              class="official-link"
              href="https://www.golynx.com/maps-schedules/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mapas oficiais · LYNX
            </a>

          </div>


          <div class="visitor-alert">

            <strong>
              Orlando não possui
              uma única rede
              que resolva todos
              os deslocamentos turísticos.
            </strong>

            LYNX,
            LYMMO,
            SunRail,
            NeighborLink
            e transportes privados
            cumprem funções diferentes.

          </div>

        </section>


        <!-- ==================================================
             ENTENDA A REDE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Entenda a rede
          </h4>

          <div class="legend-grid">

            ${createOrlandoLegendItem(
              "LYNX",
              "LYNX",
              "Principal rede pública de ônibus de Orlando e da região metropolitana."
            )}

            ${createOrlandoLegendItem(
              "LYM",
              "LYMMO",
              "Rede gratuita de circulação em Downtown Orlando."
            )}

            ${createOrlandoLegendItem(
              "SR",
              "SunRail",
              "Trem regional que atravessa diferentes cidades da Central Florida."
            )}

            ${createOrlandoLegendItem(
              "NL",
              "NeighborLink",
              "Serviço sob demanda em zonas específicas."
            )}

            ${createOrlandoLegendItem(
              "SH",
              "Shuttles",
              "Hotéis, parques e operadores privados podem oferecer transporte próprio."
            )}

          </div>

        </section>


        <!-- ==================================================
             PRINCIPAIS SISTEMAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Principais sistemas
          </h4>

          <div class="operator-grid">

            ${createOrlandoSystemCard(
              "🚌",
              "LYNX",
              "Principal rede de ônibus públicos da região.",
              "Orlando · Orange County · Osceola · Seminole"
            )}

            ${createOrlandoSystemCard(
              "🚍",
              "LYMMO",
              "Circulação gratuita dentro de Downtown Orlando.",
              "Centro de Orlando"
            )}

            ${createOrlandoSystemCard(
              "🚆",
              "SunRail",
              "Trem regional da Central Florida.",
              "DeLand ↔ Kissimmee / Poinciana"
            )}

            ${createOrlandoSystemCard(
              "🚐",
              "NeighborLink",
              "Transporte sob demanda em áreas específicas.",
              "LYNX"
            )}

            ${createOrlandoSystemCard(
              "🏨",
              "Shuttles",
              "Serviços privados oferecidos por hotéis e atrações.",
              "Condições próprias"
            )}

          </div>

        </section>


        <!-- ==================================================
             LYNX
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            LYNX
          </h4>

          <p class="panel-intro">
            É a principal estrutura
            de transporte público rodoviário
            da região de Orlando.
          </p>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🏙️</span>

              <strong>
                Downtown
              </strong>

              <p>
                Diversas linhas
                convergem
                para o centro.
              </p>

            </article>


            <article class="planner-check-card">

              <span>✈️</span>

              <strong>
                MCO
              </strong>

              <p>
                O aeroporto
                é atendido
                por diversas linhas.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🎢</span>

              <strong>
                Atrações
              </strong>

              <p>
                Linhas atendem
                diferentes corredores
                turísticos.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🛍️</span>

              <strong>
                Compras
              </strong>

              <p>
                Outlets
                e shopping centers
                possuem conexões LYNX.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚆</span>

              <strong>
                SunRail
              </strong>

              <p>
                Diversas estações
                possuem linhas alimentadoras.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             LYNX CENTRAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            LYNX Central Station
          </h4>

          <div class="answer-block">

            <strong>
              Um dos principais hubs
              de Orlando.
            </strong>

            <p>
              O terminal
              concentra diversas linhas
              da rede LYNX
              no centro da cidade.
            </p>

          </div>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                LYNX
              </strong>

              <p>
                Grande número
                de conexões
                rodoviárias.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                SunRail
              </strong>

              <p>
                A estação
                LYNX Central
                do SunRail
                fica integrada
                ao complexo.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                LYMMO
              </strong>

              <p>
                A rede gratuita
                atende
                Downtown Orlando.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             LYMMO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            LYMMO
          </h4>

          <div class="payment-recommendation">

            <span class="payment-eyebrow">
              Downtown Orlando
            </span>

            <h4>
              Transporte gratuito no centro.
            </h4>

            <p>
              O LYMMO
              funciona como
              uma rede circuladora
              para deslocamentos
              dentro da região central.
            </p>

          </div>


          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Tarifa
              </span>

              <strong>
                Grátis
              </strong>

              <p>
                Não é necessário
                comprar bilhete.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             SUNRAIL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            SunRail
          </h4>

          <p class="panel-intro">
            O SunRail
            é o sistema ferroviário regional
            da Central Florida.
          </p>

          <div class="answer-block">

            <strong>
              Ele não substitui
              a rede de ônibus
              para todos os destinos.
            </strong>

            <p>
              O corredor ferroviário
              atende cidades
              e bairros específicos.

              Muitas viagens
              exigem conexão
              com LYNX
              na primeira
              ou última etapa.
            </p>

          </div>

        </section>


        <!-- ==================================================
             ESTAÇÕES SUNRAIL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Estações do SunRail
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">
              <strong>DeLand</strong>
              <p>Volusia County.</p>
            </article>

            <article class="payment-choice">
              <strong>DeBary</strong>
              <p>Volusia County.</p>
            </article>

            <article class="payment-choice">
              <strong>Sanford</strong>
              <p>Seminole County.</p>
            </article>

            <article class="payment-choice">
              <strong>Lake Mary</strong>
              <p>Seminole County.</p>
            </article>

            <article class="payment-choice">
              <strong>Longwood</strong>
              <p>Seminole County.</p>
            </article>

            <article class="payment-choice">
              <strong>Altamonte Springs</strong>
              <p>Seminole County.</p>
            </article>

            <article class="payment-choice">
              <strong>Maitland</strong>
              <p>Orange County.</p>
            </article>

            <article class="payment-choice">
              <strong>Winter Park</strong>
              <p>Orange County.</p>
            </article>

            <article class="payment-choice">
              <strong>AdventHealth</strong>
              <p>Orlando.</p>
            </article>

            <article class="payment-choice">
              <strong>LYNX Central</strong>
              <p>Downtown Orlando.</p>
            </article>

            <article class="payment-choice">
              <strong>Church Street</strong>
              <p>Downtown Orlando.</p>
            </article>

            <article class="payment-choice">
              <strong>Orlando Health / Amtrak</strong>
              <p>Orlando.</p>
            </article>

            <article class="payment-choice">
              <strong>Sand Lake Road</strong>
              <p>Conexão para MCO.</p>
            </article>

            <article class="payment-choice">
              <strong>Meadow Woods</strong>
              <p>South Orlando.</p>
            </article>

            <article class="payment-choice">
              <strong>Tupperware</strong>
              <p>Osceola County.</p>
            </article>

            <article class="payment-choice">
              <strong>Kissimmee</strong>
              <p>Downtown Kissimmee.</p>
            </article>

            <article class="payment-choice">
              <strong>Poinciana</strong>
              <p>Extremo sul da rede.</p>
            </article>

          </div>

        </section>


        <!-- ==================================================
             MCO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Orlando International Airport · MCO
          </h4>

          <div class="visitor-alert">

            <strong>
              Não existe
              estação SunRail
              dentro do MCO.
            </strong>

            A conexão ferroviária
            é feita através
            da estação
            Sand Lake Road
            e de ônibus LYNX.

          </div>


          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Link 11
              </strong>

              <p>
                Sand Lake Road
                e MCO.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Link 42
              </strong>

              <p>
                International Drive,
                Sand Lake Road
                e MCO.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Link 311
              </strong>

              <p>
                Disney Springs,
                Epic Universe,
                Sand Lake Road
                e MCO.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             TRAIN TO PLANE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Train to Plane
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Trem
              </span>

              <strong>
                SunRail
              </strong>

              <p>
                Viaje
                até Sand Lake Road.
              </p>

              <span class="route-compare-result">
                Etapa 1
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Ônibus
              </span>

              <strong>
                LYNX
              </strong>

              <p>
                Continue
                até MCO
                pelos serviços participantes.
              </p>

              <span class="route-compare-result">
                Etapa 2
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             INTERNATIONAL DRIVE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            International Drive
          </h4>

          <div class="visitor-alert">

            <strong>
              International Drive
              é um corredor,
              não um único destino.
            </strong>

            Hotéis,
            Convention Center,
            parques,
            outlets
            e restaurantes
            ficam espalhados
            ao longo da região.

          </div>


          <div class="payment-choice-grid">

            <article class="payment-choice">
              <strong>Link 8</strong>
              <p>Importante corredor da região.</p>
            </article>

            <article class="payment-choice">
              <strong>Link 38</strong>
              <p>Universal / International Drive.</p>
            </article>

            <article class="payment-choice">
              <strong>Link 42</strong>
              <p>International Drive / MCO.</p>
            </article>

            <article class="payment-choice">
              <strong>Link 311</strong>
              <p>Destination Parkway / Epic Universe / MCO.</p>
            </article>

            <article class="payment-choice">
              <strong>Link 350</strong>
              <p>SeaWorld / Disney.</p>
            </article>

          </div>

        </section>


        <!-- ==================================================
             DISNEY
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Walt Disney World
          </h4>

          <p class="panel-intro">
            A rede LYNX
            possui diferentes serviços
            relacionados
            ao complexo Disney.
          </p>

          <div class="payment-choice-grid">

            <article class="payment-choice">
              <strong>Link 300</strong>
              <p>Disney / Orlando Express.</p>
            </article>

            <article class="payment-choice">
              <strong>Link 301</strong>
              <p>Conexões regionais com Disney.</p>
            </article>

            <article class="payment-choice">
              <strong>Link 302</strong>
              <p>Disney Springs.</p>
            </article>

            <article class="payment-choice">
              <strong>Link 303</strong>
              <p>Disney Springs e conexões regionais.</p>
            </article>

            <article class="payment-choice">
              <strong>Link 304</strong>
              <p>Disney Springs.</p>
            </article>

            <article class="payment-choice">
              <strong>Link 306</strong>
              <p>Poinciana / Disney.</p>
            </article>

            <article class="payment-choice">
              <strong>Link 307</strong>
              <p>Disney Circulator.</p>
            </article>

            <article class="payment-choice">
              <strong>Link 311</strong>
              <p>Disney Springs / Epic Universe / MCO.</p>
            </article>

            <article class="payment-choice">
              <strong>Link 350</strong>
              <p>SeaWorld / Disney.</p>
            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Transporte LYNX
              e transporte Disney
              são redes diferentes.
            </strong>

            Depois de chegar
            ao complexo,
            o visitante pode utilizar
            os serviços internos
            disponibilizados pela Disney,
            conforme o destino.

          </div>

        </section>


        <!-- ==================================================
             UNIVERSAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Universal Orlando
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Link 21
              </strong>

              <p>
                Kirkman Road
                / Universal Orlando.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Link 38
              </strong>

              <p>
                Universal Orlando
                / International Drive.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Link 40
              </strong>

              <p>
                Americana Boulevard
                / Universal Orlando.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Link 311
              </strong>

              <p>
                Epic Universe
                / Disney Springs
                / MCO.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Epic Universe
              não é a mesma parada
              dos parques tradicionais
              da Universal.
            </strong>

            Confirme
            qual parque
            você pretende visitar.

          </div>

        </section>


        <!-- ==================================================
             SEAWORLD
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            SeaWorld
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Link 8
              </strong>

              <p>
                Corredor
                de International Drive
                e região de SeaWorld.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Link 350
              </strong>

              <p>
                Destination Parkway
                / SeaWorld
                / Disney Express.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             OUTLETS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Compras e outlets
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Orlando International
                Premium Outlets
              </strong>

              <p>
                Região atendida
                por diferentes
                serviços LYNX.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Orlando Vineland
                Premium Outlets
              </strong>

              <p>
                Link 8
                é uma referência
                importante.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Florida Mall
              </strong>

              <p>
                Importante hub
                da rede de ônibus.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Mall at Millenia
              </strong>

              <p>
                Também possui
                conexões LYNX.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             NEIGHBORLINK
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            NeighborLink
          </h4>

          <div class="answer-block">

            <strong>
              Serviço sob demanda
              dentro de zonas específicas.
            </strong>

            <p>
              Diferentemente
              de uma linha fixa,
              o passageiro solicita
              a viagem
              dentro da área
              atendida.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não está disponível
              em toda Orlando.
            </strong>

            Confira
            se sua origem
            e destino
            pertencem
            a uma zona NeighborLink.

          </div>

        </section>


        <!-- ==================================================
             SFB
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Orlando Sanford International Airport · SFB
          </h4>

          <div class="visitor-alert">

            <strong>
              SFB e MCO
              são aeroportos diferentes.
            </strong>

            Sanford fica
            ao norte de Orlando
            e exige
            planejamento específico.

            Não utilize
            automaticamente
            as conexões indicadas
            para MCO.

          </div>

        </section>


        <!-- ==================================================
             CONEXÕES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Pontos importantes de conexão
          </h4>

          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🏙️</span>

              <strong>
                LYNX Central Station
              </strong>

              <p>
                LYNX,
                LYMMO
                e SunRail.
              </p>

            </article>


            <article class="bus-system-card">

              <span>✈️</span>

              <strong>
                Sand Lake Road
              </strong>

              <p>
                SunRail
                + LYNX
                para MCO.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🎢</span>

              <strong>
                Destination Parkway
              </strong>

              <p>
                International Drive,
                Convention Center,
                Epic Universe
                e outras conexões.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🛍️</span>

              <strong>
                Florida Mall
              </strong>

              <p>
                Importante
                ponto de conexão
                da rede LYNX.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🏰</span>

              <strong>
                Disney Springs
              </strong>

              <p>
                Diversas linhas
                relacionadas
                ao complexo Disney.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚆</span>

              <strong>
                Kissimmee
              </strong>

              <p>
                SunRail
                e conexões LYNX.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             SISTEMAS SEPARADOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Uma região,
            vários sistemas
          </h4>

          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                LYNX
              </span>

              <strong>
                Ônibus público
              </strong>

              <p>
                Rede regional
                com tarifa
                e passes próprios.
              </p>

              <span class="fare-scenario-result">
                Sistema público
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                LYMMO
              </span>

              <strong>
                Downtown
              </strong>

              <p>
                Rede gratuita
                dentro
                da área central.
              </p>

              <span class="fare-scenario-result">
                Grátis
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                SunRail
              </span>

              <strong>
                Trem regional
              </strong>

              <p>
                Tarifas
                por zonas.
              </p>

              <span class="fare-scenario-result">
                Sistema ferroviário
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Parques
              </span>

              <strong>
                Transporte interno
              </strong>

              <p>
                Operadores turísticos
                podem oferecer
                redes próprias.
              </p>

              <span class="fare-scenario-result">
                Sistema separado
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Hotéis
              </span>

              <strong>
                Shuttle
              </strong>

              <p>
                Pode haver
                transporte oferecido
                pela hospedagem.
              </p>

              <span class="fare-scenario-result">
                Confira o hotel
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             VISITANTE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Qual sistema tende a fazer sentido?
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🏙️</span>

              <strong>
                Downtown
              </strong>

              <p>
                LYMMO,
                LYNX
                e SunRail.
              </p>

            </article>


            <article class="planner-check-card">

              <span>✈️</span>

              <strong>
                MCO
              </strong>

              <p>
                LYNX direto
                ou SunRail
                + LYNX.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🎢</span>

              <strong>
                International Drive
              </strong>

              <p>
                Principalmente
                LYNX.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🏰</span>

              <strong>
                Disney
              </strong>

              <p>
                LYNX
                + transporte
                interno Disney,
                conforme a viagem.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚆</span>

              <strong>
                Winter Park / Sanford / Kissimmee
              </strong>

              <p>
                Compare SunRail
                com a conexão final.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🏨</span>

              <strong>
                Hotel
              </strong>

              <p>
                Confira
                se existe
                shuttle próprio.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             O QUE CONFIRMAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O que confirmar no dia
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                LYNX
              </strong>

              <p>
                Linha,
                horário,
                parada
                e eventuais desvios.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                SunRail
              </strong>

              <p>
                Operação,
                horário
                e estação
                da viagem.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                MCO
              </strong>

              <p>
                Terminal
                e conexão LYNX.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Parques
              </strong>

              <p>
                Ponto correto
                e horário
                da volta.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Shuttle
              </strong>

              <p>
                Reserva,
                disponibilidade
                e horários.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Trânsito
              </strong>

              <p>
                Pode alterar
                significativamente
                o tempo de ônibus.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             FONTES
        =================================================== -->

        <div class="official-map-actions">

          <a
            class="official-link"
            href="https://www.golynx.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LYNX
          </a>


          <a
            class="official-link"
            href="https://www.golynx.com/maps-schedules/routes-schedules.stml"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rotas · LYNX
          </a>


          <a
            class="official-link"
            href="https://www.golynx.com/plan-trip/riding-lynx/lymmo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LYMMO
          </a>


          <a
            class="official-link"
            href="https://www.golynx.com/plan-trip/riding-lynx/neighborlink/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NeighborLink
          </a>


          <a
            class="official-link"
            href="https://sunrail.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SunRail
          </a>


          <a
            class="official-link"
            href="https://sunrail.com/connecting-services/train-to-plane/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Train to Plane
          </a>

        </div>


        <div class="fare-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};


// ============================================================
// DISPONIBILIZA O LIGHTBOX
// ============================================================

window.openOrlandoNetworkMap =
  openOrlandoNetworkMap;
