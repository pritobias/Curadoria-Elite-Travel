// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — NOVA YORK
// MÓDULO: PLANEJAMENTO DE TRAJETOS
// ============================================================

window.NEW_YORK_TRANSPORT_MODULES =
  window.NEW_YORK_TRANSPORT_MODULES || {};


window.NEW_YORK_TRANSPORT_MODULES["planner"] = {

  kicker: "Nova York · planejamento",

  title: "Planeje o trajeto",

  body() {

    return `

      <div class="network-layout">


        <!-- ==================================================
             PRINCÍPIO
        =================================================== -->

        <section class="panel-box network-full">

          <div class="payment-recommendation">

            <span class="payment-eyebrow">
              Antes de sair
            </span>

            <h4>
              Em Nova York,
              a melhor viagem nem sempre
              é a que usa apenas o subway.
            </h4>

            <p>
              Subway,
              ônibus,
              LIRR,
              Metro-North,
              PATH
              e ferries
              resolvem situações diferentes.

              Compare tempo,
              número de trocas,
              caminhada,
              acessibilidade
              e tarifa antes
              de escolher.
            </p>

          </div>

        </section>


        <!-- ==================================================
             PRIMEIRO PASSO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Comece pela viagem completa
          </h4>

          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Informe origem e destino
              </strong>

              <p>
                Use o endereço
                ou ponto exato
                de onde você realmente
                pretende sair e chegar.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Compare as opções
              </strong>

              <p>
                Não escolha
                automaticamente
                a primeira rota.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Observe as trocas
              </strong>

              <p>
                Veja quantas conexões
                serão necessárias
                e entre quais sistemas.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Confira o serviço
              </strong>

              <p>
                Veja alertas,
                alterações,
                elevadores
                e situação da rede.
              </p>

            </article>


            <article class="bus-use-step">

              <span>5</span>

              <strong>
                Só então saia
              </strong>

              <p>
                Em uma rede dinâmica,
                uma rota planejada antes
                pode mudar no dia.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ESCOLHA DO MODAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Qual modal considerar?
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                MTA
              </span>

              <strong>
                Subway
              </strong>

              <p>
                Normalmente é
                a primeira opção
                para deslocamentos
                mais longos
                dentro da cidade.
              </p>

              <span class="route-compare-result">
                Evita o trânsito
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                MTA
              </span>

              <strong>
                Ônibus
              </strong>

              <p>
                Útil para trechos
                sem subway próximo,
                deslocamentos transversais
                e viagens com menos escadas.
              </p>

              <span class="route-compare-result">
                Rede de superfície
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                MTA
              </span>

              <strong>
                LIRR
              </strong>

              <p>
                Pode ser útil
                para partes de Queens,
                Brooklyn,
                JFK via Jamaica
                e destinos de Long Island.
              </p>

              <span class="route-compare-result">
                Trem suburbano
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                MTA
              </span>

              <strong>
                Metro-North
              </strong>

              <p>
                Liga Manhattan
                a destinos ao norte
                da cidade
                e à região metropolitana.
              </p>

              <span class="route-compare-result">
                Trem suburbano
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Port Authority
              </span>

              <strong>
                PATH
              </strong>

              <p>
                É uma conexão importante
                entre Manhattan
                e cidades de Nova Jersey.
              </p>

              <span class="route-compare-result">
                Outro sistema
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                NYC Ferry
              </span>

              <strong>
                Ferry
              </strong>

              <p>
                Pode ser conveniente
                quando origem e destino
                ficam próximos
                aos landings.
              </p>

              <span class="route-compare-result">
                Via aquática
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             SUBWAY
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Planejando pelo subway
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🔢</span>

              <strong>
                Linha
              </strong>

              <p>
                Confira a letra
                ou número
                do serviço.
              </p>

            </article>


            <article class="planner-check-card">

              <span>↕️</span>

              <strong>
                Direção
              </strong>

              <p>
                Veja o destino
                indicado para aquele
                sentido da linha.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⚪</span>

              <strong>
                Local ou express
              </strong>

              <p>
                Nem todos os trens
                param em todas
                as estações.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔀</span>

              <strong>
                Transferência
              </strong>

              <p>
                Confira em qual estação
                você deve mudar
                de serviço.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⚠️</span>

              <strong>
                Alterações
              </strong>

              <p>
                Obras e manutenção
                podem modificar
                o serviço normal.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             LOCAL / EXPRESS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Local e express
          </h4>

          <div class="visitor-alert">

            <strong>
              Dois trens podem usar
              parte do mesmo corredor
              sem fazer as mesmas paradas.
            </strong>

            Antes de embarcar,
            confirme se o serviço
            realmente para
            na estação desejada.

          </div>


          <div class="answer-block">

            <strong>
              Não escolha apenas pela cor.
            </strong>

            <p>
              No subway,
              a identificação principal
              do serviço é a letra
              ou o número.

              Linhas que aparecem
              com a mesma cor
              podem ter trajetos
              e paradas diferentes.
            </p>

          </div>

        </section>


        <!-- ==================================================
             DIREÇÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Uptown e Downtown ajudam,
            mas não resolvem tudo
          </h4>

          <p class="panel-intro">
            Em Manhattan,
            essas indicações
            aparecem com frequência.

            Fora dela,
            ou em determinados serviços,
            o destino final
            é uma referência
            mais segura.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Uptown
              </strong>

              <p>
                Em geral,
                direção norte
                em Manhattan.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Downtown
              </strong>

              <p>
                Em geral,
                direção sul
                em Manhattan.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Brooklyn
              </strong>

              <p>
                Algumas placas
                indicam diretamente
                o borough
                ou terminal.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Queens
              </strong>

              <p>
                O destino
                da linha
                ajuda a confirmar
                o sentido correto.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ENTRADAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Confira a entrada da estação
          </h4>

          <div class="visitor-alert">

            <strong>
              Nem toda entrada
              leva diretamente
              aos dois sentidos.
            </strong>

            Antes de passar
            pela catraca,
            leia a sinalização
            da entrada
            e confirme
            o sentido atendido.

          </div>


          <div class="answer-block">

            <strong>
              Se entrar pelo lado errado,
              não presuma que haverá
              passagem interna.
            </strong>

            <p>
              A configuração
              varia de estação
              para estação.

              Confira antes
              de pagar.
            </p>

          </div>

        </section>


        <!-- ==================================================
             ÔNIBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quando considerar o ônibus
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>↔️</span>

              <strong>
                Cruzar Manhattan
              </strong>

              <p>
                Ônibus pode resolver
                trechos leste-oeste
                sem uma conexão
                conveniente de subway.
              </p>

            </article>


            <article class="planner-check-card">

              <span>📍</span>

              <strong>
                Subway distante
              </strong>

              <p>
                Pode reduzir
                a caminhada
                até o destino.
              </p>

            </article>


            <article class="planner-check-card">

              <span>♿</span>

              <strong>
                Menos escadas
              </strong>

              <p>
                Pode ser uma alternativa
                quando a estação
                não atende bem
                sua necessidade
                de acessibilidade.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🌆</span>

              <strong>
                Trecho curto
              </strong>

              <p>
                Em alguns percursos,
                evita entrar
                e sair do subway.
              </p>

            </article>

          </div>


          <div class="fare-note">

            O tempo do ônibus
            é afetado pelo trânsito.

            Compare o tempo estimado
            no momento da viagem.

          </div>

        </section>


        <!-- ==================================================
             LIRR / METRO-NORTH
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            LIRR e Metro-North
          </h4>

          <p class="panel-intro">
            Não são extensões
            tarifárias do subway.

            São sistemas ferroviários
            próprios,
            com horários
            e bilhetes específicos.
          </p>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Long Island Rail Road
              </span>

              <strong>
                LIRR
              </strong>

              <p>
                Atende Long Island
                e também estações
                dentro de Nova York.
              </p>

              <span class="route-compare-result">
                TrainTime
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Metro-North Railroad
              </span>

              <strong>
                Metro-North
              </strong>

              <p>
                Atende destinos
                ao norte de Manhattan
                e além dos limites
                da cidade.
              </p>

              <span class="route-compare-result">
                TrainTime
              </span>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Verifique o bilhete
              antes de embarcar.
            </strong>

            Não conte
            com o mesmo pagamento OMNY
            utilizado no subway.

          </div>

        </section>


        <!-- ==================================================
             PATH
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            PATH para Nova Jersey
          </h4>

          <p class="panel-intro">
            PATH conecta Manhattan
            a Newark,
            Harrison,
            Jersey City
            e Hoboken.
          </p>

          <div class="answer-block">

            <strong>
              Planeje no sistema do PATH.
            </strong>

            <p>
              Horários,
              padrões de serviço,
              alertas
              e acessibilidade
              são administrados
              pela Port Authority,
              não pela MTA.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              O serviço muda
              conforme dia e horário.
            </strong>

            Noite,
            fim de semana
            e manutenção
            podem alterar
            os padrões normais
            de circulação.

            Consulte o serviço
            para o momento
            da sua viagem.

          </div>

        </section>


        <!-- ==================================================
             FERRY
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quando considerar ferry
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                NYC Ferry
              </span>

              <strong>
                Rede paga
              </strong>

              <p>
                Conecta diferentes
                áreas da cidade
                por rotas aquáticas.
              </p>

              <span class="route-compare-result">
                Tarifa própria
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                NYC DOT
              </span>

              <strong>
                Staten Island Ferry
              </strong>

              <p>
                Liga Whitehall,
                em Manhattan,
                a St. George,
                em Staten Island.
              </p>

              <span class="route-compare-result">
                Gratuito
              </span>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Ferry não substitui
              automaticamente subway
              ou ônibus.
            </strong>

            Considere também
            a caminhada
            até o landing
            e do landing
            até seu destino final.

          </div>

        </section>


        <!-- ==================================================
             JFK
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            JFK · planeje a viagem completa
          </h4>

          <p class="panel-intro">
            O AirTrain conecta
            os terminais do JFK
            à rede externa
            em Jamaica
            e Howard Beach.
          </p>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Jamaica
              </span>

              <strong>
                AirTrain + subway
              </strong>

              <p>
                Conexão possível
                com serviços
                de subway
                na região de Jamaica.
              </p>

              <span class="route-compare-result">
                Compare o trajeto
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Jamaica
              </span>

              <strong>
                AirTrain + LIRR
              </strong>

              <p>
                Pode oferecer
                uma viagem ferroviária
                mais rápida
                para alguns destinos.
              </p>

              <span class="route-compare-result">
                Bilhetes separados
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Howard Beach
              </span>

              <strong>
                AirTrain + subway
              </strong>

              <p>
                Outra conexão
                entre o aeroporto
                e a rede do subway.
              </p>

              <span class="route-compare-result">
                Compare o destino
              </span>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Não escolha Jamaica
              ou Howard Beach
              apenas porque uma parece
              mais conhecida.
            </strong>

            A melhor conexão
            depende do endereço
            para onde você está indo.

          </div>

        </section>


        <!-- ==================================================
             LAGUARDIA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            LaGuardia · LGA
          </h4>

          <div class="answer-block">

            <strong>
              Não existe estação
              de subway dentro
              do aeroporto.
            </strong>

            <p>
              O transporte público
              até ou desde LaGuardia
              envolve ônibus
              e, conforme o trajeto,
              conexão com subway
              ou outros serviços.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Informe seu terminal
              e destino final
              no planejador.
            </strong>

            Não existe uma única
            combinação correta
            para todos os passageiros.

          </div>

        </section>


        <!-- ==================================================
             NEWARK
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Newark Liberty · EWR
          </h4>

          <div class="visitor-alert">

            <strong>
              Newark fica em Nova Jersey.
            </strong>

            Não trate EWR
            como se fosse apenas
            mais uma estação
            da rede urbana
            de Nova York.

          </div>


          <div class="answer-block">

            <strong>
              Planeje origem,
              terminal
              e horário específicos.
            </strong>

            <p>
              As opções podem envolver
              diferentes operadores
              e conexões ferroviárias
              ou rodoviárias.

              Confira a situação atual
              no momento da viagem.
            </p>

          </div>

        </section>


        <!-- ==================================================
             ACESSIBILIDADE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Se acessibilidade importa,
            planeje por acessibilidade
          </h4>

          <p class="panel-intro">
            Não basta verificar
            se uma estação
            possui elevador.

            O equipamento precisa
            estar funcionando
            no momento da viagem.
          </p>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>♿</span>

              <strong>
                Estação
              </strong>

              <p>
                Confirme
                se é acessível.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🛗</span>

              <strong>
                Elevador
              </strong>

              <p>
                Confira
                o status atual.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔀</span>

              <strong>
                Transferência
              </strong>

              <p>
                Verifique também
                a estação
                onde haverá troca.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Alternativa
              </strong>

              <p>
                Considere ônibus
                quando a rota ferroviária
                não atender bem
                sua necessidade.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ALERTAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Confira novamente
            pouco antes de sair
          </h4>

          <div class="visitor-alert">

            <strong>
              O mapa mostra a rede.
              O status mostra
              o que está funcionando agora.
            </strong>

            Obras programadas,
            manutenção,
            desvios,
            interrupções
            e problemas em elevadores
            podem mudar
            a melhor rota.

          </div>


          <div class="answer-block">

            <strong>
              Especialmente à noite
              e nos fins de semana
            </strong>

            <p>
              Reserve alguns segundos
              para conferir
              a situação do serviço
              antes de iniciar
              o deslocamento.
            </p>

          </div>

        </section>


        <!-- ==================================================
             TROCA DE SISTEMA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Trocar de veículo
            não é sempre
            o mesmo que fazer
            uma integração tarifária
          </h4>

          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                MTA
              </span>

              <strong>
                Subway → ônibus
              </strong>

              <p>
                Pode utilizar
                a transferência
                prevista pelo OMNY.
              </p>

              <span class="fare-scenario-result">
                Sistema integrado
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                PATH + MTA
              </span>

              <strong>
                PATH → subway
              </strong>

              <p>
                São operadores
                e sistemas tarifários
                diferentes.
              </p>

              <span class="fare-scenario-result">
                Nova tarifa
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                JFK
              </span>

              <strong>
                AirTrain → subway
              </strong>

              <p>
                O AirTrain
                possui cobrança própria.
              </p>

              <span class="fare-scenario-result">
                Tarifas separadas
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Trem suburbano
              </span>

              <strong>
                LIRR → subway
              </strong>

              <p>
                O bilhete ferroviário
                não substitui
                a tarifa do subway.
              </p>

              <span class="fare-scenario-result">
                Tarifas separadas
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                NYC Ferry + MTA
              </span>

              <strong>
                Ferry → subway
              </strong>

              <p>
                Os sistemas
                possuem cobranças
                próprias.
              </p>

              <span class="fare-scenario-result">
                Tarifas separadas
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             NÃO PLANEJAR SÓ PELO TEMPO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            A rota mais rápida
            nem sempre é a mais conveniente
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>⏱️</span>

              <strong>
                Tempo
              </strong>

              <p>
                Compare a duração
                total estimada.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚶</span>

              <strong>
                Caminhada
              </strong>

              <p>
                Observe quanto
                será necessário andar
                antes e depois.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔀</span>

              <strong>
                Trocas
              </strong>

              <p>
                Uma rota alguns minutos
                mais lenta
                pode exigir
                menos conexões.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🧳</span>

              <strong>
                Bagagem
              </strong>

              <p>
                Escadas e transferências
                pesam mais
                quando você está
                com malas.
              </p>

            </article>


            <article class="planner-check-card">

              <span>♿</span>

              <strong>
                Acessibilidade
              </strong>

              <p>
                Verifique o percurso
                completo,
                não apenas a origem.
              </p>

            </article>


            <article class="planner-check-card">

              <span>💵</span>

              <strong>
                Custo
              </strong>

              <p>
                Trocas entre sistemas
                podem significar
                tarifas adicionais.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             CHECKLIST
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Checklist antes de sair
          </h4>

          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Destino correto
              </strong>

              <p>
                Confirme o endereço,
                não apenas
                o nome do lugar.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Modal
              </strong>

              <p>
                Veja qual combinação
                realmente faz sentido.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Sentido
              </strong>

              <p>
                Confira linha,
                destino
                e direção.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Alterações
              </strong>

              <p>
                Verifique
                o status atual
                do serviço.
              </p>

            </article>


            <article class="bus-use-step">

              <span>5</span>

              <strong>
                Pagamento
              </strong>

              <p>
                Saiba se continuará
                no mesmo sistema
                ou haverá
                nova tarifa.
              </p>

            </article>


            <article class="bus-use-step">

              <span>6</span>

              <strong>
                Acessibilidade
              </strong>

              <p>
                Quando necessária,
                confira elevadores
                e todo o percurso.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             FERRAMENTAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ferramentas para planejar
          </h4>

          <div class="purchase-grid">

            <article class="purchase-card">

              <span>🚇</span>

              <strong>
                MTA
              </strong>

              <p>
                Subway,
                ônibus,
                LIRR
                e Metro-North,
                com informações
                de serviço.
              </p>

            </article>


            <article class="purchase-card">

              <span>🚆</span>

              <strong>
                TrainTime
              </strong>

              <p>
                Planejamento
                e bilhetes
                de LIRR
                e Metro-North.
              </p>

            </article>


            <article class="purchase-card">

              <span>🚉</span>

              <strong>
                PATH
              </strong>

              <p>
                Horários,
                planejamento,
                alterações
                e acessibilidade
                do PATH.
              </p>

            </article>


            <article class="purchase-card">

              <span>⛴️</span>

              <strong>
                NYC Ferry
              </strong>

              <p>
                Rotas,
                horários
                e informações
                dos ferries.
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
            href="https://www.mta.info/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Planejar e conferir serviço · MTA
          </a>


          <a
            class="official-link"
            href="https://www.mta.info/maps"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mapas oficiais · MTA
          </a>


          <a
            class="official-link"
            href="https://traintime.mta.info/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TrainTime · LIRR e Metro-North
          </a>


          <a
            class="official-link"
            href="https://www.panynj.gov/path/en/trip-planner.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Planejador oficial · PATH
          </a>


          <a
            class="official-link"
            href="https://www.ferry.nyc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rotas e horários · NYC Ferry
          </a>

        </div>


        <div class="planner-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
