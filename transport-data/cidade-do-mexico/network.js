// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — CIDADE DO MÉXICO
// MÓDULO: REDE DE TRANSPORTE
// ============================================================

window.MEXICO_CITY_TRANSPORT_MODULES =
  window.MEXICO_CITY_TRANSPORT_MODULES || {};


const MEXICO_CITY_MAP_URL =
  "/images/mapa-transporte-cidade-do-mexico.jpg";


// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function createMexicoCitySystemCard(
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


function createMexicoCityLegendItem(
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

function openMexicoCityNetworkMap() {

  if (
    document.getElementById(
      "mexicoCityNetworkMapLightbox"
    )
  ) {
    return;
  }


  const lightbox =
    document.createElement("div");


  lightbox.id =
    "mexicoCityNetworkMapLightbox";


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
      id="closeMexicoCityNetworkMap"
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
      src="${MEXICO_CITY_MAP_URL}"
      alt="Mapa ampliado da Rede de Movilidad Integrada da Cidade do México"
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
          "closeMexicoCityNetworkMap"
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

window.MEXICO_CITY_TRANSPORT_MODULES["network"] = {

  kicker:
    "Cidade do México · visão da rede",

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
            Mapa de Movilidad Integrada
          </h4>

          <p class="panel-intro">
            Use o mapa para enxergar
            a estrutura geral
            do transporte público
            da Cidade do México.

            Ele reúne os principais sistemas
            e ajuda a identificar
            onde as redes se encontram.
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
              src="${MEXICO_CITY_MAP_URL}"
              alt="Mapa da Rede de Movilidad Integrada da Cidade do México"
              loading="lazy"
              style="
                display:block;
                width:100%;
                height:auto;
                cursor:zoom-in;
              "
              onclick="openMexicoCityNetworkMap()"
            />

          </div>


          <div class="official-map-actions">

            <button
              class="map-zoom-button"
              type="button"
              onclick="openMexicoCityNetworkMap()"
            >
              Ampliar mapa
            </button>


            <a
              class="official-link"
              href="https://mexicocity.cdmx.gob.mx/wp-content/uploads/2025/11/MI_MAPA_METRO_2021-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mapa oficial · CDMX
            </a>

          </div>


          <div class="visitor-alert">

            <strong>
              O mapa ajuda a entender a rede.
            </strong>

            Para decidir um trajeto específico,
            use também a área
            “Planeje o trajeto”,
            onde estão as orientações
            por região,
            aeroporto,
            conexões
            e situações de viagem.

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
            A Cidade do México
            não depende de um único sistema.

            Metro,
            corredores de ônibus,
            ônibus convencionais,
            transporte elétrico,
            trem leve
            e teleféricos urbanos
            se complementam.
          </p>


          <div class="legend-grid">

            ${createMexicoCityLegendItem(
              "M",
              "Metro",
              "Rede ferroviária urbana e principal eixo de deslocamento da cidade."
            )}

            ${createMexicoCityLegendItem(
              "MB",
              "Metrobús",
              "Corredores de ônibus com estações próprias e operação estruturada."
            )}

            ${createMexicoCityLegendItem(
              "RTP",
              "RTP",
              "Ônibus de superfície que complementam a cobertura da rede."
            )}

            ${createMexicoCityLegendItem(
              "TB",
              "Trolebús",
              "Rede elétrica de superfície operada pelo STE."
            )}

            ${createMexicoCityLegendItem(
              "TL",
              "Tren Ligero",
              "Serviço ferroviário entre Tasqueña e Xochimilco."
            )}

            ${createMexicoCityLegendItem(
              "CB",
              "Cablebús",
              "Teleférico urbano integrado ao transporte público."
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

            ${createMexicoCitySystemCard(
              "🚇",
              "Metro",
              "É a principal rede ferroviária urbana e costuma ser a primeira referência para deslocamentos longos.",
              "12 linhas · 195 estações"
            )}

            ${createMexicoCitySystemCard(
              "🚌",
              "Metrobús",
              "Rede de corredores de ônibus com estações próprias.",
              "7 linhas"
            )}

            ${createMexicoCitySystemCard(
              "🚍",
              "RTP",
              "Rede de ônibus de superfície que alcança áreas não atendidas diretamente por sistemas ferroviários.",
              "Rotas e modalidades diferentes"
            )}

            ${createMexicoCitySystemCard(
              "🚎",
              "Trolebús",
              "Ônibus elétricos que circulam em corredores próprios.",
              "Operado pelo STE"
            )}

            ${createMexicoCitySystemCard(
              "🚋",
              "Tren Ligero",
              "Sistema ferroviário do sul da cidade.",
              "Tasqueña ↔ Xochimilco"
            )}

            ${createMexicoCitySystemCard(
              "🚡",
              "Cablebús",
              "Teleférico urbano criado para integrar áreas de relevo acentuado à rede.",
              "Parte do transporte público"
            )}

          </div>

        </section>


        <!-- ==================================================
             METRO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metro em visão rápida
          </h4>


          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Linhas
              </span>

              <strong>
                12
              </strong>

              <p>
                Linhas 1 a 9,
                Linha 12,
                Linha A
                e Linha B.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Estações
              </span>

              <strong>
                195
              </strong>

              <p>
                Rede extensa
                com estações
                de passagem,
                correspondência
                e terminais.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Sentido
              </span>

              <strong>
                Terminal
              </strong>

              <p>
                O nome do terminal
                indica a direção
                do trem.
              </p>

            </article>

          </div>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🔢</span>

              <strong>
                Linha
              </strong>

              <p>
                Identificada
                por número ou letra
                e por uma cor.
              </p>

            </article>


            <article class="planner-check-card">

              <span>↔</span>

              <strong>
                Direção
              </strong>

              <p>
                Veja o terminal
                do lado
                para onde você precisa seguir.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔀</span>

              <strong>
                Correspondência
              </strong>

              <p>
                Indica onde
                duas ou mais linhas
                se conectam.
              </p>

            </article>


            <article class="planner-check-card">

              <span>📍</span>

              <strong>
                Estação
              </strong>

              <p>
                Cada estação
                possui nome
                e identificação visual.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             HUBS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Conexões que ajudam a se localizar
          </h4>

          <p class="panel-intro">
            Você não precisa decorar
            todos os pontos de transferência.

            Estes hubs ajudam
            a entender como
            diferentes partes da rede
            se conectam.
          </p>


          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Pantitlán
              </strong>

              <p>
                Grande conexão
                entre as linhas
                1,
                5,
                9
                e A do Metro,
                além de transporte
                de superfície.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚆</span>

              <strong>
                Buenavista
              </strong>

              <p>
                Reúne Metro,
                Metrobús
                e conexões ferroviárias
                metropolitanas.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Tasqueña
              </strong>

              <p>
                Conecta
                Metro Linha 2,
                Tren Ligero
                e a região
                da Terminal Sur.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Hidalgo
              </strong>

              <p>
                Conecta
                as linhas 2 e 3
                e funciona como referência
                próxima ao Centro.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO OS SISTEMAS SE RELACIONAM
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Uma rede,
            sistemas diferentes
          </h4>


          <div class="answer-block">

            <strong>
              A Tarjeta MI
              facilita o uso
              de vários sistemas.
            </strong>

            <p>
              Metro,
              Metrobús,
              RTP,
              Trolebús,
              Tren Ligero
              e Cablebús
              fazem parte
              da experiência integrada
              de mobilidade da cidade.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Integração não significa
              que tudo funciona
              da mesma forma.
            </strong>

            Cada sistema
            possui suas próprias linhas,
            estações ou paradas,
            horários,
            regras
            e tarifas.

            Para valores,
            pagamento,
            ônibus
            e planejamento,
            use as áreas específicas
            da ferramenta.

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
                seu ponto de partida
                e destino
                aparecem na cidade.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Observe os sistemas
              </strong>

              <p>
                Identifique
                quais redes
                passam próximas.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Procure conexões
              </strong>

              <p>
                Veja onde
                uma linha
                encontra outra.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Planeje o trajeto
              </strong>

              <p>
                Depois de entender
                a rede,
                abra a área
                “Planeje o trajeto”
                para decidir
                a viagem completa.
              </p>

            </article>

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

              <span>🗺️</span>

              <strong>
                Mapa
              </strong>

              <p>
                Use para enxergar
                a rede como um todo.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                Metro
              </strong>

              <p>
                Principal eixo
                ferroviário urbano.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Metrobús
              </strong>

              <p>
                Corredores
                estruturados
                de superfície.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                Complementos
              </strong>

              <p>
                RTP,
                Trolebús,
                Tren Ligero
                e Cablebús
                ampliam a cobertura.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔀</span>

              <strong>
                Conexões
              </strong>

              <p>
                Hubs ajudam
                a combinar
                diferentes partes da rede.
              </p>

            </article>


            <article class="planner-check-card">

              <span>📍</span>

              <strong>
                Próximo passo
              </strong>

              <p>
                Use o Planner
                para transformar
                a rede
                em um trajeto real.
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
            href="https://mexicocity.cdmx.gob.mx/wp-content/uploads/2025/11/MI_MAPA_METRO_2021-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mapa de Movilidad Integrada · CDMX
          </a>


          <a
            class="official-link"
            href="https://www.metro.cdmx.gob.mx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metro CDMX
          </a>


          <a
            class="official-link"
            href="https://www.metrobus.cdmx.gob.mx/mapas-rutas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metrobús
          </a>


          <a
            class="official-link"
            href="https://www.rtp.cdmx.gob.mx/red-de-rutas"
            target="_blank"
            rel="noopener noreferrer"
          >
            RTP
          </a>


          <a
            class="official-link"
            href="https://www.ste.cdmx.gob.mx/red-de-servicio"
            target="_blank"
            rel="noopener noreferrer"
          >
            STE · Trolebús, Tren Ligero e Cablebús
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

window.openMexicoCityNetworkMap =
  openMexicoCityNetworkMap;
