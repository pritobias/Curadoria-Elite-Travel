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
    "Miami · visão da rede",

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
            Use o mapa
            para entender
            como Metrorail,
            Metromover,
            Metrobus
            e as principais conexões
            estruturam o transporte
            de Miami-Dade.
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
              Miami possui
              diferentes redes
              que se complementam.
            </strong>

            Metrorail,
            Metromover,
            Metrobus,
            Metro Express,
            Tri-Rail
            e Brightline
            cumprem funções diferentes.

            Para transformar
            essa estrutura
            em uma viagem específica,
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

          <div class="legend-grid">

            ${createMiamiLegendItem(
              "M",
              "Metrorail",
              "Sistema ferroviário urbano do Miami-Dade Transit."
            )}

            ${createMiamiLegendItem(
              "MOVE",
              "Metromover",
              "Sistema elevado gratuito que circula pelo núcleo central de Miami."
            )}

            ${createMiamiLegendItem(
              "BUS",
              "Metrobus",
              "Rede de ônibus que amplia a cobertura para áreas fora dos corredores ferroviários."
            )}

            ${createMiamiLegendItem(
              "BRT",
              "Metro Express",
              "Sistema de ônibus de alta capacidade no corredor South Dade."
            )}

            ${createMiamiLegendItem(
              "TRI",
              "Tri-Rail",
              "Trem regional entre Miami-Dade, Broward e Palm Beach."
            )}

            ${createMiamiLegendItem(
              "BL",
              "Brightline",
              "Serviço ferroviário intercity separado da rede municipal."
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

            ${createMiamiSystemCard(
              "🚇",
              "Metrorail",
              "Principal eixo ferroviário urbano de Miami-Dade.",
              "Green Line · Orange Line"
            )}

            ${createMiamiSystemCard(
              "🚝",
              "Metromover",
              "Circulação elevada gratuita no núcleo central.",
              "Downtown · Brickell · Omni"
            )}

            ${createMiamiSystemCard(
              "🚌",
              "Metrobus",
              "Rede de ônibus que amplia a cobertura do condado.",
              "Miami-Dade"
            )}

            ${createMiamiSystemCard(
              "🚍",
              "Metro Express",
              "BRT do corredor South Dade.",
              "South Dade ↔ Dadeland South"
            )}

            ${createMiamiSystemCard(
              "🚆",
              "Tri-Rail",
              "Sistema ferroviário regional do sul da Flórida.",
              "Miami-Dade · Broward · Palm Beach"
            )}

            ${createMiamiSystemCard(
              "🚄",
              "Brightline",
              "Serviço ferroviário intercity.",
              "Sul da Flórida · Orlando"
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
            O Metrorail
            é o principal sistema
            ferroviário urbano
            de Miami-Dade.

            A rede possui
            duas linhas
            identificadas
            pelas cores verde
            e laranja.
          </p>


          <div class="lines-grid">

            ${createMiamiRailCard(
              "#169447",
              "GREEN",
              "Green Line",
              "Forma o principal corredor da rede entre o noroeste e o sul de Miami-Dade."
            )}

            ${createMiamiRailCard(
              "#ef7d22",
              "ORANGE",
              "Orange Line",
              "Compartilha grande parte do corredor principal e acrescenta a conexão com Miami International Airport."
            )}

          </div>


          <div class="visitor-alert">

            <strong>
              As linhas compartilham
              parte importante
              do trajeto.
            </strong>

            Por isso,
            além da cor,
            observe sempre
            o destino indicado
            antes de embarcar.

          </div>

        </section>


        <!-- ==================================================
             METROMOVER
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metromover
          </h4>

          <div class="payment-recommendation">

            <span class="payment-eyebrow">
              Downtown · Brickell · Omni
            </span>

            <h4>
              Circulação gratuita
              pelo núcleo central.
            </h4>

            <p>
              O Metromover
              é um sistema elevado
              que complementa
              o Metrorail
              dentro da região central.

              Ele é especialmente útil
              para deslocamentos
              curtos entre áreas
              de Downtown,
              Brickell
              e Omni.
            </p>

          </div>

        </section>


        <!-- ==================================================
             LOOPS METROMOVER
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como o Metromover se organiza
          </h4>


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
                Conecta
                o centro
                à região
                de Brickell.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Omni Loop
              </strong>

              <p>
                Atende
                o eixo
                ao norte
                de Downtown.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Confira o destino
              exibido na estação.
            </strong>

            Os veículos
            não percorrem
            necessariamente
            o mesmo loop.

          </div>

        </section>


        <!-- ==================================================
             METROBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metrobus
          </h4>

          <div class="answer-block">

            <strong>
              É a rede
              que amplia a cobertura
              para além das estações.
            </strong>

            <p>
              O Metrobus
              atende áreas
              que não ficam diretamente
              no corredor
              do Metrorail
              ou do Metromover.

              Ele também funciona
              como primeira
              ou última etapa
              de muitas viagens.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              O ônibus continua
              sujeito ao trânsito.
            </strong>

            Por isso,
            uma rota aparentemente curta
            no mapa
            pode ter tempo de viagem
            bastante diferente
            conforme o horário.

          </div>

        </section>


        <!-- ==================================================
             METRO EXPRESS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metro Express
          </h4>

          <div class="answer-block">

            <strong>
              É um corredor BRT
              voltado ao South Dade.
            </strong>

            <p>
              O Metro Express
              utiliza infraestrutura
              própria
              e se conecta
              ao Metrorail
              em Dadeland South.

              Ele funciona
              como uma extensão
              da rede estrutural
              em direção
              ao sul do condado.
            </p>

          </div>

        </section>


        <!-- ==================================================
             TRI-RAIL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Tri-Rail
          </h4>

          <div class="answer-block">

            <strong>
              É um trem regional,
              não uma linha
              do Metrorail.
            </strong>

            <p>
              O Tri-Rail
              conecta Miami-Dade,
              Broward
              e Palm Beach.

              Ele se relaciona
              com a rede urbana
              por meio
              de pontos específicos
              de conexão.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Integração física
              não significa
              que os sistemas
              sejam iguais.
            </strong>

            Tri-Rail
            possui operação,
            horários
            e estrutura tarifária
            próprios.

          </div>

        </section>


        <!-- ==================================================
             BRIGHTLINE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Brightline
          </h4>

          <div class="answer-block">

            <strong>
              É um serviço
              ferroviário intercity
              separado.
            </strong>

            <p>
              A Brightline
              utiliza MiamiCentral
              como seu terminal
              em Miami
              e conecta a cidade
              a outros destinos
              da Flórida.

              Ela não faz parte
              do Miami-Dade Transit.
            </p>

          </div>

        </section>


        <!-- ==================================================
             CONEXÕES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Conexões que ajudam
            a entender a rede
          </h4>

          <p class="panel-intro">
            Você não precisa
            decorar todas as estações.

            Estes pontos ajudam
            a perceber
            onde os principais
            sistemas se encontram.
          </p>


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
                e conexão
                com o aeroporto.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🔄</span>

              <strong>
                Earlington Heights
              </strong>

              <p>
                Ponto importante
                entre os corredores
                Green
                e Orange.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🏙️</span>

              <strong>
                Government Center
              </strong>

              <p>
                Uma das principais
                conexões
                entre Metrorail
                e Metromover.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🏢</span>

              <strong>
                Brickell
              </strong>

              <p>
                Conexão
                entre Metrorail,
                Metromover
                e serviços de superfície.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚄</span>

              <strong>
                MiamiCentral
              </strong>

              <p>
                Terminal Brightline
                com conexões
                próximas
                à rede de Downtown.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                Dadeland South
              </strong>

              <p>
                Conexão
                entre Metrorail
                e Metro Express.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             SISTEMAS DIFERENTES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Uma região,
            sistemas diferentes
          </h4>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Metrorail
              </strong>

              <p>
                Ferrovia urbana
                do Miami-Dade Transit.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Metromover
              </strong>

              <p>
                Circulação gratuita
                no núcleo central.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Metrobus
              </strong>

              <p>
                Rede de ônibus
                do condado.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Metro Express
              </strong>

              <p>
                BRT estrutural
                de South Dade.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Tri-Rail
              </strong>

              <p>
                Ferrovia regional
                do sul da Flórida.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Brightline
              </strong>

              <p>
                Trem intercity
                com operação própria.
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
                e seu destino
                aparecem
                na rede.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Identifique o eixo principal
              </strong>

              <p>
                Observe
                se a região
                está próxima
                ao Metrorail,
                Metromover
                ou Metro Express.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Procure as conexões
              </strong>

              <p>
                Veja onde
                ônibus,
                trens regionais
                e sistemas urbanos
                se encontram.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Planeje o trajeto real
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
              como realmente ir
              de um lugar a outro,
              não dependa apenas
              do mapa.
            </strong>

            Miami Beach,
            MIA,
            Downtown,
            Brickell,
            linhas específicas,
            horários,
            Tri-Rail,
            Brightline,
            bagagem,
            acessibilidade
            e outras decisões
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
                Metrorail
              </strong>

              <p>
                Principal eixo
                ferroviário urbano.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚝</span>

              <strong>
                Metromover
              </strong>

              <p>
                Circulação gratuita
                no centro.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Metrobus
              </strong>

              <p>
                Amplia a cobertura
                do condado.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                Metro Express
              </strong>

              <p>
                Estrutura South Dade
                ↔ Metrorail.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚆</span>

              <strong>
                Tri-Rail
              </strong>

              <p>
                Transporte regional.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚄</span>

              <strong>
                Brightline
              </strong>

              <p>
                Transporte intercity.
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
            href="https://www.miamidade.gov/global/transportation/metromover.page"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metromover · Miami-Dade
          </a>


          <a
            class="official-link"
            href="https://www.miamidade.gov/global/transportation/metrobus.page"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metrobus · Miami-Dade
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
