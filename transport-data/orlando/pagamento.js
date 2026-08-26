// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — ORLANDO
// MÓDULO: COMO PAGAR
// ============================================================

window.ORLANDO_TRANSPORT_MODULES =
  window.ORLANDO_TRANSPORT_MODULES || {};


window.ORLANDO_TRANSPORT_MODULES["card"] = {

  kicker: "Orlando · bilhetes e pagamento",

  title: "Como pagar",

  body() {

    return `

      <div class="network-layout">


        <!-- ==================================================
             VISÃO GERAL
        =================================================== -->

        <section class="panel-box network-full">

          <div class="payment-recommendation">

            <span class="payment-eyebrow">
              Para entender rápido
            </span>

            <h4>
              LYNX e SunRail
              usam sistemas diferentes.
            </h4>

            <p>
              No LYNX,
              você pode pagar
              diretamente no ônibus.

              No SunRail,
              compre ou valide
              sua tarifa antes
              de embarcar.
            </p>

          </div>

        </section>


        <!-- ==================================================
             RESUMO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Qual pagamento pertence a cada sistema?
          </h4>

          <div class="payment-method-grid">

            <article class="payment-method">

              <span class="payment-method-icon">
                🚌
              </span>

              <strong>
                LYNX
              </strong>

              <span class="payment-status available">
                Tap to Pay
              </span>

              <small>
                Cartão,
                dispositivo compatível
                ou outros meios
                aceitos no farebox.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                🚍
              </span>

              <strong>
                LYMMO
              </strong>

              <span class="payment-status available">
                Gratuito
              </span>

              <small>
                Não exige
                pagamento
                para embarcar.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                🚆
              </span>

              <strong>
                SunRail
              </strong>

              <span class="payment-status available">
                Bilhete próprio
              </span>

              <small>
                App,
                SunCard
                ou bilhete físico.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                🚐
              </span>

              <strong>
                NeighborLink
              </strong>

              <span class="payment-status available">
                LYNX
              </span>

              <small>
                Segue a estrutura
                tarifária
                do serviço LYNX.
              </small>

            </article>

          </div>

        </section>


        <!-- ==================================================
             LYNX TAP TO PAY
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Tap to Pay no LYNX
          </h4>

          <div class="answer-block">

            <strong>
              Você pode pagar
              diretamente no farebox.
            </strong>

            <p>
              Use cartão de crédito,
              débito
              ou dispositivo compatível
              com pagamento por aproximação.
            </p>

          </div>


          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Embarque
              </strong>

              <p>
                Entre pela porta
                de embarque
                e localize
                o farebox.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Aproxime
              </strong>

              <p>
                Toque seu cartão
                ou dispositivo
                no alvo
                Tap to Pay.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Aguarde
              </strong>

              <p>
                Espere a confirmação
                do pagamento
                antes de seguir.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Peça transferência
              </strong>

              <p>
                Se precisar,
                solicite ao motorista
                antes de se afastar.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO A COBRANÇA APARECE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            A cobrança pode aparecer agrupada
          </h4>

          <div class="visitor-alert">

            <strong>
              Nem sempre cada viagem
              aparece imediatamente
              como uma cobrança separada.
            </strong>

            O LYNX pode agrupar
            transações Tap to Pay
            e lançar a cobrança
            quando o total devido
            chega a US$ 10
            ou a cada três dias,
            o que acontecer primeiro.

          </div>


          <div class="answer-block">

            <strong>
              No extrato
            </strong>

            <p>
              A identificação
              pode aparecer como
              “LYNX Open Payment Fare”.
            </p>

          </div>

        </section>


        <!-- ==================================================
             DINHEIRO LYNX
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Dinheiro no LYNX
          </h4>

          <div class="answer-block">

            <strong>
              Também é possível
              pagar em dinheiro.
            </strong>

            <p>
              Insira o valor
              no farebox
              durante o embarque.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Tenha o valor correto.
            </strong>

            O farebox
            não deve ser tratado
            como caixa de comércio
            para depender de troco.

            Para o visitante,
            Tap to Pay
            tende a ser mais simples.
          </div>

        </section>


        <!-- ==================================================
             ALL DAY PASS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            All-Day Pass
          </h4>

          <div class="answer-block">

            <strong>
              Avise o motorista
              antes de pagar.
            </strong>

            <p>
              Se você pretende
              comprar o passe diário
              diretamente no ônibus,
              informe isso
              antes de completar
              o pagamento.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não pague primeiro
              e peça o passe depois.
            </strong>

            O produto precisa
            ser selecionado
            corretamente
            no momento do embarque.

          </div>

        </section>


        <!-- ==================================================
             TRANSFERÊNCIA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Precisa fazer transferência?
          </h4>

          <div class="answer-block">

            <strong>
              Peça ao motorista.
            </strong>

            <p>
              Transferências elegíveis
              do LYNX
              têm validade limitada
              e precisam ser emitidas
              para a sequência
              da viagem.
            </p>

          </div>


          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Validade
              </span>

              <strong>
                90 min
              </strong>

              <p>
                Conforme as regras
                da rede LYNX.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             LYMMO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            LYMMO
          </h4>

          <div class="payment-recommendation">

            <span class="payment-eyebrow">
              Downtown Orlando
            </span>

            <h4>
              Nenhum pagamento é necessário.
            </h4>

            <p>
              O LYMMO
              é gratuito.

              Você não precisa
              comprar bilhete,
              usar cartão,
              aplicativo
              ou dinheiro
              para embarcar.
            </p>

          </div>

        </section>


        <!-- ==================================================
             SUNRAIL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como pagar o SunRail
          </h4>

          <div class="purchase-grid">

            <article class="purchase-card">

              <span>📱</span>

              <strong>
                SunRail App
              </strong>

              <p>
                Compre
                tickets
                e passes
                pelo celular.
              </p>

            </article>


            <article class="purchase-card">

              <span>🏧</span>

              <strong>
                Ticket Vending Machine
              </strong>

              <p>
                Máquinas disponíveis
                nas estações
                do SunRail.
              </p>

            </article>


            <article class="purchase-card">

              <span>▣</span>

              <strong>
                SunCard
              </strong>

              <p>
                Cartão recarregável
                com stored value
                ou passes.
              </p>

            </article>


            <article class="purchase-card">

              <span>🎫</span>

              <strong>
                Bilhete de papel
              </strong>

              <p>
                One-way
                ou round-trip
                comprado na TVM.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             SUNRAIL APP
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            SunRail Mobile App
          </h4>

          <div class="answer-block">

            <strong>
              É uma das opções
              mais simples
              para o visitante.
            </strong>

            <p>
              O app permite
              comprar bilhetes,
              passes
              e gerenciar
              produtos tarifários
              pelo celular.
            </p>

          </div>


          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Crédito
              </strong>

              <p>
                Cartões de crédito
                válidos.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Débito
              </strong>

              <p>
                Cartões de débito
                válidos.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Apple Pay
              </strong>

              <p>
                Aceito
                para compras
                no app.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Google Pay
              </strong>

              <p>
                Também aceito
                no aplicativo.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             MOBILE TICKET
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Comprou pelo aplicativo?
          </h4>

          <div class="visitor-alert">

            <strong>
              Ative o bilhete
              antes de embarcar.
            </strong>

            O passageiro precisa
            estar com tarifa válida
            e ativada
            durante a viagem.

          </div>


          <div class="answer-block">

            <strong>
              Mobile ticket
              não exige tap on
              nem tap off.
            </strong>

            <p>
              Depois de ativado
              corretamente,
              o bilhete digital
              funciona como
              sua comprovação
              de pagamento.
            </p>

          </div>

        </section>


        <!-- ==================================================
             TVM
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ticket Vending Machines
          </h4>

          <p class="panel-intro">
            As máquinas
            ficam nas plataformas
            das estações SunRail.
          </p>

          <div class="payment-method-grid">

            <article class="payment-method">

              <span class="payment-method-icon">
                💵
              </span>

              <strong>
                Dinheiro
              </strong>

              <span class="payment-status available">
                Aceito
              </span>

              <small>
                Para compra
                e recarga
                elegível.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                💳
              </span>

              <strong>
                Crédito
              </strong>

              <span class="payment-status available">
                Aceito
              </span>

              <small>
                Cartões
                compatíveis.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                💳
              </span>

              <strong>
                Débito
              </strong>

              <span class="payment-status available">
                Aceito
              </span>

              <small>
                Também disponível.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                📱
              </span>

              <strong>
                Digital Wallet
              </strong>

              <span class="payment-status available">
                Aceito
              </span>

              <small>
                Apple Pay,
                Google Pay,
                Samsung Pay
                e compatíveis.
              </small>

            </article>

          </div>

        </section>


        <!-- ==================================================
             SUNCARD
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            SunCard
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Físico
              </span>

              <strong>
                US$ 5
              </strong>

              <p>
                Custo único
                não reembolsável
                do cartão físico.
              </p>

              <span class="route-compare-result">
                Recarregável
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Virtual
              </span>

              <strong>
                Sem custo do cartão
              </strong>

              <p>
                A versão virtual
                dentro do app
                não cobra
                a taxa física
                do SunCard.
              </p>

              <span class="route-compare-result">
                App
              </span>

            </article>

          </div>


          <div class="answer-block">

            <strong>
              O SunCard
              pode guardar
              saldo ou passes.
            </strong>

            <p>
              Também pode ser
              registrado online
              para proteção
              de saldo
              em caso de perda
              ou dano.
            </p>

          </div>

        </section>


        <!-- ==================================================
             TAP ON / TAP OFF
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            SunCard e bilhete físico:
            Tap On + Tap Off
          </h4>

          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Antes do trem
              </strong>

              <p>
                Localize
                o validador
                na plataforma.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Tap On
              </strong>

              <p>
                Aproxime
                ou escaneie
                sua mídia
                antes de embarcar.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Viaje
              </strong>

              <p>
                Mantenha
                sua comprovação
                de tarifa
                durante o trajeto.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Tap Off
              </strong>

              <p>
                Valide novamente
                ao chegar
                à estação de destino.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             POR QUE TAP OFF
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Por que o Tap Off importa?
          </h4>

          <div class="answer-block">

            <strong>
              A tarifa do SunRail
              depende das zonas percorridas.
            </strong>

            <p>
              O sistema precisa saber
              onde sua viagem terminou
              para aplicar corretamente
              a tarifa correspondente.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não saia da estação
              sem validar.
            </strong>

            Se estiver usando
            SunCard
            ou mídia física
            que exige validação,
            lembre-se
            do Tap Off.

          </div>

        </section>


        <!-- ==================================================
             PAPER TICKET
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Bilhete de papel do SunRail
          </h4>

          <div class="answer-block">

            <strong>
              One-way
              e round-trip
              podem ser comprados
              nas TVMs.
            </strong>

            <p>
              O bilhete precisa
              corresponder
              à data da viagem
              e às zonas
              que serão percorridas.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Valide antes
              de embarcar.
            </strong>

            O bilhete físico
            precisa ser escaneado
            no validador
            conforme as regras
            do SunRail.

          </div>

        </section>


        <!-- ==================================================
             INSPEÇÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Guarde sua comprovação
          </h4>

          <div class="visitor-alert">

            <strong>
              O SunRail utiliza
              proof of payment.
            </strong>

            Durante a viagem,
            você pode precisar
            apresentar
            seu bilhete,
            passe
            ou SunCard
            válido
            para inspeção.

          </div>

        </section>


        <!-- ==================================================
             LYNX -> SUNRAIL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Transferindo do LYNX
            para o SunRail
          </h4>

          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Peça a transferência
              </strong>

              <p>
                Solicite
                ao motorista LYNX
                antes de sair
                do ônibus.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Vá à TVM
              </strong>

              <p>
                Na estação SunRail,
                localize
                uma Ticket Vending Machine.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Selecione LYNX Transfer
              </strong>

              <p>
                Use a opção
                indicada
                na tela.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Emita a tarifa
              </strong>

              <p>
                Siga as instruções
                para obter
                a viagem correspondente.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             SUNRAIL -> LYNX
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            SunRail → LYNX
          </h4>

          <div class="answer-block">

            <strong>
              Apresente
              sua tarifa válida
              ao motorista.
            </strong>

            <p>
              Nas linhas alimentadoras
              participantes,
              mostre seu bilhete
              ou SunCard
              ao embarcar
              no ônibus LYNX.
            </p>

          </div>

        </section>


        <!-- ==================================================
             PARA O VISITANTE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O que tende a ser mais simples?
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Poucas viagens de ônibus
              </strong>

              <p>
                Tap to Pay
                evita comprar
                uma mídia adicional.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Muitas viagens LYNX
              </strong>

              <p>
                Compare
                os passes
                disponíveis.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Uma viagem SunRail
              </strong>

              <p>
                App
                ou bilhete físico
                podem ser suficientes.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Uso frequente do SunRail
              </strong>

              <p>
                SunCard
                pode oferecer
                mais praticidade.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Downtown
              </strong>

              <p>
                LYMMO
                não exige
                nenhum pagamento.
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
                LYNX
              </strong>

              <p>
                Tap to Pay
                ou meios aceitos
                no ônibus.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                LYMMO
              </strong>

              <p>
                Gratuito.
              </p>

            </article>


            <article class="planner-check-card">

              <span>📱</span>

              <strong>
                SunRail App
              </strong>

              <p>
                Tickets
                e passes digitais.
              </p>

            </article>


            <article class="planner-check-card">

              <span>▣</span>

              <strong>
                SunCard
              </strong>

              <p>
                Cartão recarregável.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🏧</span>

              <strong>
                TVM
              </strong>

              <p>
                Dinheiro,
                cartão
                e carteira digital.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⇄</span>

              <strong>
                SunRail físico
              </strong>

              <p>
                Tap On
                e Tap Off.
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
            href="https://www.golynx.com/fares-passes/open-payment-guidelines.stml"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tap to Pay · LYNX
          </a>


          <a
            class="official-link"
            href="https://www.golynx.com/fares-passes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bilhetes e passes · LYNX
          </a>


          <a
            class="official-link"
            href="https://sunrail.com/fares-passes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bilhetes · SunRail
          </a>


          <a
            class="official-link"
            href="https://sunrail.com/fares-passes/suncards/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SunCard
          </a>


          <a
            class="official-link"
            href="https://sunrail.com/riding-sunrail/using-sunrail/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Como usar · SunRail
          </a>

        </div>


        <div class="payment-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
