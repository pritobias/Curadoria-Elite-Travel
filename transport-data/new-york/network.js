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
    "Nova York · visão da rede",

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
            Use o mapa
            para entender
            a estrutura do Subway,
            os serviços,
            as estações
            e os principais pontos
            de transferência
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
              Este mapa representa
              principalmente o Subway.
            </strong>

            LIRR,
            Metro-North,
            PATH,
            NYC Ferry
            e AirTrain JFK
            são sistemas
            ou estruturas diferentes.

            Para transformar
            essa rede
            em um trajeto específico,
            use também
            “Planeje o trajeto”.

          </div>

        </section>


        <!-- ==================================================
             ENTENDA A REDE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Entenda a rede
          </h4>

          <p class="panel-intro">
            A mobilidade de Nova York
            combina transporte urbano,
            trens suburbanos,
            conexões interestaduais,
            ferries
            e sistemas aeroportuários.

            Cada rede
            cumpre uma função diferente.
          </p>


          <div class="legend-grid">

            ${createNewYorkLegendItem(
              "M",
              "Subway",
              "Principal rede ferroviária urbana da cidade."
            )}

            ${createNewYorkLegendItem(
              "BUS",
              "Ônibus",
              "Rede de superfície da MTA que complementa o Subway."
            )}

            ${createNewYorkLegendItem(
              "LIRR",
              "Long Island Rail Road",
              "Trem suburbano voltado principalmente a Queens, Brooklyn e Long Island."
            )}

            ${createNewYorkLegendItem(
              "MNR",
              "Metro-North",
              "Trem suburbano para o norte da região."
            )}

            ${createNewYorkLegendItem(
              "PATH",
              "PATH",
              "Sistema ferroviário entre Manhattan e Nova Jersey."
            )}

            ${createNewYorkLegendItem(
              "⛴",
              "Ferries",
              "Serviços hidroviários que complementam a rede terrestre."
            )}

            ${createNewYorkLegendItem(
              "✈",
              "AirTrain JFK",
              "Sistema que conecta os terminais do JFK às redes externas."
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
              "Principal rede ferroviária urbana de Nova York.",
              "Manhattan · Brooklyn · Queens · Bronx"
            )}

            ${createNewYorkSystemCard(
              "🚌",
              "MTA Bus",
              "Rede de ônibus que complementa o Subway dentro da cidade.",
              "Rede de superfície"
            )}

            ${createNewYorkSystemCard(
              "🚆",
              "LIRR",
              "Rede ferroviária suburbana em direção a Long Island.",
              "Long Island Rail Road · MTA"
            )}

            ${createNewYorkSystemCard(
              "🚆",
              "Metro-North",
              "Rede ferroviária suburbana para o norte da região.",
              "MTA"
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
              "Sistema separado"
            )}

            ${createNewYorkSystemCard(
              "✈️",
              "AirTrain JFK",
              "Conecta os terminais do JFK às redes externas.",
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

            As cores agrupam
            serviços que compartilham
            parte de um corredor.

            Para saber
            qual trem pegar,
            observe sempre
            a letra
            ou o número
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
              mas não percorrem
              exatamente
              os mesmos trajetos
              nem realizam
              as mesmas paradas.

              O mesmo princípio
              vale para outros
              grupos do mapa.
            </p>

          </div>

        </section>


        <!-- ==================================================
             SUBWAY — GRUPOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Grupos de serviços do Subway
          </h4>

          <p class="panel-intro">
            Estes são
            os principais grupos
            representados por cor
            no mapa.

            Dentro de cada grupo,
            confira sempre
            o serviço específico
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
              "Serviços shuttle identificados com S."
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
                Mais paradas
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
                Serviços expressos
                podem passar
                por determinadas estações
                sem parar.
              </p>

              <span class="route-compare-result">
                Confira a estação
              </span>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Não escolha
              apenas pela cor.
            </strong>

            Confirme
            a letra ou número
            do serviço
            e verifique
            se ele realmente para
            na estação desejada.

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
                Conecta
                Times Sq–42 St
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
                Serviço
                na região
                de Rockaway Park.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             HUBS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Conexões que ajudam
            a entender a rede
          </h4>

          <p class="panel-intro">
            Você não precisa
            decorar todas
            as estações.

            Alguns grandes hubs
            ajudam a perceber
            como diferentes redes
            se encontram.
          </p>


          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Times Sq–42 St
              </strong>

              <p>
                Um dos principais
                pontos de transferência
                do Subway
                em Midtown.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚆</span>

              <strong>
                Grand Central
              </strong>

              <p>
                Subway,
                Metro-North
                e conexão
                com LIRR
                em Grand Central Madison.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚆</span>

              <strong>
                Penn Station
              </strong>

              <p>
                Importante centro
                ferroviário
                em Midtown.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Atlantic Av–Barclays Ctr
              </strong>

              <p>
                Grande ponto
                de conexão
                em Brooklyn.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚉</span>

              <strong>
                World Trade Center
              </strong>

              <p>
                Região importante
                de conexão
                entre Subway
                e PATH.
              </p>

            </article>


            <article class="bus-system-card">

              <span>✈️</span>

              <strong>
                Jamaica
              </strong>

              <p>
                LIRR,
                Subway
                e AirTrain JFK
                se relacionam
                nessa área.
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
                Manhattan
              </span>

              <strong>
                Subway + ônibus + trens + ferries
              </strong>

              <p>
                Concentra
                grande quantidade
                de linhas
                e conexões.
              </p>

              <span class="route-compare-result">
                Maior concentração
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Brooklyn
              </span>

              <strong>
                Subway + ônibus + LIRR + ferry
              </strong>

              <p>
                Diferentes áreas
                do borough
                são atendidas
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
                Também concentra
                conexões importantes
                com o JFK.
              </p>

              <span class="route-compare-result">
                Leste da cidade
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
                A rede atende
                diferentes áreas
                ao norte da cidade.
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
                Possui estrutura
                diferente
                da rede de Subway
                dos outros boroughs.
              </p>

              <span class="route-compare-result">
                Rede própria
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             SISTEMAS COMPLEMENTARES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Sistemas além do Subway
          </h4>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                LIRR
              </strong>

              <p>
                Trem suburbano
                para Queens,
                Brooklyn
                e Long Island.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Metro-North
              </strong>

              <p>
                Trem suburbano
                para o norte
                da região.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                PATH
              </strong>

              <p>
                Ferrovia
                entre Manhattan
                e Nova Jersey.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                NYC Ferry
              </strong>

              <p>
                Transporte aquático
                entre diferentes áreas
                da cidade.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Staten Island Ferry
              </strong>

              <p>
                Liga Manhattan
                a Staten Island.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                AirTrain JFK
              </strong>

              <p>
                Conecta o aeroporto
                às redes externas
                em Jamaica
                e Howard Beach.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO OS SISTEMAS SE RELACIONAM
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Uma cidade,
            várias redes
          </h4>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Subway
              </strong>

              <p>
                Principal estrutura
                ferroviária urbana.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Ônibus
              </strong>

              <p>
                Complementa
                os corredores
                ferroviários.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                LIRR / Metro-North
              </strong>

              <p>
                Trens suburbanos
                da MTA.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                PATH
              </strong>

              <p>
                Sistema separado
                para Nova Jersey.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Ferries
              </strong>

              <p>
                Complementam
                a mobilidade
                pelas áreas costeiras.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                AirTrain JFK
              </strong>

              <p>
                Sistema aeroportuário
                conectado
                à rede externa.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO USAR O MAPA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como usar este mapa
          </h4>


          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Localize a região
              </strong>

              <p>
                Veja onde
                sua origem
                e destino
                aparecem
                na cidade.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Identifique o serviço
              </strong>

              <p>
                Observe
                a letra
                ou número
                da linha.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Procure transferências
              </strong>

              <p>
                Veja onde
                os serviços
                e outras redes
                se encontram.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Planeje a viagem real
              </strong>

              <p>
                Depois de entender
                a estrutura,
                use
                “Planeje o trajeto”
                para decidir
                a viagem completa.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             MAPA X PLANNER
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O mapa mostra a rede.
            O Planner mostra a viagem.
          </h4>


          <div class="visitor-alert">

            <strong>
              Para escolher
              como realmente chegar
              ao destino,
              não dependa
              apenas do mapa.
            </strong>

            Direção,
            local ou express,
            entradas de estação,
            aeroportos,
            acessibilidade,
            tarifas,
            obras,
            alterações de serviço
            e combinações
            entre sistemas
            estão detalhadas
            em “Planeje o trajeto”.

          </div>

        </section>


        <!-- ==================================================
             RESUMO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Em resumo
          </h4>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                Subway
              </strong>

              <p>
                Principal rede
                urbana.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Ônibus
              </strong>

              <p>
                Complementam
                a cobertura
                do Subway.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚆</span>

              <strong>
                LIRR
              </strong>

              <p>
                Long Island
                e áreas
                da própria cidade.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚆</span>

              <strong>
                Metro-North
              </strong>

              <p>
                Norte
                da região.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚉</span>

              <strong>
                PATH
              </strong>

              <p>
                Manhattan
                ↔ Nova Jersey.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⛴️</span>

              <strong>
                Ferries
              </strong>

              <p>
                Complementam
                a rede terrestre.
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
            MTA
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
            NYC Ferry
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
