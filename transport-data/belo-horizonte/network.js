// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — BELO HORIZONTE
// MÓDULO: REDE DE TRANSPORTE
// ============================================================

window.BELO_HORIZONTE_TRANSPORT_MODULES =
  window.BELO_HORIZONTE_TRANSPORT_MODULES || {};


const BH_METRO_MAP_URL =
  "/images/Mapa_MetroBH.jpg";


// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function createBhSystemCard(
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


function createBhLegendItem(
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

function openBhMetroMap() {

  if (
    document.getElementById(
      "bhMetroMapLightbox"
    )
  ) {
    return;
  }


  const lightbox =
    document.createElement("div");


  lightbox.id =
    "bhMetroMapLightbox";


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
      id="closeBhMetroMap"
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
      src="${BH_METRO_MAP_URL}"
      alt="Mapa ampliado do Metrô de Belo Horizonte"
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
          "closeBhMetroMap"
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

window.BELO_HORIZONTE_TRANSPORT_MODULES["network"] = {

  kicker:
    "Belo Horizonte · visão da rede",

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
            Use o mapa para entender
            a estrutura ferroviária
            de Belo Horizonte,
            a Linha 1 atualmente disponível
            e a expansão prevista
            com a Linha 2.
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
              src="${BH_METRO_MAP_URL}"
              alt="Mapa do Metrô de Belo Horizonte"
              loading="lazy"
              style="
                display:block;
                width:100%;
                height:auto;
                cursor:zoom-in;
              "
              onclick="openBhMetroMap()"
            />

          </div>


          <div class="official-map-actions">

            <button
              class="map-zoom-button"
              type="button"
              onclick="openBhMetroMap()"
            >
              Ampliar mapa
            </button>


            <a
              class="official-link"
              href="https://www.metrobh.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Metrô BH
            </a>

          </div>


          <div class="visitor-alert">

            <strong>
              O mapa mostra apenas
              uma parte da mobilidade
              de Belo Horizonte.
            </strong>

            A cidade também depende
            do MOVE,
            ônibus convencionais,
            Sistema Suplementar
            e linhas metropolitanas.

            Para transformar
            essa estrutura
            em um deslocamento específico,
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
            A mobilidade de Belo Horizonte
            combina sistemas municipais,
            metrô
            e transporte metropolitano.

            Cada um deles
            cumpre uma função diferente.
          </p>


          <div class="legend-grid">

            ${createBhLegendItem(
              "M",
              "Metrô",
              "Rede ferroviária que estrutura parte dos deslocamentos entre Contagem e Belo Horizonte."
            )}

            ${createBhLegendItem(
              "MOVE",
              "MOVE",
              "Sistema BRT municipal com corredores, linhas troncais, alimentadoras e estações."
            )}

            ${createBhLegendItem(
              "BUS",
              "Ônibus municipais",
              "Rede de superfície que amplia a cobertura para bairros e regiões fora dos grandes eixos."
            )}

            ${createBhLegendItem(
              "S",
              "Sistema Suplementar",
              "Rede municipal complementar operada em trajetos específicos."
            )}

            ${createBhLegendItem(
              "RMBH",
              "Metropolitano",
              "Linhas estaduais que conectam Belo Horizonte a outros municípios da Região Metropolitana."
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

            ${createBhSystemCard(
              "🚇",
              "Metrô",
              "Principal eixo ferroviário da rede.",
              "Linha 1 · Novo Eldorado ↔ Vilarinho"
            )}

            ${createBhSystemCard(
              "🚍",
              "MOVE",
              "Sistema BRT que estrutura importantes corredores municipais.",
              "Troncais · alimentadoras · estações"
            )}

            ${createBhSystemCard(
              "🚌",
              "Ônibus convencional",
              "Amplia a cobertura municipal entre bairros e regiões da cidade.",
              "Rede municipal"
            )}

            ${createBhSystemCard(
              "S",
              "Suplementar",
              "Serviço municipal complementar.",
              "Trajetos específicos"
            )}

            ${createBhSystemCard(
              "🌆",
              "Metropolitano",
              "Conecta Belo Horizonte a outros municípios da RMBH.",
              "Sistema estadual"
            )}

          </div>

        </section>


        <!-- ==================================================
             LINHA 1
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Linha 1 do Metrô
          </h4>

          <p class="panel-intro">
            A Linha 1
            é a estrutura metroviária
            atualmente disponível
            para o passageiro.

            Ela conecta
            Novo Eldorado,
            em Contagem,
            a Vilarinho,
            em Belo Horizonte.
          </p>


          <div class="lines-grid">

            ${createLineMiniCard(
              "#e87924",
              "1",
              "Linha 1",
              "Metrô",
              "Novo Eldorado ↔ Vilarinho",
              "20 estações"
            )}

          </div>

        </section>


        <!-- ==================================================
             HUBS DO METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Pontos que ajudam
            a entender a Linha 1
          </h4>


          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Novo Eldorado
              </strong>

              <p>
                Terminal da Linha 1
                no município
                de Contagem.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🏙️</span>

              <strong>
                Central
              </strong>

              <p>
                Importante referência
                ferroviária
                para a região central
                de Belo Horizonte.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🔄</span>

              <strong>
                São Gabriel
              </strong>

              <p>
                Ponto importante
                de conexão
                entre metrô,
                MOVE
                e ônibus.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                Vilarinho
              </strong>

              <p>
                Terminal da Linha 1
                com conexão
                ao MOVE
                e ao vetor Norte.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             LINHA 2
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Linha 2 do Metrô
          </h4>


          <div class="visitor-alert">

            <strong>
              A Linha 2 está em implantação.
            </strong>

            Ela faz parte
            da expansão
            da rede metroviária
            em direção ao Barreiro,
            mas ainda não deve
            ser lida
            como uma linha totalmente disponível
            para o passageiro.

          </div>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Nova Suíça
              </strong>

              <p>
                Ponto previsto
                de conexão
                da nova linha.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Barreiro
              </strong>

              <p>
                Extremo previsto
                do novo corredor.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                10,5 km
              </strong>

              <p>
                Extensão prevista
                da Linha 2.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                7 estações
              </strong>

              <p>
                Estrutura prevista
                para o novo eixo.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             MOVE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            MOVE
          </h4>


          <div class="answer-block">

            <strong>
              É o principal sistema BRT
              de Belo Horizonte.
            </strong>

            <p>
              O MOVE organiza
              parte importante
              dos deslocamentos
              por ônibus
              através de corredores estruturais,
              linhas troncais,
              alimentadoras
              e estações de integração.
            </p>

          </div>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Alimentadoras
              </strong>

              <p>
                Ligam bairros
                às estações
                e aos corredores principais.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Troncais
              </strong>

              <p>
                Percorrem
                os principais eixos
                estruturais
                do sistema.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Estações de integração
              </strong>

              <p>
                Concentram conexões
                entre diferentes linhas.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Estações de transferência
              </strong>

              <p>
                Organizam trocas
                ao longo
                dos corredores.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             CORREDORES MOVE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Principais eixos do MOVE
          </h4>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Antônio Carlos
              </strong>

              <p>
                Importante corredor
                entre Área Central,
                Pampulha
                e vetor Norte.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Cristiano Machado
              </strong>

              <p>
                Estrutura parte
                dos deslocamentos
                em direção
                ao vetor Nordeste.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Pedro I
              </strong>

              <p>
                Integra
                o conjunto
                de corredores
                do vetor Norte.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Vilarinho
              </strong>

              <p>
                Importante eixo
                relacionado
                à região
                de Venda Nova.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             HUBS MOVE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Conexões que ajudam
            a entender o MOVE
          </h4>


          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                Venda Nova
              </strong>

              <p>
                Importante estação
                de integração
                do sistema.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Vilarinho
              </strong>

              <p>
                Conecta
                MOVE
                e metrô.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                São Gabriel
              </strong>

              <p>
                Conecta metrô,
                MOVE
                e ônibus.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                Pampulha
              </strong>

              <p>
                Importante estação
                para a região
                da Pampulha.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚌</span>

              <strong>
                Barreiro
              </strong>

              <p>
                Estação BHBUS
                na região
                do Barreiro.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚌</span>

              <strong>
                Diamante
              </strong>

              <p>
                Outra estação BHBUS
                importante
                na região
                do Barreiro.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ÔNIBUS MUNICIPAIS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ônibus municipais
          </h4>


          <div class="answer-block">

            <strong>
              A rede municipal
              vai além do MOVE.
            </strong>

            <p>
              Linhas convencionais
              atendem bairros
              e regiões
              que não ficam diretamente
              nos corredores
              do metrô
              ou do BRT.

              Elas complementam
              a estrutura principal
              da cidade.
            </p>

          </div>

        </section>


        <!-- ==================================================
             SUPLEMENTAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Sistema Suplementar
          </h4>


          <div class="answer-block">

            <strong>
              É uma rede municipal
              complementar.
            </strong>

            <p>
              O Sistema Suplementar
              utiliza veículos menores
              e atende trajetos específicos
              que complementam
              a rede convencional.
            </p>

          </div>

        </section>


        <!-- ==================================================
             METROPOLITANO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Transporte metropolitano
          </h4>


          <div class="visitor-alert">

            <strong>
              A Região Metropolitana
              possui uma rede diferente
              da rede municipal
              de Belo Horizonte.
            </strong>

            As linhas metropolitanas
            são estaduais
            e conectam BH
            a outros municípios
            da RMBH.

          </div>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Municipal
              </strong>

              <p>
                MOVE,
                ônibus convencional
                e Suplementar.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Metropolitano
              </strong>

              <p>
                Linhas estaduais
                entre municípios
                da RMBH.
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
                Estrutura ferroviária
                da rede.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                MOVE
              </strong>

              <p>
                Estrutura os principais
                corredores BRT.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Convencional
              </strong>

              <p>
                Amplia a cobertura
                para bairros
                e outros eixos.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Suplementar
              </strong>

              <p>
                Complementa
                trajetos municipais
                específicos.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Metropolitano
              </strong>

              <p>
                Faz a ligação
                entre diferentes municípios
                da RMBH.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO USAR A REDE
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
                sua origem
                e destino
                estão na cidade.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Identifique o eixo
              </strong>

              <p>
                Observe
                se o local
                está próximo
                ao metrô,
                MOVE
                ou outra rede.
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
                MOVE
                e ônibus
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
             NETWORK X PLANNER
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            A rede mostra a estrutura.
            O Planner mostra a viagem.
          </h4>


          <div class="visitor-alert">

            <strong>
              Para decidir
              como realmente chegar
              ao destino,
              não dependa
              apenas do mapa.
            </strong>

            Linhas específicas,
            horários,
            integrações,
            pagamentos,
            Madrugão,
            domingos,
            rede metropolitana,
            tempo real
            e comparação
            entre opções
            estão detalhados
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
                Metrô
              </strong>

              <p>
                Estrutura ferroviária
                da rede.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                MOVE
              </strong>

              <p>
                Principal sistema BRT
                municipal.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Convencional
              </strong>

              <p>
                Amplia a cobertura
                da cidade.
              </p>

            </article>


            <article class="planner-check-card">

              <span>S</span>

              <strong>
                Suplementar
              </strong>

              <p>
                Complementa
                trajetos municipais.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🌆</span>

              <strong>
                Metropolitano
              </strong>

              <p>
                Conecta BH
                a outros municípios.
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
            href="https://www.metrobh.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metrô BH
          </a>


          <a
            class="official-link"
            href="https://prefeitura.pbh.gov.br/sumob"
            target="_blank"
            rel="noopener noreferrer"
          >
            SUMOB · Prefeitura de Belo Horizonte
          </a>


          <a
            class="official-link"
            href="https://prefeitura.pbh.gov.br/sumob/onibus/estacoes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Estações · PBH
          </a>


          <a
            class="official-link"
            href="https://www.mg.gov.br/servico/obter-informacoes-sobre-o-transporte-coletivo-da-regiao-metropolitana-de-belo-horizonte"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transporte metropolitano · Governo de Minas
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

window.openBhMetroMap =
  openBhMetroMap;
