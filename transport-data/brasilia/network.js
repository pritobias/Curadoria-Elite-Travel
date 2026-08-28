// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — BRASÍLIA
// MÓDULO: REDE DE TRANSPORTE
// ============================================================

window.BRASILIA_TRANSPORT_MODULES =
  window.BRASILIA_TRANSPORT_MODULES || {};


// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function createBrasiliaLegendItem(
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
// MÓDULO
// ============================================================

window.BRASILIA_TRANSPORT_MODULES["network"] = {

  kicker:
    "Brasília · visão da rede",

  title:
    "Rede de Transporte",

  body() {

    return `

      <div class="network-layout">


        <!-- ==================================================
             ESTRUTURA OFICIAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como a rede do Distrito Federal é organizada
          </h4>

          <p class="panel-intro">
            O Sistema de Transporte Público Coletivo
            do Distrito Federal combina
            estrutura rodoviária
            e metroviária.

            Dentro dessa rede,
            metrô,
            BRT,
            ônibus
            e serviços complementares
            cumprem funções diferentes.
          </p>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Modal rodoviário
              </strong>

              <p>
                Reúne ônibus,
                BRT
                e serviços
                complementares
                do Distrito Federal.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Modal metroviário
              </strong>

              <p>
                É formado
                pelo Metrô-DF,
                que estrutura
                principalmente
                parte do eixo oeste.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             PRINCIPAIS COMPONENTES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Principais sistemas
          </h4>


          <div class="legend-grid">

            ${createBrasiliaLegendItem(
              "M",
              "Metrô",
              "Rede ferroviária que conecta a região central a Guará, Águas Claras, Taguatinga, Ceilândia e Samambaia."
            )}

            ${createBrasiliaLegendItem(
              "BRT",
              "BRT",
              "Sistema de ônibus de alta capacidade que estrutura principalmente o eixo sul."
            )}

            ${createBrasiliaLegendItem(
              "BUS",
              "Ônibus",
              "Rede de superfície responsável pela cobertura mais ampla das Regiões Administrativas."
            )}

            ${createBrasiliaLegendItem(
              "LOCAL",
              "Serviços locais",
              "Micro-ônibus e outros serviços voltados a trajetos locais e de vizinhança."
            )}

            ${createBrasiliaLegendItem(
              "COMP",
              "Complementar",
              "Serviços complementares, incluindo atendimentos específicos urbanos e rurais."
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
            parte da região central
            e segue pelo eixo oeste
            do Distrito Federal.

            Depois de Águas Claras,
            o sistema se divide
            nos eixos
            de Ceilândia
            e Samambaia.
          </p>


          <div
            style="
              margin:24px 0 28px;
              padding:16px;
              border:1px solid rgba(212,175,55,.20);
              border-radius:18px;
              background:#fff;
              overflow:hidden;
            "
          >

            <img
              src="images/Mapa_MetroDF.png"
              alt="Mapa da rede do Metrô-DF com os ramais Ceilândia e Samambaia"
              style="
                display:block;
                width:100%;
                height:auto;
                border-radius:10px;
              "
            >

          </div>


          <div class="visitor-alert">

            <strong>
              Os dois eixos
              compartilham parte
              da mesma rede.
            </strong>

            O trecho central
            é comum aos serviços.

            Depois da bifurcação,
            os trens seguem
            em direção
            a Ceilândia
            ou Samambaia.

          </div>

        </section>


        <!-- ==================================================
             ESTRUTURA DO METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como o metrô se organiza
          </h4>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Trecho compartilhado
              </strong>

              <p>
                A região central,
                Guará
                e parte do eixo
                até Águas Claras
                pertencem
                à estrutura comum.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Eixo Ceilândia
              </strong>

              <p>
                Um dos ramais
                segue por Taguatinga
                em direção
                a Ceilândia.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Eixo Samambaia
              </strong>

              <p>
                O outro ramal
                segue de Águas Claras
                em direção
                a Samambaia.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Estação Central
              </strong>

              <p>
                É o principal
                ponto metroviário
                associado
                à Rodoviária
                do Plano Piloto.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             REGIÕES DO METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Regiões que ajudam
            a entender o eixo do metrô
          </h4>


          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🏛️</span>

              <strong>
                Plano Piloto
              </strong>

              <p>
                A Estação Central
                atende a área
                da Rodoviária
                do Plano Piloto.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🏘️</span>

              <strong>
                Guará
              </strong>

              <p>
                Está no trecho
                compartilhado
                da rede metroviária.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🏙️</span>

              <strong>
                Águas Claras
              </strong>

              <p>
                É a principal
                região de separação
                entre os dois eixos.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🏢</span>

              <strong>
                Taguatinga
              </strong>

              <p>
                Integra o eixo
                que segue
                em direção
                a Ceilândia.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🌆</span>

              <strong>
                Ceilândia
              </strong>

              <p>
                Forma um dos
                grandes eixos
                terminais
                da rede.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🌇</span>

              <strong>
                Samambaia
              </strong>

              <p>
                Forma o outro
                grande eixo
                terminal
                do metrô.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             BRT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            BRT
          </h4>


          <div class="answer-block">

            <strong>
              O BRT estrutura
              principalmente
              o eixo sul
              do Distrito Federal.
            </strong>

            <p>
              O sistema combina
              terminais,
              linhas alimentadoras
              e serviços troncais
              para organizar
              deslocamentos
              de maior capacidade.
            </p>

          </div>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Gama
              </strong>

              <p>
                Possui terminal
                de integração
                associado
                ao corredor BRT.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Santa Maria
              </strong>

              <p>
                Também funciona
                como importante
                ponto de integração
                do eixo sul.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Alimentadoras
              </strong>

              <p>
                Fazem a ligação
                entre áreas locais
                e os terminais.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Troncais
              </strong>

              <p>
                Percorrem
                o eixo principal
                do corredor estruturado.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ÔNIBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Rede de ônibus
          </h4>


          <div class="answer-block">

            <strong>
              É a rede com maior
              cobertura territorial
              do Distrito Federal.
            </strong>

            <p>
              Os ônibus conectam
              o Plano Piloto
              às diferentes
              Regiões Administrativas
              e também estruturam
              deslocamentos
              entre áreas
              que não possuem metrô
              ou BRT.
            </p>

          </div>

        </section>


        <!-- ==================================================
             BACIAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como a operação de ônibus
            é organizada
          </h4>

          <p class="panel-intro">
            O Serviço Básico
            é dividido
            territorialmente
            em cinco bacias operacionais.

            Essa divisão ajuda
            a organizar
            a operação da rede.
          </p>


          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Bacia 1
              </strong>

              <p>
                Inclui áreas
                como Brasília,
                Cruzeiro,
                Lago Norte,
                Sobradinho
                e Planaltina.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Bacia 2
              </strong>

              <p>
                Inclui áreas
                como Paranoá,
                São Sebastião,
                Gama
                e Santa Maria.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Bacia 3
              </strong>

              <p>
                Inclui áreas
                como Núcleo Bandeirante,
                Riacho Fundo,
                Recanto das Emas
                e Samambaia.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Bacia 4
              </strong>

              <p>
                Inclui Guará,
                Águas Claras
                e partes
                de Taguatinga
                e Ceilândia.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Bacia 5
              </strong>

              <p>
                Inclui áreas
                como Estrutural,
                Vicente Pires,
                Brazlândia
                e partes
                de Taguatinga
                e Ceilândia.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             SERVIÇOS LOCAIS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Serviços locais
          </h4>


          <div class="answer-block">

            <strong>
              Veículos menores
              também fazem parte
              da mobilidade
              do Distrito Federal.
            </strong>

            <p>
              Micro-ônibus
              e serviços locais,
              incluindo os conhecidos
              serviços de vizinhança,
              complementam a rede
              em trajetos específicos.
            </p>

          </div>

        </section>


        <!-- ==================================================
             COMPLEMENTAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Serviço Complementar
          </h4>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Rural
              </strong>

              <p>
                Complementa
                a rede coletiva
                em áreas rurais
                do Distrito Federal.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Executivo
              </strong>

              <p>
                Também integra
                a categoria oficial
                de Serviço Complementar.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             TCB
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            TCB dentro da estrutura
          </h4>


          <div class="visitor-alert">

            <strong>
              A TCB continua
              fazendo parte
              da estrutura institucional
              do transporte do DF.
            </strong>

            A empresa,
            porém,
            não deve ser interpretada
            como uma operadora
            da rede tarifária regular
            de ônibus
            da mesma forma
            que no passado.

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


          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🏛️</span>

              <strong>
                Rodoviária do Plano Piloto
              </strong>

              <p>
                Grande ponto
                de distribuição
                da rede de ônibus
                e conexão
                com o metrô.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Estação Central
              </strong>

              <p>
                Principal referência
                metroviária
                para a região
                central.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                Terminal BRT Gama
              </strong>

              <p>
                Integra serviços locais
                ao corredor
                principal do BRT.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                Terminal BRT Santa Maria
              </strong>

              <p>
                Outro ponto
                importante
                de integração
                do eixo sul.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO AS REDES SE RELACIONAM
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Um território,
            sistemas diferentes
          </h4>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Metrô
              </strong>

              <p>
                Estrutura principalmente
                parte do eixo oeste.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                BRT
              </strong>

              <p>
                Estrutura principalmente
                o eixo sul.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Ônibus
              </strong>

              <p>
                Fazem a cobertura
                mais ampla
                das Regiões Administrativas.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Serviços locais
              </strong>

              <p>
                Complementam
                deslocamentos
                específicos.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Complementar
              </strong>

              <p>
                Amplia
                o atendimento
                em situações
                próprias da rede.
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
                Localize o eixo
              </strong>

              <p>
                Identifique
                em qual região
                do Distrito Federal
                estão origem
                e destino.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Veja a rede estrutural
              </strong>

              <p>
                Observe
                se o deslocamento
                se relaciona
                ao metrô,
                BRT
                ou à rede de ônibus.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Procure conexões
              </strong>

              <p>
                Identifique
                onde diferentes
                serviços
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
                o deslocamento completo.
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
              como realmente
              chegar ao destino,
              não dependa apenas
              da visão geral.
            </strong>

            Escolha entre metrô,
            BRT
            e ônibus,
            integrações,
            tarifa,
            domingos e feriados,
            distâncias,
            horários,
            posição dos veículos
            e DF no Ponto
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
                Estrutura
                parte importante
                do eixo oeste.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                BRT
              </strong>

              <p>
                Estrutura
                principalmente
                o eixo sul.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Ônibus
              </strong>

              <p>
                Fazem
                a cobertura mais ampla
                do Distrito Federal.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚐</span>

              <strong>
                Serviços locais
              </strong>

              <p>
                Complementam
                trajetos específicos.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🌾</span>

              <strong>
                Complementar
              </strong>

              <p>
                Amplia
                a estrutura
                do transporte coletivo.
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
            href="https://www.semob.df.gov.br/dados-do-sistema-de-transporte-publico-do-df"
            target="_blank"
            rel="noopener noreferrer"
          >
            Estrutura do STPC/DF · SEMOB-DF
          </a>


          <a
            class="official-link"
            href="https://metro.df.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metrô-DF
          </a>


          <a
            class="official-link"
            href="https://www.semob.df.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SEMOB-DF
          </a>


          <a
            class="official-link"
            href="https://tcb.df.gov.br/perguntas-frequentes-da-tcb"
            target="_blank"
            rel="noopener noreferrer"
          >
            TCB
          </a>

        </div>


        <div class="planner-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
