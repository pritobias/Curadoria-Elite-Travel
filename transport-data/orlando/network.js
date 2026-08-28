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
    "Orlando · visão da rede",

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
            Use o mapa para entender
            a estrutura geral
            do transporte público
            da região de Orlando.

            Ele ajuda a visualizar
            a rede LYNX
            e as principais conexões
            com outros sistemas.
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
              Orlando funciona de forma diferente
              de cidades com metrô abrangente.
            </strong>

            A mobilidade pública
            depende principalmente
            de ônibus,
            com serviços complementares
            para Downtown,
            transporte regional
            e áreas específicas.

            Para decidir
            como chegar
            a parques,
            aeroportos,
            hotéis
            e outras regiões,
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
            Orlando não possui
            uma única rede
            capaz de resolver
            todos os deslocamentos.

            Cada sistema
            cumpre uma função diferente.
          </p>


          <div class="legend-grid">

            ${createOrlandoLegendItem(
              "LYNX",
              "LYNX",
              "Principal rede pública de ônibus de Orlando e da região metropolitana."
            )}

            ${createOrlandoLegendItem(
              "LYM",
              "LYMMO",
              "Serviço gratuito para circulação dentro de Downtown Orlando."
            )}

            ${createOrlandoLegendItem(
              "SR",
              "SunRail",
              "Trem regional que conecta cidades e bairros ao longo de um corredor ferroviário."
            )}

            ${createOrlandoLegendItem(
              "NL",
              "NeighborLink",
              "Serviço sob demanda disponível em zonas específicas da rede LYNX."
            )}

            ${createOrlandoLegendItem(
              "SH",
              "Shuttles",
              "Hotéis, parques e operadores privados podem manter serviços próprios."
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
              "Principal rede pública de ônibus da região de Orlando.",
              "Rede regional"
            )}

            ${createOrlandoSystemCard(
              "🚍",
              "LYMMO",
              "Serviço gratuito para deslocamentos dentro de Downtown Orlando.",
              "Centro de Orlando"
            )}

            ${createOrlandoSystemCard(
              "🚆",
              "SunRail",
              "Trem regional da Central Florida.",
              "Corredor ferroviário regional"
            )}

            ${createOrlandoSystemCard(
              "🚐",
              "NeighborLink",
              "Transporte sob demanda em áreas determinadas.",
              "Serviço LYNX"
            )}

            ${createOrlandoSystemCard(
              "🏨",
              "Shuttles",
              "Transportes próprios de hotéis, parques e outros operadores.",
              "Condições variam"
            )}

          </div>

        </section>


        <!-- ==================================================
             LYNX
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            LYNX é a base da rede pública
          </h4>

          <div class="answer-block">

            <strong>
              Pense no LYNX
              como a principal rede
              de transporte coletivo
              de Orlando.
            </strong>

            <p>
              As linhas conectam
              Downtown,
              bairros,
              áreas comerciais,
              atrações,
              aeroportos
              e outras cidades
              da região metropolitana.

              A rede é extensa,
              mas os trajetos
              podem exigir
              conexões
              e caminhadas.
            </p>

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
              Circulação gratuita no centro.
            </h4>

            <p>
              O LYMMO
              funciona como
              um serviço de circulação
              dentro de Downtown Orlando.

              Ele complementa
              a rede LYNX,
              mas não substitui
              os ônibus regionais
              para viagens
              fora do centro.
            </p>

          </div>

        </section>


        <!-- ==================================================
             SUNRAIL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            SunRail
          </h4>

          <div class="answer-block">

            <strong>
              É um trem regional,
              não uma rede de metrô.
            </strong>

            <p>
              O SunRail
              percorre um corredor
              norte-sul
              da Central Florida.

              Ele pode ser útil
              quando origem
              e destino
              ficam próximos
              às estações
              ou possuem
              boas conexões
              com ônibus.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              O trem não cobre
              toda a área turística.
            </strong>

            Muitas viagens
            ainda exigem
            uma conexão LYNX
            ou outro transporte
            na primeira
            ou última etapa.

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
              em áreas específicas.
            </strong>

            <p>
              Diferentemente
              de uma linha convencional,
              o NeighborLink
              atende zonas determinadas
              e depende
              da solicitação
              do passageiro.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não está disponível
              em toda Orlando.
            </strong>

            Verifique
            se a origem
            e o destino
            pertencem
            a uma zona atendida.

          </div>

        </section>


        <!-- ==================================================
             SHUTTLES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Shuttles privados
          </h4>

          <p class="panel-intro">
            Orlando possui
            uma quantidade relevante
            de transporte privado
            oferecido por hotéis,
            parques
            e operadores turísticos.
          </p>


          <div class="visitor-alert">

            <strong>
              Esses serviços
              não fazem parte
              da rede pública LYNX.
            </strong>

            Horários,
            destinos,
            reservas,
            frequência
            e regras
            podem variar
            conforme o operador.

          </div>

        </section>


        <!-- ==================================================
             HUBS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Conexões que ajudam a entender a rede
          </h4>

          <p class="panel-intro">
            Você não precisa decorar
            todos os terminais
            e pontos de conexão.

            Estes lugares ajudam
            a perceber
            como as diferentes partes
            da rede se relacionam.
          </p>


          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🏙️</span>

              <strong>
                LYNX Central Station
              </strong>

              <p>
                Um dos principais
                hubs de ônibus
                de Downtown Orlando,
                com conexão
                ao SunRail
                e ao LYMMO.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚆</span>

              <strong>
                Sand Lake Road
              </strong>

              <p>
                Estação SunRail
                com conexões
                de ônibus LYNX.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🎢</span>

              <strong>
                Destination Parkway
              </strong>

              <p>
                Ponto importante
                para conexões
                na região turística.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🛍️</span>

              <strong>
                Florida Mall
              </strong>

              <p>
                Importante ponto
                de conexão
                da rede LYNX.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🏰</span>

              <strong>
                Disney Springs
              </strong>

              <p>
                Referência
                para algumas linhas
                relacionadas
                à área Disney.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚆</span>

              <strong>
                Kissimmee
              </strong>

              <p>
                Conexão
                entre SunRail
                e serviços locais.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO OS SISTEMAS SE RELACIONAM
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Uma região,
            sistemas diferentes
          </h4>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                LYNX
              </strong>

              <p>
                Rede pública regional
                de ônibus.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                LYMMO
              </strong>

              <p>
                Circulação gratuita
                dentro de Downtown.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                SunRail
              </strong>

              <p>
                Trem regional
                com corredor próprio.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                NeighborLink
              </strong>

              <p>
                Serviço sob demanda
                em áreas delimitadas.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Parques e hotéis
              </strong>

              <p>
                Podem operar
                transportes privados
                independentes.
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
                ficam na área
                de Orlando.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Observe a rede LYNX
              </strong>

              <p>
                Identifique
                quais corredores
                e linhas
                atendem a região.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Procure conexões
              </strong>

              <p>
                Veja se
                o deslocamento
                envolve Downtown,
                SunRail
                ou outro hub.
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
                para verificar
                a viagem completa.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             O QUE O MAPA NÃO RESPONDE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O mapa mostra a rede.
            O Planner mostra a viagem.
          </h4>

          <div class="visitor-alert">

            <strong>
              Para decidir
              qual transporte usar,
              vá além do mapa.
            </strong>

            Aeroportos,
            parques,
            hotéis,
            outlets,
            International Drive,
            horários,
            linhas específicas
            e conexões
            estão detalhados
            na área
            “Planeje o trajeto”.

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
                Use para entender
                a estrutura geral.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                LYNX
              </strong>

              <p>
                Principal rede pública
                de Orlando.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                LYMMO
              </strong>

              <p>
                Circulação gratuita
                em Downtown.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚆</span>

              <strong>
                SunRail
              </strong>

              <p>
                Trem regional
                da Central Florida.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚐</span>

              <strong>
                NeighborLink
              </strong>

              <p>
                Transporte sob demanda
                em zonas específicas.
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
