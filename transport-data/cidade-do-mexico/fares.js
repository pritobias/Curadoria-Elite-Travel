// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — CIDADE DO MÉXICO
// MÓDULO: TARIFAS E INTEGRAÇÕES
// ============================================================

window.MEXICO_CITY_TRANSPORT_MODULES =
  window.MEXICO_CITY_TRANSPORT_MODULES || {};


window.MEXICO_CITY_TRANSPORT_MODULES["fares"] = {

  kicker: "Cidade do México · tarifas vigentes",

  title: "Tarifas e integração",

  body() {

    return `

      <div class="network-layout">


        <!-- ==================================================
             VALORES PRINCIPAIS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Valores principais
          </h4>

          <p class="panel-intro">
            A Cidade do México possui
            vários sistemas públicos
            dentro da Rede de Movilidad Integrada.

            A mesma Tarjeta de Movilidad Integrada
            pode ser utilizada
            em diferentes serviços,
            mas cada sistema mantém
            suas próprias regras de tarifa.
          </p>


          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Metro
              </span>

              <strong>
                MX$ 5
              </strong>

              <p>
                Tarifa de entrada
                na rede do Metro.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Metrobús
              </span>

              <strong>
                MX$ 6
              </strong>

              <p>
                Tarifa padrão
                para uma viagem
                no sistema.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Metrobús · AICM
              </span>

              <strong>
                MX$ 30
              </strong>

              <p>
                Tarifa específica
                da conexão com
                os Terminais 1 e 2
                do aeroporto.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Tren Ligero
              </span>

              <strong>
                MX$ 3
              </strong>

              <p>
                Serviço entre
                Tasqueña
                e Xochimilco.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Cablebús
              </span>

              <strong>
                MX$ 7
              </strong>

              <p>
                Tarifa por entrada,
                independentemente
                do trecho percorrido.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                RTP
              </span>

              <strong>
                A partir de MX$ 2
              </strong>

              <p>
                O valor depende
                da modalidade
                e da rota utilizada.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             O QUE SIGNIFICA INTEGRAÇÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            A rede é integrada.
            A tarifa nem sempre é.
          </h4>


          <div class="answer-block">

            <strong>
              Não confunda a Tarjeta MI
              com uma tarifa única.
            </strong>

            <p>
              A Tarjeta de Movilidad Integrada
              funciona como meio de acesso
              e pagamento em vários sistemas.

              Porém,
              ao mudar de um sistema
              para outro,
              normalmente uma nova tarifa
              pode ser descontada.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Para o visitante,
              esta é uma das regras
              mais importantes.
            </strong>

            Ter Metro,
            Metrobús,
            Cablebús,
            Trolebús
            e outros serviços
            dentro da mesma rede
            não significa
            que você possa circular
            entre todos eles
            pagando apenas uma entrada.

          </div>

        </section>


        <!-- ==================================================
             METRO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metro
          </h4>

          <p class="panel-intro">
            O Metro costuma ser
            a principal referência
            para deslocamentos longos
            dentro da cidade.

            A tarifa é simples
            e não depende
            da distância percorrida.
          </p>


          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Entrada
              </span>

              <strong>
                MX$ 5
              </strong>

              <p>
                Valor por acesso
                ao sistema.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Distância
              </span>

              <strong>
                Tarifa única
              </strong>

              <p>
                O preço não aumenta
                porque você percorreu
                mais estações.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Correspondências
              </span>

              <strong>
                Sem nova cobrança
              </strong>

              <p>
                Quando a troca
                entre linhas
                ocorre dentro
                da própria rede.
              </p>

            </article>

          </div>


          <div class="answer-block">

            <strong>
              Você pode trocar
              de linha sem sair
              da área tarifada.
            </strong>

            <p>
              As correspondências
              internas permitem
              continuar a viagem
              utilizando diferentes
              linhas do Metro
              sem pagar novamente
              a cada troca.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Sair da estação
              encerra aquela entrada.
            </strong>

            Se o trajeto exigir
            sair do Metro
            e entrar novamente
            em outra estação,
            considere uma nova cobrança.

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
            O Metrobús possui
            uma tarifa padrão própria
            e permite transferências
            entre suas linhas
            quando as regras
            do sistema são respeitadas.
          </p>


          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Viagem padrão
              </span>

              <strong>
                MX$ 6
              </strong>

              <p>
                Tarifa normal
                do Metrobús.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Janela de transbordo
              </span>

              <strong>
                Até 2 horas
              </strong>

              <p>
                Para transferências
                elegíveis entre linhas.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Condição
              </span>

              <strong>
                Uma direção
              </strong>

              <p>
                O percurso precisa
                respeitar as regras
                de transbordo
                do sistema.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             TRANSBORDO METROBÚS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Transbordos no Metrobús
          </h4>


          <div class="answer-block">

            <strong>
              A troca entre linhas
              pode ser gratuita.
            </strong>

            <p>
              Os transbordos
              entre as linhas
              do Metrobús
              são gratuitos
              quando realizados
              dentro das primeiras
              duas horas
              após a entrada
              e seguindo
              uma única direção
              de viagem.
            </p>

          </div>


          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Metrobús
              </span>

              <strong>
                Linha → Linha
              </strong>

              <p>
                Transferência elegível
                dentro do próprio sistema.
              </p>

              <span class="fare-scenario-result">
                Pode não cobrar novamente
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Prazo
              </span>

              <strong>
                Até 2 horas
              </strong>

              <p>
                Contadas
                a partir
                do primeiro acesso.
              </p>

              <span class="fare-scenario-result">
                Regra do Metrobús
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Sentido
              </span>

              <strong>
                Uma única direção
              </strong>

              <p>
                O sistema evita
                que o benefício
                funcione como
                uma nova viagem
                ou retorno.
              </p>

              <span class="fare-scenario-result">
                Observe a regra
              </span>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Use a mesma Tarjeta MI.
            </strong>

            A identificação
            do transbordo
            depende do meio
            utilizado
            para registrar
            a viagem.

          </div>

        </section>


        <!-- ==================================================
             METROBÚS AEROPORTO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metrobús para o aeroporto
          </h4>

          <p class="panel-intro">
            A conexão da Linha 4
            com o Aeroporto Internacional
            da Cidade do México
            possui tarifa diferente
            da viagem comum
            de Metrobús.
          </p>


          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                AICM · Terminal 1 / 2
              </span>

              <strong>
                MX$ 30
              </strong>

              <p>
                Tarifa da conexão
                aeroportuária.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Tarjeta MI nova
              </span>

              <strong>
                MX$ 45
              </strong>

              <p>
                No serviço aeroportuário,
                o valor informado
                pelo Metrobús
                corresponde
                a MX$ 15 da tarjeta
                mais MX$ 30
                de uma viagem.
              </p>

            </article>

          </div>


          <div class="answer-block">

            <strong>
              Não use MX$ 6
              como referência
              para o trecho aeroportuário.
            </strong>

            <p>
              Embora seja parte
              da Linha 4,
              a viagem que atende
              os Terminais 1 e 2
              possui cobrança própria
              de MX$ 30.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Vai chegar pelo AICM?
            </strong>

            Há máquinas
            de compra e recarga
            da Tarjeta MI
            nos pontos de acesso
            do Metrobús
            nos Terminais 1 e 2.

          </div>

        </section>


        <!-- ==================================================
             METRO + METROBÚS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metro + Metrobús
          </h4>


          <div class="answer-block">

            <strong>
              São duas cobranças.
            </strong>

            <p>
              Uma conexão física
              ou próxima
              entre uma estação
              do Metro
              e uma estação
              do Metrobús
              não transforma
              os dois sistemas
              em uma única tarifa.
            </p>

          </div>


          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Exemplo
              </span>

              <strong>
                Metro + Metrobús
              </strong>

              <p>
                Uma entrada
                em cada sistema.
              </p>

              <span class="fare-scenario-result">
                MX$ 11
              </span>

            </article>

          </div>


          <div class="fare-note">

            MX$ 5 do Metro
            + MX$ 6 do Metrobús.

            A mesma Tarjeta MI
            pode ser usada
            para os dois pagamentos,
            desde que tenha saldo suficiente.

          </div>

        </section>


        <!-- ==================================================
             TREN LIGERO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Tren Ligero
          </h4>

          <p class="panel-intro">
            O Tren Ligero
            atende o sul da cidade
            e é especialmente útil
            para quem segue
            em direção a Xochimilco.

            Ele possui
            sua própria tarifa.
          </p>


          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Viagem
              </span>

              <strong>
                MX$ 3
              </strong>

              <p>
                Tarifa de acesso
                ao Tren Ligero.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Pagamento
              </span>

              <strong>
                Tarjeta MI
              </strong>

              <p>
                A rede utiliza
                a Tarjeta
                de Movilidad Integrada.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Tasqueña é um ponto
              de conexão importante.
            </strong>

            Quem chega pelo Metro
            e continua pelo Tren Ligero
            está mudando
            de sistema.

            Não considere
            a tarifa do Metro
            como pagamento
            do trecho seguinte.

          </div>

        </section>


        <!-- ==================================================
             Xochimilco
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Indo a Xochimilco
          </h4>


          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Primeira etapa
              </span>

              <strong>
                Metro → Tasqueña
              </strong>

              <p>
                Viagem dentro
                da rede do Metro.
              </p>

              <span class="fare-scenario-result">
                MX$ 5
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Segunda etapa
              </span>

              <strong>
                Tren Ligero → Xochimilco
              </strong>

              <p>
                Novo sistema
                após a conexão
                em Tasqueña.
              </p>

              <span class="fare-scenario-result">
                MX$ 3
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Total
              </span>

              <strong>
                Metro + Tren Ligero
              </strong>

              <p>
                Considerando
                uma entrada
                em cada sistema.
              </p>

              <span class="fare-scenario-result">
                MX$ 8
              </span>

            </article>

          </div>


          <div class="fare-note">

            Esse exemplo considera
            apenas o transporte público
            Metro + Tren Ligero.

            Passeios de trajinera
            em Xochimilco
            são outra despesa
            e não fazem parte
            da tarifa de transporte.

          </div>

        </section>


        <!-- ==================================================
             CABLEBÚS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Cablebús
          </h4>

          <p class="panel-intro">
            O Cablebús
            também faz parte
            da Rede de Movilidad Integrada.

            Para o visitante,
            a Linha 3 merece atenção
            por atender a região
            de Chapultepec
            e Los Pinos.
          </p>


          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Entrada
              </span>

              <strong>
                MX$ 7
              </strong>

              <p>
                Tarifa por acesso
                ao Cablebús.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Distância
              </span>

              <strong>
                Mesmo valor
              </strong>

              <p>
                A cobrança
                não depende
                do trecho percorrido.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Pagamento
              </span>

              <strong>
                Tarjeta MI
              </strong>

              <p>
                A tarjeta é usada
                para entrar
                no sistema.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Cablebús não é
              apenas uma atração panorâmica.
            </strong>

            É transporte público
            da cidade.

            A tarifa deve ser entendida
            como uma viagem
            dentro desse sistema.

          </div>

        </section>


        <!-- ==================================================
             METRO + CABLEBÚS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metro + Cablebús
          </h4>


          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Metro
              </span>

              <strong>
                Primeira etapa
              </strong>

              <p>
                Entrada
                na rede ferroviária.
              </p>

              <span class="fare-scenario-result">
                MX$ 5
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Cablebús
              </span>

              <strong>
                Segunda etapa
              </strong>

              <p>
                Entrada
                no sistema
                de teleférico urbano.
              </p>

              <span class="fare-scenario-result">
                MX$ 7
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Referência
              </span>

              <strong>
                Metro + Cablebús
              </strong>

              <p>
                Considerando
                uma tarifa
                em cada sistema.
              </p>

              <span class="fare-scenario-result">
                MX$ 12
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             TROLEBÚS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Trolebús
          </h4>

          <p class="panel-intro">
            A rede de Trolebús
            possui várias linhas
            e diferentes tipos
            de serviço.

            Por isso,
            não é seguro assumir
            uma única tarifa
            para toda a rede.
          </p>


          <div class="answer-block">

            <strong>
              Confira a linha
              que você realmente vai utilizar.
            </strong>

            <p>
              O Serviço de Transportes Elétricos
              publica horários,
              paradas
              e custos
              individualmente
              para suas linhas.

              Algumas linhas
              e serviços possuem
              estrutura tarifária própria.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não use automaticamente
              o preço do Metro
              ou do Metrobús.
            </strong>

            Trolebús é outro sistema.

            Antes de uma viagem
            que dependa dele,
            confirme a tarifa
            da linha correspondente
            no STE.

          </div>

        </section>


        <!-- ==================================================
             NOCHEBÚS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Nochebús
          </h4>

          <p class="panel-intro">
            Para alguns deslocamentos
            durante a madrugada,
            existe serviço noturno
            em corredores específicos.
          </p>


          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Nochebús · STE
              </span>

              <strong>
                MX$ 7
              </strong>

              <p>
                Valor publicado
                pelo STE
                para o serviço noturno
                do corredor atendido.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Não trate o Nochebús
              como substituto automático
              de toda a rede noturna.
            </strong>

            O serviço atende
            corredores determinados.

            Para uma volta tarde,
            primeiro confirme
            se a origem e o destino
            estão efetivamente
            dentro da rota disponível.

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
            de ônibus.

            Diferentemente
            do Metro,
            não existe apenas
            um único tipo de serviço.
          </p>


          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Ordinário
              </span>

              <strong>
                MX$ 2
              </strong>

              <p>
                Tarifa de referência
                do serviço ordinário.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Expresso
              </span>

              <strong>
                MX$ 4
              </strong>

              <p>
                Tarifa utilizada
                em serviços expressos
                da RTP.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Algumas rotas
              </span>

              <strong>
                MX$ 5
              </strong>

              <p>
                Há serviços
                com tarifa própria,
                como corredores
                específicos.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Veja a modalidade
              antes de embarcar.
            </strong>

            Duas rotas operadas
            pela RTP
            não precisam
            necessariamente
            ter o mesmo preço.

          </div>

        </section>


        <!-- ==================================================
             RTP SANTA FE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Atenção em trajetos para Santa Fe
          </h4>

          <p class="panel-intro">
            Santa Fe fica afastada
            de boa parte
            da malha de Metro
            e pode exigir
            ônibus ou combinações
            específicas.
          </p>


          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                RTP · rotas específicas
              </span>

              <strong>
                MX$ 5
              </strong>

              <p>
                Há rotas da RTP
                para Santa Fe
                publicadas
                com essa tarifa.
              </p>

            </article>

          </div>


          <div class="fare-note">

            O valor depende
            da rota escolhida.

            Para Santa Fe,
            confirme sempre
            o serviço específico
            antes de calcular
            o custo do trajeto.

          </div>

        </section>


        <!-- ==================================================
             A MESMA TARJETA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Uma tarjeta,
            várias cobranças
          </h4>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Metro
              </strong>

              <p>
                MX$ 5
                por entrada.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Metrobús
              </strong>

              <p>
                MX$ 6
                na tarifa padrão.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Tren Ligero
              </strong>

              <p>
                MX$ 3
                por acesso.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Cablebús
              </strong>

              <p>
                MX$ 7
                por acesso.
              </p>

            </article>

          </div>


          <div class="answer-block">

            <strong>
              Pense na tarjeta
              como uma carteira de transporte.
            </strong>

            <p>
              Ela simplifica
              a forma de pagar.

              Mas o saldo
              vai sendo descontado
              conforme você entra
              nos diferentes sistemas
              e conforme as regras
              de cada serviço.
            </p>

          </div>

        </section>


        <!-- ==================================================
             SISTEMAS E INTEGRAÇÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O que normalmente acontece
            ao mudar de sistema
          </h4>


          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Metro
              </span>

              <strong>
                Linha → Linha
              </strong>

              <p>
                Correspondência
                interna sem sair
                da área tarifada.
              </p>

              <span class="route-compare-result">
                Uma tarifa
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Metrobús
              </span>

              <strong>
                Linha → Linha
              </strong>

              <p>
                Pode haver transbordo
                gratuito dentro
                das regras
                do sistema.
              </p>

              <span class="route-compare-result">
                Integrado
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Metro + Metrobús
              </span>

              <strong>
                Sistema → Sistema
              </strong>

              <p>
                A mesma Tarjeta MI
                pode pagar ambos.
              </p>

              <span class="route-compare-result">
                Duas tarifas
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Metro + Tren Ligero
              </span>

              <strong>
                Tasqueña
              </strong>

              <p>
                Você deixa
                um sistema
                e acessa outro.
              </p>

              <span class="route-compare-result">
                Duas tarifas
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Metro + Cablebús
              </span>

              <strong>
                Sistema → Sistema
              </strong>

              <p>
                Cada acesso
                possui sua cobrança.
              </p>

              <span class="route-compare-result">
                Duas tarifas
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Metro + RTP
              </span>

              <strong>
                Sistema → ônibus
              </strong>

              <p>
                Considere
                a tarifa da rota
                de RTP utilizada.
              </p>

              <span class="route-compare-result">
                Cobranças separadas
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             EXEMPLOS PRÁTICOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Exemplos práticos
          </h4>


          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Centro
              </span>

              <strong>
                Uma viagem de Metro
              </strong>

              <p>
                Percurso dentro
                da rede,
                mesmo com correspondências.
              </p>

              <span class="fare-scenario-result">
                MX$ 5
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Reforma
              </span>

              <strong>
                Uma viagem de Metrobús
              </strong>

              <p>
                Tarifa padrão
                do sistema.
              </p>

              <span class="fare-scenario-result">
                MX$ 6
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Conexão
              </span>

              <strong>
                Metro + Metrobús
              </strong>

              <p>
                Uma entrada
                em cada sistema.
              </p>

              <span class="fare-scenario-result">
                MX$ 11
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Xochimilco
              </span>

              <strong>
                Metro + Tren Ligero
              </strong>

              <p>
                Metro até Tasqueña
                e Tren Ligero
                até Xochimilco.
              </p>

              <span class="fare-scenario-result">
                MX$ 8
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                AICM
              </span>

              <strong>
                Metrobús aeroporto
              </strong>

              <p>
                Serviço específico
                para Terminal 1
                ou Terminal 2.
              </p>

              <span class="fare-scenario-result">
                MX$ 30
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Cablebús
              </span>

              <strong>
                Uma entrada
              </strong>

              <p>
                Valor independente
                do trecho percorrido.
              </p>

              <span class="fare-scenario-result">
                MX$ 7
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             IDA E VOLTA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Não esqueça de calcular a volta
          </h4>


          <div class="answer-block">

            <strong>
              As tarifas são cobradas
              novamente em uma nova viagem.
            </strong>

            <p>
              Se você utilizar
              Metro,
              Metrobús,
              Tren Ligero,
              Cablebús
              ou ônibus
              para ir a uma atração
              e repetir sistemas
              no retorno,
              reserve saldo
              para a volta.
            </p>

          </div>


          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Exemplo
              </span>

              <strong>
                Metro · ida e volta
              </strong>

              <p>
                Uma entrada
                em cada sentido.
              </p>

              <span class="fare-scenario-result">
                MX$ 10
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Exemplo
              </span>

              <strong>
                Metrobús · ida e volta
              </strong>

              <p>
                Duas viagens
                padrão independentes.
              </p>

              <span class="fare-scenario-result">
                MX$ 12
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Exemplo
              </span>

              <strong>
                Xochimilco · ida e volta
              </strong>

              <p>
                Metro + Tren Ligero
                nos dois sentidos.
              </p>

              <span class="fare-scenario-result">
                MX$ 16
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             SALDO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quanto saldo colocar?
          </h4>

          <p class="panel-intro">
            Não existe
            uma resposta única.

            O melhor cálculo
            depende dos sistemas
            que você realmente
            pretende utilizar.
          </p>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>1</span>

              <strong>
                Veja o trajeto
              </strong>

              <p>
                Identifique
                quais sistemas
                aparecem
                no percurso.
              </p>

            </article>


            <article class="planner-check-card">

              <span>2</span>

              <strong>
                Some as entradas
              </strong>

              <p>
                Metro,
                Metrobús,
                Cablebús
                ou outros sistemas
                podem gerar
                cobranças diferentes.
              </p>

            </article>


            <article class="planner-check-card">

              <span>3</span>

              <strong>
                Inclua a volta
              </strong>

              <p>
                Não calcule
                apenas a ida
                para uma atração.
              </p>

            </article>


            <article class="planner-check-card">

              <span>4</span>

              <strong>
                Mantenha margem
              </strong>

              <p>
                Um pequeno saldo
                adicional evita
                descobrir uma recarga
                somente na hora
                da conexão.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ERRO COMUM
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O erro mais comum
          </h4>


          <div class="visitor-alert">

            <strong>
              “Tenho a Tarjeta MI,
              então minha transferência
              é gratuita.”
            </strong>

            Não necessariamente.

            A tarjeta é
            o meio de pagamento.

            A integração tarifária
            depende das regras
            do sistema
            que você está usando.

          </div>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Mesmo sistema
              </strong>

              <p>
                Pode existir
                correspondência
                ou transbordo
                sem nova cobrança.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Sistemas diferentes
              </strong>

              <p>
                Normalmente considere
                uma nova tarifa
                até confirmar
                uma regra específica
                de integração.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             AEROPORTO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Se o trajeto envolve aeroporto
          </h4>


          <div class="answer-block">

            <strong>
              Confirme o tipo
              de serviço antes
              de calcular o valor.
            </strong>

            <p>
              A conexão do Metrobús
              com o AICM
              não utiliza
              a tarifa padrão
              de MX$ 6.

              O serviço aeroportuário
              possui tarifa
              de MX$ 30.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              AICM não é AIFA.
            </strong>

            Os aeroportos
            estão em locais diferentes
            e suas conexões terrestres
            não devem ser tratadas
            como o mesmo trajeto.

            O planejamento
            do AIFA será tratado
            separadamente
            na área de planejamento
            da ferramenta.

          </div>

        </section>


        <!-- ==================================================
             TARIFAS QUE PODEM MUDAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Antes de viajar
          </h4>


          <div class="visitor-alert">

            <strong>
              Tarifas e regras
              podem ser alteradas.
            </strong>

            Os valores desta ferramenta
            foram verificados
            em fontes oficiais.

            Se sua viagem
            acontecer muito tempo
            depois da última atualização,
            confirme especialmente
            tarifas aeroportuárias,
            ônibus,
            serviços especiais
            e condições
            de transbordo.

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
                MX$ 5.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Metrobús
              </strong>

              <p>
                MX$ 6
                na viagem padrão.
              </p>

            </article>


            <article class="planner-check-card">

              <span>✈️</span>

              <strong>
                Metrobús · AICM
              </strong>

              <p>
                MX$ 30.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚋</span>

              <strong>
                Tren Ligero
              </strong>

              <p>
                MX$ 3.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚡</span>

              <strong>
                Cablebús
              </strong>

              <p>
                MX$ 7.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                RTP
              </strong>

              <p>
                A tarifa depende
                da modalidade;
                há serviços
                de MX$ 2,
                MX$ 4
                e rotas
                de MX$ 5.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔄</span>

              <strong>
                Metrobús
              </strong>

              <p>
                Transbordos elegíveis
                entre linhas
                em até duas horas.
              </p>

            </article>


            <article class="planner-check-card">

              <span>💳</span>

              <strong>
                Tarjeta MI
              </strong>

              <p>
                Um meio de pagamento
                para vários sistemas,
                não uma tarifa
                única universal.
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
            href="https://www.metro.cdmx.gob.mx/acerca-del-metro/mas-informacion/preguntas-frecuentes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tarifas · Metro CDMX
          </a>


          <a
            class="official-link"
            href="https://www.metrobus.cdmx.gob.mx/dependencia/PagoMB"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tarifas e transbordos · Metrobús
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
            href="https://www.ste.cdmx.gob.mx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trolebús, Tren Ligero e Cablebús · STE
          </a>


          <a
            class="official-link"
            href="https://www.rtp.cdmx.gob.mx/red-de-rutas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rotas · RTP
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


        <div class="fare-updated">
          Informações verificadas em agosto de 2026.
        </div>


      </div>

    `;

  }

};
