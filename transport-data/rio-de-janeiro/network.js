// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — RIO DE JANEIRO
// MÓDULO: REDE METROPOLITANA
// ============================================================

window.RIO_TRANSPORT_MODULES =
  window.RIO_TRANSPORT_MODULES || {};


const RIO_MAP_URL =
  "/images/mapa-transporte-rio-de-janeiro.jpg";


// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function createRioSystemCard(
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


function createRioLegendItem(
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


function createRioCorridorCard(
  letter,
  name,
  description,
  color
) {

  return `
    <article class="line-mini-card">

      <div class="line-mini-head">

        <span
          style="
            display:inline-flex;
            align-items:center;
            justify-content:center;
            min-width:38px;
            height:38px;
            padding:0 10px;
            border-radius:50%;
            background:${color};
            color:#fff;
            font-weight:800;
          "
        >
          ${letter}
        </span>

        <div>

          <strong>
            ${name}
          </strong>

          <small style="display:block;">
            BRT
          </small>

        </div>

      </div>

      <p>
        ${description}
      </p>

      <span class="line-operator">
        MOBI-Rio
      </span>

    </article>
  `;

}


// ============================================================
// LIGHTBOX DO MAPA
// ============================================================

function openRioNetworkMap() {

  if (
    document.getElementById(
      "rioNetworkMapLightbox"
    )
  ) {
    return;
  }


  const lightbox =
    document.createElement("div");


  lightbox.id =
    "rioNetworkMapLightbox";


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
      id="closeRioNetworkMap"
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
      src="${RIO_MAP_URL}"
      alt="Mapa ampliado da rede metropolitana de transportes do Rio de Janeiro"
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
          "closeRioNetworkMap"
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

window.RIO_TRANSPORT_MODULES["network"] = {

  kicker:
    "Rio de Janeiro · visão da rede",

  title:
    "Rede Metropolitana",

  body() {

    return `

      <div class="network-layout">


        <!-- ==================================================
             MAPA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Mapa metropolitano
          </h4>

          <p class="panel-intro">
            Use o mapa
            para entender
            como metrô,
            trens,
            BRT,
            VLT
            e outros sistemas
            se distribuem
            pelo Rio de Janeiro
            e pela Região Metropolitana.
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
              src="${RIO_MAP_URL}"
              alt="Mapa Metropolitano de Transportes do Rio de Janeiro"
              loading="lazy"
              style="
                display:block;
                width:100%;
                height:auto;
                cursor:zoom-in;
              "
              onclick="openRioNetworkMap()"
            />

          </div>


          <div class="official-map-actions">

            <button
              class="map-zoom-button"
              type="button"
              onclick="openRioNetworkMap()"
            >
              Ampliar mapa
            </button>


            <a
              class="official-link"
              href="https://www.rj.gov.br/transporte/node/797"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fonte do mapa · Governo do RJ
            </a>

          </div>


          <div class="visitor-alert">

            <strong>
              O mapa pode apresentar
              a marca SuperVia.
            </strong>

            A operação ferroviária
            passou para a TrensRJ
            em 30 de maio de 2026.

            Portanto,
            referências antigas
            à SuperVia
            devem ser lidas hoje
            como parte
            da rede operada
            pela TrensRJ.

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
            O Rio não possui
            um único sistema
            nem um único operador.

            A mobilidade combina
            redes municipais
            e metropolitanas
            que se encontram
            em estações,
            terminais
            e áreas de conexão.
          </p>


          <div class="legend-grid">

            ${createRioLegendItem(
              "M",
              "Metrô",
              "Rede urbana sobre trilhos operada pelo MetrôRio."
            )}

            ${createRioLegendItem(
              "T",
              "Trens",
              "Rede ferroviária metropolitana atualmente operada pela TrensRJ."
            )}

            ${createRioLegendItem(
              "BRT",
              "BRT",
              "Rede municipal de ônibus de alta capacidade administrada pela MOBI-Rio."
            )}

            ${createRioLegendItem(
              "VLT",
              "VLT Carioca",
              "Rede sobre trilhos voltada principalmente ao Centro e à Região Portuária."
            )}

            ${createRioLegendItem(
              "BUS",
              "Ônibus",
              "Redes municipais e intermunicipais ampliam a cobertura terrestre."
            )}

            ${createRioLegendItem(
              "⛴",
              "Barcas",
              "Rede hidroviária que conecta a capital a outros pontos da região."
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

            ${createRioSystemCard(
              "🚇",
              "MetrôRio",
              "Estrutura importantes eixos urbanos da capital.",
              "Linhas 1, 2 e 4"
            )}

            ${createRioSystemCard(
              "🚆",
              "TrensRJ",
              "Rede ferroviária de grande alcance na capital e Região Metropolitana.",
              "5 ramais principais + extensões"
            )}

            ${createRioSystemCard(
              "🚍",
              "BRT · MOBI-Rio",
              "Sistema municipal estruturado em grandes corredores.",
              "Transoeste · Transcarioca · Transolímpica · Transbrasil"
            )}

            ${createRioSystemCard(
              "🚋",
              "VLT Carioca",
              "Conecta pontos estratégicos do Centro e Região Portuária.",
              "4 linhas"
            )}

            ${createRioSystemCard(
              "🚌",
              "Ônibus",
              "Complementam a cobertura municipal e metropolitana.",
              "Municipais + intermunicipais"
            )}

            ${createRioSystemCard(
              "⛴",
              "Barcas Rio",
              "Estrutura algumas ligações hidroviárias da região.",
              "Praça XV é o principal terminal na capital"
            )}

          </div>

        </section>


        <!-- ==================================================
             METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            MetrôRio
          </h4>


          <div class="lines-grid">

            ${createLineMiniCard(
              "#e47d2a",
              "1",
              "Linha 1",
              "Metrô",
              "Uruguai/Tijuca ↔ General Osório/Ipanema",
              "MetrôRio"
            )}

            ${createLineMiniCard(
              "#61a744",
              "2",
              "Linha 2",
              "Metrô",
              "Pavuna ↔ Botafogo",
              "MetrôRio"
            )}

            ${createLineMiniCard(
              "#f3c323",
              "4",
              "Linha 4",
              "Metrô",
              "General Osório/Ipanema ↔ Jardim Oceânico/Barra",
              "MetrôRio"
            )}

          </div>


          <div class="fare-note">

            <strong>
              Parte da operação
              também aparece
              como Linha 1/4.
            </strong>

            Isso permite
            a continuidade
            entre o eixo
            da Linha 1
            e Jardim Oceânico,
            na Barra da Tijuca.

          </div>

        </section>


        <!-- ==================================================
             TRENS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Trens metropolitanos
          </h4>

          <p class="panel-intro">
            A TrensRJ
            estrutura deslocamentos
            entre diferentes áreas
            da capital,
            Zona Oeste,
            Baixada Fluminense
            e outros municípios
            da Região Metropolitana.
          </p>


          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Deodoro
              </strong>

              <p>
                Um dos principais
                ramais ferroviários
                da rede.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Santa Cruz
              </strong>

              <p>
                Estrutura
                grande parte
                do eixo ferroviário
                da Zona Oeste.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Japeri
              </strong>

              <p>
                Conecta a capital
                à Baixada Fluminense
                e a Japeri.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Belford Roxo
              </strong>

              <p>
                Atende
                parte importante
                da Baixada.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Saracuruna
              </strong>

              <p>
                Estrutura
                o eixo ferroviário
                em direção
                a Duque de Caxias.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             EXTENSÕES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Extensões ferroviárias
          </h4>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Paracambi
              </strong>

              <p>
                Extensão relacionada
                ao eixo
                de Japeri.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Vila Inhomirim
              </strong>

              <p>
                Integra
                a estrutura
                ferroviária metropolitana.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Guapimirim
              </strong>

              <p>
                Também faz parte
                das extensões
                da rede.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             BRT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            BRT · MOBI-Rio
          </h4>

          <p class="panel-intro">
            O BRT
            está organizado
            em quatro grandes corredores.

            Cada corredor
            reúne diferentes
            serviços e linhas.
          </p>


          <div class="lines-grid">

            ${createRioCorridorCard(
              "T",
              "Transoeste",
              "Estrutura deslocamentos pela Barra, Recreio, Santa Cruz, Campo Grande e outras áreas da Zona Oeste.",
              "#dc5a32"
            )}

            ${createRioCorridorCard(
              "C",
              "Transcarioca",
              "Conecta Barra, Madureira, áreas da Zona Norte e o eixo relacionado ao Galeão.",
              "#397ec0"
            )}

            ${createRioCorridorCard(
              "O",
              "Transolímpica",
              "Conecta diferentes áreas da Zona Oeste e importantes terminais.",
              "#80ae43"
            )}

            ${createRioCorridorCard(
              "B",
              "Transbrasil",
              "Estrutura o corredor da Avenida Brasil em direção ao Terminal Gentileza.",
              "#dfa824"
            )}

          </div>


          <div class="visitor-alert">

            <strong>
              Corredor não é linha.
            </strong>

            Dentro de cada corredor
            existem serviços
            com diferentes
            padrões de parada.

            A escolha da linha específica
            pertence ao planejamento
            do trajeto.

          </div>

        </section>


        <!-- ==================================================
             VLT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            VLT Carioca
          </h4>

          <p class="panel-intro">
            O VLT
            complementa principalmente
            a mobilidade
            no Centro
            e na Região Portuária.
          </p>


          <div class="lines-grid">

            ${createLineMiniCard(
              "#2476aa",
              "1",
              "Linha 1",
              "VLT",
              "Santos Dumont ↔ Terminal Gentileza",
              "Azul"
            )}

            ${createLineMiniCard(
              "#579b58",
              "2",
              "Linha 2",
              "VLT",
              "Praça XV ↔ Praia Formosa",
              "Verde"
            )}

            ${createLineMiniCard(
              "#d8af2d",
              "3",
              "Linha 3",
              "VLT",
              "Santos Dumont ↔ Central",
              "Amarela"
            )}

            ${createLineMiniCard(
              "#e58432",
              "4",
              "Linha 4",
              "VLT",
              "Praça XV ↔ Terminal Gentileza",
              "Laranja"
            )}

          </div>

        </section>


        <!-- ==================================================
             BARCAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Barcas
          </h4>


          <div class="answer-block">

            <strong>
              A Praça XV
              é o principal
              terminal hidroviário
              da capital.
            </strong>

            <p>
              A rede conecta
              o Centro do Rio
              a diferentes destinos
              por via aquática,
              incluindo Niterói,
              Paquetá
              e Ilha do Governador.
            </p>

          </div>

        </section>


        <!-- ==================================================
             MUNICIPAL X METROPOLITANO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Municipal e metropolitano
          </h4>


          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Dentro da capital
              </span>

              <strong>
                Rede municipal
              </strong>

              <p>
                BRT,
                VLT
                e ônibus municipais
                estruturam parte
                da mobilidade local.
              </p>

              <span class="route-compare-result">
                Município do Rio
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Região Metropolitana
              </span>

              <strong>
                Redes metropolitanas
              </strong>

              <p>
                Trens,
                barcas
                e ônibus intermunicipais
                conectam
                diferentes municípios.
              </p>

              <span class="route-compare-result">
                Estado do Rio
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             CONEXÕES IMPORTANTES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Conexões que ajudam
            a entender a rede
          </h4>


          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🚆</span>

              <strong>
                Central do Brasil
              </strong>

              <p>
                Trem,
                metrô,
                VLT
                e ônibus
                se relacionam
                nessa área.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                Jardim Oceânico
              </strong>

              <p>
                Importante conexão
                entre metrô
                e BRT
                na Barra.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🔄</span>

              <strong>
                Vicente de Carvalho
              </strong>

              <p>
                Outra referência
                de conexão
                entre metrô
                e BRT.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚋</span>

              <strong>
                Terminal Gentileza
              </strong>

              <p>
                Integra BRT,
                VLT
                e ônibus municipais.
              </p>

            </article>


            <article class="bus-system-card">

              <span>⛴️</span>

              <strong>
                Praça XV
              </strong>

              <p>
                Relaciona
                barcas,
                VLT
                e a mobilidade
                do Centro.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🌼</span>

              <strong>
                Pedro Fernandes
              </strong>

              <p>
                Integra
                parte da rede
                intermunicipal
                à estrutura municipal.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             CENTRAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Central do Brasil
          </h4>


          <div class="answer-block">

            <strong>
              É uma das principais
              referências intermodais
              da cidade.
            </strong>

            <p>
              A região reúne
              a principal estação
              ferroviária da capital
              e conexões
              com metrô,
              VLT
              e ônibus.
            </p>

          </div>

        </section>


        <!-- ==================================================
             GENTILEZA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Terminal Intermodal Gentileza
          </h4>


          <div class="answer-block">

            <strong>
              É um dos principais
              pontos de integração
              da rede municipal.
            </strong>

            <p>
              O terminal reúne
              serviços de BRT,
              VLT
              e ônibus
              e funciona
              como importante
              ponto de distribuição
              na Região Portuária.
            </p>

          </div>

        </section>


        <!-- ==================================================
             COMO AS REDES SE RELACIONAM
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Uma metrópole,
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
                urbanos da capital.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Trem
              </strong>

              <p>
                Amplia
                o alcance ferroviário
                pela capital
                e Região Metropolitana.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                BRT
              </strong>

              <p>
                Estrutura
                grandes corredores
                de ônibus municipais.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                VLT
              </strong>

              <p>
                Complementa
                a mobilidade
                do Centro
                e da Região Portuária.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Ônibus
              </strong>

              <p>
                Ampliam
                a cobertura
                municipal
                e intermunicipal.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Barcas
              </strong>

              <p>
                Criam
                conexões hidroviárias
                entre diferentes
                áreas da região.
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
                dentro da cidade
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
                qual sistema
                estrutura
                aquela área.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Procure conexões
              </strong>

              <p>
                Veja onde
                metrô,
                trem,
                BRT,
                VLT,
                ônibus
                ou barcas
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

            Linha específica,
            sentido,
            horários,
            integração tarifária,
            Galeão,
            BUM,
            barcas,
            trens,
            comparação de rotas,
            operação noturna
            e alterações no dia
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
                Eixos urbanos
                importantes
                da capital.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚆</span>

              <strong>
                Trem
              </strong>

              <p>
                Capital
                e Região Metropolitana.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                BRT
              </strong>

              <p>
                Grandes corredores
                municipais.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚋</span>

              <strong>
                VLT
              </strong>

              <p>
                Centro
                e Região Portuária.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Ônibus
              </strong>

              <p>
                Cobertura
                complementar.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⛴️</span>

              <strong>
                Barcas
              </strong>

              <p>
                Ligações
                hidroviárias.
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
            href="https://www.rj.gov.br/transporte/node/797"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mapa Metropolitano · Governo do RJ
          </a>


          <a
            class="official-link"
            href="https://www.metrorio.com.br/VadeMetro/MapaInterativo"
            target="_blank"
            rel="noopener noreferrer"
          >
            MetrôRio
          </a>


          <a
            class="official-link"
            href="https://www.trensrj.com.br/pt/mapa-de-linhas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mapa ferroviário · TrensRJ
          </a>


          <a
            class="official-link"
            href="https://mobi-rio.rio.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BRT · MOBI-Rio
          </a>


          <a
            class="official-link"
            href="https://trilhos.motiva.com.br/vltrio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VLT Carioca
          </a>


          <a
            class="official-link"
            href="https://barcasrio.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Barcas Rio
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

window.openRioNetworkMap =
  openRioNetworkMap;
