// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — SÃO PAULO
// MÓDULO: REDE METROPOLITANA
// ============================================================

window.SP_TRANSPORT_MODULES =
  window.SP_TRANSPORT_MODULES || {};


// Imagem salva no próprio projeto.
// Local no GitHub:
// /images/mapa-transporte-sao-paulo-2026.jpg
const MAP_URL =
  "/images/mapa-transporte-sao-paulo-2026.jpg";


// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function createLegendLine(
  color,
  title,
  description
) {

  return `
    <article class="legend-card">

      <span
        class="legend-line"
        style="
          display:block;
          width:42px;
          height:5px;
          border-radius:999px;
          background:${color};
          margin-bottom:12px;
        "
      ></span>

      <strong>
        ${title}
      </strong>

      <p>
        ${description}
      </p>

    </article>
  `;

}


function createLegendSymbol(
  symbol,
  title,
  description
) {

  return `
    <article class="legend-card">

      <span
        class="legend-symbol"
        style="
          display:flex;
          align-items:center;
          justify-content:center;
          width:38px;
          height:38px;
          border:1px solid rgba(212,175,55,.35);
          border-radius:50%;
          margin-bottom:10px;
          font-weight:700;
        "
      >
        ${symbol}
      </span>

      <strong>
        ${title}
      </strong>

      <p>
        ${description}
      </p>

    </article>
  `;

}


function createOperatorCard(
  color,
  name,
  lines
) {

  return `
    <article class="operator-card">

      <span
        class="operator-dot"
        style="
          display:inline-block;
          width:12px;
          height:12px;
          border-radius:50%;
          background:${color};
          margin-right:8px;
        "
      ></span>

      <strong>
        ${name}
      </strong>

      <p>
        ${lines}
      </p>

    </article>
  `;

}


function createLineMiniCard(
  color,
  number,
  name,
  type,
  route,
  operator
) {

  return `
    <article class="line-mini-card">

      <div class="line-mini-head">

        <span
          class="line-number"
          style="
            display:inline-flex;
            align-items:center;
            justify-content:center;
            min-width:34px;
            height:34px;
            padding:0 8px;
            border-radius:50%;
            background:${color};
            color:#fff;
            font-weight:700;
          "
        >
          ${number}
        </span>

        <div>

          <strong>
            Linha ${number} — ${name}
          </strong>

          <small style="display:block;">
            ${type}
          </small>

        </div>

      </div>

      <p>
        ${route}
      </p>

      <span class="line-operator">
        ${operator}
      </span>

    </article>
  `;

}


// ============================================================
// LIGHTBOX DO MAPA
// ============================================================

function openSPNetworkMap() {

  if (
    document.getElementById(
      "spNetworkMapLightbox"
    )
  ) {
    return;
  }


  const lightbox =
    document.createElement("div");


  lightbox.id =
    "spNetworkMapLightbox";


  lightbox.style.cssText = `
    position:fixed;
    inset:0;
    z-index:99999;
    background:rgba(0,0,0,.92);
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
      id="closeSPNetworkMap"
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
      src="${MAP_URL}"
      alt="Mapa ampliado da rede metropolitana de São Paulo"
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
          "closeSPNetworkMap"
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

window.SP_TRANSPORT_MODULES["network"] = {

  kicker:
    "São Paulo · visão da rede",

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
            Mapa da rede
          </h4>

          <p class="panel-intro">
            Use o mapa
            para entender
            como metrô,
            trens metropolitanos
            e monotrilho
            formam a principal
            estrutura ferroviária
            de São Paulo
            e da Região Metropolitana.
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
              src="${MAP_URL}"
              alt="Mapa da rede metropolitana de São Paulo em 2026"
              loading="lazy"
              style="
                display:block;
                width:100%;
                height:auto;
                cursor:zoom-in;
              "
              onclick="openSPNetworkMap()"
            />

          </div>


          <div class="official-map-actions">

            <button
              class="map-zoom-button"
              type="button"
              onclick="openSPNetworkMap()"
            >
              Ampliar mapa
            </button>


            <a
              class="official-link"
              href="https://www.metro.sp.gov.br/sua-viagem/mapa-da-rede/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar fonte oficial
            </a>

          </div>


          <div class="visitor-alert">

            <strong>
              O mapa mostra
              principalmente
              a rede sobre trilhos.
            </strong>

            A mobilidade paulistana
            também depende
            de uma extensa
            rede de ônibus municipais
            e metropolitanos.

            Para decidir
            o trajeto específico,
            use também
            “Planeje o trajeto”.

          </div>

        </section>


        <!-- ==================================================
             COMO LER
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como ler o mapa
          </h4>

          <p class="panel-intro">
            As cores identificam
            as diferentes linhas.

            Símbolos indicam
            integrações,
            conexões
            e serviços especiais.
          </p>


          <div class="legend-grid">

            ${createLegendLine(
              "#1f6fc2",
              "Cor da linha",
              "Cada linha possui uma cor própria e também é identificada por número e nome."
            )}

            ${createLegendSymbol(
              "↔",
              "Integração",
              "Indica pontos em que diferentes linhas ou sistemas se encontram."
            )}

            ${createLegendSymbol(
              "R$",
              "Integração tarifada",
              "A conexão existe, mas pode possuir regra própria de cobrança."
            )}

            ${createLegendSymbol(
              "🚶",
              "Conexão a pé",
              "Algumas ligações exigem deslocamento entre estruturas próximas."
            )}

            ${createLegendSymbol(
              "✈",
              "Aeroporto",
              "Identifica ligação ferroviária relacionada ao aeroporto."
            )}

            ${createLegendSymbol(
              "B",
              "Terminal rodoviário",
              "Indica conexão com importantes terminais de ônibus rodoviários."
            )}

          </div>

        </section>


        <!-- ==================================================
             ESTRUTURA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Entenda a rede
          </h4>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Metrô
              </strong>

              <p>
                Estrutura
                grande parte
                dos deslocamentos
                urbanos
                dentro da capital.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Trem metropolitano
              </strong>

              <p>
                Amplia a cobertura
                para áreas mais afastadas
                e municípios
                da Região Metropolitana.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Monotrilho
              </strong>

              <p>
                Integra a rede
                sobre trilhos
                em corredores
                específicos.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Ônibus
              </strong>

              <p>
                Complementam
                a cobertura
                onde a rede ferroviária
                não chega diretamente.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             OPERADORES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Operadores da rede
          </h4>

          <p class="panel-intro">
            A rede sobre trilhos
            não possui
            um único operador.

            Diferentes empresas
            administram linhas específicas.
          </p>


          <div class="operator-grid">

            ${createOperatorCard(
              "#224d93",
              "Metrô SP",
              "Linhas 1, 2, 3 e 15"
            )}

            ${createOperatorCard(
              "#d33a35",
              "CPTM",
              "Linhas 10, 11, 12 e 13"
            )}

            ${createOperatorCard(
              "#d7b11e",
              "ViaQuatro",
              "Linha 4"
            )}

            ${createOperatorCard(
              "#20a39c",
              "ViaMobilidade",
              "Linhas 5, 8 e 9"
            )}

            ${createOperatorCard(
              "#7c2f87",
              "TIC Trens",
              "Linha 7"
            )}

          </div>

        </section>


        <!-- ==================================================
             METRO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Linhas de metrô
          </h4>


          <div class="lines-grid">

            ${createLineMiniCard(
              "#1f6fc2",
              "1",
              "Azul",
              "Metrô",
              "Jabaquara ↔ Tucuruvi",
              "Metrô SP"
            )}

            ${createLineMiniCard(
              "#31945a",
              "2",
              "Verde",
              "Metrô",
              "Vila Prudente ↔ Vila Madalena",
              "Metrô SP"
            )}

            ${createLineMiniCard(
              "#c94239",
              "3",
              "Vermelha",
              "Metrô",
              "Corinthians-Itaquera ↔ Palmeiras-Barra Funda",
              "Metrô SP"
            )}

            ${createLineMiniCard(
              "#d4b11c",
              "4",
              "Amarela",
              "Metrô",
              "Luz ↔ Vila Sônia",
              "ViaQuatro"
            )}

            ${createLineMiniCard(
              "#8b4ba5",
              "5",
              "Lilás",
              "Metrô",
              "Capão Redondo ↔ Chácara Klabin",
              "ViaMobilidade"
            )}

          </div>

        </section>


        <!-- ==================================================
             TRENS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Trens metropolitanos
          </h4>


          <div class="lines-grid">

            ${createLineMiniCard(
              "#6f1935",
              "7",
              "Rubi",
              "Trem metropolitano",
              "Luz ↔ Jundiaí",
              "TIC Trens"
            )}

            ${createLineMiniCard(
              "#8a8a8a",
              "8",
              "Diamante",
              "Trem metropolitano",
              "Júlio Prestes ↔ Itapevi",
              "ViaMobilidade"
            )}

            ${createLineMiniCard(
              "#49a8c4",
              "9",
              "Esmeralda",
              "Trem metropolitano",
              "Osasco ↔ Varginha",
              "ViaMobilidade"
            )}

            ${createLineMiniCard(
              "#24a184",
              "10",
              "Turquesa",
              "Trem metropolitano",
              "Brás ↔ Rio Grande da Serra",
              "CPTM"
            )}

            ${createLineMiniCard(
              "#df7f32",
              "11",
              "Coral",
              "Trem metropolitano",
              "Luz ↔ Estudantes",
              "CPTM"
            )}

            ${createLineMiniCard(
              "#223e89",
              "12",
              "Safira",
              "Trem metropolitano",
              "Brás ↔ Calmon Viana",
              "CPTM"
            )}

            ${createLineMiniCard(
              "#37a17b",
              "13",
              "Jade",
              "Trem metropolitano",
              "Eng. Goulart ↔ Aeroporto-Guarulhos",
              "CPTM"
            )}

          </div>

        </section>


        <!-- ==================================================
             MONOTRILHO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Monotrilho
          </h4>


          <div class="lines-grid">

            ${createLineMiniCard(
              "#b3b3b3",
              "15",
              "Prata",
              "Monotrilho",
              "Vila Prudente ↔ Jardim Colonial",
              "Metrô SP"
            )}

            ${createLineMiniCard(
              "#b58735",
              "17",
              "Ouro",
              "Monotrilho",
              "Em implantação",
              "Metrô SP"
            )}

          </div>


          <div class="visitor-alert">

            <strong>
              Linha 17 — Ouro
              está em implantação.
            </strong>

            Ela aparece
            na estrutura futura
            da rede,
            mas não deve
            ser tratada
            como uma linha
            plenamente disponível
            para uma viagem atual.

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


          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Sé
              </strong>

              <p>
                Conexão
                entre as Linhas
                1-Azul
                e 3-Vermelha.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚆</span>

              <strong>
                Luz
              </strong>

              <p>
                Importante ponto
                de encontro
                entre metrô
                e diferentes
                linhas ferroviárias.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🔄</span>

              <strong>
                República
              </strong>

              <p>
                Conecta
                as Linhas
                3-Vermelha
                e 4-Amarela.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚆</span>

              <strong>
                Brás
              </strong>

              <p>
                Grande ponto
                de conexão
                entre metrô
                e trens metropolitanos.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🔄</span>

              <strong>
                Pinheiros
              </strong>

              <p>
                Conecta
                a Linha 4-Amarela
                à Linha 9-Esmeralda.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Santo Amaro
              </strong>

              <p>
                Relaciona
                a Linha 5-Lilás
                à Linha 9-Esmeralda.
              </p>

            </article>


            <article class="bus-system-card">

              <span>✈️</span>

              <strong>
                Aeroporto-Guarulhos
              </strong>

              <p>
                Integra
                a Linha 13-Jade
                ao eixo
                aeroportuário.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             CAPITAL X REGIAO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Capital e Região Metropolitana
          </h4>


          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Principalmente na capital
              </span>

              <strong>
                Metrô
              </strong>

              <p>
                Estrutura
                grande parte
                das viagens urbanas
                dentro de São Paulo.
              </p>

              <span class="route-compare-result">
                Rede urbana
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Capital + municípios
              </span>

              <strong>
                Trens metropolitanos
              </strong>

              <p>
                Ultrapassam
                os limites
                da capital
                em diferentes eixos.
              </p>

              <span class="route-compare-result">
                Rede metropolitana
              </span>

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
                dentro da capital
                ou da Região Metropolitana.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Identifique a linha
              </strong>

              <p>
                Use número,
                cor
                e nome
                como referências.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Procure conexões
              </strong>

              <p>
                Observe
                onde metrô,
                trem
                e monotrilho
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
                para definir
                sentido,
                baldeações,
                ônibus,
                horários
                e caminhada.
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

            Sentido da linha,
            baldeações,
            saídas,
            caminhada,
            ônibus,
            horários,
            Rede Noturno,
            condições operacionais
            e comparação
            entre alternativas
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
                Principal estrutura
                urbana
                sobre trilhos.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚆</span>

              <strong>
                Trens
              </strong>

              <p>
                Ampliam
                a cobertura
                metropolitana.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚝</span>

              <strong>
                Monotrilho
              </strong>

              <p>
                Complementa
                corredores
                específicos.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Ônibus
              </strong>

              <p>
                Completam
                a cobertura
                fora dos trilhos.
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
            href="https://www.metro.sp.gov.br/sua-viagem/mapa-da-rede/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mapa da rede · Metrô SP
          </a>


          <a
            class="official-link"
            href="https://www.metro.sp.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metrô SP
          </a>


          <a
            class="official-link"
            href="https://www.cptm.sp.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CPTM
          </a>


          <a
            class="official-link"
            href="https://www.viaquatro.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ViaQuatro
          </a>


          <a
            class="official-link"
            href="https://www.viamobilidade.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ViaMobilidade
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

window.openSPNetworkMap =
  openSPNetworkMap;
