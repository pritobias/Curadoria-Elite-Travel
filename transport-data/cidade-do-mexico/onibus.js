// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — CIDADE DO MÉXICO
// MÓDULO: ÔNIBUS
// ============================================================

window.MEXICO_CITY_TRANSPORT_MODULES =
  window.MEXICO_CITY_TRANSPORT_MODULES || {};


window.MEXICO_CITY_TRANSPORT_MODULES["bus"] = {

  kicker: "Cidade do México · ônibus",

  title: "Como usar os ônibus",

  body() {

    return `

      <div class="network-layout">


        <!-- ==================================================
             VISÃO GERAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Primeiro identifique
            qual sistema você está usando
          </h4>

          <p class="panel-intro">
            Na Cidade do México,
            “pegar um ônibus”
            pode significar
            experiências bastante diferentes.

            Metrobús,
            RTP
            e Trolebús
            fazem parte
            da Rede de Movilidad Integrada,
            mas não funcionam
            exatamente da mesma maneira.
          </p>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Metrobús
              </strong>

              <p>
                Corredores estruturados,
                estações próprias
                e embarque organizado
                por plataforma.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                RTP
              </strong>

              <p>
                Rede de ônibus
                convencionais
                com diferentes rotas
                e modalidades.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚎</span>

              <strong>
                Trolebús
              </strong>

              <p>
                Ônibus elétricos
                operados pelo STE
                em corredores
                próprios.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             NÃO CONFUNDIR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Eles não funcionam
            do mesmo jeito
          </h4>


          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Metrobús
              </span>

              <strong>
                Estações
              </strong>

              <p>
                Você normalmente
                entra primeiro
                na estação
                e depois embarca.
              </p>

              <span class="route-compare-result">
                Sistema estruturado
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                RTP
              </span>

              <strong>
                Pontos de ônibus
              </strong>

              <p>
                O embarque ocorre
                ao longo
                das rotas
                nas paradas previstas.
              </p>

              <span class="route-compare-result">
                Ônibus convencional
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Trolebús
              </span>

              <strong>
                Linhas próprias
              </strong>

              <p>
                Possui corredores,
                paradas
                e operação
                específica do STE.
              </p>

              <span class="route-compare-result">
                Rede elétrica
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             METROBÚS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metrobús
          </h4>

          <p class="panel-intro">
            Para muitos visitantes,
            é o sistema de ônibus
            mais fácil de compreender.

            Ele funciona
            em corredores definidos
            e possui estações
            com nomes próprios,
            de forma semelhante
            à lógica de uma rede
            ferroviária.
          </p>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🔢</span>

              <strong>
                Linha
              </strong>

              <p>
                Primeiro veja
                qual das linhas
                atende seu trajeto.
              </p>

            </article>


            <article class="planner-check-card">

              <span>📍</span>

              <strong>
                Estação
              </strong>

              <p>
                Confirme
                onde embarcar
                e onde descer.
              </p>

            </article>


            <article class="planner-check-card">

              <span>↔</span>

              <strong>
                Sentido
              </strong>

              <p>
                Observe o terminal
                ou destino
                indicado para a rota.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Percurso
              </strong>

              <p>
                Algumas linhas
                possuem mais de
                um serviço
                dentro do mesmo corredor.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             LINHAS METROBÚS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Linhas do Metrobús
          </h4>

          <p class="panel-intro">
            O sistema possui
            sete linhas principais.

            Cada uma atende
            um eixo diferente
            da cidade.
          </p>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Linha 1
              </strong>

              <p>
                Eixo de Insurgentes,
                entre o norte
                e o sul da cidade.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Linha 2
              </strong>

              <p>
                Corredor transversal
                no eixo sul-central.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Linha 3
              </strong>

              <p>
                Liga áreas
                ao norte
                e ao sul
                passando pela região central.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Linha 4
              </strong>

              <p>
                Importante
                para Centro Histórico
                e conexão
                com o AICM.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Linha 5
              </strong>

              <p>
                Corredor
                no eixo oriental
                da cidade.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Linha 6
              </strong>

              <p>
                Liga Villa de Aragón
                à região
                de El Rosario.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Linha 7
              </strong>

              <p>
                Percorre grande parte
                do Paseo de la Reforma
                e áreas turísticas importantes.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ROTA DENTRO DA LINHA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            A linha sozinha
            pode não ser suficiente
          </h4>


          <div class="visitor-alert">

            <strong>
              Dentro de uma mesma linha
              podem existir diferentes percursos.
            </strong>

            Não olhe apenas
            “Linha 1”
            ou “Linha 4”.

            Confira também
            o destino final
            exibido naquele serviço.

          </div>


          <div class="answer-block">

            <strong>
              Pense como em um trem
              com serviços diferentes.
            </strong>

            <p>
              Dois veículos
              da mesma linha
              podem não percorrer
              exatamente todas
              as mesmas estações.

              Antes de embarcar,
              confirme se a estação
              onde você pretende descer
              faz parte
              daquele percurso específico.
            </p>

          </div>

        </section>


        <!-- ==================================================
             COMO EMBARCAR METROBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como embarcar no Metrobús
          </h4>


          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Localize a estação
              </strong>

              <p>
                Confirme o nome
                da estação
                que aparece
                no seu trajeto.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Veja o sentido
              </strong>

              <p>
                Confira o terminal
                ou destino
                utilizado como referência.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Valide o acesso
              </strong>

              <p>
                Use a Tarjeta MI
                ou outro meio
                aceito
                naquele acesso.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Entre na plataforma
              </strong>

              <p>
                Depois da validação,
                siga para a área
                correspondente
                ao seu sentido.
              </p>

            </article>


            <article class="bus-use-step">

              <span>5</span>

              <strong>
                Confira o veículo
              </strong>

              <p>
                Veja o destino
                indicado
                antes de embarcar.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             PAGAMENTO METROBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Pagamento no Metrobús
          </h4>


          <div class="payment-method-grid">

            <article class="payment-method">

              <span class="payment-method-icon">
                ▣
              </span>

              <strong>
                Tarjeta MI
              </strong>

              <span class="payment-status available">
                Aceita
              </span>

              <small>
                Principal meio
                dentro da Rede
                de Movilidad Integrada.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                💳
              </span>

              <strong>
                Cartão bancário
              </strong>

              <span class="payment-status available">
                Contactless
              </span>

              <small>
                Meios compatíveis
                podem ser usados
                por aproximação.
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
                Carteira digital
              </span>

              <small>
                Dispositivo
                compatível
                com pagamento
                sem contato.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                ⌚
              </span>

              <strong>
                Smartwatch
              </strong>

              <span class="payment-status available">
                Contactless
              </span>

              <small>
                Quando configurado
                para pagamento
                por aproximação.
              </small>

            </article>

          </div>

        </section>


        <!-- ==================================================
             TRANSBORDO METROBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Mudando de linha no Metrobús
          </h4>


          <div class="answer-block">

            <strong>
              Existem transbordos gratuitos
              entre linhas elegíveis.
            </strong>

            <p>
              O sistema permite
              mudar de uma linha
              para outra
              dentro das condições
              estabelecidas
              pelo próprio Metrobús.
            </p>

          </div>


          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Janela
              </span>

              <strong>
                Até 2 horas
              </strong>

              <p>
                Contadas
                a partir
                do primeiro acesso.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Use o mesmo meio
              de pagamento.
            </strong>

            Se você começou
            a viagem
            com a Tarjeta MI,
            continue com ela
            ao realizar
            um transbordo elegível.

          </div>

        </section>


        <!-- ==================================================
             LINHA 1
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Linha 1 · Insurgentes
          </h4>

          <p class="panel-intro">
            É uma das linhas
            que o visitante
            encontra com mais facilidade
            por atravessar
            um grande eixo
            norte-sul da cidade.
          </p>


          <div class="answer-block">

            <strong>
              Ela percorre
              a Avenida de los Insurgentes.
            </strong>

            <p>
              O corredor passa
              por regiões como
              Reforma,
              Roma,
              Condesa,
              Del Valle
              e áreas
              mais ao sul.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Veja o destino
              do veículo.
            </strong>

            A Linha 1 possui
            diferentes serviços
            e percursos parciais.

            Não considere
            que todo veículo
            necessariamente vá
            de uma ponta
            à outra da linha.

          </div>

        </section>


        <!-- ==================================================
             LINHA 7
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Linha 7 · Paseo de la Reforma
          </h4>

          <p class="panel-intro">
            Para turismo,
            esta é uma das linhas
            mais fáceis de reconhecer
            por circular
            em grande parte
            pelo Paseo de la Reforma.
          </p>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🏛️</span>

              <strong>
                Centro
              </strong>

              <p>
                Há serviços
                conectando
                a região central
                ao corredor.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🗿</span>

              <strong>
                Reforma
              </strong>

              <p>
                A linha acompanha
                boa parte
                da avenida.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🌳</span>

              <strong>
                Chapultepec
              </strong>

              <p>
                O corredor
                atende áreas próximas
                ao bosque
                e seus acessos.
              </p>

            </article>


            <article class="planner-check-card">

              <span>📍</span>

              <strong>
                Campo Marte
              </strong>

              <p>
                É uma das referências
                de terminal
                no corredor.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Aos domingos
              pode haver operação especial
              em trechos da Linha 7.
            </strong>

            Atividades
            e fechamentos viários
            no Paseo de la Reforma
            podem modificar
            temporariamente
            a operação.

            Consulte o status
            antes de depender
            da linha em um horário específico.

          </div>

        </section>


        <!-- ==================================================
             LINHA 4
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Linha 4 · Centro e aeroporto
          </h4>

          <p class="panel-intro">
            A Linha 4
            merece atenção especial
            porque combina
            circulação pela região central
            com serviços
            relacionados ao aeroporto.
          </p>


          <div class="visitor-alert">

            <strong>
              Nem todo veículo da Linha 4
              vai para o aeroporto.
            </strong>

            Confira especificamente
            o destino
            indicado no serviço.

          </div>


          <div class="answer-block">

            <strong>
              AICM · Terminal 1 e Terminal 2
            </strong>

            <p>
              O Metrobús
              possui serviço
              que conecta
              o corredor da Linha 4
              aos dois terminais
              do Aeroporto Internacional
              da Cidade do México.
            </p>

          </div>

        </section>


        <!-- ==================================================
             AICM
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metrobús no AICM
          </h4>


          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Tarifa aeroportuária
              </span>

              <strong>
                MX$ 30
              </strong>

              <p>
                Valor específico
                para o serviço
                dos Terminais 1 e 2.
              </p>

            </article>

          </div>


          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Identifique seu terminal
              </strong>

              <p>
                Terminal 1
                ou Terminal 2.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Localize o Metrobús
              </strong>

              <p>
                Procure a área
                indicada
                para o serviço
                da Linha 4.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Confira o destino
              </strong>

              <p>
                Veja para onde
                aquele veículo
                seguirá
                antes do embarque.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Tenha saldo suficiente
              </strong>

              <p>
                A tarifa
                não é a mesma
                de uma viagem padrão
                de Metrobús.
              </p>

            </article>

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
            possui uma rede extensa
            de ônibus convencionais.

            Ela é especialmente útil
            em áreas
            onde Metro
            ou Metrobús
            não chegam diretamente.
          </p>


          <div class="visitor-alert">

            <strong>
              Aqui a experiência
              é diferente do Metrobús.
            </strong>

            Em vez de pensar
            em uma rede
            de estações fechadas,
            pense em linhas
            de ônibus
            com origem,
            destino
            e pontos
            ao longo da rua.

          </div>

        </section>


        <!-- ==================================================
             TIPOS RTP
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Tipos de serviço da RTP
          </h4>


          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Ordinário
              </span>

              <strong>
                Serviço local
              </strong>

              <p>
                Atende mais pontos
                ao longo
                da rota.
              </p>

              <span class="route-compare-result">
                MX$ 2
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
                Serviço voltado
                a percursos
                mais rápidos.
              </p>

              <span class="route-compare-result">
                MX$ 4
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Ecobús
              </span>

              <strong>
                Rotas específicas
              </strong>

              <p>
                Categoria
                própria
                dentro da RTP.
              </p>

              <span class="route-compare-result">
                MX$ 5
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
                Opera
                em corredores
                selecionados.
              </p>

              <span class="route-compare-result">
                MX$ 7
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             RTP ORDINARIO EXPRESSO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ordinário e Expresso
            não são a mesma coisa
          </h4>


          <div class="visitor-alert">

            <strong>
              Uma rota pode ter
              serviços com padrão diferente.
            </strong>

            O serviço Expresso
            tende a atender
            menos paradas
            do que o Ordinário.

            Se você escolher
            apenas pelo destino final,
            pode descobrir
            que o veículo
            não para
            exatamente onde precisa.

          </div>


          <div class="answer-block">

            <strong>
              Confirme sempre
              a modalidade da viagem.
            </strong>

            <p>
              Veja a rota completa,
              a direção
              e as paradas
              antes de embarcar.

              Isso é ainda mais importante
              se você estiver indo
              para uma região
              que não conhece.
            </p>

          </div>

        </section>


        <!-- ==================================================
             COMO EMBARCAR RTP
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como embarcar na RTP
          </h4>


          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Pesquise a rota
              </strong>

              <p>
                Veja origem,
                destino
                e percurso.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Encontre a parada
              </strong>

              <p>
                Vá ao ponto
                indicado
                para aquela rota.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Confira o veículo
              </strong>

              <p>
                Veja número,
                origem,
                destino
                e modalidade.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Embarque
              </strong>

              <p>
                Entre
                quando o veículo
                parar no ponto.
              </p>

            </article>


            <article class="bus-use-step">

              <span>5</span>

              <strong>
                Valide o pagamento
              </strong>

              <p>
                Use a Tarjeta MI
                no equipamento
                correspondente.
              </p>

            </article>


            <article class="bus-use-step">

              <span>6</span>

              <strong>
                Acompanhe o trajeto
              </strong>

              <p>
                Observe sua posição
                para não passar
                do ponto desejado.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             RTP MAPA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O mapa da RTP
            funciona por rotas
          </h4>

          <p class="panel-intro">
            A RTP mantém
            uma página oficial
            organizada por módulos
            e rotas.

            Para cada serviço,
            é possível consultar
            origem,
            destino
            e mapa correspondente.
          </p>


          <div class="answer-block">

            <strong>
              Use a rota específica.
            </strong>

            <p>
              Em vez de tentar
              decorar toda a rede,
              procure apenas
              o trecho necessário
              para sua viagem.

              Isso reduz muito
              a confusão.
            </p>

          </div>

        </section>


        <!-- ==================================================
             SANTA FE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            RTP pode ser útil
            para Santa Fe
          </h4>

          <p class="panel-intro">
            Santa Fe
            é uma das áreas
            onde ônibus
            podem ter papel importante
            porque a região
            não é atendida
            diretamente por uma rede
            ampla de Metro.
          </p>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                Auditorio
              </strong>

              <p>
                Existem rotas
                de RTP conectando
                a região
                com Santa Fe.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                Tacubaya
              </strong>

              <p>
                Também aparece
                como ponto
                de conexão
                para rotas da região.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🏙️</span>

              <strong>
                Santa Fe
              </strong>

              <p>
                Confirme sempre
                qual rota
                atende seu destino
                específico.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Santa Fe é grande.
            </strong>

            “Ônibus para Santa Fe”
            não significa
            necessariamente
            que o veículo
            passará perto
            do hotel,
            shopping
            ou edifício
            onde você pretende ir.

            Confira o ponto final
            e as paradas.

          </div>

        </section>


        <!-- ==================================================
             NOCHEBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Nochebús
          </h4>

          <p class="panel-intro">
            A RTP possui
            serviço noturno
            em corredores específicos.
          </p>


          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Horário de referência
              </span>

              <strong>
                00:00 → 05:00
              </strong>

              <p>
                Serviço noturno
                publicado pela RTP.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Tarifa
              </span>

              <strong>
                MX$ 7
              </strong>

              <p>
                Valor específico
                do serviço.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Nochebús não cobre
              toda a cidade.
            </strong>

            Não saia tarde
            contando apenas
            com a existência
            do serviço.

            Primeiro confirme
            se há uma rota
            que atende
            sua origem
            e seu destino.

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
            O Trolebús
            é uma rede
            de transporte elétrico
            operada pelo
            Servicio de Transportes Eléctricos.

            Ele possui
            linhas próprias,
            paradas definidas
            e conexões
            com outros sistemas.
          </p>


          <div class="answer-block">

            <strong>
              Não trate como RTP.
            </strong>

            <p>
              Embora visualmente
              seja um ônibus,
              o Trolebús
              pertence a outra rede
              e possui
              suas próprias linhas,
              tarifas
              e mapas.
            </p>

          </div>

        </section>


        <!-- ==================================================
             REDE TROLEBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como identificar o Trolebús
          </h4>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🔢</span>

              <strong>
                Linha
              </strong>

              <p>
                Cada serviço
                possui um número
                próprio.
              </p>

            </article>


            <article class="planner-check-card">

              <span>↔</span>

              <strong>
                Terminais
              </strong>

              <p>
                Use os extremos
                da linha
                para confirmar
                o sentido.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚏</span>

              <strong>
                Paradas
              </strong>

              <p>
                Consulte
                a relação oficial
                da linha.
              </p>

            </article>


            <article class="planner-check-card">

              <span>▣</span>

              <strong>
                Tarjeta MI
              </strong>

              <p>
                É utilizada
                no pagamento
                da rede.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             TROLEBUS LINHA 1
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Trolebús Linha 1
          </h4>

          <p class="panel-intro">
            É uma linha importante
            para entender
            como o Trolebús
            pode complementar
            o transporte
            em áreas centrais.
          </p>


          <div class="answer-block">

            <strong>
              Eje Central
            </strong>

            <p>
              A Linha 1
              percorre
              o Eje Central Lázaro Cárdenas
              e continua
              por eixos
              em direção ao sul.
            </p>

          </div>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Central del Norte
              </strong>

              <p>
                Uma das referências
                da linha.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🏙️</span>

              <strong>
                Centro
              </strong>

              <p>
                O corredor passa
                pela região central
                da cidade.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                Tasqueña
              </strong>

              <p>
                Conecta
                com importante
                ponto intermodal
                ao sul.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Central del Sur
              </strong>

              <p>
                Região associada
                ao terminal rodoviário
                de Tasqueña.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             TROLEBUS LINHA 2
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Trolebús Linha 2
          </h4>

          <p class="panel-intro">
            Outra linha
            que pode aparecer
            em trajetos turísticos
            ou de conexão.
          </p>


          <div class="answer-block">

            <strong>
              Chapultepec ↔ Velódromo
            </strong>

            <p>
              A linha atravessa
              áreas como
              Roma,
              corredor de Insurgentes
              e regiões
              mais a leste.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não escolha apenas
              porque o veículo
              “vai para Chapultepec”.
            </strong>

            Veja a parada exata
            e o sentido
            antes do embarque.

          </div>

        </section>


        <!-- ==================================================
             EMBARQUE TROLEBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como usar o Trolebús
          </h4>


          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Escolha a linha
              </strong>

              <p>
                Veja qual serviço
                atende
                seu percurso.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Confira o sentido
              </strong>

              <p>
                Utilize
                os terminais da linha
                como referência.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Localize a parada
              </strong>

              <p>
                Consulte
                a lista oficial
                do STE.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Embarque
              </strong>

              <p>
                Entre
                no ponto indicado
                quando o veículo chegar.
              </p>

            </article>


            <article class="bus-use-step">

              <span>5</span>

              <strong>
                Pague
              </strong>

              <p>
                Utilize
                a Tarjeta MI
                no validador.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             PARA DESCER
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Para descer
          </h4>


          <div class="answer-block">

            <strong>
              Acompanhe sua posição
              antes da parada desejada.
            </strong>

            <p>
              Em ônibus convencionais
              e linhas de superfície,
              não é uma boa estratégia
              esperar perceber
              o destino
              apenas quando
              o veículo chegar.

              Acompanhe o trajeto
              pelo celular
              ou pelas referências
              de rua.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Em serviços com parada solicitada,
              avise com antecedência.
            </strong>

            Quando houver
            botão,
            campainha
            ou mecanismo
            para solicitar parada,
            utilize-o
            antes do ponto
            onde deseja descer.

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
            O nome da linha
            sozinho
            não resolve.

            Sempre observe
            para qual terminal
            ou destino
            o veículo está seguindo.
          </p>


          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Veja sua origem
              </strong>

              <p>
                Localize
                onde você está
                na linha.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Veja seu destino
              </strong>

              <p>
                Identifique
                em qual direção
                ele aparece.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Veja o terminal
              </strong>

              <p>
                Use o extremo
                daquela direção
                como referência
                de sentido.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Confira no veículo
              </strong>

              <p>
                Antes de embarcar,
                compare
                com o destino
                exibido.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             GOOGLE MAPS / PLANEJAMENTO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Use um planejador
            para descobrir a linha
          </h4>


          <div class="answer-block">

            <strong>
              Não tente memorizar
              a rede de ônibus.
            </strong>

            <p>
              Para um visitante,
              faz mais sentido
              pesquisar origem
              e destino
              e depois conferir
              o resultado
              no canal oficial
              do sistema correspondente.
            </p>

          </div>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>📍</span>

              <strong>
                Origem
              </strong>

              <p>
                Use sua localização
                real.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🎯</span>

              <strong>
                Destino
              </strong>

              <p>
                Pesquise
                o endereço
                ou atração exata.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Linha
              </strong>

              <p>
                Veja qual sistema
                aparece
                no resultado.
              </p>

            </article>


            <article class="planner-check-card">

              <span>✅</span>

              <strong>
                Confirmação
              </strong>

              <p>
                Compare
                com o mapa
                ou rota oficial.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             MAPAS OFICIAIS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Cada rede tem seu próprio mapa
          </h4>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Metrobús
              </strong>

              <p>
                Mapa completo
                e mapas
                por linha.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                RTP
              </strong>

              <p>
                Página oficial
                com rotas
                organizadas
                por módulo.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Trolebús
              </strong>

              <p>
                Mapa da rede
                e páginas
                individuais
                por linha.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             CENTRO HISTORICO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            No Centro Histórico
          </h4>

          <p class="panel-intro">
            Há várias opções
            de transporte
            próximas umas das outras.

            Por isso,
            não escolha um ônibus
            apenas porque ele aparece
            no planejador.
          </p>


          <div class="answer-block">

            <strong>
              Compare com Metro
              e caminhada.
            </strong>

            <p>
              Em trajetos curtos
              pelo Centro,
              congestionamento,
              bloqueios
              e circulação de pedestres
              podem fazer
              uma combinação
              de Metro + caminhada
              ser mais previsível
              do que permanecer
              dentro de um ônibus.
            </p>

          </div>

        </section>


        <!-- ==================================================
             REFORMA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Paseo de la Reforma
          </h4>


          <div class="answer-block">

            <strong>
              A Linha 7 do Metrobús
              costuma ser
              a referência mais simples.
            </strong>

            <p>
              Ela acompanha
              grande parte
              do corredor
              e conecta
              diferentes pontos
              relevantes
              para visitantes.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Eventos podem mudar a operação.
            </strong>

            Reforma recebe
            atividades esportivas,
            manifestações,
            eventos
            e fechamentos temporários.

            Consulte o Metrobús
            antes de depender
            de um trecho específico.

          </div>

        </section>


        <!-- ==================================================
             AEROPORTO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ônibus e aeroporto
          </h4>


          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                AICM
              </span>

              <strong>
                Metrobús Linha 4
              </strong>

              <p>
                Serviço específico
                para Terminal 1
                e Terminal 2.
              </p>

              <span class="route-compare-result">
                Opção oficial
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                AIFA
              </span>

              <strong>
                Outro aeroporto
              </strong>

              <p>
                Não use
                as orientações
                do AICM
                para planejar
                o AIFA.
              </p>

              <span class="route-compare-result">
                Planejamento separado
              </span>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Confira o aeroporto
              antes de procurar ônibus.
            </strong>

            AICM
            e AIFA
            ficam em regiões
            diferentes
            e exigem
            estratégias distintas.

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
              O Metrobús
              possui acessibilidade
              em suas estações.
            </strong>

            <p>
              O mapa oficial
              do sistema
              identifica
              a rede como
              de acessibilidade universal
              nas estações.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Planeje a viagem completa.
            </strong>

            Se o percurso
            combinar Metrobús
            com Metro,
            RTP,
            Trolebús
            ou caminhada,
            verifique também
            as condições
            da outra etapa.

          </div>

        </section>


        <!-- ==================================================
             HORARIO METROBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Horários não são iguais
            em todas as rotas
          </h4>


          <div class="visitor-alert">

            <strong>
              Não use apenas
              o horário geral
              do sistema.
            </strong>

            Dentro de uma linha
            podem existir
            diferentes serviços
            com horários próprios.

            Confirme
            o percurso exato
            que você pretende utilizar.

          </div>


          <div class="answer-block">

            <strong>
              O próprio Metrobús
              publica horários
              por rota.
            </strong>

            <p>
              Consulte
              a página da linha
              e identifique
              a combinação
              de origem
              e destino
              correspondente
              à sua viagem.
            </p>

          </div>

        </section>


        <!-- ==================================================
             LOTACAO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Horário de pico
          </h4>

          <p class="panel-intro">
            Ônibus,
            Metrobús
            e Trolebús
            também enfrentam
            períodos de grande movimento.
          </p>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>👥</span>

              <strong>
                Plataformas
              </strong>

              <p>
                Podem ficar
                bastante cheias.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Veículos
              </strong>

              <p>
                Pode ser necessário
                esperar
                outro ônibus.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⏱️</span>

              <strong>
                Tempo
              </strong>

              <p>
                Adicione margem
                ao planejamento.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             TRAFEGO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ônibus de rua
            sentem mais o trânsito
          </h4>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Metrobús
              </strong>

              <p>
                Opera
                em corredores
                com infraestrutura
                própria.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Trolebús
              </strong>

              <p>
                Algumas linhas
                utilizam corredores
                ou faixas
                específicas.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                RTP
              </strong>

              <p>
                Muitas rotas
                circulam
                no trânsito
                convencional.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Não calcule tempo
              apenas pela distância.
            </strong>

            Uma viagem curta
            em quilômetros
            pode demorar
            mais do que parece
            em horários
            de trânsito intenso.

          </div>

        </section>


        <!-- ==================================================
             SEGURANCA PRATICA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Durante a viagem
          </h4>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>📱</span>

              <strong>
                Celular
              </strong>

              <p>
                Acompanhe o trajeto
                sem mantê-lo
                desnecessariamente exposto.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🎒</span>

              <strong>
                Mochila
              </strong>

              <p>
                Em veículos cheios,
                mantenha
                seus pertences
                sob controle.
              </p>

            </article>


            <article class="planner-check-card">

              <span>📍</span>

              <strong>
                Descida
              </strong>

              <p>
                Identifique
                a parada
                antes de chegar.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🌙</span>

              <strong>
                Noite
              </strong>

              <p>
                Confira
                se a rota
                continua operando
                no horário desejado.
              </p>

            </article>

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
                Tratar tudo como Metrobús
              </strong>

              <p>
                RTP
                e Trolebús
                funcionam
                de forma diferente.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⚠️</span>

              <strong>
                Olhar só a linha
              </strong>

              <p>
                Veja também
                o percurso
                e o destino final.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⚠️</span>

              <strong>
                Presumir a parada
              </strong>

              <p>
                Serviços expressos
                podem não atender
                todos os pontos.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⚠️</span>

              <strong>
                Confundir integração
              </strong>

              <p>
                Usar a mesma Tarjeta MI
                não significa
                que todas as mudanças
                sejam gratuitas.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⚠️</span>

              <strong>
                Ignorar o sentido
              </strong>

              <p>
                O mesmo ponto
                pode ter serviços
                para direções opostas.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⚠️</span>

              <strong>
                Ignorar alterações
              </strong>

              <p>
                Eventos,
                obras
                e bloqueios
                podem modificar
                temporariamente
                uma rota.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             PASSO A PASSO GERAL
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
                Pesquise
                origem
                e destino.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Veja o sistema
              </strong>

              <p>
                Metrobús,
                RTP
                ou Trolebús.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Confira a linha
              </strong>

              <p>
                Veja número,
                corredor
                ou rota.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Confira o sentido
              </strong>

              <p>
                Use o destino final
                como referência.
              </p>

            </article>


            <article class="bus-use-step">

              <span>5</span>

              <strong>
                Confirme a parada
              </strong>

              <p>
                Certifique-se
                de que o serviço
                atende
                o ponto desejado.
              </p>

            </article>


            <article class="bus-use-step">

              <span>6</span>

              <strong>
                Pague
              </strong>

              <p>
                Utilize
                o meio adequado
                ao sistema.
              </p>

            </article>


            <article class="bus-use-step">

              <span>7</span>

              <strong>
                Acompanhe
              </strong>

              <p>
                Veja sua posição
                durante
                o percurso.
              </p>

            </article>


            <article class="bus-use-step">

              <span>8</span>

              <strong>
                Prepare a descida
              </strong>

              <p>
                Não espere
                o último segundo
                para localizar
                seu ponto.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             QUAL ESCOLHER
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Qual tende a ser
            mais simples para o visitante?
          </h4>


          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Corredor turístico
              </strong>

              <p>
                Metrobús
                costuma ser
                mais intuitivo.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Região sem Metro
              </strong>

              <p>
                RTP
                pode completar
                o trajeto.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Eje Central
              </strong>

              <p>
                Trolebús
                pode ser
                uma alternativa útil.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Paseo de la Reforma
              </strong>

              <p>
                Veja primeiro
                a Linha 7
                do Metrobús.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Avenida Insurgentes
              </strong>

              <p>
                Veja primeiro
                a Linha 1
                do Metrobús.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                AICM
              </strong>

              <p>
                Considere
                o serviço aeroportuário
                da Linha 4.
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

              <span>🚌</span>

              <strong>
                Metrobús
              </strong>

              <p>
                Estações,
                corredores
                e sete linhas.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                RTP
              </strong>

              <p>
                Rede convencional
                com várias
                modalidades.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚎</span>

              <strong>
                Trolebús
              </strong>

              <p>
                Rede elétrica
                própria
                do STE.
              </p>

            </article>


            <article class="planner-check-card">

              <span>▣</span>

              <strong>
                Tarjeta MI
              </strong>

              <p>
                Principal cartão
                para os sistemas
                integrados.
              </p>

            </article>


            <article class="planner-check-card">

              <span>↔</span>

              <strong>
                Sentido
              </strong>

              <p>
                Sempre confirme
                o destino final.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚏</span>

              <strong>
                Parada
              </strong>

              <p>
                Veja se aquele
                serviço específico
                atende
                seu ponto.
              </p>

            </article>


            <article class="planner-check-card">

              <span>✈️</span>

              <strong>
                AICM
              </strong>

              <p>
                Linha 4
                do Metrobús.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🌙</span>

              <strong>
                Nochebús
              </strong>

              <p>
                Serviço noturno
                em rotas
                selecionadas.
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
            href="https://www.metrobus.cdmx.gob.mx/mapas-rutas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mapas e rotas · Metrobús
          </a>


          <a
            class="official-link"
            href="https://www.metrobus.cdmx.gob.mx/dependencia/acerca-de/rutas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rotas e horários · Metrobús
          </a>


          <a
            class="official-link"
            href="https://www.metrobus.cdmx.gob.mx/ruta-aeropuerto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metrobús · AICM
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
            href="https://www.ste.cdmx.gob.mx/red-de-servicio/trolebus"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rede de Trolebús · STE
          </a>


          <a
            class="official-link"
            href="https://www.ste.cdmx.gob.mx/red-de-servicio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mapas e linhas · STE
          </a>


          <a
            class="official-link"
            href="https://app.semovi.cdmx.gob.mx/MI_movilidad/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Movilidad Integrada · SEMOVI
          </a>

        </div>


        <div class="bus-updated">
          Informações verificadas em agosto de 2026.
        </div>


      </div>

    `;

  }

};
