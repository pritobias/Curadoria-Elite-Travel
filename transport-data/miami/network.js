// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — MIAMI
// MÓDULO: REDE DE TRANSPORTE
// ============================================================

window.MIAMI_TRANSPORT_MODULES =
  window.MIAMI_TRANSPORT_MODULES || {};


const MIAMI_MAP_URL =
  "/images/mapa-transporte-miami.jpg";


// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function createMiamiSystemCard(
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


function createMiamiLegendItem(
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


function createMiamiRailCard(
  color,
  code,
  title,
  description
) {

  return `
    <article class="line-mini-card">

      <span
        class="line-mini-number"
        style="
          background:${color};
          min-width:58px;
        "
      >
        ${code}
      </span>

      <strong>
        ${title}
      </strong>

      <span class="transport-type-pill">
        🚇 Metrorail
      </span>

      <span>
        ${description}
      </span>

      <small>
        Miami-Dade Transit
      </small>

    </article>
  `;

}


// ============================================================
// LIGHTBOX DO MAPA
// ============================================================

function openMiamiNetworkMap() {

  if (
    document.getElementById(
      "miamiNetworkMapLightbox"
    )
  ) {
    return;
  }


  const lightbox =
    document.createElement("div");


  lightbox.id =
    "miamiNetworkMapLightbox";


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
      id="closeMiamiNetworkMap"
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
      src="${MIAMI_MAP_URL}"
      alt="Mapa ampliado da rede de transporte de Miami"
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
          "closeMiamiNetworkMap"
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

window.MIAMI_TRANSPORT_MODULES["network"] = {

  kicker:
    "Miami · visão completa",

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
            O mapa ajuda a visualizar
            Metrorail,
            Metromover,
            Metrobus
            e as principais conexões
            do Miami-Dade Transit.
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
              src="${MIAMI_MAP_URL}"
              alt="Mapa da rede de transporte de Miami"
              loading="lazy"
              style="
                display:block;
                width:100%;
                height:auto;
                cursor:zoom-in;
              "
              onclick="openMiamiNetworkMap()"
            />

          </div>


          <div class="official-map-actions">

            <button
              class="map-zoom-button"
              type="button"
              onclick="openMiamiNetworkMap()"
            >
              Ampliar mapa
            </button>


            <a
              class="official-link"
              href="https://www.miamidade.gov/global/transportation/home.page"
              target="_blank"
              rel="noopener noreferrer"
            >
              Transporte oficial · Miami-Dade
            </a>

          </div>


          <div class="visitor-alert">

            <strong>
              Miami não possui
              uma única rede ferroviária.
            </strong>

            Metrorail,
            Metromover,
            Tri-Rail
            e Brightline
            pertencem a estruturas diferentes.

            Uma conexão física
            entre sistemas
            não significa
            necessariamente
            a mesma tarifa.

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

            ${createMiamiLegendItem(
              "M",
              "Metrorail",
              "Rede ferroviária urbana do Miami-Dade Transit."
            )}

            ${createMiamiLegendItem(
              "MOVE",
              "Metromover",
              "Sistema elevado gratuito em Downtown, Brickell e Omni."
            )}

            ${createMiamiLegendItem(
              "BUS",
              "Metrobus",
              "Rede ampla de ônibus de Miami-Dade."
            )}

            ${createMiamiLegendItem(
              "BRT",
              "Metro Express",
              "Bus Rapid Transit no corredor South Dade."
            )}

            ${createMiamiLegendItem(
              "TRI",
              "Tri-Rail",
              "Trem regional entre Miami-Dade, Broward e Palm Beach."
            )}

            ${createMiamiLegendItem(
              "BL",
              "Brightline",
              "Serviço ferroviário intercity entre Miami e outras cidades da Flórida."
            )}

          </div>

        </section>


        <!-- ==================================================
             SISTEMAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Principais sistemas
          </h4>

          <div class="operator-grid">

            ${createMiamiSystemCard(
              "🚇",
              "Metrorail",
              "Principal rede ferroviária urbana de Miami-Dade.",
              "23 estações · aproximadamente 25 milhas"
            )}

            ${createMiamiSystemCard(
              "🚝",
              "Metromover",
              "Sistema elevado gratuito no núcleo central.",
              "21 estações · 3 loops"
            )}

            ${createMiamiSystemCard(
              "🚌",
              "Metrobus",
              "Rede de ônibus que amplia a cobertura do condado.",
              "Better Bus Network"
            )}

            ${createMiamiSystemCard(
              "🚍",
              "Metro Express",
              "BRT de alta capacidade no corredor South Dade.",
              "Florida City ↔ Dadeland South"
            )}

            ${createMiamiSystemCard(
              "🚆",
              "Tri-Rail",
              "Rede ferroviária regional do sul da Flórida.",
              "Miami-Dade · Broward · Palm Beach"
            )}

            ${createMiamiSystemCard(
              "🚄",
              "Brightline",
              "Serviço ferroviário intercity.",
              "Miami · Aventura · Fort Lauderdale · Boca Raton · West Palm Beach · Orlando"
            )}

          </div>

        </section>


        <!-- ==================================================
             METRORAIL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metrorail
          </h4>

          <p class="panel-intro">
            A rede possui
            duas linhas identificadas
            pelas cores verde
            e laranja.
          </p>

          <div class="lines-grid">

            ${createMiamiRailCard(
              "#169447",
              "GREEN",
              "Green Line",
              "Palmetto ↔ Dadeland South."
            )}

            ${createMiamiRailCard(
              "#ef7d22",
              "ORANGE",
              "Orange Line",
              "Conecta o eixo principal à Miami International Airport Station."
            )}

          </div>


          <div class="fare-note">

            <strong>
              Earlington Heights
            </strong>

            é o principal ponto
            de transferência
            entre Green
            e Orange Lines
            para viagens
            relacionadas ao aeroporto.

          </div>

        </section>


        <!-- ==================================================
             ESTAÇÕES METRORAIL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Estações do Metrorail
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">
              <strong>Palmetto</strong>
              <p>Green Line.</p>
            </article>

            <article class="payment-choice">
              <strong>Okeechobee</strong>
              <p>Green Line.</p>
            </article>

            <article class="payment-choice">
              <strong>Hialeah</strong>
              <p>Green Line.</p>
            </article>

            <article class="payment-choice">
              <strong>Tri-Rail</strong>
              <p>Conexão ferroviária regional.</p>
            </article>

            <article class="payment-choice">
              <strong>Northside</strong>
              <p>Green Line.</p>
            </article>

            <article class="payment-choice">
              <strong>Dr. Martin Luther King, Jr.</strong>
              <p>Green Line.</p>
            </article>

            <article class="payment-choice">
              <strong>Brownsville</strong>
              <p>Green Line.</p>
            </article>

            <article class="payment-choice">
              <strong>Earlington Heights</strong>
              <p>Green / Orange transfer.</p>
            </article>

            <article class="payment-choice">
              <strong>Miami International Airport</strong>
              <p>Orange Line · MIA.</p>
            </article>

            <article class="payment-choice">
              <strong>Allapattah</strong>
              <p>Green + Orange.</p>
            </article>

            <article class="payment-choice">
              <strong>Santa Clara</strong>
              <p>Green + Orange.</p>
            </article>

            <article class="payment-choice">
              <strong>Civic Center</strong>
              <p>Health District.</p>
            </article>

            <article class="payment-choice">
              <strong>Historic Overtown / Lyric Theatre</strong>
              <p>Conexão com MiamiCentral.</p>
            </article>

            <article class="payment-choice">
              <strong>Government Center</strong>
              <p>Conexão com Metromover.</p>
            </article>

            <article class="payment-choice">
              <strong>Brickell</strong>
              <p>Conexão com Metromover.</p>
            </article>

            <article class="payment-choice">
              <strong>Vizcaya</strong>
              <p>Green + Orange.</p>
            </article>

            <article class="payment-choice">
              <strong>Coconut Grove</strong>
              <p>Green + Orange.</p>
            </article>

            <article class="payment-choice">
              <strong>Douglas Road</strong>
              <p>Green + Orange.</p>
            </article>

            <article class="payment-choice">
              <strong>University</strong>
              <p>University of Miami.</p>
            </article>

            <article class="payment-choice">
              <strong>South Miami</strong>
              <p>Green + Orange.</p>
            </article>

            <article class="payment-choice">
              <strong>Dadeland North</strong>
              <p>Green + Orange.</p>
            </article>

            <article class="payment-choice">
              <strong>Dadeland South</strong>
              <p>Terminal sul e conexão BRT.</p>
            </article>

          </div>

        </section>


        <!-- ==================================================
             MIA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Miami International Airport
          </h4>

          <div class="answer-block">

            <strong>
              Miami Airport Station
              é um dos grandes pontos
              intermodais da rede.
            </strong>

            <p>
              A estação reúne
              Metrorail,
              Tri-Rail,
              Metrobus
              e conexão
              com o MIA Mover.
            </p>

          </div>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Orange Line
              </strong>

              <p>
                Conecta MIA
                ao Metrorail.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Tri-Rail
              </strong>

              <p>
                Trem regional
                para Broward
                e Palm Beach.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Metrobus
              </strong>

              <p>
                Diversas linhas
                atendem a estação.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                MIA Mover
              </strong>

              <p>
                Liga o complexo
                de transporte
                ao aeroporto.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             METROMOVER
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metromover
          </h4>

          <p class="panel-intro">
            É uma rede elevada
            de 21 estações
            que atende o núcleo
            central de Miami.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Inner Loop
              </strong>

              <p>
                Circula
                pelo núcleo
                de Downtown.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Brickell Loop
              </strong>

              <p>
                Liga Downtown
                a Brickell.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Omni Loop
              </strong>

              <p>
                Atende o eixo
                ao norte de Downtown.
              </p>

            </article>

          </div>


          <div class="fare-highlight-grid"
               style="margin-top:14px;">

            <article class="fare-highlight">

              <span>
                Tarifa
              </span>

              <strong>
                Grátis
              </strong>

              <p>
                Não precisa
                de bilhete
                para embarcar.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ESTAÇÕES METROMOVER
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Pontos importantes do Metromover
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Government Center
              </strong>

              <p>
                Principal conexão
                com o Metrorail.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Brickell
              </strong>

              <p>
                Outra conexão
                direta com Metrorail.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Wilkie D. Ferguson, Jr.
              </strong>

              <p>
                Próxima
                a MiamiCentral.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                College/Bayside
              </strong>

              <p>
                Próxima
                ao Bayside Marketplace.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Freedom Tower
              </strong>

              <p>
                Centro
                e área cultural.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Adrienne Arsht Center
              </strong>

              <p>
                Região cultural
                ao norte de Downtown.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Brickell City Centre
              </strong>

              <p>
                Área comercial
                e residencial.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Financial District
              </strong>

              <p>
                Extremo sul
                do Brickell Loop.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             METROBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metrobus
          </h4>

          <p class="panel-intro">
            A rede de ônibus
            cobre áreas
            que não ficam
            diretamente próximas
            ao Metrorail.
          </p>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🏖️</span>

              <strong>
                Miami Beach
              </strong>

              <p>
                Ônibus é essencial
                porque o Metrorail
                não chega à ilha.
              </p>

            </article>


            <article class="planner-check-card">

              <span>✈️</span>

              <strong>
                MIA
              </strong>

              <p>
                Diversas linhas
                atendem
                Miami Airport Station.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🏙️</span>

              <strong>
                Downtown
              </strong>

              <p>
                Integra
                bairros periféricos
                ao centro.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🌴</span>

              <strong>
                South Dade
              </strong>

              <p>
                Trabalha em conjunto
                com Metro Express.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             METRO EXPRESS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metro Express · BRT
          </h4>

          <p class="panel-intro">
            O South Dade TransitWay
            possui aproximadamente
            20 milhas
            em corredor dedicado.
          </p>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Norte
              </span>

              <strong>
                Dadeland South
              </strong>

              <p>
                Conexão direta
                com o Metrorail.
              </p>

              <span class="route-compare-result">
                Metrorail
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Sul
              </span>

              <strong>
                SW 344 Street / Florida City
              </strong>

              <p>
                Extremo sul
                do corredor BRT.
              </p>

              <span class="route-compare-result">
                Metro Express
              </span>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Metro Express
              não funciona como
              um ponto convencional
              de Metrobus.
            </strong>

            O sistema utiliza
            estações próprias,
            pagamento antes
            do embarque
            e plataformas
            de nível elevado.

          </div>

        </section>


        <!-- ==================================================
             MIAMI BEACH
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Miami Beach
          </h4>

          <div class="visitor-alert">

            <strong>
              Não existe Metrorail
              em Miami Beach.
            </strong>

            Para chegar à ilha,
            o transporte público
            depende principalmente
            de ônibus
            e serviços locais.

          </div>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Route 150
              </strong>

              <p>
                Miami Beach
                Airport Express.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Route 20
              </strong>

              <p>
                Airport Station
                ↔ Lincoln Road.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Route 110 / J
              </strong>

              <p>
                Outra conexão
                entre MIA
                e Miami Beach.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             MIAMICENTRAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            MiamiCentral
          </h4>

          <p class="panel-intro">
            É um importante
            ponto ferroviário
            no centro de Miami.
          </p>

          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🚄</span>

              <strong>
                Brightline
              </strong>

              <p>
                Terminal
                da rede intercity.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚆</span>

              <strong>
                Tri-Rail
              </strong>

              <p>
                Serviços selecionados
                atendem MiamiCentral.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚝</span>

              <strong>
                Metromover
              </strong>

              <p>
                Wilkie D. Ferguson Jr.
                fica próxima
                à estação.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Metrorail
              </strong>

              <p>
                Government Center
                fica na região
                e conecta
                à rede principal.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             BRIGHTLINE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Brightline
          </h4>

          <p class="panel-intro">
            Brightline liga Miami
            a diferentes cidades
            da Flórida.
          </p>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Miami
              </strong>

              <p>
                MiamiCentral.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Aventura
              </strong>

              <p>
                Norte de Miami-Dade.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Fort Lauderdale
              </strong>

              <p>
                Broward County.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Boca Raton
              </strong>

              <p>
                Palm Beach County.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                West Palm Beach
              </strong>

              <p>
                Palm Beach County.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Orlando
              </strong>

              <p>
                Estação
                no aeroporto MCO.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Brightline
              não é Metrorail.
            </strong>

            Possui bilhetagem,
            horários
            e preços próprios.

          </div>

        </section>


        <!-- ==================================================
             TRI-RAIL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Tri-Rail
          </h4>

          <p class="panel-intro">
            Tri-Rail é a ferrovia
            regional que conecta
            Miami-Dade,
            Broward
            e Palm Beach.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Miami Airport
              </strong>

              <p>
                Conexão direta
                com MIA.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Metrorail Transfer
              </strong>

              <p>
                Conecta
                Tri-Rail
                ao Metrorail.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Fort Lauderdale
              </strong>

              <p>
                Atende
                a região de Broward.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                West Palm Beach
              </strong>

              <p>
                Extensão norte
                da rede regional.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              MiamiCentral exige atenção.
            </strong>

            Nem todos os serviços
            do Tri-Rail
            entram diretamente
            em MiamiCentral.

            Confira o trem específico
            antes da viagem.

          </div>

        </section>


        <!-- ==================================================
             CONEXÕES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Principais pontos de conexão
          </h4>

          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>✈️</span>

              <strong>
                Miami Airport Station
              </strong>

              <p>
                Metrorail,
                Tri-Rail,
                Metrobus
                e MIA Mover.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🔄</span>

              <strong>
                Earlington Heights
              </strong>

              <p>
                Green
                ↔ Orange Line.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🏙️</span>

              <strong>
                Government Center
              </strong>

              <p>
                Metrorail
                ↔ Metromover
                ↔ Metrobus.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🏢</span>

              <strong>
                Brickell
              </strong>

              <p>
                Metrorail
                ↔ Metromover
                ↔ ônibus.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚄</span>

              <strong>
                MiamiCentral
              </strong>

              <p>
                Brightline,
                Tri-Rail
                e conexões
                com Downtown.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                Dadeland South
              </strong>

              <p>
                Metrorail
                ↔ Metro Express.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             TARIFAS NÃO INTEGRADAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Conexão física
            não significa tarifa única
          </h4>

          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Miami-Dade
              </span>

              <strong>
                Metrobus + Metrorail
              </strong>

              <p>
                Podem utilizar
                as regras
                de transferência
                do sistema.
              </p>

              <span class="fare-scenario-result">
                Integração possível
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Downtown
              </span>

              <strong>
                Metrorail + Metromover
              </strong>

              <p>
                Metromover
                é gratuito.
              </p>

              <span class="fare-scenario-result">
                Sem tarifa no mover
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Tri-Rail
              </span>

              <strong>
                Tri-Rail + Metrorail
              </strong>

              <p>
                São sistemas
                tarifários distintos.
              </p>

              <span class="fare-scenario-result">
                Consulte a viagem
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Brightline
              </span>

              <strong>
                Brightline + Metrorail
              </strong>

              <p>
                Brightline
                possui bilhete próprio.
              </p>

              <span class="fare-scenario-result">
                Sistemas separados
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             QUAL SISTEMA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Qual sistema tende a fazer sentido?
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                MIA / Downtown / Brickell
              </strong>

              <p>
                Comece verificando
                Metrorail.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚝</span>

              <strong>
                Dentro de Downtown
              </strong>

              <p>
                Metromover
                pode resolver
                a parte final.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🏖️</span>

              <strong>
                Miami Beach
              </strong>

              <p>
                Metrobus
                é uma referência
                importante.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                South Dade
              </strong>

              <p>
                Considere
                Metro Express
                + Metrorail.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚆</span>

              <strong>
                Broward / Palm Beach
              </strong>

              <p>
                Compare
                Tri-Rail
                e Brightline.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚄</span>

              <strong>
                Orlando
              </strong>

              <p>
                Brightline
                oferece ligação
                ferroviária direta.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             O QUE CONFIRMAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O que realmente precisa ser confirmado no dia
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Metrorail
              </strong>

              <p>
                Single tracking,
                alterações
                e frequência atual.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Metromover
              </strong>

              <p>
                Loop,
                chegada
                e eventuais alterações.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Metrobus
              </strong>

              <p>
                Horário,
                trânsito
                e desvios.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Tri-Rail
              </strong>

              <p>
                Trem
                e horário específicos.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Brightline
              </strong>

              <p>
                Horário,
                disponibilidade
                e tarifa.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Acessibilidade
              </strong>

              <p>
                Status atual
                dos equipamentos
                necessários.
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
            href="https://www.miamidade.gov/global/transportation/metrorail.page"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metrorail · Miami-Dade
          </a>


          <a
            class="official-link"
            href="https://www.miamidade.gov/resources/transportation_publicworks/documents/metromover-map.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mapa Metromover · Miami-Dade
          </a>


          <a
            class="official-link"
            href="https://www.miamidade.gov/resources/transportation_publicworks/documents/system-maps-web.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mapa Metrobus · abril de 2026
          </a>


          <a
            class="official-link"
            href="https://www.miamidade.gov/global/transportation/metro-express-service.page"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metro Express · Miami-Dade
          </a>


          <a
            class="official-link"
            href="https://www.tri-rail.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tri-Rail
          </a>


          <a
            class="official-link"
            href="https://www.gobrightline.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brightline
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

window.openMiamiNetworkMap =
  openMiamiNetworkMap;
