// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — NOVA YORK
// MÓDULO: REDE DE TRANSPORTE
// ============================================================

window.NEW_YORK_TRANSPORT_MODULES =
  window.NEW_YORK_TRANSPORT_MODULES || {};


const NEW_YORK_MAP_URL =
  "/images/mapa-transporte-new-york.jpg";


// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function createNewYorkSystemCard(
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


function createNewYorkLegendItem(
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


function createNewYorkSubwayGroup(
  color,
  services,
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
        ${services}
      </span>

      <strong>
        ${title}
      </strong>

      <span class="transport-type-pill">
        🚇 Subway
      </span>

      <span>
        ${description}
      </span>

      <small>
        MTA New York City Transit
      </small>

    </article>
  `;

}


// ============================================================
// LIGHTBOX DO MAPA
// ============================================================

function openNewYorkNetworkMap() {

  if (
    document.getElementById(
      "newYorkNetworkMapLightbox"
    )
  ) {
    return;
  }


  const lightbox =
    document.createElement("div");


  lightbox.id =
    "newYorkNetworkMapLightbox";


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
      id="closeNewYorkNetworkMap"
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
      src="${NEW_YORK_MAP_URL}"
      alt="Mapa ampliado do Subway de Nova York"
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
          "closeNewYorkNetworkMap"
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

window.NEW_YORK_TRANSPORT_MODULES["network"] = {

  kicker:
    "Nova York · visão completa",

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
            Mapa do Subway
          </h4>

          <p class="panel-intro">
            O mapa mostra
            os serviços do subway,
            estações,
            transferências
            e conexões importantes
            da rede de Nova York.
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
              src="${NEW_YORK_MAP_URL}"
              alt="Mapa do Subway de Nova York"
              loading="lazy"
              style="
                display:block;
                width:100%;
                height:auto;
                cursor:zoom-in;
              "
              onclick="openNewYorkNetworkMap()"
            />

          </div>


          <div class="official-map-actions">

            <button
              class="map-zoom-button"
              type="button"
              onclick="openNewYorkNetworkMap()"
            >
              Ampliar mapa
            </button>


            <a
              class="official-link"
              href="https://www.mta.info/maps"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mapas oficiais · MTA
            </a>

          </div>


          <div class="visitor-alert">

            <strong>
              Este mapa é a referência
              para o Subway.
            </strong>

            PATH,
            LIRR,
            Metro-North,
            NYC Ferry
            e AirTrain JFK
            pertencem a redes
            ou estruturas próprias.

            Por isso,
            não existe um único mapa
            que substitua
            todos os sistemas
            apresentados nesta página.

          </div>

        </section>


        <!-- ==================================================
             ENTENDA A REDE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Entenda a rede de Nova York
          </h4>

          <p class="panel-intro">
            A mobilidade da região
            combina transporte urbano,
            ferroviário suburbano,
            conexões interestaduais,
            ferries
            e sistemas aeroportuários.
          </p>

          <div class="legend-grid">

            ${createNewYorkLegendItem(
              "M",
              "Subway",
              "Rede urbana da MTA que conecta Manhattan, Brooklyn, Queens e Bronx."
            )}

            ${createNewYorkLegendItem(
              "BUS",
              "Ônibus",
              "Rede da MTA com serviços Local, Limited, SBS e Express."
            )}

            ${createNewYorkLegendItem(
              "LIRR",
              "Long Island Rail Road",
              "Trem suburbano que conecta Nova York a Queens, Brooklyn e Long Island."
            )}

            ${createNewYorkLegendItem(
              "MNR",
              "Metro-North",
              "Trem suburbano para Bronx, Westchester, Hudson Valley e Connecticut."
            )}

            ${createNewYorkLegendItem(
              "PATH",
              "PATH",
              "Sistema ferroviário entre Manhattan e Nova Jersey."
            )}

            ${createNewYorkLegendItem(
              "⛴",
              "Ferries",
              "NYC Ferry e Staten Island Ferry possuem redes e regras próprias."
            )}

            ${createNewYorkLegendItem(
              "✈",
              "AirTrain JFK",
              "Sistema aeroportuário que conecta os terminais do JFK a Jamaica e Howard Beach."
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

            ${createNewYorkSystemCard(
              "🚇",
              "MTA Subway",
              "Principal rede de transporte urbano sobre trilhos.",
              "Serviço 24 horas · padrão varia conforme linha e horário"
            )}

            ${createNewYorkSystemCard(
              "🚌",
              "MTA Bus",
              "Complementa o subway dentro dos cinco boroughs.",
              "Local · Limited · SBS · Express"
            )}

            ${createNewYorkSystemCard(
              "🚆",
              "LIRR",
              "Rede ferroviária em direção a Long Island.",
              "Long Island Rail Road · MTA"
            )}

            ${createNewYorkSystemCard(
              "🚆",
              "Metro-North",
              "Rede ferroviária para o norte da região.",
              "Hudson · Harlem · New Haven"
            )}

            ${createNewYorkSystemCard(
              "🚉",
              "PATH",
              "Conecta Manhattan a cidades de Nova Jersey.",
              "Port Authority NY/NJ"
            )}

            ${createNewYorkSystemCard(
              "⛴",
              "NYC Ferry",
              "Rede hidroviária municipal.",
              "Rotas próprias e tarifa separada"
            )}

            ${createNewYorkSystemCard(
              "✈️",
              "AirTrain JFK",
              "Conecta os terminais do JFK à rede externa.",
              "Jamaica · Howard Beach"
            )}

          </div>

        </section>


        <!-- ==================================================
             SUBWAY — COMO LER
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como ler o Subway
          </h4>

          <div class="visitor-alert">

            <strong>
              A cor não é a linha.
            </strong>

            A cor agrupa serviços
            que compartilham
            parte de um corredor.

            Para saber qual trem pegar,
            observe sempre
            a letra ou o número
            do serviço.

          </div>


          <div class="answer-block">

            <strong>
              Exemplo
            </strong>

            <p>
              A,
              C
              e E
              aparecem em azul,
              mas não fazem
              exatamente o mesmo trajeto
              nem as mesmas paradas.

              O mesmo vale
              para outros grupos
              do mapa.
            </p>

          </div>

        </section>


        <!-- ==================================================
             SUBWAY — GRUPOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Serviços do Subway
          </h4>

          <p class="panel-intro">
            Estes são os principais
            grupos de serviços
            que aparecem no mapa.

            Dentro de cada grupo,
            confira o serviço específico
            antes de embarcar.
          </p>

          <div class="lines-grid">

            ${createNewYorkSubwayGroup(
              "#ee352e",
              "1 2 3",
              "Broadway–Seventh Avenue",
              "Serviços 1, 2 e 3."
            )}

            ${createNewYorkSubwayGroup(
              "#00933c",
              "4 5 6",
              "Lexington Avenue",
              "Serviços 4, 5 e 6."
            )}

            ${createNewYorkSubwayGroup(
              "#b933ad",
              "7",
              "Flushing",
              "Serviço 7."
            )}

            ${createNewYorkSubwayGroup(
              "#0039a6",
              "A C E",
              "Eighth Avenue",
              "Serviços A, C e E."
            )}

            ${createNewYorkSubwayGroup(
              "#ff6319",
              "B D F M",
              "Sixth Avenue",
              "Serviços B, D, F e M."
            )}

            ${createNewYorkSubwayGroup(
              "#6cbe45",
              "G",
              "Crosstown",
              "Serviço G."
            )}

            ${createNewYorkSubwayGroup(
              "#996633",
              "J Z",
              "Nassau Street",
              "Serviços J e Z."
            )}

            ${createNewYorkSubwayGroup(
              "#a7a9ac",
              "L",
              "14th Street–Canarsie",
              "Serviço L."
            )}

            ${createNewYorkSubwayGroup(
              "#fccc0a",
              "N Q R W",
              "Broadway",
              "Serviços N, Q, R e W."
            )}

            ${createNewYorkSubwayGroup(
              "#808183",
              "S",
              "Shuttles",
              "42 Street, Franklin Avenue e Rockaway Park."
            )}

          </div>

        </section>


        <!-- ==================================================
             LOCAL E EXPRESS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Local e express
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Local
              </span>

              <strong>
                Mais estações
              </strong>

              <p>
                O serviço local
                realiza mais paradas
                ao longo do corredor.
              </p>

              <span class="route-compare-result">
                Confira o serviço
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Express
              </span>

              <strong>
                Menos paradas
              </strong>

              <p>
                Alguns serviços
                passam por estações
                sem parar.
              </p>

              <span class="route-compare-result">
                Confira a estação
              </span>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Não existe uma regra
              “todos os trens desta cor
              param aqui”.
            </strong>

            Confirme
            a letra ou número
            e a parada específica
            daquele serviço.

          </div>

        </section>


        <!-- ==================================================
             SHUTTLES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Serviços S · Shuttles
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                42 Street Shuttle
              </strong>

              <p>
                Conecta Times Sq–42 St
                e Grand Central–42 St.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Franklin Avenue Shuttle
              </strong>

              <p>
                Serviço local
                em Brooklyn.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Rockaway Park Shuttle
              </strong>

              <p>
                Atende o eixo
                de Rockaway Park.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             PRINCIPAIS HUBS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Grandes pontos de conexão
          </h4>

          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Times Sq–42 St
              </strong>

              <p>
                Um dos maiores
                pontos de transferência
                do subway
                em Midtown.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚆</span>

              <strong>
                Grand Central
              </strong>

              <p>
                Subway
                e Metro-North,
                além de conexão
                ferroviária do LIRR
                em Grand Central Madison.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚆</span>

              <strong>
                Penn Station
              </strong>

              <p>
                Subway,
                LIRR,
                NJ Transit
                e Amtrak
                convergem na região.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Atlantic Av–Barclays Ctr
              </strong>

              <p>
                Grande conexão
                de subway
                e LIRR
                em Brooklyn.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚉</span>

              <strong>
                World Trade Center
              </strong>

              <p>
                Subway
                e PATH
                se conectam
                na região do Oculus.
              </p>

            </article>


            <article class="bus-system-card">

              <span>✈️</span>

              <strong>
                Jamaica
              </strong>

              <p>
                LIRR,
                subway
                e AirTrain JFK
                convergem nessa área.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             MANHATTAN
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Manhattan
          </h4>

          <p class="panel-intro">
            A ilha concentra
            grande quantidade
            de serviços de subway,
            mas também recebe
            ônibus,
            PATH,
            trens suburbanos
            e ferries.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Eixos norte–sul
              </strong>

              <p>
                Diversos corredores
                do subway
                percorrem Manhattan
                longitudinalmente.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Travessias leste–oeste
              </strong>

              <p>
                Ônibus
                e algumas linhas de subway
                podem ser especialmente úteis.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Midtown
              </strong>

              <p>
                Times Square,
                Grand Central
                e Penn Station
                concentram conexões.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Lower Manhattan
              </strong>

              <p>
                Fulton Center,
                World Trade Center
                e Wall Street
                concentram diferentes redes.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             BOROUGHS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            A rede além de Manhattan
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Brooklyn
              </span>

              <strong>
                Subway + ônibus + LIRR + ferry
              </strong>

              <p>
                Grande parte do borough
                é atendida
                por múltiplos sistemas.
              </p>

              <span class="route-compare-result">
                Rede ampla
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Queens
              </span>

              <strong>
                Subway + ônibus + LIRR
              </strong>

              <p>
                Jamaica
                também funciona
                como conexão
                para o JFK.
              </p>

              <span class="route-compare-result">
                Aeroporto e Long Island
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Bronx
              </span>

              <strong>
                Subway + ônibus + Metro-North
              </strong>

              <p>
                A rede ferroviária
                e de superfície
                atende diferentes áreas
                do borough.
              </p>

              <span class="route-compare-result">
                Norte da cidade
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Staten Island
              </span>

              <strong>
                Railway + ônibus + ferry
              </strong>

              <p>
                Não há ligação direta
                do subway
                com os outros boroughs.
              </p>

              <span class="route-compare-result">
                Rede própria
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             STATEN ISLAND
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Staten Island Railway
          </h4>

          <div class="answer-block">

            <strong>
              Staten Island possui
              seu próprio serviço ferroviário.
            </strong>

            <p>
              O Staten Island Railway
              conecta diferentes áreas
              do borough
              ao terminal St. George.
            </p>

          </div>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                St. George
              </strong>

              <p>
                Terminal ferroviário
                e conexão
                com ferries.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Staten Island Ferry
              </strong>

              <p>
                Liga St. George
                a Whitehall,
                em Lower Manhattan.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             LIRR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Long Island Rail Road · LIRR
          </h4>

          <p class="panel-intro">
            A rede conecta
            Nova York
            a Queens
            e Long Island,
            além de possuir
            terminais importantes
            dentro da cidade.
          </p>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Penn Station
              </strong>

              <p>
                Terminal importante
                do LIRR
                em Manhattan.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Grand Central Madison
              </strong>

              <p>
                Outro terminal
                do LIRR
                em Manhattan.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Atlantic Terminal
              </strong>

              <p>
                Terminal
                em Brooklyn.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Jamaica
              </strong>

              <p>
                Um dos principais
                pontos de conexão
                da rede.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              LIRR não utiliza
              a tarifa simples do subway.
            </strong>

            O sistema possui
            bilhetes próprios
            e tarifas relacionadas
            à viagem escolhida.

          </div>

        </section>


        <!-- ==================================================
             METRO NORTH
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metro-North Railroad
          </h4>

          <p class="panel-intro">
            A rede atende principalmente
            o eixo ao norte
            de Nova York.
          </p>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Hudson Line
              </strong>

              <p>
                Segue pelo eixo
                do Rio Hudson.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Harlem Line
              </strong>

              <p>
                Segue pelo eixo
                central de Westchester
                e áreas ao norte.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                New Haven Line
              </strong>

              <p>
                Conecta Nova York
                a áreas de Connecticut.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Grand Central
              </strong>

              <p>
                Principal terminal
                do Metro-North
                em Manhattan.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             PATH
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            PATH · Nova York e Nova Jersey
          </h4>

          <p class="panel-intro">
            O PATH possui
            13 estações
            entre Nova York
            e Nova Jersey.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                World Trade Center
              </strong>

              <p>
                Terminal do PATH
                em Lower Manhattan.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                33 Street
              </strong>

              <p>
                Terminal do PATH
                em Midtown Manhattan.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Newark
              </strong>

              <p>
                Terminal importante
                em Nova Jersey.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Hoboken
              </strong>

              <p>
                Conecta PATH
                e outras redes
                de Nova Jersey.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Journal Square
              </strong>

              <p>
                Grande ponto
                de conexão
                em Jersey City.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Exchange Place
              </strong>

              <p>
                Importante estação
                na margem de Nova Jersey
                próxima a Lower Manhattan.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              O padrão de serviço do PATH
              muda conforme horário
              e dia da semana.
            </strong>

            A Port Authority
            publica separadamente
            operação diurna,
            noturna,
            weekday
            e weekend.

          </div>

        </section>


        <!-- ==================================================
             NYC FERRY
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            NYC Ferry
          </h4>

          <p class="panel-intro">
            A rede hidroviária
            conecta diferentes áreas
            de Manhattan,
            Brooklyn,
            Queens,
            Bronx
            e Staten Island.
          </p>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                East River
              </strong>

              <p>
                Conecta landings
                de Manhattan,
                Brooklyn
                e Queens.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                South Brooklyn
              </strong>

              <p>
                Atende diferentes áreas
                de Brooklyn
                e Manhattan.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Astoria
              </strong>

              <p>
                Liga Queens,
                Roosevelt Island,
                Manhattan
                e Brooklyn.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Rockaway–Soundview
              </strong>

              <p>
                Atende diferentes áreas
                da rede hidroviária.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                St. George
              </strong>

              <p>
                Conecta Staten Island
                a pontos da rede
                do NYC Ferry.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Governors Island
              </strong>

              <p>
                Serviço sujeito
                à programação
                publicada.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Horários e rotas
              podem sofrer alterações.
            </strong>

            Confira a programação
            atual do NYC Ferry
            antes da viagem.

          </div>

        </section>


        <!-- ==================================================
             STATEN ISLAND FERRY
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Staten Island Ferry
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Manhattan
              </span>

              <strong>
                Whitehall Terminal
              </strong>

              <p>
                Terminal
                em Lower Manhattan.
              </p>

              <span class="route-compare-result">
                NYC DOT
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Staten Island
              </span>

              <strong>
                St. George Terminal
              </strong>

              <p>
                Conecta o ferry
                ao Staten Island Railway
                e aos ônibus locais.
              </p>

              <span class="route-compare-result">
                NYC DOT
              </span>

            </article>

          </div>


          <div
            class="fare-highlight-grid"
            style="margin-top:14px;"
          >

            <article class="fare-highlight">

              <span>
                Tarifa
              </span>

              <strong>
                Grátis
              </strong>

              <p>
                Não é necessário
                comprar bilhete
                para essa travessia.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             AIRTRAIN JFK
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            AirTrain JFK
          </h4>

          <p class="panel-intro">
            O sistema conecta
            os terminais do aeroporto
            às duas principais
            saídas para a rede externa.
          </p>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Jamaica
              </span>

              <strong>
                AirTrain + LIRR / Subway
              </strong>

              <p>
                Jamaica conecta
                o aeroporto
                ao LIRR
                e aos serviços
                E,
                J
                e Z
                do subway.
              </p>

              <span class="route-compare-result">
                Conexão externa
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Howard Beach
              </span>

              <strong>
                AirTrain + A
              </strong>

              <p>
                Howard Beach conecta
                o AirTrain
                ao serviço A
                do subway.
              </p>

              <span class="route-compare-result">
                Conexão externa
              </span>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              AirTrain possui
              cobrança própria.
            </strong>

            A viagem posterior
            de subway
            ou LIRR
            pertence a outro sistema tarifário.

          </div>

        </section>


        <!-- ==================================================
             ROOSEVELT ISLAND
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Roosevelt Island
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Subway · F
              </strong>

              <p>
                A ilha possui
                estação de subway.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Roosevelt Island Tram
              </strong>

              <p>
                Liga Roosevelt Island
                a Manhattan.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                NYC Ferry
              </strong>

              <p>
                A rede hidroviária
                também atende
                Roosevelt Island.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             AEROPORTOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Aeroportos e a rede
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                JFK
              </span>

              <strong>
                AirTrain
              </strong>

              <p>
                Jamaica
                e Howard Beach
                conectam o aeroporto
                às redes externas.
              </p>

              <span class="route-compare-result">
                AirTrain JFK
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                LaGuardia
              </span>

              <strong>
                Ônibus
              </strong>

              <p>
                O aeroporto
                não possui
                estação de subway
                dentro dos terminais.
              </p>

              <span class="route-compare-result">
                Conexão rodoviária
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Newark
              </span>

              <strong>
                Nova Jersey
              </strong>

              <p>
                EWR pertence
                à rede de transporte
                de Nova Jersey
                e exige planejamento
                específico.
              </p>

              <span class="route-compare-result">
                Outro estado
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             INTEGRAÇÃO TARIFÁRIA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Uma conexão física
            não significa tarifa integrada
          </h4>

          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                MTA
              </span>

              <strong>
                Subway + ônibus
              </strong>

              <p>
                Podem utilizar
                a transferência
                prevista pelo OMNY.
              </p>

              <span class="fare-scenario-result">
                Integração possível
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                PATH + MTA
              </span>

              <strong>
                PATH + subway
              </strong>

              <p>
                Pode haver
                conexão física próxima,
                mas as tarifas
                são separadas.
              </p>

              <span class="fare-scenario-result">
                Duas tarifas
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                LIRR + MTA
              </span>

              <strong>
                LIRR + subway
              </strong>

              <p>
                Os sistemas
                possuem bilhetagem própria.
              </p>

              <span class="fare-scenario-result">
                Duas tarifas
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Ferry + MTA
              </span>

              <strong>
                NYC Ferry + subway
              </strong>

              <p>
                A troca de modal
                não elimina
                a segunda cobrança.
              </p>

              <span class="fare-scenario-result">
                Duas tarifas
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                JFK
              </span>

              <strong>
                AirTrain + subway
              </strong>

              <p>
                O AirTrain
                possui tarifa própria.
              </p>

              <span class="fare-scenario-result">
                Duas tarifas
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             24 HORAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            A rede funciona de madrugada,
            mas não exatamente igual
          </h4>

          <div class="answer-block">

            <strong>
              O sistema de subway
              opera 24 horas por dia.
            </strong>

            <p>
              Isso não significa
              que todos os serviços
              mantenham o mesmo padrão,
              frequência
              ou trajeto
              durante toda a madrugada.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Madrugada e fim de semana
              merecem uma nova conferência.
            </strong>

            Serviços podem circular
            com frequência menor,
            operar de forma diferente
            ou sofrer alterações
            por manutenção.

          </div>

        </section>


        <!-- ==================================================
             ACESSIBILIDADE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Acessibilidade na rede
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>♿</span>

              <strong>
                Subway
              </strong>

              <p>
                Nem todas as estações
                possuem acesso
                sem escadas.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🛗</span>

              <strong>
                Elevadores
              </strong>

              <p>
                O status do equipamento
                pode alterar
                a viabilidade da rota.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Ônibus
              </strong>

              <p>
                Podem ser importantes
                como alternativa
                de superfície.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚉</span>

              <strong>
                PATH
              </strong>

              <p>
                Algumas estações
                possuem elevadores;
                confirme o percurso
                necessário.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             PARA O VISITANTE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Qual sistema tende a fazer sentido?
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                Dentro de NYC
              </strong>

              <p>
                Comece comparando
                subway
                e ônibus.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚆</span>

              <strong>
                Long Island
              </strong>

              <p>
                LIRR
                pode estruturar
                o deslocamento.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚆</span>

              <strong>
                Norte da região
              </strong>

              <p>
                Considere
                Metro-North.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚉</span>

              <strong>
                Nova Jersey
              </strong>

              <p>
                PATH pode ser
                uma das principais
                conexões.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⛴️</span>

              <strong>
                Próximo ao waterfront
              </strong>

              <p>
                Compare
                NYC Ferry
                com a rota terrestre.
              </p>

            </article>


            <article class="planner-check-card">

              <span>✈️</span>

              <strong>
                JFK
              </strong>

              <p>
                AirTrain conecta
                o aeroporto
                a Jamaica
                e Howard Beach.
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
                Subway
              </strong>

              <p>
                Alterações,
                obras
                e mudanças temporárias
                de serviço.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                PATH
              </strong>

              <p>
                Padrão weekday,
                weekend,
                day
                ou night.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                LIRR / Metro-North
              </strong>

              <p>
                Horário
                e trem específico
                da viagem.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                NYC Ferry
              </strong>

              <p>
                Rota,
                horário
                e programação atual.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Acessibilidade
              </strong>

              <p>
                Situação atual
                dos elevadores
                necessários.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Aeroportos
              </strong>

              <p>
                Terminal,
                obras
                e conexão operacional
                no momento da viagem.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             FONTES OFICIAIS
        =================================================== -->

        <div class="official-map-actions">

          <a
            class="official-link"
            href="https://www.mta.info/maps"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mapas · MTA
          </a>


          <a
            class="official-link"
            href="https://www.mta.info/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Serviço atual · MTA
          </a>


          <a
            class="official-link"
            href="https://www.mta.info/map/22461"
            target="_blank"
            rel="noopener noreferrer"
          >
            LIRR e Metro-North · MTA
          </a>


          <a
            class="official-link"
            href="https://www.panynj.gov/path/en/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            PATH · Port Authority
          </a>


          <a
            class="official-link"
            href="https://www.ferry.nyc/routes-and-schedules/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rotas · NYC Ferry
          </a>


          <a
            class="official-link"
            href="https://www.jfkairport.com/transportation/airtrain"
            target="_blank"
            rel="noopener noreferrer"
          >
            AirTrain JFK
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

window.openNewYorkNetworkMap =
  openNewYorkNetworkMap;
