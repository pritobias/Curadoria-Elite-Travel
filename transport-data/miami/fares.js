// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — MIAMI
// MÓDULO: TARIFAS E INTEGRAÇÕES
// ============================================================

window.MIAMI_TRANSPORT_MODULES =
  window.MIAMI_TRANSPORT_MODULES || {};


window.MIAMI_TRANSPORT_MODULES["fares"] = {

  kicker: "Miami · valores e integrações",

  title: "Tarifas e integração",

  body() {

    return `

      <div class="network-layout">


        <!-- ==================================================
             VISÃO RÁPIDA
        =================================================== -->

        <section class="panel-box network-full">

          <div class="payment-recommendation">

            <span class="payment-eyebrow">
              Para entender rápido
            </span>

            <h4>
              Metrorail e Metrobus
              usam a mesma tarifa-base.
            </h4>

            <p>
              A tarifa regular
              é de US$ 2,25.

              O Metromover,
              que circula por áreas
              centrais de Miami,
              é gratuito.
            </p>

          </div>

        </section>


        <!-- ==================================================
             TARIFAS PRINCIPAIS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Tarifas principais
          </h4>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Metrorail
              </span>

              <strong>
                US$ 2,25
              </strong>

              <p>
                Tarifa regular
                por viagem.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Metrobus
              </span>

              <strong>
                US$ 2,25
              </strong>

              <p>
                Tarifa regular
                por viagem.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Metromover
              </span>

              <strong>
                Grátis
              </strong>

              <p>
                Não é necessário
                comprar passagem
                para utilizar.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Inter-County Express
              </span>

              <strong>
                US$ 2,65
              </strong>

              <p>
                Tarifa regular
                dos serviços
                intermunicipais elegíveis.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             METROMOVER
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metromover é gratuito
          </h4>

          <div class="answer-block">

            <strong>
              Você pode embarcar
              sem comprar passagem.
            </strong>

            <p>
              O Metromover
              é um sistema elevado
              que atende áreas
              do centro de Miami
              e não cobra tarifa.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Gratuito não significa
              integração gratuita
              com tudo.
            </strong>

            Ao sair do Metromover
            e entrar no Metrorail
            ou Metrobus,
            a tarifa correspondente
            ao sistema pago
            pode ser cobrada.

          </div>

        </section>


        <!-- ==================================================
             PASSES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Passes do Miami-Dade Transit
          </h4>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                1 dia
              </span>

              <strong>
                US$ 5,65
              </strong>

              <p>
                Passe regular
                para viagens elegíveis
                no período.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                7 dias
              </span>

              <strong>
                US$ 29,25
              </strong>

              <p>
                Passe regular
                para sete dias.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                1 mês
              </span>

              <strong>
                US$ 112,50
              </strong>

              <p>
                Passe mensal
                regular.
              </p>

            </article>

          </div>


          <div class="fare-note">

            Para uma viagem turística curta,
            não presuma que um passe
            será automaticamente
            mais econômico.

            Compare quantas viagens
            você realmente pretende fazer.

          </div>

        </section>


        <!-- ==================================================
             FARE CAPPING
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Fare capping diário
          </h4>

          <div class="payment-recommendation">

            <span class="payment-eyebrow">
              Limite diário
            </span>

            <h4>
              US$ 5,65 por dia
            </h4>

            <p>
              Em viagens elegíveis
              de Metrorail e Metrobus,
              o sistema pode limitar
              o total cobrado no dia
              ao valor de um passe diário.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Use sempre
              o mesmo meio de pagamento.
            </strong>

            Se você alternar
            entre cartão físico,
            celular,
            relógio
            ou outro dispositivo,
            o sistema pode tratá-los
            como meios de pagamento
            diferentes.

          </div>

        </section>


        <!-- ==================================================
             TRANSFERÊNCIAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Transferências
          </h4>

          <p class="panel-intro">
            Miami-Dade Transit
            permite transferências
            entre determinados serviços
            quando o pagamento
            é feito por um meio elegível.
          </p>

          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Metrobus → Metrobus
              </span>

              <strong>
                Grátis
              </strong>

              <p>
                Transferência elegível
                dentro de três horas
                do primeiro pagamento.
              </p>

              <span class="fare-scenario-result">
                Sem nova tarifa
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Metrobus → Metrorail
              </span>

              <strong>
                Grátis
              </strong>

              <p>
                Transferência elegível
                entre ônibus
                e Metrorail.
              </p>

              <span class="fare-scenario-result">
                Sem nova tarifa
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Metrorail → Metrobus
              </span>

              <strong>
                Grátis
              </strong>

              <p>
                Transferência elegível
                do trem
                para o ônibus.
              </p>

              <span class="fare-scenario-result">
                Sem nova tarifa
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Metrobus → Express
              </span>

              <strong>
                + US$ 0,95
              </strong>

              <p>
                Complemento
                para determinados
                serviços Express.
              </p>

              <span class="fare-scenario-result">
                Tarifa adicional
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Metrorail → Express
              </span>

              <strong>
                + US$ 0,95
              </strong>

              <p>
                Complemento
                para determinados
                serviços Express.
              </p>

              <span class="fare-scenario-result">
                Tarifa adicional
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             REGRA DAS 3 HORAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Janela de transferência
          </h4>

          <div class="answer-block">

            <strong>
              Até 3 horas
              a partir do primeiro tap.
            </strong>

            <p>
              As transferências elegíveis
              devem acontecer
              dentro da janela prevista
              pelo Miami-Dade Transit.

              Depois desse período,
              uma nova tarifa
              pode ser cobrada.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não vale para ida e volta.
            </strong>

            A regra de transferência
            não deve ser interpretada
            como autorização
            para fazer uma viagem,
            retornar pelo sentido contrário
            e pagar apenas uma tarifa.
          </div>

        </section>


        <!-- ==================================================
             PAGAMENTO EM DINHEIRO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Atenção ao pagar ônibus em dinheiro
          </h4>

          <div class="visitor-alert">

            <strong>
              Dinheiro muda
              a lógica da integração.
            </strong>

            Passageiros que pagam
            a tarifa do Metrobus
            em dinheiro
            precisam pagar
            a tarifa integral novamente
            no próximo embarque.

          </div>


          <div class="answer-block">

            <strong>
              Para usar transferências,
              prefira um meio eletrônico elegível.
            </strong>

            <p>
              EASY Card,
              EASY Ticket
              e pagamentos compatíveis
              permitem que o sistema
              reconheça a viagem
              e aplique as regras
              de transferência correspondentes.
            </p>

          </div>

        </section>


        <!-- ==================================================
             COMO PAGAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Formas de pagamento
          </h4>

          <div class="purchase-grid">

            <article class="purchase-card">

              <span>💳</span>

              <strong>
                Contactless
              </strong>

              <p>
                Cartão bancário
                compatível
                com pagamento
                por aproximação.
              </p>

            </article>


            <article class="purchase-card">

              <span>📱</span>

              <strong>
                Carteira digital
              </strong>

              <p>
                Apple Pay,
                Google Pay
                e outros meios
                compatíveis.
              </p>

            </article>


            <article class="purchase-card">

              <span>▣</span>

              <strong>
                EASY Card
              </strong>

              <p>
                Cartão recarregável
                do sistema
                Miami-Dade Transit.
              </p>

            </article>


            <article class="purchase-card">

              <span>🎫</span>

              <strong>
                EASY Ticket
              </strong>

              <p>
                Alternativa destinada
                também a usuários
                ocasionais e visitantes.
              </p>

            </article>


            <article class="purchase-card">

              <span>📲</span>

              <strong>
                Passe móvel
              </strong>

              <p>
                Produtos tarifários
                também podem estar disponíveis
                em aplicativos compatíveis.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             EASY CARD / EASY TICKET
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            EASY Card ou EASY Ticket?
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Recarregável
              </span>

              <strong>
                EASY Card
              </strong>

              <p>
                Cartão físico durável
                que pode receber
                valor armazenado
                e produtos tarifários.
              </p>

              <span class="route-compare-result">
                Cartão custa US$ 2
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Visitante
              </span>

              <strong>
                EASY Ticket
              </strong>

              <p>
                Bilhete de uso limitado,
                adequado também
                para passageiros ocasionais.
              </p>

              <span class="route-compare-result">
                Sem custo do suporte
              </span>

            </article>

          </div>


          <div class="fare-note">

            O EASY Ticket
            pode receber determinados passes
            ou valor armazenado.

            Ele tem validade limitada
            e não oferece
            as mesmas características
            de um EASY Card registrado.

          </div>

        </section>


        <!-- ==================================================
             METRORAIL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metrorail
          </h4>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Viagem regular
              </span>

              <strong>
                US$ 2,25
              </strong>

              <p>
                Tarifa-base
                do sistema.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Estacionamento diário
              </span>

              <strong>
                US$ 4,50
              </strong>

              <p>
                Tarifa diária
                regular de estacionamento
                nas instalações elegíveis.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              As catracas do Metrorail
              não aceitam dinheiro diretamente.
            </strong>

            Para entrar,
            utilize um meio
            de pagamento aceito.

            Dinheiro pode ser usado
            nas máquinas de venda
            para adquirir
            EASY Card ou EASY Ticket.
          </div>

        </section>


        <!-- ==================================================
             METROBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metrobus
          </h4>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Metrobus
              </span>

              <strong>
                US$ 2,25
              </strong>

              <p>
                Tarifa regular.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Inter-County Express
              </span>

              <strong>
                US$ 2,65
              </strong>

              <p>
                Tarifa regular
                para os serviços
                intermunicipais elegíveis.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Shuttle Bus
              </span>

              <strong>
                Grátis
              </strong>

              <p>
                Serviços classificados
                como Shuttle Bus
                pelo Miami-Dade Transit.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             METRO EXPRESS / BRT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metro Express · BRT
          </h4>

          <div class="answer-block">

            <strong>
              O Metro Express
              mantém a tarifa regular
              do sistema.
            </strong>

            <p>
              O serviço BRT
              utiliza pagamento
              antes do embarque
              nas estações.

              As transferências elegíveis
              com ônibus e Metrorail
              seguem a janela
              de três horas.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não confunda
              Metro Express BRT
              com Inter-County Express Bus.
            </strong>

            São categorias diferentes
            dentro da rede
            e podem ter
            regras tarifárias diferentes.
          </div>

        </section>


        <!-- ==================================================
             BRIGHTLINE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Brightline
          </h4>

          <div class="visitor-alert">

            <strong>
              Brightline não usa
              a tarifa do Miami-Dade Transit.
            </strong>

            É um serviço ferroviário
            separado,
            com preços próprios
            definidos para a viagem escolhida.
          </div>


          <div class="answer-block">

            <strong>
              Consulte o preço
              da viagem específica.
            </strong>

            <p>
              O valor pode variar
              conforme destino,
              horário,
              disponibilidade
              e categoria selecionada.

              Por isso,
              não usamos um preço fixo
              de Brightline
              nesta ferramenta.
            </p>

          </div>

        </section>


        <!-- ==================================================
             TRI-RAIL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Tri-Rail
          </h4>

          <div class="visitor-alert">

            <strong>
              Tri-Rail também possui
              estrutura tarifária própria.
            </strong>

            Não presuma
            que a tarifa de US$ 2,25
            do Metrorail
            vale para uma viagem
            de Tri-Rail.
          </div>


          <div class="answer-block">

            <strong>
              A tarifa depende
              da viagem e do produto utilizado.
            </strong>

            <p>
              Consulte o sistema
              do Tri-Rail
              para o percurso
              que você pretende realizar.
            </p>

          </div>

        </section>


        <!-- ==================================================
             AEROPORTO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Miami International Airport · MIA
          </h4>

          <div class="answer-block">

            <strong>
              O Metrorail chega
              ao Miami International Airport.
            </strong>

            <p>
              Para uma viagem regular
              elegível no Metrorail,
              aplica-se a tarifa-base
              de US$ 2,25.

              Não existe uma sobretaxa
              apenas por utilizar
              a estação do aeroporto.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Outros serviços
              ligados ao aeroporto
              podem ter tarifas próprias.
            </strong>

            Não use automaticamente
            a tarifa do Metrorail
            para calcular
            Brightline,
            Tri-Rail,
            serviços privados
            ou outros modais.
          </div>

        </section>


        <!-- ==================================================
             CENÁRIOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Exemplos práticos
          </h4>

          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Apenas Metromover
              </span>

              <strong>
                US$ 0
              </strong>

              <p>
                Viagem realizada
                somente dentro
                do sistema gratuito.
              </p>

              <span class="fare-scenario-result">
                Sem tarifa
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Metrorail
              </span>

              <strong>
                US$ 2,25
              </strong>

              <p>
                Uma viagem regular
                no sistema.
              </p>

              <span class="fare-scenario-result">
                Tarifa-base
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Metrobus → Metrorail
              </span>

              <strong>
                US$ 2,25
              </strong>

              <p>
                Quando a transferência
                é elegível
                e ocorre dentro
                da janela permitida.
              </p>

              <span class="fare-scenario-result">
                Sem segunda tarifa
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Várias viagens no dia
              </span>

              <strong>
                Até US$ 5,65
              </strong>

              <p>
                Em viagens elegíveis
                com fare capping
                no Miami-Dade Transit.
              </p>

              <span class="fare-scenario-result">
                Limite diário
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             QUAL ESCOLHER
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Para o visitante
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Poucas viagens
              </strong>

              <p>
                Pagar por aproximação
                pode evitar
                a compra de um cartão
                apenas para uma estadia curta.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Muitas viagens no dia
              </strong>

              <p>
                O fare capping
                pode limitar
                automaticamente
                o gasto elegível.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                7 dias de uso frequente
              </strong>

              <p>
                Compare o passe
                de US$ 29,25
                com a quantidade
                de viagens prevista.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Só Downtown
              </strong>

              <p>
                Dependendo dos deslocamentos,
                o Metromover gratuito
                pode resolver
                parte das viagens.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             REGRA DE OURO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Regra de ouro
          </h4>

          <div class="payment-recommendation">

            <span class="payment-eyebrow">
              Para evitar cobrança desnecessária
            </span>

            <h4>
              Escolha um meio de pagamento
              e mantenha o mesmo.
            </h4>

            <p>
              Se começar usando
              um cartão físico,
              continue com ele.

              Se começar usando
              o celular,
              continue com o mesmo dispositivo.

              Isso ajuda o sistema
              a reconhecer corretamente
              suas viagens,
              transferências
              e fare capping.
            </p>

          </div>

        </section>


        <!-- ==================================================
             FONTES OFICIAIS
        =================================================== -->

        <div class="official-map-actions">

          <a
            class="official-link"
            href="https://www.miamidade.gov/global/service.page?Mduid_service=ser1617316231654558"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tarifas oficiais · Miami-Dade Transit
          </a>


          <a
            class="official-link"
            href="https://www.miamidade.gov/global/transportation/transfer-fees.page"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transferências · Miami-Dade Transit
          </a>


          <a
            class="official-link"
            href="https://www.miamidade.gov/global/service.page?Mduid_service=ser1565197498854306"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pagamento por aproximação
          </a>


          <a
            class="official-link"
            href="https://www.tri-rail.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tarifas · Tri-Rail
          </a>


          <a
            class="official-link"
            href="https://www.gobrightline.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tarifas · Brightline
          </a>

        </div>


        <div class="fare-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
