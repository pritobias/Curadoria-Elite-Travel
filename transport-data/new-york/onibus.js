// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — NOVA YORK
// MÓDULO: ÔNIBUS
// ============================================================

window.NEW_YORK_TRANSPORT_MODULES =
  window.NEW_YORK_TRANSPORT_MODULES || {};


window.NEW_YORK_TRANSPORT_MODULES["bus"] = {

  kicker: "Nova York · ônibus",

  title: "Como usar os ônibus",

  body() {

    return `

      <div class="network-layout">


        <!-- ==================================================
             VISÃO GERAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Antes de embarcar
          </h4>

          <p class="panel-intro">
            A rede de ônibus
            complementa o subway
            e alcança áreas
            onde o metrô
            não chega diretamente.

            Para usar bem a rede,
            observe três informações:
            linha,
            sentido
            e tipo de serviço.
          </p>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🔢</span>

              <strong>
                Linha
              </strong>

              <p>
                O código indica
                a rota do ônibus.
              </p>

            </article>


            <article class="planner-check-card">

              <span>↔️</span>

              <strong>
                Sentido
              </strong>

              <p>
                Confira o destino
                indicado antes
                de embarcar.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚏</span>

              <strong>
                Parada
              </strong>

              <p>
                Confirme se aquela
                modalidade da linha
                atende a parada.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             PREFIXOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como ler o número da linha
          </h4>

          <p class="panel-intro">
            Muitas linhas usam
            uma letra relacionada
            ao borough em que
            operam principalmente.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                M
              </strong>

              <p>
                Manhattan.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Bx
              </strong>

              <p>
                Bronx.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                B
              </strong>

              <p>
                Brooklyn.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Q
              </strong>

              <p>
                Queens.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                S
              </strong>

              <p>
                Staten Island.
              </p>

            </article>

          </div>


          <div class="answer-block">

            <strong>
              Exemplos
            </strong>

            <p>
              M15 é uma linha
              associada a Manhattan.

              Bx12 é uma linha
              associada ao Bronx.

              Q44 é uma linha
              associada a Queens.
            </p>

          </div>


          <div class="fare-note">

            O prefixo ajuda
            a reconhecer a rede,
            mas não significa
            que toda linha fique
            exclusivamente dentro
            daquele borough.

          </div>

        </section>


        <!-- ==================================================
             TIPOS DE SERVIÇO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Tipos de serviço
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
                Faz paradas frequentes
                ao longo da rota
                e conecta bairros,
                estações
                e destinos locais.
              </p>

              <span class="route-compare-result">
                Serviço local
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Limited
              </span>

              <strong>
                Menos paradas
              </strong>

              <p>
                Atende principalmente
                destinos importantes,
                cruzamentos principais
                e pontos de conexão.
              </p>

              <span class="route-compare-result">
                Mais seletivo
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                SBS
              </span>

              <strong>
                Select Bus Service
              </strong>

              <p>
                Serviço com paradas
                mais selecionadas
                e medidas para reduzir
                o tempo de viagem.
              </p>

              <span class="route-compare-result">
                Identifique “SBS”
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Rush
              </span>

              <strong>
                Serviço direcionado
              </strong>

              <p>
                Em redes onde aparece,
                opera com padrão
                voltado aos períodos
                de maior movimento.
              </p>

              <span class="route-compare-result">
                Confira horário
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Express
              </span>

              <strong>
                Serviço expresso
              </strong>

              <p>
                Liga principalmente
                áreas mais afastadas
                a Manhattan
                com tarifa própria.
              </p>

              <span class="route-compare-result">
                Tarifa maior
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             LOCAL X LIMITED
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Local e Limited
            podem compartilhar parte da rota
          </h4>

          <div class="visitor-alert">

            <strong>
              Não embarque olhando
              apenas o número da linha.
            </strong>

            Quando existem variações
            de serviço,
            uma modalidade com menos paradas
            pode não atender
            exatamente o ponto
            onde você pretende descer.

          </div>


          <div class="answer-block">

            <strong>
              Antes de entrar
            </strong>

            <p>
              Confira o código completo,
              o destino exibido
              e se a sua parada
              aparece no percurso
              daquele serviço.
            </p>

          </div>

        </section>


        <!-- ==================================================
             SBS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Select Bus Service · SBS
          </h4>

          <p class="panel-intro">
            As linhas SBS
            são identificadas
            pelo próprio código da rota,
            como M15-SBS,
            M60-SBS
            ou Bx12-SBS.
          </p>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚏</span>

              <strong>
                Paradas selecionadas
              </strong>

              <p>
                O ônibus não para
                em todos os pontos
                de uma linha local.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Embarque
              </strong>

              <p>
                Com OMNY,
                aproxime o meio
                de pagamento
                no leitor da porta.
              </p>

            </article>


            <article class="planner-check-card">

              <span>💳</span>

              <strong>
                Tarifa
              </strong>

              <p>
                A tarifa básica
                é a mesma
                dos ônibus locais.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Informações antigas sobre SBS
              podem falar apenas
              em pagamento antes do embarque.
            </strong>

            Com OMNY,
            a MTA permite pagar
            diretamente nos leitores
            das portas dos ônibus SBS.

          </div>

        </section>


        <!-- ==================================================
             COMO EMBARCAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como embarcar
          </h4>

          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Encontre a parada
              </strong>

              <p>
                Confira as linhas
                indicadas no ponto.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Confira o ônibus
              </strong>

              <p>
                Veja o número
                e o destino
                exibidos no veículo.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Embarque
              </strong>

              <p>
                Entre pela porta
                indicada
                para aquele serviço.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Pague
              </strong>

              <p>
                Aproxime seu cartão,
                celular,
                wearable
                ou cartão OMNY
                no leitor.
              </p>

            </article>


            <article class="bus-use-step">

              <span>5</span>

              <strong>
                Aguarde o “GO”
              </strong>

              <p>
                A confirmação verde
                indica que o pagamento
                foi aceito.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             PAGAMENTO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Pagamento no ônibus
          </h4>

          <div class="payment-method-grid">

            <article class="payment-method">

              <span class="payment-method-icon">
                💳
              </span>

              <strong>
                Cartão contactless
              </strong>

              <span class="payment-status available">
                OMNY
              </span>

              <small>
                Aproxime
                no leitor.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                📱
              </span>

              <strong>
                Celular
              </strong>

              <span class="payment-status available">
                OMNY
              </span>

              <small>
                Carteira digital
                compatível.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                ⌚
              </span>

              <strong>
                Wearable
              </strong>

              <span class="payment-status available">
                OMNY
              </span>

              <small>
                Dispositivo
                compatível
                com pagamento contactless.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                ▣
              </span>

              <strong>
                Cartão OMNY
              </strong>

              <span class="payment-status available">
                Aceito
              </span>

              <small>
                Use diretamente
                no leitor.
              </small>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Use sempre
              o mesmo meio de pagamento.
            </strong>

            Isso é importante
            para que transferências
            e fare cap
            sejam reconhecidos
            corretamente.

          </div>

        </section>


        <!-- ==================================================
             TRANSFERÊNCIA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ônibus e subway
            podem fazer parte
            da mesma viagem
          </h4>

          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Integração
              </span>

              <strong>
                Ônibus → subway
              </strong>

              <p>
                Use o mesmo
                cartão ou dispositivo
                dentro da janela
                permitida.
              </p>

              <span class="fare-scenario-result">
                Transferência elegível
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Integração
              </span>

              <strong>
                Subway → ônibus
              </strong>

              <p>
                Mantenha
                o mesmo meio
                de pagamento.
              </p>

              <span class="fare-scenario-result">
                Transferência elegível
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Integração
              </span>

              <strong>
                Ônibus → ônibus
              </strong>

              <p>
                Quando a combinação
                atende às regras
                da MTA.
              </p>

              <span class="fare-scenario-result">
                Transferência elegível
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             EXPRESS BUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Express Bus
          </h4>

          <div class="visitor-alert">

            <strong>
              “Express” não significa
              apenas um ônibus local
              que faz menos paradas.
            </strong>

            Express Bus
            é uma categoria tarifária
            própria da MTA
            e custa mais
            que Local, Limited
            ou SBS.

          </div>


          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Tarifa
              </span>

              <strong>
                US$ 7,25
              </strong>

              <p>
                Tarifa vigente
                para Express Bus.
              </p>

            </article>

          </div>


          <div class="answer-block">

            <strong>
              Como reconhecer
            </strong>

            <p>
              As linhas expressas
              utilizam códigos próprios,
              como BM,
              BxM,
              QM
              e SIM,
              conforme a rota.
            </p>

          </div>

        </section>


        <!-- ==================================================
             SOLICITAR PARADA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Para descer
          </h4>

          <div class="answer-block">

            <strong>
              Avise que deseja
              a próxima parada.
            </strong>

            <p>
              Use o botão
              ou a faixa de solicitação
              disponível no ônibus.

              Faça isso
              antes de chegar
              ao ponto desejado.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não presuma
              que o ônibus parará
              em todos os pontos.
            </strong>

            Além de ser necessário
            solicitar a parada
            em muitos casos,
            serviços Limited
            e SBS atendem
            apenas pontos específicos.

          </div>

        </section>


        <!-- ==================================================
             SENTIDO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como saber o sentido
          </h4>

          <p class="panel-intro">
            O número da linha
            sozinho não basta.

            Observe também
            o destino indicado
            no ônibus
            e no planejador.
          </p>

          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Veja sua linha
              </strong>

              <p>
                Exemplo:
                M15-SBS.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Veja o destino
              </strong>

              <p>
                Confira para onde
                aquele veículo
                está seguindo.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Compare com sua parada
              </strong>

              <p>
                Certifique-se
                de que ela está
                naquele sentido
                da rota.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             BUS TIME
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            MTA Bus Time
          </h4>

          <div class="answer-block">

            <strong>
              Use para acompanhar
              a linha e a parada.
            </strong>

            <p>
              O Bus Time permite
              pesquisar por linha,
              cruzamento
              ou código da parada
              e acompanhar
              informações de chegada.
            </p>

          </div>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Linha
              </strong>

              <p>
                Pesquise diretamente
                pelo código,
                como B43
                ou M5.
              </p>

            </article>


            <article class="planner-check-card">

              <span>📍</span>

              <strong>
                Cruzamento
              </strong>

              <p>
                Também é possível
                buscar pela localização.
              </p>

            </article>


            <article class="planner-check-card">

              <span>#️⃣</span>

              <strong>
                Stop Code
              </strong>

              <p>
                O código da parada
                permite localizar
                diretamente aquele ponto.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             AEROPORTO LGA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ônibus também é importante
            nos aeroportos
          </h4>

          <div class="answer-block">

            <strong>
              LaGuardia não possui
              uma estação de subway
              dentro do aeroporto.
            </strong>

            <p>
              Linhas de ônibus
              fazem a conexão
              entre o aeroporto
              e pontos da rede
              de transporte da cidade.
            </p>

          </div>


          <div class="fare-note">

            A linha exata
            e a melhor conexão
            dependem do terminal,
            destino final
            e condições da viagem.

            Consulte o planejador
            antes de sair.

          </div>

        </section>


        <!-- ==================================================
             ACESSIBILIDADE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Acessibilidade
          </h4>

          <div class="answer-block">

            <strong>
              Os ônibus da MTA
              são uma alternativa importante
              para passageiros
              que precisam evitar escadas.
            </strong>

            <p>
              A frota possui recursos
              de acessibilidade,
              incluindo embarque
              para usuários
              de cadeira de rodas.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Planeje a viagem completa.
            </strong>

            Se houver transferência
            para subway,
            verifique também
            a acessibilidade
            da estação de destino
            e eventuais alterações
            de serviço.
          </div>

        </section>


        <!-- ==================================================
             ERROS COMUNS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Erros que vale evitar
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>⚠️</span>

              <strong>
                Olhar só o número
              </strong>

              <p>
                Confira também
                sentido
                e tipo de serviço.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⚠️</span>

              <strong>
                Confundir Limited com Express
              </strong>

              <p>
                São categorias
                diferentes.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⚠️</span>

              <strong>
                Trocar cartão por celular
              </strong>

              <p>
                Pode impedir
                o reconhecimento
                da transferência
                ou do fare cap.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⚠️</span>

              <strong>
                Presumir a parada
              </strong>

              <p>
                Limited e SBS
                não atendem
                todos os pontos.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⚠️</span>

              <strong>
                Ignorar alertas
              </strong>

              <p>
                Obras,
                desvios
                e interrupções
                podem alterar
                temporariamente a rota.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             PASSO A PASSO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Para pegar um ônibus
            sem complicação
          </h4>

          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Planeje
              </strong>

              <p>
                Veja linha,
                parada
                e sentido.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Confira o serviço
              </strong>

              <p>
                Local,
                Limited,
                SBS
                ou Express.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Veja a chegada
              </strong>

              <p>
                Consulte
                o MTA Bus Time
                quando necessário.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Confirme o veículo
              </strong>

              <p>
                Número
                e destino
                devem corresponder
                ao seu trajeto.
              </p>

            </article>


            <article class="bus-use-step">

              <span>5</span>

              <strong>
                Pague
              </strong>

              <p>
                Use OMNY
                no embarque.
              </p>

            </article>


            <article class="bus-use-step">

              <span>6</span>

              <strong>
                Solicite sua parada
              </strong>

              <p>
                Avise com antecedência
                quando estiver
                próximo de descer.
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
            href="https://www.mta.info/guides/riding-the-bus"
            target="_blank"
            rel="noopener noreferrer"
          >
            Como usar os ônibus · MTA
          </a>


          <a
            class="official-link"
            href="https://www.mta.info/maps"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mapas de ônibus · MTA
          </a>


          <a
            class="official-link"
            href="https://bt.mta.info/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MTA Bus Time
          </a>


          <a
            class="official-link"
            href="https://www.mta.info/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alertas e status · MTA
          </a>

        </div>


        <div class="bus-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
