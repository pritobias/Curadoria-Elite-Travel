// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — SALVADOR
// MÓDULO: REDE DE TRANSPORTE
// ============================================================

window.SALVADOR_TRANSPORT_MODULES =
  window.SALVADOR_TRANSPORT_MODULES || {};


const SALVADOR_MAP_URL =
  "/images/mapa-transporte-salvador.png";


// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function createSalvadorSystemCard(
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


function createSalvadorLegendItem(
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


function createSalvadorBrtCard(
  number,
  route,
  description
) {

  return `
    <article class="line-mini-card">

      <span
        class="line-mini-number"
        style="background:#235a95"
      >
        ${number}
      </span>

      <strong>
        Linha ${number}
      </strong>

      <span class="transport-type-pill">
        🚍 BRT
      </span>

      <span>
        ${route}
      </span>

      <p
        style="
          margin:8px 0 0;
          font-size:11px;
          line-height:1.5;
          color:var(--muted);
        "
      >
        ${description}
      </p>

      <small>
        Prefeitura de Salvador · SEMOB
      </small>

    </article>
  `;

}


// ============================================================
// LIGHTBOX DO MAPA
// ============================================================

function openSalvadorNetworkMap() {

  if (
    document.getElementById(
      "salvadorNetworkMapLightbox"
    )
  ) {
    return;
  }


  const lightbox =
    document.createElement("div");


  lightbox.id =
    "salvadorNetworkMapLightbox";


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
      id="closeSalvadorNetworkMap"
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
      src="${SALVADOR_MAP_URL}"
      alt="Mapa ampliado das Linhas 1 e 2 do Metrô de Salvador"
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
          "closeSalvadorNetworkMap"
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

window.SALVADOR_TRANSPORT_MODULES["network"] = {

  kicker:
    "Salvador · visão da rede",

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
            Mapa do Metrô
          </h4>

          <p class="panel-intro">
            Use o mapa
            para entender
            a estrutura das Linhas 1 e 2
            e como o metrô
            se posiciona
            dentro da rede
            de Salvador.
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
              src="${SALVADOR_MAP_URL}"
              alt="Mapa das Linhas 1 e 2 do Metrô de Salvador"
              loading="lazy"
              style="
                display:block;
                width:100%;
                height:auto;
                cursor:zoom-in;
              "
              onclick="openSalvadorNetworkMap()"
            />

          </div>


          <div class="official-map-actions">

            <button
              class="map-zoom-button"
              type="button"
              onclick="openSalvadorNetworkMap()"
            >
              Ampliar mapa
            </button>


            <a
              class="official-link"
              href="https://www.ba.gov.br/trilhos/25/mapa-das-linhas"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mapa oficial · Governo da Bahia
            </a>

          </div>


          <div class="visitor-alert">

            <strong>
              O mapa representa
              apenas a rede metroviária.
            </strong>

            A mobilidade de Salvador
            também depende
            de BRT,
            VLT,
            ônibus municipais,
            ônibus metropolitanos
            e Ferry-Boat.

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

          <p class="panel-intro">
            Salvador combina
            sistemas municipais
            e metropolitanos
            que se complementam
            em diferentes partes
            da cidade
            e da Região Metropolitana.
          </p>


          <div class="legend-grid">

            ${createSalvadorLegendItem(
              "M",
              "Metrô",
              "Duas linhas estruturam importantes eixos de Salvador e a conexão em direção ao Aeroporto."
            )}

            ${createSalvadorLegendItem(
              "BRT",
              "BRT Salvador",
              "Sistema municipal de alta capacidade que atende corredores entre Rodoviária, Pituba, Rio Vermelho e Lapa."
            )}

            ${createSalvadorLegendItem(
              "VLT",
              "VLT",
              "Novo sistema sobre trilhos que está sendo incorporado gradualmente à mobilidade da cidade."
            )}

            ${createSalvadorLegendItem(
              "BUS",
              "Ônibus urbanos",
              "Ampliam a cobertura para bairros e conectam metrô, BRT e terminais."
            )}

            ${createSalvadorLegendItem(
              "RMS",
              "Metropolitanos",
              "Conectam Salvador a outros municípios da Região Metropolitana."
            )}

            ${createSalvadorLegendItem(
              "⛴",
              "Ferry-Boat",
              "Cria a ligação hidroviária entre Salvador e a Ilha de Itaparica."
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

            ${createSalvadorSystemCard(
              "🚇",
              "Metrô",
              "Principal sistema sobre trilhos em operação regular.",
              "Linhas 1 e 2"
            )}

            ${createSalvadorSystemCard(
              "🚍",
              "BRT Salvador",
              "Sistema municipal estruturado em corredores próprios.",
              "B1 · B2 · B3 · B4 · B5"
            )}

            ${createSalvadorSystemCard(
              "🚊",
              "VLT",
              "Novo sistema ferroviário em implantação gradual.",
              "Primeiro trecho já incorporado à operação assistida"
            )}

            ${createSalvadorSystemCard(
              "🚌",
              "Ônibus",
              "Complementam a cobertura municipal e metropolitana.",
              "Bairros · terminais · conexões"
            )}

            ${createSalvadorSystemCard(
              "⛴",
              "Ferry-Boat",
              "Sistema hidroviário para passageiros e veículos.",
              "São Joaquim ↔ Bom Despacho"
            )}

          </div>

        </section>


        <!-- ==================================================
             METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metrô
          </h4>

          <p class="panel-intro">
            A rede metroviária
            possui duas linhas
            que se conectam
            em Acesso Norte.
          </p>


          <div class="lines-grid">

            ${createLineMiniCard(
              "#a83220",
              "1",
              "Linha 1",
              "Metrô",
              "Lapa ↔ Águas Claras",
              "Sistema Metroviário Salvador e Lauro de Freitas"
            )}

            ${createLineMiniCard(
              "#173d75",
              "2",
              "Linha 2",
              "Metrô",
              "Acesso Norte ↔ Aeroporto",
              "Sistema Metroviário Salvador e Lauro de Freitas"
            )}

          </div>

        </section>


        <!-- ==================================================
             HUBS METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Pontos que ajudam
            a entender o metrô
          </h4>


          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🏙️</span>

              <strong>
                Lapa
              </strong>

              <p>
                Terminal da Linha 1
                na região central
                e importante
                ponto de conexão
                com ônibus
                e BRT.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🔄</span>

              <strong>
                Acesso Norte
              </strong>

              <p>
                Principal ponto
                de transferência
                entre as Linhas 1 e 2.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Pirajá
              </strong>

              <p>
                Importante conexão
                entre metrô
                e rede de ônibus.
              </p>

            </article>


            <article class="bus-system-card">

              <span>✈️</span>

              <strong>
                Aeroporto
              </strong>

              <p>
                Terminal da Linha 2
                no eixo
                relacionado
                ao aeroporto.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🧳</span>

              <strong>
                Águas Claras
              </strong>

              <p>
                Terminal da Linha 1
                associado
                à Nova Rodoviária
                e a conexões
                de ônibus.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             BRT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            BRT Salvador
          </h4>

          <p class="panel-intro">
            O BRT
            complementa
            a estrutura do metrô
            e dos ônibus
            em importantes corredores
            da cidade.
          </p>


          <div class="lines-grid">

            ${createSalvadorBrtCard(
              "B1",
              "Estação BRT Rodoviária ↔ Estação BRT Pituba",
              "Via Cidadela"
            )}

            ${createSalvadorBrtCard(
              "B2",
              "Estação BRT Rodoviária ↔ Rio Vermelho",
              "Via Pituba e Amaralina"
            )}

            ${createSalvadorBrtCard(
              "B3",
              "Estação BRT Rodoviária ↔ Pituba",
              "Via Paulo VI"
            )}

            ${createSalvadorBrtCard(
              "B4",
              "Estação Pituba ↔ Estação Lapa",
              "Atende o eixo Pituba–Rio Vermelho–Lapa"
            )}

            ${createSalvadorBrtCard(
              "B5",
              "Estação BRT Rodoviária ↔ Estação Lapa",
              "Conecta o eixo da Rodoviária ao Centro"
            )}

          </div>

        </section>


        <!-- ==================================================
             RODOVIARIA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Nova Rodoviária da Bahia
          </h4>


          <div class="visitor-alert">

            <strong>
              A rodoviária intermunicipal
              e interestadual
              está em Águas Claras.
            </strong>

            A nova estrutura
            se relaciona
            diretamente
            ao metrô,
            aos ônibus urbanos
            e à rede metropolitana.

          </div>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Metrô
              </strong>

              <p>
                A Estação Águas Claras
                conecta a rodoviária
                à Linha 1.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Ônibus urbanos
              </strong>

              <p>
                A região possui
                conexões
                da rede municipal.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Metropolitanos
              </strong>

              <p>
                Linhas metropolitanas
                também utilizam
                a estrutura
                de Águas Claras.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Rodoviários
              </strong>

              <p>
                Serviços intermunicipais
                e interestaduais
                partem
                da nova rodoviária.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ALERTA TERMINAIS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Três referências
            que não devem ser confundidas
          </h4>


          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Nova Rodoviária da Bahia
              </strong>

              <p>
                Terminal rodoviário
                intermunicipal
                e interestadual
                em Águas Claras.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Estação BRT Rodoviária
              </strong>

              <p>
                Estação
                da rede BRT
                na região
                do Shopping da Bahia.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Terminal Shopping da Bahia
              </strong>

              <p>
                Terminal urbano
                de ônibus
                na mesma região
                da antiga rodoviária.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              São estruturas diferentes.
            </strong>

            A palavra “Rodoviária”
            em uma linha
            ou estação do BRT
            não significa
            que o serviço
            siga para Águas Claras.

          </div>

        </section>


        <!-- ==================================================
             VLT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            VLT
          </h4>


          <div class="answer-block">

            <strong>
              O VLT está sendo incorporado
              gradualmente
              à rede de Salvador.
            </strong>

            <p>
              O sistema
              está em implantação
              por etapas.

              O primeiro trecho
              relaciona Calçada
              e Lobato
              e representa
              apenas uma parte
              da estrutura prevista
              para a rede completa.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              A rede completa
              ainda não está disponível.
            </strong>

            Para entender
            a estrutura,
            considere o VLT
            como um sistema
            em expansão.

            Para saber
            exatamente o que está disponível
            em uma viagem atual,
            consulte
            “Planeje o trajeto”.

          </div>

        </section>


        <!-- ==================================================
             ONIBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ônibus municipais
            e metropolitanos
          </h4>


          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Dentro de Salvador
              </span>

              <strong>
                Rede municipal
              </strong>

              <p>
                Amplia a cobertura
                para bairros
                fora dos grandes
                eixos estruturais
                do metrô e BRT.
              </p>

              <span class="route-compare-result">
                Salvador
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Região Metropolitana
              </span>

              <strong>
                Rede metropolitana
              </strong>

              <p>
                Conecta Salvador
                a outros municípios
                da RMS.
              </p>

              <span class="route-compare-result">
                Sistema estadual
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             FERRY
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ferry-Boat
          </h4>


          <div class="answer-block">

            <strong>
              O Ferry-Boat
              cria uma ligação hidroviária
              entre Salvador
              e a Ilha de Itaparica.
            </strong>

            <p>
              Na capital,
              o embarque ocorre
              no Terminal São Joaquim.

              Na Ilha de Itaparica,
              a referência
              é o Terminal Bom Despacho.

              O sistema transporta
              passageiros
              e veículos.
            </p>

          </div>

        </section>


        <!-- ==================================================
             CONEXOES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Conexões que ajudam
            a entender a rede
          </h4>


          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🏙️</span>

              <strong>
                Lapa
              </strong>

              <p>
                Metrô,
                BRT
                e ônibus
                convergem
                na região.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🔄</span>

              <strong>
                Acesso Norte
              </strong>

              <p>
                Faz a conexão
                entre as duas linhas
                do metrô.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Pirajá
              </strong>

              <p>
                Integra
                metrô
                e diferentes linhas
                de ônibus.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚌</span>

              <strong>
                Mussurunga
              </strong>

              <p>
                Concentra
                conexões urbanas
                e metropolitanas.
              </p>

            </article>


            <article class="bus-system-card">

              <span>✈️</span>

              <strong>
                Aeroporto
              </strong>

              <p>
                Relaciona
                Linha 2,
                ônibus
                e serviços metropolitanos.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🧳</span>

              <strong>
                Águas Claras
              </strong>

              <p>
                Metrô,
                ônibus
                e Nova Rodoviária
                convergem
                nesta região.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO AS REDES SE RELACIONAM
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Uma cidade,
            sistemas diferentes
          </h4>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Metrô
              </strong>

              <p>
                Estrutura
                importantes eixos
                sobre trilhos.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                BRT
              </strong>

              <p>
                Complementa
                grandes corredores
                municipais.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                VLT
              </strong>

              <p>
                Está sendo
                incorporado gradualmente
                à rede.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Ônibus
              </strong>

              <p>
                Ampliam
                a cobertura municipal
                e metropolitana.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Ferry
              </strong>

              <p>
                Cria
                a ligação hidroviária
                com Itaparica.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO INTERPRETAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como interpretar a rede
          </h4>


          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Localize a região
              </strong>

              <p>
                Veja onde
                estão origem
                e destino
                dentro de Salvador
                ou da Região Metropolitana.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Identifique o eixo
              </strong>

              <p>
                Observe
                se a região
                se relaciona
                ao metrô,
                BRT,
                ônibus,
                VLT
                ou Ferry.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Procure conexões
              </strong>

              <p>
                Veja onde
                os diferentes sistemas
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
                para escolher
                a combinação
                mais adequada.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             NETWORK X PLANNER
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O mapa mostra a rede.
            O Planner mostra a viagem.
          </h4>


          <div class="visitor-alert">

            <strong>
              Para decidir
              como realmente
              fazer o deslocamento,
              use também
              “Planeje o trajeto”.
            </strong>

            Aeroporto,
            linha específica,
            sentido,
            horários,
            integrações,
            operação assistida do VLT,
            Ferry-Boat,
            Nova Rodoviária,
            destinos da Região Metropolitana
            e alterações operacionais
            estão detalhados
            no Planner.

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
                Metrô
              </strong>

              <p>
                Duas linhas
                estruturais.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                BRT
              </strong>

              <p>
                Cinco linhas
                em corredores
                municipais.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚊</span>

              <strong>
                VLT
              </strong>

              <p>
                Rede
                em implantação
                gradual.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Ônibus
              </strong>

              <p>
                Cobertura
                municipal
                e metropolitana.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⛴</span>

              <strong>
                Ferry
              </strong>

              <p>
                Salvador
                ↔ Itaparica.
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
            href="https://www.ba.gov.br/trilhos/25/mapa-das-linhas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mapa do Metrô · CTB
          </a>


          <a
            class="official-link"
            href="https://www.ba.gov.br/trilhos/837/metro"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rede do Metrô · CTB
          </a>


          <a
            class="official-link"
            href="https://mobilidade.salvador.ba.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mobilidade Salvador
          </a>


          <a
            class="official-link"
            href="https://www.ba.gov.br/trilhos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTB · Governo da Bahia
          </a>


          <a
            class="official-link"
            href="https://www.ba.gov.br/agerba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AGERBA
          </a>

        </div>


        <div class="planner-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};


// ============================================================
// DISPONIBILIZA O LIGHTBOX
// ============================================================

window.openSalvadorNetworkMap =
  openSalvadorNetworkMap;
