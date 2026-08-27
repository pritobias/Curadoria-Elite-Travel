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


function createMexicoCityMetroLine(
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
        🚇 Metro
      </span>

      <span>
        ${description}
      </span>

      <small>
        Sistema de Transporte Colectivo · Metro CDMX
      </small>

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
    "Cidade do México · visão completa",

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
            Este mapa reúne
            os principais sistemas
            de transporte público
            da Cidade do México
            e ajuda a visualizar
            conexões entre diferentes redes.

            Use-o para entender
            como Metro,
            Metrobús,
            Trolebús,
            Tren Ligero,
            Cablebús
            e outros sistemas
            se relacionam.
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
              Use o mapa como referência da estrutura da rede.
            </strong>

            A Rede de Movilidad Integrada
            continua recebendo
            ampliações,
            modernizações
            e alterações operacionais.

            Para uma viagem específica,
            confirme também
            a situação atual
            da linha ou sistema
            que pretende utilizar.

          </div>

        </section>


        <!-- ==================================================
             ENTENDA A REDE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Entenda a rede
            da Cidade do México
          </h4>

          <p class="panel-intro">
            A mobilidade da cidade
            não depende apenas do Metro.

            Existe uma rede integrada
            formada por sistemas
            ferroviários,
            corredores de ônibus,
            ônibus convencionais,
            transporte elétrico
            e teleféricos urbanos.
          </p>


          <div class="legend-grid">

            ${createMexicoCityLegendItem(
              "M",
              "Metro",
              "Rede ferroviária urbana do Sistema de Transporte Colectivo."
            )}

            ${createMexicoCityLegendItem(
              "MB",
              "Metrobús",
              "Rede BRT com sete linhas e estações próprias."
            )}

            ${createMexicoCityLegendItem(
              "RTP",
              "RTP",
              "Rede de ônibus convencionais da Cidade do México."
            )}

            ${createMexicoCityLegendItem(
              "TB",
              "Trolebús",
              "Rede de ônibus elétricos operada pelo STE."
            )}

            ${createMexicoCityLegendItem(
              "TL",
              "Tren Ligero",
              "Serviço ferroviário entre Tasqueña e Xochimilco."
            )}

            ${createMexicoCityLegendItem(
              "CB",
              "Cablebús",
              "Sistema de teleféricos urbanos integrado ao transporte público."
            )}

            ${createMexicoCityLegendItem(
              "TS",
              "Trens metropolitanos",
              "Serviços ferroviários que conectam a cidade a áreas metropolitanas."
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
              "Principal rede ferroviária urbana da Cidade do México.",
              "12 linhas · 195 estações"
            )}

            ${createMexicoCitySystemCard(
              "🚌",
              "Metrobús",
              "Corredores estruturados de ônibus com estações próprias.",
              "Linhas 1 a 7"
            )}

            ${createMexicoCitySystemCard(
              "🚍",
              "RTP",
              "Rede de ônibus que complementa os sistemas de maior capacidade.",
              "Ordinário · Expresso · serviços especiais"
            )}

            ${createMexicoCitySystemCard(
              "🚎",
              "Trolebús",
              "Rede elétrica de superfície operada pelo STE.",
              "Linhas e corredores próprios"
            )}

            ${createMexicoCitySystemCard(
              "🚋",
              "Tren Ligero",
              "Sistema ferroviário importante para o sul da cidade.",
              "Tasqueña · Xochimilco"
            )}

            ${createMexicoCitySystemCard(
              "🚡",
              "Cablebús",
              "Teleférico urbano integrado à rede pública.",
              "Conexões com áreas de relevo acentuado"
            )}

            ${createMexicoCitySystemCard(
              "🚆",
              "Tren Suburbano / Tren Felipe Ángeles",
              "Serviços ferroviários metropolitanos com conexão em Buenavista.",
              "Buenavista · Cuautitlán · AIFA"
            )}

          </div>

        </section>


        <!-- ==================================================
             METRO — VISÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metro
          </h4>

          <p class="panel-intro">
            O Metro
            é uma das formas
            mais importantes
            de atravessar
            grandes distâncias
            evitando o trânsito de superfície.

            A rede possui
            12 linhas
            identificadas
            por número ou letra.
          </p>


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
                Incluindo
                estações de passagem,
                correspondência
                e terminais.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Correspondências
              </span>

              <strong>
                48
              </strong>

              <p>
                Pontos
                onde é possível
                mudar de linha.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO LER METRO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como ler o Metro
          </h4>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🔢</span>

              <strong>
                Linha
              </strong>

              <p>
                Cada linha possui
                número ou letra
                e uma cor própria.
              </p>

            </article>


            <article class="planner-check-card">

              <span>↔</span>

              <strong>
                Terminal
              </strong>

              <p>
                O terminal
                identifica
                o sentido
                do trem.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔀</span>

              <strong>
                Correspondência
              </strong>

              <p>
                O símbolo
                indica conexão
                entre linhas.
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
                e símbolo visual.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              O terminal é a referência
              para o sentido.
            </strong>

            Se você estiver
            na Linha 3,
            por exemplo,
            procure saber
            se deve seguir
            em direção
            a Indios Verdes
            ou Universidad.

            Você não precisa
            ir até o terminal.

            O nome serve apenas
            para indicar o sentido.

          </div>

        </section>


        <!-- ==================================================
             LINHAS METRO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Linhas do Metro
          </h4>

          <p class="panel-intro">
            Estas são
            as 12 linhas
            estruturais da rede.

            Antes da viagem,
            confira a operação atual,
            especialmente em linhas
            submetidas a obras
            ou modernização.
          </p>


          <div class="lines-grid">

            ${createMexicoCityMetroLine(
              "#e66b9c",
              "1",
              "Observatorio ↔ Pantitlán",
              "Eixo leste-oeste por áreas centrais da cidade."
            )}

            ${createMexicoCityMetroLine(
              "#005eb8",
              "2",
              "Cuatro Caminos ↔ Tasqueña",
              "Importante eixo norte-sul com passagem pelo Centro."
            )}

            ${createMexicoCityMetroLine(
              "#a6a61d",
              "3",
              "Indios Verdes ↔ Universidad",
              "Grande eixo norte-sul da rede."
            )}

            ${createMexicoCityMetroLine(
              "#6ec4e8",
              "4",
              "Martín Carrera ↔ Santa Anita",
              "Linha elevada no eixo oriental da área central."
            )}

            ${createMexicoCityMetroLine(
              "#f2c400",
              "5",
              "Politécnico ↔ Pantitlán",
              "Atende Terminal Aérea e importantes conexões do nordeste."
            )}

            ${createMexicoCityMetroLine(
              "#d71920",
              "6",
              "El Rosario ↔ Martín Carrera",
              "Eixo no norte da cidade."
            )}

            ${createMexicoCityMetroLine(
              "#e87522",
              "7",
              "El Rosario ↔ Barranca del Muerto",
              "Linha no eixo oeste da cidade."
            )}

            ${createMexicoCityMetroLine(
              "#008f4c",
              "8",
              "Garibaldi / Lagunilla ↔ Constitución de 1917",
              "Conecta o Centro ao sudeste."
            )}

            ${createMexicoCityMetroLine(
              "#7a4b2a",
              "9",
              "Tacubaya ↔ Pantitlán",
              "Eixo leste-oeste ao sul do Centro."
            )}

            ${createMexicoCityMetroLine(
              "#c4a6cf",
              "A",
              "Pantitlán ↔ La Paz",
              "Linha ferroviária em direção ao Estado do México."
            )}

            ${createMexicoCityMetroLine(
              "#7b7f80",
              "B",
              "Buenavista ↔ Ciudad Azteca",
              "Liga o Centro-norte a áreas metropolitanas a nordeste."
            )}

            ${createMexicoCityMetroLine(
              "#b59a00",
              "12",
              "Mixcoac ↔ Tláhuac",
              "Linha do sul e sudeste da cidade."
            )}

          </div>

        </section>


        <!-- ==================================================
             CORRESPONDÊNCIAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Correspondências no Metro
          </h4>


          <div class="answer-block">

            <strong>
              Você pode mudar de linha
              sem pagar novamente
              enquanto permanece
              dentro da área tarifada.
            </strong>

            <p>
              As estações
              de correspondência
              conectam duas
              ou mais linhas
              do Metro.

              Siga a sinalização
              para a nova linha
              e depois confirme
              novamente
              o terminal
              que indica seu sentido.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Algumas correspondências
              exigem caminhada.
            </strong>

            Em grandes estações,
            a troca pode envolver
            corredores,
            escadas,
            rampas
            e diferentes níveis.

            Não calcule
            o tempo da viagem
            apenas pelo número
            de estações.

          </div>

        </section>


        <!-- ==================================================
             GRANDES HUBS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Grandes pontos de conexão
          </h4>


          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Pantitlán
              </strong>

              <p>
                Um dos maiores
                hubs da cidade,
                reunindo as linhas
                1,
                5,
                9
                e A do Metro,
                além de transporte
                de superfície.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Tacubaya
              </strong>

              <p>
                Conexão
                entre as linhas
                1,
                7
                e 9,
                além de ônibus
                para outras áreas.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Chabacano
              </strong>

              <p>
                Integra
                as linhas
                2,
                8
                e 9.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Centro Médico
              </strong>

              <p>
                Conexão
                entre as linhas
                3
                e 9,
                próxima a áreas
                de Roma Sur.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Hidalgo
              </strong>

              <p>
                Integra
                as linhas
                2
                e 3
                e fica próxima
                à Alameda Central.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Pino Suárez
              </strong>

              <p>
                Conecta
                as linhas
                1
                e 2,
                próximo
                ao Centro Histórico.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚆</span>

              <strong>
                Buenavista
              </strong>

              <p>
                Metro,
                Metrobús
                e serviços ferroviários
                metropolitanos
                convergem na região.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Tasqueña
              </strong>

              <p>
                Metro Linha 2,
                Tren Ligero
                e Terminal Central
                de Autobuses del Sur.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             PANTITLAN
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Pantitlán
          </h4>


          <div class="answer-block">

            <strong>
              É um dos maiores
              pontos de integração
              da rede.
            </strong>

            <p>
              Pantitlán
              conecta as linhas
              1,
              5,
              9
              e A do Metro
              e recebe
              diferentes serviços
              de transporte
              de superfície.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Reserve tempo
              para a transferência.
            </strong>

            O complexo é grande
            e possui
            alto volume
            de passageiros.

            Saber apenas
            “trocar em Pantitlán”
            não significa
            que a mudança
            será instantânea.

          </div>

        </section>


        <!-- ==================================================
             BUENAVISTA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Buenavista
          </h4>

          <p class="panel-intro">
            Buenavista
            tornou-se um dos hubs
            mais importantes
            para entender
            a conexão
            entre a Cidade do México
            e a região metropolitana.
          </p>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                Metro
              </strong>

              <p>
                Terminal
                da Linha B.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Metrobús
              </strong>

              <p>
                Diferentes serviços
                conectam-se
                à região.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚆</span>

              <strong>
                Tren Suburbano
              </strong>

              <p>
                Conexão ferroviária
                metropolitana
                em direção
                a Cuautitlán.
              </p>

            </article>


            <article class="planner-check-card">

              <span>✈️</span>

              <strong>
                AIFA
              </strong>

              <p>
                O Tren Felipe Ángeles
                também utiliza
                Buenavista
                como referência
                na Cidade do México.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             METROBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metrobús
          </h4>

          <p class="panel-intro">
            O Metrobús
            funciona em corredores
            estruturados,
            com estações próprias
            e sete linhas.

            Para um visitante,
            costuma ser
            mais simples
            de interpretar
            do que uma rede
            convencional de ônibus.
          </p>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Linha 1
              </strong>

              <p>
                Corredor
                de Insurgentes.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Linha 2
              </strong>

              <p>
                Eixo transversal
                no sul
                da região central.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Linha 3
              </strong>

              <p>
                Conecta
                áreas do norte,
                Centro
                e sul.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Linha 4
              </strong>

              <p>
                Centro Histórico
                e serviço
                para o AICM.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Linha 5
              </strong>

              <p>
                Grande corredor
                no eixo oriental.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Linha 6
              </strong>

              <p>
                Corredor
                no norte
                da cidade.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Linha 7
              </strong>

              <p>
                Paseo de la Reforma
                e áreas turísticas.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             METROBUS 1
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metrobús Linha 1 · Insurgentes
          </h4>


          <div class="answer-block">

            <strong>
              Um dos corredores
              mais úteis para visitantes.
            </strong>

            <p>
              A Avenida de los Insurgentes
              atravessa uma extensa
              parte da cidade.

              O corredor passa
              por regiões próximas
              a Reforma,
              Roma,
              Condesa,
              Del Valle
              e áreas
              mais ao sul.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Confira o destino
              do veículo.
            </strong>

            Dentro da Linha 1
            existem serviços
            que não necessariamente
            percorrem
            o corredor inteiro.

          </div>

        </section>


        <!-- ==================================================
             METROBUS 4
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metrobús Linha 4 · Centro e AICM
          </h4>


          <div class="answer-block">

            <strong>
              É uma linha diferente
              do padrão dos grandes
              corredores centrais.
            </strong>

            <p>
              Seus serviços
              circulam pela região
              do Centro Histórico
              e incluem
              conexão
              com Terminal 1
              e Terminal 2
              do AICM.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Nem todo veículo
              da Linha 4
              vai para o aeroporto.
            </strong>

            Confira
            o destino indicado
            no serviço
            antes de embarcar.

          </div>

        </section>


        <!-- ==================================================
             METROBUS 7
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metrobús Linha 7 · Reforma
          </h4>


          <div class="answer-block">

            <strong>
              Uma referência útil
              para o Paseo de la Reforma.
            </strong>

            <p>
              A linha percorre
              grande parte
              de um dos principais
              corredores turísticos
              da Cidade do México.

              Pode ser útil
              para áreas próximas
              a Chapultepec,
              Reforma
              e Centro.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Reforma recebe
              fechamentos temporários.
            </strong>

            Eventos,
            atividades esportivas,
            manifestações
            e outras intervenções
            podem modificar
            temporariamente
            a operação.

          </div>

        </section>


        <!-- ==================================================
             RTP
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            RTP
          </h4>

          <p class="panel-intro">
            A Red de Transporte
            de Pasajeros
            complementa
            Metro,
            Metrobús
            e outros sistemas
            com uma rede ampla
            de ônibus de superfície.
          </p>


          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Ordinário
              </span>

              <strong>
                Serviço local
              </strong>

              <p>
                Mais paradas
                ao longo
                das rotas.
              </p>

              <span class="route-compare-result">
                Rede de superfície
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Expresso
              </span>

              <strong>
                Menos paradas
              </strong>

              <p>
                Categoria
                voltada
                a deslocamentos
                mais diretos.
              </p>

              <span class="route-compare-result">
                Confira a rota
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Ecobús
              </span>

              <strong>
                Serviços específicos
              </strong>

              <p>
                Rotas
                com características
                próprias
                dentro da RTP.
              </p>

              <span class="route-compare-result">
                Consulte a linha
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Nochebús
              </span>

              <strong>
                Serviço noturno
              </strong>

              <p>
                Atende corredores
                determinados
                durante a madrugada.
              </p>

              <span class="route-compare-result">
                Cobertura limitada
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             SANTA FE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Santa Fe
          </h4>

          <p class="panel-intro">
            Santa Fe
            exige um pouco
            mais de atenção
            porque não possui
            a mesma cobertura
            direta de Metro
            encontrada
            em áreas centrais.
          </p>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                RTP
              </strong>

              <p>
                Pode participar
                de trajetos
                para a região.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                Tacubaya
              </strong>

              <p>
                Importante
                ponto de conexão
                para transporte
                de superfície.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                Auditorio
              </strong>

              <p>
                Também pode
                aparecer
                como ponto
                de conexão.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Pesquise o endereço exato.
            </strong>

            Santa Fe
            é uma região grande.

            Uma linha
            que chega
            a “Santa Fe”
            pode ainda deixar
            o passageiro
            distante do hotel,
            shopping
            ou edifício desejado.

          </div>

        </section>


        <!-- ==================================================
             TROLEBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Trolebús
          </h4>

          <p class="panel-intro">
            A rede de Trolebús
            é operada
            pelo Servicio
            de Transportes Eléctricos.

            Ela funciona
            como uma rede própria
            de transporte elétrico
            de superfície.
          </p>


          <div class="answer-block">

            <strong>
              Não confunda
              Trolebús com RTP.
            </strong>

            <p>
              Embora ambos
              utilizem veículos
              de superfície,
              pertencem
              a redes diferentes.

              O Trolebús
              possui linhas,
              paradas,
              corredores
              e tarifas próprias.
            </p>

          </div>

        </section>


        <!-- ==================================================
             TROLEBUS CORREDORES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Corredores importantes do Trolebús
          </h4>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Eje Central
              </strong>

              <p>
                Um dos corredores
                mais conhecidos
                da rede.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Chapultepec
              </strong>

              <p>
                Há linhas
                que conectam
                a região
                a outros eixos.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Tasqueña
              </strong>

              <p>
                Importante
                ponto intermodal
                no sul.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Constitución de 1917
              </strong>

              <p>
                Grande conexão
                no sudeste
                da cidade.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             TREN LIGERO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Tren Ligero
          </h4>


          <div class="answer-block">

            <strong>
              Tasqueña ↔ Xochimilco
            </strong>

            <p>
              O Tren Ligero
              é uma das conexões
              mais úteis
              para visitantes
              que pretendem
              chegar a Xochimilco
              utilizando
              transporte público.
            </p>

          </div>


          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Metro
              </span>

              <strong>
                Linha 2 → Tasqueña
              </strong>

              <p>
                Chegue
                ao terminal sul
                da Linha 2.
              </p>

              <span class="route-compare-result">
                Primeira etapa
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                STE
              </span>

              <strong>
                Tren Ligero
              </strong>

              <p>
                Continue
                até Xochimilco.
              </p>

              <span class="route-compare-result">
                Segunda etapa
              </span>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              A estação Xochimilco
              não é o embarcadouro.
            </strong>

            Se o seu objetivo
            é uma trajinera,
            confirme também
            como chegar
            ao embarcadouro
            específico
            escolhido.

          </div>

        </section>


        <!-- ==================================================
             CABLEBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Cablebús
          </h4>

          <p class="panel-intro">
            O Cablebús
            é parte
            do transporte público
            da Cidade do México.

            Ele foi criado
            para conectar
            áreas de relevo
            e bairros
            onde o transporte
            terrestre pode ser
            mais difícil.
          </p>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚡</span>

              <strong>
                Linha 1
              </strong>

              <p>
                Região norte
                da cidade,
                com conexão
                a Indios Verdes.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚡</span>

              <strong>
                Linha 2
              </strong>

              <p>
                Atende
                áreas do sudeste
                e conecta-se
                à região
                de Constitución de 1917.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚡</span>

              <strong>
                Linha 3
              </strong>

              <p>
                Atende
                Chapultepec
                e Los Pinos,
                ampliando o uso
                do sistema
                em área turística.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             CABLEBUS NAO ATRACAO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Cablebús não é apenas
            uma atração panorâmica
          </h4>


          <div class="visitor-alert">

            <strong>
              Ele é transporte público.
            </strong>

            Para quem visita
            a cidade,
            a vista pode ser
            interessante.

            Mas a lógica
            de funcionamento,
            tarifa
            e conexões
            pertence
            à rede urbana
            de mobilidade.

          </div>

        </section>


        <!-- ==================================================
             TREN SUBURBANO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Trem metropolitano
          </h4>

          <p class="panel-intro">
            Buenavista
            também conecta
            a Cidade do México
            a serviços ferroviários
            metropolitanos.
          </p>


          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Buenavista
              </strong>

              <p>
                Principal referência
                ferroviária
                dentro da CDMX.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Cuautitlán
              </strong>

              <p>
                Destino
                do corredor
                suburbano tradicional.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Lechería
              </strong>

              <p>
                Ponto importante
                da rede metropolitana
                e conexão
                para o ramal
                do AIFA.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                AIFA
              </strong>

              <p>
                O Tren Felipe Ángeles
                conecta o aeroporto
                a Buenavista.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             AIFA TRAIN
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Tren Felipe Ángeles · AIFA
          </h4>


          <div class="answer-block">

            <strong>
              AIFA ↔ Buenavista
            </strong>

            <p>
              O Tren Felipe Ángeles
              conecta
              a Terminal Intermodal
              do Aeroporto Internacional
              Felipe Ángeles
              à estação Buenavista
              na Cidade do México.
            </p>

          </div>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>✈️</span>

              <strong>
                AIFA
              </strong>

              <p>
                Estação integrada
                à área
                de transporte terrestre
                do aeroporto.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚆</span>

              <strong>
                Lechería
              </strong>

              <p>
                Ponto
                de conexão
                ferroviária.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🏙️</span>

              <strong>
                Buenavista
              </strong>

              <p>
                Chegada
                dentro da Cidade
                do México.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔀</span>

              <strong>
                Continuação
              </strong>

              <p>
                Depois,
                combine com
                Metro,
                Metrobús
                ou outro meio.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Buenavista
              pode não ser
              seu destino final.
            </strong>

            Inclua no planejamento
            o deslocamento
            entre Buenavista
            e seu hotel
            ou atração.

          </div>

        </section>


        <!-- ==================================================
             CENTRO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Centro Histórico
          </h4>

          <p class="panel-intro">
            O Centro
            possui grande oferta
            de transporte
            e também concentra
            atrações muito próximas
            umas das outras.
          </p>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Zócalo
              </strong>

              <p>
                Região atendida
                pela Linha 2
                do Metro.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Hidalgo
              </strong>

              <p>
                Linhas 2 e 3
                próximas
                à Alameda Central.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Bellas Artes
              </strong>

              <p>
                Conexão
                das linhas
                2 e 8.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Metrobús Linha 4
              </strong>

              <p>
                Também circula
                pela região central.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Compare transporte
              e caminhada.
            </strong>

            Em muitos deslocamentos
            dentro do Centro Histórico,
            caminhar pode ser
            mais simples
            do que fazer
            outra conexão.

          </div>

        </section>


        <!-- ==================================================
             REFORMA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Paseo de la Reforma
          </h4>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Metrobús 7
              </strong>

              <p>
                Grande referência
                de transporte
                ao longo
                de Reforma.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                Metro
              </strong>

              <p>
                Diferentes linhas
                cruzam
                ou chegam próximas
                ao corredor.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚶</span>

              <strong>
                Caminhada
              </strong>

              <p>
                Muitas atrações
                ficam relativamente
                próximas
                ao corredor.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ROMA CONDESA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Roma e Condesa
          </h4>


          <div class="answer-block">

            <strong>
              Não existe
              uma única estação
              que resolva
              toda a região.
            </strong>

            <p>
              Dependendo
              do endereço,
              sua melhor opção
              pode envolver
              Metro,
              Metrobús,
              ônibus
              ou caminhada.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Pesquise o endereço exato.
            </strong>

            “Roma”,
            “Roma Norte”,
            “Roma Sur”
            e “Condesa”
            cobrem uma área
            grande demais
            para escolher
            a estação
            apenas pelo nome
            do bairro.

          </div>

        </section>


        <!-- ==================================================
             CHAPULTEPEC
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Chapultepec
          </h4>

          <p class="panel-intro">
            Chapultepec
            é uma área extensa
            e possui
            diversos museus,
            atrações
            e acessos.
          </p>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                Metro
              </strong>

              <p>
                Há estações
                em diferentes lados
                da região.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Metrobús
              </strong>

              <p>
                Reforma
                pode ser útil
                dependendo
                da atração.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚡</span>

              <strong>
                Cablebús
              </strong>

              <p>
                A Linha 3
                também atende
                a área
                de Chapultepec.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Pesquise o museu
              ou atração específica.
            </strong>

            Museo Nacional
            de Antropología,
            Castillo de Chapultepec,
            Auditorio Nacional
            e Los Pinos
            não possuem
            exatamente
            o mesmo acesso.

          </div>

        </section>


        <!-- ==================================================
             COYOACAN
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Coyoacán
          </h4>


          <div class="answer-block">

            <strong>
              A estação
              pode não ficar
              ao lado
              do seu destino.
            </strong>

            <p>
              Para lugares
              como o centro
              de Coyoacán
              ou museus
              da região,
              muitas viagens
              exigem combinar
              Metro
              com caminhada,
              ônibus
              ou outro transporte.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não use apenas
              o nome “Coyoacán”
              para escolher
              a estação.
            </strong>

            Coloque no planejador
            o endereço
            ou atração
            onde você realmente
            pretende chegar.

          </div>

        </section>


        <!-- ==================================================
             XOCHIMILCO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Xochimilco
          </h4>


          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Metro
              </span>

              <strong>
                Linha 2
              </strong>

              <p>
                Vá em direção
                a Tasqueña.
              </p>

              <span class="route-compare-result">
                Etapa 1
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                STE
              </span>

              <strong>
                Tren Ligero
              </strong>

              <p>
                Continue
                até Xochimilco.
              </p>

              <span class="route-compare-result">
                Etapa 2
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Destino
              </span>

              <strong>
                Embarcadouro
              </strong>

              <p>
                Complete
                o último trecho
                conforme
                o embarcadouro escolhido.
              </p>

              <span class="route-compare-result">
                Etapa 3
              </span>

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
                AICM
              </span>

              <strong>
                Cidade do México
              </strong>

              <p>
                Metro Linha 5
                e Metrobús Linha 4
                fazem parte
                das opções públicas.
              </p>

              <span class="route-compare-result">
                Aeroporto urbano
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                AIFA
              </span>

              <strong>
                Santa Lucía
              </strong>

              <p>
                Conexão ferroviária,
                Mexibús,
                ônibus
                e outros meios
                terrestres.
              </p>

              <span class="route-compare-result">
                Planejamento próprio
              </span>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              AICM e AIFA
              são aeroportos diferentes.
            </strong>

            Antes de planejar
            qualquer transporte,
            confirme
            qual aeroporto
            aparece
            no seu bilhete.

          </div>

        </section>


        <!-- ==================================================
             AICM
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            AICM
          </h4>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>✈️</span>

              <strong>
                Terminal 1
              </strong>

              <p>
                Um dos dois
                terminais
                de passageiros.
              </p>

            </article>


            <article class="planner-check-card">

              <span>✈️</span>

              <strong>
                Terminal 2
              </strong>

              <p>
                Segundo terminal
                de passageiros.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                Metro Linha 5
              </strong>

              <p>
                Terminal Aérea
                atende
                a região
                do aeroporto.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Metrobús Linha 4
              </strong>

              <p>
                Possui serviço
                para T1
                e T2.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Confirme o terminal.
            </strong>

            “Ir ao aeroporto”
            não é informação
            suficiente
            para planejar
            a etapa final.

          </div>

        </section>


        <!-- ==================================================
             AEROTREN
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Aerotrén · AICM
          </h4>


          <div class="answer-block">

            <strong>
              Terminal 1 ↔ Terminal 2
            </strong>

            <p>
              O Aerotrén
              é um serviço interno
              do aeroporto
              utilizado para conectar
              os dois terminais
              por passageiros
              que atendam
              às condições de uso
              estabelecidas pelo AICM.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não trate o Aerotrén
              como transporte
              entre o aeroporto
              e a cidade.
            </strong>

            Sua função
            é conectar
            Terminal 1
            e Terminal 2.

          </div>

        </section>


        <!-- ==================================================
             AIFA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            AIFA
          </h4>

          <p class="panel-intro">
            O Aeroporto Internacional
            Felipe Ángeles
            possui uma estrutura
            de conexão terrestre
            própria
            e fica fora
            da região central
            da Cidade do México.
          </p>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚆</span>

              <strong>
                Tren Felipe Ángeles
              </strong>

              <p>
                Conecta
                AIFA
                e Buenavista.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Terminal de ônibus
              </strong>

              <p>
                A Terminal Intermodal
                reúne serviços
                rodoviários.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                Mexibús
              </strong>

              <p>
                Também integra
                as opções
                de transporte
                terrestre.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             TERMINAIS RODOVIARIOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Terminais rodoviários
          </h4>

          <p class="panel-intro">
            A Cidade do México
            possui grandes terminais
            de ônibus
            para viagens
            intermunicipais
            e interestaduais.
          </p>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Terminal Norte
              </strong>

              <p>
                Atendida
                pela estação
                Autobuses del Norte
                da Linha 5.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Terminal Sur
              </strong>

              <p>
                Região
                de Tasqueña,
                junto ao Metro
                Linha 2.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                TAPO
              </strong>

              <p>
                Terminal
                de Autobuses
                de Pasajeros
                de Oriente.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Poniente
              </strong>

              <p>
                Terminal
                na região
                de Observatorio.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             INTEGRACAO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Rede integrada
            não significa
            tarifa única
          </h4>


          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Metro
              </span>

              <strong>
                Linha → Linha
              </strong>

              <p>
                Correspondência
                dentro
                da rede do Metro.
              </p>

              <span class="fare-scenario-result">
                Sem nova tarifa
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Metrobús
              </span>

              <strong>
                Linha → Linha
              </strong>

              <p>
                Transbordos
                podem ser gratuitos
                dentro das regras.
              </p>

              <span class="fare-scenario-result">
                Integração possível
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Sistemas diferentes
              </span>

              <strong>
                Metro → Metrobús
              </strong>

              <p>
                A mesma Tarjeta MI
                pode ser usada
                nos dois sistemas.
              </p>

              <span class="fare-scenario-result">
                Duas tarifas
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Xochimilco
              </span>

              <strong>
                Metro → Tren Ligero
              </strong>

              <p>
                São sistemas
                diferentes.
              </p>

              <span class="fare-scenario-result">
                Duas tarifas
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Cablebús
              </span>

              <strong>
                Metro → Cablebús
              </strong>

              <p>
                A Tarjeta MI
                pode ser a mesma,
                mas cada acesso
                tem sua cobrança.
              </p>

              <span class="fare-scenario-result">
                Tarifas separadas
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             TARJETA MI
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O que integra a experiência
          </h4>


          <div class="answer-block">

            <strong>
              Tarjeta de Movilidad Integrada
            </strong>

            <p>
              A Tarjeta MI
              é utilizada
              em vários
              dos sistemas
              apresentados nesta página.

              Isso simplifica
              bastante
              a experiência
              do visitante.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              O cartão integra
              o pagamento,
              não necessariamente
              a tarifa.
            </strong>

            Ao mudar
            de Metro
            para Metrobús,
            Cablebús
            ou Tren Ligero,
            uma nova cobrança
            pode ocorrer.

          </div>

        </section>


        <!-- ==================================================
             HORARIOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Os sistemas não possuem
            todos o mesmo horário
          </h4>


          <div class="visitor-alert">

            <strong>
              Não use o horário
              de um sistema
              como referência
              para todos os outros.
            </strong>

            Metro,
            Metrobús,
            Trolebús,
            Cablebús,
            Tren Ligero,
            RTP
            e serviços ferroviários
            possuem horários
            próprios.

          </div>


          <div class="answer-block">

            <strong>
              Muito cedo,
              à noite
              e em feriados
            </strong>

            <p>
              Confira especificamente
              o serviço
              que você pretende usar
              antes de sair.
            </p>

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
                Metro
              </strong>

              <p>
                Existem estações
                com recursos
                como elevadores
                e rampas,
                mas a estrutura
                varia.
              </p>

            </article>


            <article class="planner-check-card">

              <span>♿</span>

              <strong>
                Metrobús
              </strong>

              <p>
                A rede
                possui infraestrutura
                voltada
                à acessibilidade.
              </p>

            </article>


            <article class="planner-check-card">

              <span>♿</span>

              <strong>
                Cablebús
              </strong>

              <p>
                O sistema
                possui estações
                projetadas
                para acesso
                universal.
              </p>

            </article>


            <article class="planner-check-card">

              <span>♿</span>

              <strong>
                Trolebús
              </strong>

              <p>
                Recursos
                dependem
                da linha
                e infraestrutura.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Verifique o percurso inteiro.
            </strong>

            Uma estação acessível
            na origem
            não garante
            que toda
            a viagem
            tenha as mesmas condições.

          </div>

        </section>


        <!-- ==================================================
             PICO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Horário de pico
          </h4>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>👥</span>

              <strong>
                Metro
              </strong>

              <p>
                Plataformas
                e trens
                podem ficar
                muito cheios.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Metrobús
              </strong>

              <p>
                Estações
                também podem
                concentrar
                grande fluxo.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                RTP
              </strong>

              <p>
                Além da lotação,
                sofre influência
                do trânsito.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⏱️</span>

              <strong>
                Margem
              </strong>

              <p>
                Reserve
                tempo adicional
                para compromissos.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             O QUE FAZ SENTIDO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Qual sistema tende
            a fazer sentido?
          </h4>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                Grandes distâncias
              </strong>

              <p>
                Comece
                comparando
                o Metro.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Insurgentes / Reforma
              </strong>

              <p>
                Veja
                o Metrobús.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                Região sem Metro
              </strong>

              <p>
                RTP
                pode completar
                a viagem.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚎</span>

              <strong>
                Eje Central
              </strong>

              <p>
                Considere
                o Trolebús.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚋</span>

              <strong>
                Xochimilco
              </strong>

              <p>
                Metro
                + Tren Ligero.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚡</span>

              <strong>
                Cablebús
              </strong>

              <p>
                Pode ser
                parte real
                de um deslocamento
                urbano.
              </p>

            </article>


            <article class="planner-check-card">

              <span>✈️</span>

              <strong>
                AICM
              </strong>

              <p>
                Metro Linha 5
                ou Metrobús Linha 4
                podem participar
                da viagem.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚆</span>

              <strong>
                AIFA
              </strong>

              <p>
                Considere
                o Tren Felipe Ángeles
                e as conexões
                terrestres.
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
                Metro
              </strong>

              <p>
                Obras,
                estações fechadas
                e alterações
                temporárias.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Metrobús
              </strong>

              <p>
                Serviço,
                percurso
                e alterações
                no corredor.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                RTP
              </strong>

              <p>
                Rota
                e serviço
                específico.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                STE
              </strong>

              <p>
                Situação
                de Trolebús,
                Tren Ligero
                e Cablebús.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                AICM
              </strong>

              <p>
                Terminal,
                obras
                e acesso
                no momento.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                AIFA
              </strong>

              <p>
                Horário
                do trem
                e conexão
                terrestre.
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

              <span>🚇</span>

              <strong>
                Metro
              </strong>

              <p>
                12 linhas
                e 195 estações.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Metrobús
              </strong>

              <p>
                7 linhas
                em corredores
                estruturados.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                RTP
              </strong>

              <p>
                Rede ampla
                de ônibus
                de superfície.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚎</span>

              <strong>
                Trolebús
              </strong>

              <p>
                Rede elétrica
                do STE.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚋</span>

              <strong>
                Tren Ligero
              </strong>

              <p>
                Tasqueña
                ↔ Xochimilco.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚡</span>

              <strong>
                Cablebús
              </strong>

              <p>
                Teleférico
                urbano
                integrado.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚆</span>

              <strong>
                Buenavista
              </strong>

              <p>
                Hub ferroviário
                metropolitano.
              </p>

            </article>


            <article class="planner-check-card">

              <span>✈️</span>

              <strong>
                AICM
              </strong>

              <p>
                Metro Linha 5
                e Metrobús Linha 4.
              </p>

            </article>


            <article class="planner-check-card">

              <span>✈️</span>

              <strong>
                AIFA
              </strong>

              <p>
                Tren Felipe Ángeles
                e rede
                intermodal.
              </p>

            </article>


            <article class="planner-check-card">

              <span>▣</span>

              <strong>
                Tarjeta MI
              </strong>

              <p>
                Principal cartão
                da rede integrada.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🗺️</span>

              <strong>
                Mapa
              </strong>

              <p>
                Use o mapa integrado
                para entender
                as conexões.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⚠️</span>

              <strong>
                Antes de sair
              </strong>

              <p>
                Confira
                a operação atual.
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
            Mapas e rotas · Metrobús
          </a>


          <a
            class="official-link"
            href="https://www.rtp.cdmx.gob.mx/red-de-rutas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rede de rotas · RTP
          </a>


          <a
            class="official-link"
            href="https://www.ste.cdmx.gob.mx/red-de-servicio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trolebús, Tren Ligero e Cablebús · STE
          </a>


          <a
            class="official-link"
            href="https://www.aicm.com.mx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aeroporto AICM
          </a>


          <a
            class="official-link"
            href="https://aifa.aero/conectividad/tren"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tren Felipe Ángeles · AIFA
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
