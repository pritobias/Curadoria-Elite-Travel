// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — CIDADE DO MÉXICO
// MÓDULO: PLANEJAMENTO DE TRAJETOS
// ============================================================

window.MEXICO_CITY_TRANSPORT_MODULES =
  window.MEXICO_CITY_TRANSPORT_MODULES || {};


window.MEXICO_CITY_TRANSPORT_MODULES["planner"] = {

  kicker: "Cidade do México · planejamento",

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
              Na Cidade do México,
              a melhor viagem
              nem sempre utiliza
              apenas um sistema.
            </h4>

            <p>
              Metro,
              Metrobús,
              RTP,
              Trolebús,
              Tren Ligero
              e Cablebús
              resolvem situações diferentes.

              Compare tempo,
              número de trocas,
              caminhada,
              tarifa,
              acessibilidade,
              lotação
              e condições da viagem
              antes de escolher.
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
                Informe o ponto exato
              </strong>

              <p>
                Use o endereço,
                hotel,
                atração
                ou terminal
                de onde você realmente
                pretende sair.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Informe o destino exato
              </strong>

              <p>
                Evite pesquisar
                apenas o nome
                de uma região grande.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Compare as opções
              </strong>

              <p>
                Não escolha
                automaticamente
                a primeira rota
                sugerida.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Veja as trocas
              </strong>

              <p>
                Identifique
                quantas conexões
                serão necessárias
                e entre quais sistemas.
              </p>

            </article>


            <article class="bus-use-step">

              <span>5</span>

              <strong>
                Confira a operação
              </strong>

              <p>
                Veja alterações,
                obras,
                horários
                e condições atuais.
              </p>

            </article>


            <article class="bus-use-step">

              <span>6</span>

              <strong>
                Só então saia
              </strong>

              <p>
                Uma rota boa
                no mapa
                pode não ser
                a melhor naquele momento.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ESCOLHA DO MODAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Qual transporte considerar?
          </h4>


          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                STC
              </span>

              <strong>
                Metro
              </strong>

              <p>
                Normalmente é
                uma das primeiras opções
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
                Metrobús
              </span>

              <strong>
                BRT
              </strong>

              <p>
                Útil em grandes corredores
                como Insurgentes
                e Paseo de la Reforma.
              </p>

              <span class="route-compare-result">
                Rede de superfície
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                RTP
              </span>

              <strong>
                Ônibus
              </strong>

              <p>
                Complementa a rede
                em bairros
                e regiões
                sem acesso direto
                ao Metro.
              </p>

              <span class="route-compare-result">
                Rede ampla
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                STE
              </span>

              <strong>
                Trolebús
              </strong>

              <p>
                Pode ser útil
                em corredores
                como Eje Central
                e outros eixos
                atendidos pela rede elétrica.
              </p>

              <span class="route-compare-result">
                Transporte elétrico
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
                Especialmente relevante
                para quem segue
                de Tasqueña
                em direção
                a Xochimilco.
              </p>

              <span class="route-compare-result">
                Sul da cidade
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                STE
              </span>

              <strong>
                Cablebús
              </strong>

              <p>
                Atende áreas
                de relevo acentuado
                e pode complementar
                Metro
                e outros sistemas.
              </p>

              <span class="route-compare-result">
                Teleférico urbano
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             METRO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Planejando pelo Metro
          </h4>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🔢</span>

              <strong>
                Linha
              </strong>

              <p>
                Confira
                o número
                ou letra
                da linha.
              </p>

            </article>


            <article class="planner-check-card">

              <span>↔</span>

              <strong>
                Direção
              </strong>

              <p>
                Veja qual terminal
                identifica
                o sentido correto.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔀</span>

              <strong>
                Correspondência
              </strong>

              <p>
                Identifique
                onde será necessário
                trocar de linha.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚪</span>

              <strong>
                Saída
              </strong>

              <p>
                Em estações grandes,
                veja qual saída
                aproxima você
                do destino.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⚠️</span>

              <strong>
                Alterações
              </strong>

              <p>
                Obras
                e intervenções
                podem modificar
                temporariamente
                a operação.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             DIREÇÃO METRO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Use o terminal
            para entender o sentido
          </h4>


          <div class="answer-block">

            <strong>
              Não procure “norte”
              ou “sul” apenas.
            </strong>

            <p>
              No Metro,
              o sentido normalmente
              é indicado
              pelo nome
              da estação terminal
              daquela direção.

              Descubra primeiro
              qual é o terminal
              para o lado
              onde seu destino está.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              O terminal é referência,
              não necessariamente
              seu destino.
            </strong>

            Você pode descer
            várias estações antes.

            O nome do terminal
            serve para confirmar
            para qual lado
            o trem está seguindo.

          </div>

        </section>


        <!-- ==================================================
             CORRESPONDÊNCIAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Correspondências podem ser grandes
          </h4>


          <div class="visitor-alert">

            <strong>
              “Trocar de linha”
              não significa necessariamente
              atravessar apenas uma plataforma.
            </strong>

            Algumas estações
            de correspondência
            exigem corredores,
            escadas,
            rampas
            e caminhadas internas.

            Inclua isso
            no tempo da viagem.

          </div>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚶</span>

              <strong>
                Caminhada interna
              </strong>

              <p>
                Pode aumentar
                o tempo
                da conexão.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🧳</span>

              <strong>
                Bagagem
              </strong>

              <p>
                Faz uma troca longa
                pesar ainda mais.
              </p>

            </article>


            <article class="planner-check-card">

              <span>♿</span>

              <strong>
                Mobilidade
              </strong>

              <p>
                Confira
                a acessibilidade
                de todas
                as etapas.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             MAPA MI
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Use o Mapa de Movilidad Integrada
          </h4>


          <div class="answer-block">

            <strong>
              Ele ajuda a enxergar
              os sistemas como uma rede.
            </strong>

            <p>
              O mapa oficial
              reúne Metro,
              Metrobús,
              Cablebús,
              Trolebús,
              RTP,
              Tren Ligero
              e conexões
              entre diferentes meios.
            </p>

          </div>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                Linhas
              </strong>

              <p>
                Veja como
                os sistemas
                atravessam a cidade.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔀</span>

              <strong>
                Conexões
              </strong>

              <p>
                Identifique
                pontos onde
                diferentes redes
                se encontram.
              </p>

            </article>


            <article class="planner-check-card">

              <span>📍</span>

              <strong>
                Hubs
              </strong>

              <p>
                Reconheça
                estações importantes
                para transferências.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             VISOR MI
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Visor MI
          </h4>


          <div class="answer-block">

            <strong>
              Há também
              um mapa interativo oficial.
            </strong>

            <p>
              O Visor MI
              permite explorar
              geograficamente
              a Rede de Movilidad Integrada
              e entender
              onde os diferentes
              sistemas passam.
            </p>

          </div>


          <div class="fare-note">

            Use o mapa integrado
            para entender a rede
            e um planejador
            de origem e destino
            para montar
            a viagem específica.

          </div>

        </section>


        <!-- ==================================================
             METROBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quando considerar o Metrobús
          </h4>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>↕</span>

              <strong>
                Insurgentes
              </strong>

              <p>
                A Linha 1
                acompanha
                um grande eixo
                norte-sul.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🏙️</span>

              <strong>
                Reforma
              </strong>

              <p>
                A Linha 7
                atende grande parte
                do Paseo
                de la Reforma.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🏛️</span>

              <strong>
                Centro
              </strong>

              <p>
                A Linha 4
                possui serviços
                pela região central.
              </p>

            </article>


            <article class="planner-check-card">

              <span>✈️</span>

              <strong>
                AICM
              </strong>

              <p>
                A Linha 4
                possui serviço
                para os terminais
                do aeroporto.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             METROBUS PERCURSO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            No Metrobús,
            confirme o percurso
          </h4>


          <div class="visitor-alert">

            <strong>
              A mesma linha
              pode ter mais
              de um serviço.
            </strong>

            Não embarque
            apenas porque
            o veículo pertence
            à linha correta.

            Confira
            o destino final
            e as estações
            atendidas
            naquele percurso.
          </div>

        </section>


        <!-- ==================================================
             TRANSBORDO METROBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Transbordos no Metrobús
          </h4>


          <div class="answer-block">

            <strong>
              Planeje a troca
              antes de chegar.
            </strong>

            <p>
              O Metrobús
              possui conexões
              entre linhas
              e permite transbordos
              elegíveis
              dentro das regras
              do sistema.
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
                Para transbordos
                elegíveis
                dentro do Metrobús.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Use o mesmo
              meio de pagamento.
            </strong>

            Se começou
            com a Tarjeta MI,
            mantenha aquela tarjeta
            durante o percurso.

          </div>

        </section>


        <!-- ==================================================
             RTP
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quando considerar a RTP
          </h4>

          <p class="panel-intro">
            A RTP
            pode completar trajetos
            que Metro
            e Metrobús
            não resolvem diretamente.
          </p>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>📍</span>

              <strong>
                Destino distante
                da estação
              </strong>

              <p>
                Pode reduzir
                a caminhada final.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🏙️</span>

              <strong>
                Santa Fe
              </strong>

              <p>
                Algumas rotas
                conectam
                a região
                a pontos
                da rede urbana.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Região sem Metro
              </strong>

              <p>
                Ônibus
                pode completar
                o deslocamento.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚶</span>

              <strong>
                Último trecho
              </strong>

              <p>
                Pode evitar
                uma caminhada longa
                após o Metro.
              </p>

            </article>

          </div>


          <div class="fare-note">

            Rotas da RTP
            circulam em superfície
            e podem ser afetadas
            pelo trânsito.

            Compare o tempo
            no momento
            em que pretende viajar.

          </div>

        </section>


        <!-- ==================================================
             TROLEBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quando considerar o Trolebús
          </h4>


          <div class="answer-block">

            <strong>
              Ele pode funcionar
              como um corredor complementar
              ao Metro.
            </strong>

            <p>
              A rede do STE
              possui linhas
              próprias
              que atravessam
              diferentes regiões
              da cidade.

              Eje Central
              é um dos exemplos
              mais úteis
              para reconhecer
              essa lógica.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Consulte a linha específica.
            </strong>

            Horários,
            paradas
            e tarifas
            podem variar
            entre os serviços
            de Trolebús.

          </div>

        </section>


        <!-- ==================================================
             TREN LIGERO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Xochimilco · planeje até o final
          </h4>


          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Primeira etapa
              </span>

              <strong>
                Metro
              </strong>

              <p>
                Chegue
                à região
                de Tasqueña.
              </p>

              <span class="route-compare-result">
                Rede do Metro
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Segunda etapa
              </span>

              <strong>
                Tren Ligero
              </strong>

              <p>
                Continue
                em direção
                à estação Xochimilco.
              </p>

              <span class="route-compare-result">
                Outro sistema
              </span>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              O destino final
              pode não ser
              a estação Xochimilco.
            </strong>

            Se você vai
            a um embarcadouro,
            restaurante
            ou ponto específico,
            inclua também
            o deslocamento
            depois do Tren Ligero.

          </div>

        </section>


        <!-- ==================================================
             CABLEBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quando considerar o Cablebús
          </h4>

          <p class="panel-intro">
            O Cablebús
            é transporte público,
            não apenas
            uma experiência panorâmica.

            Ele pode aparecer
            como parte real
            de um deslocamento
            entre regiões
            e outros sistemas.
          </p>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚡</span>

              <strong>
                Linha
              </strong>

              <p>
                Confirme
                qual linha
                atende o percurso.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔀</span>

              <strong>
                Conexão
              </strong>

              <p>
                Veja onde
                o Cablebús
                encontra Metro
                ou outros meios.
              </p>

            </article>


            <article class="planner-check-card">

              <span>💵</span>

              <strong>
                Tarifa
              </strong>

              <p>
                Considere
                a cobrança
                própria do sistema.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⏱️</span>

              <strong>
                Tempo completo
              </strong>

              <p>
                Inclua
                a conexão
                antes e depois
                do teleférico.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ÁREAS TURÍSTICAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Pense por região,
            não apenas por sistema
          </h4>


          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Centro Histórico
              </span>

              <strong>
                Metro + caminhada
              </strong>

              <p>
                Muitas atrações
                ficam próximas
                umas das outras.
              </p>

              <span class="route-compare-result">
                Compare caminhadas
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Reforma
              </span>

              <strong>
                Metrobús Linha 7
              </strong>

              <p>
                Pode ser útil
                ao longo
                do corredor.
              </p>

              <span class="route-compare-result">
                Superfície
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Roma / Condesa
              </span>

              <strong>
                Metro + Metrobús
              </strong>

              <p>
                A melhor combinação
                depende
                do endereço exato.
              </p>

              <span class="route-compare-result">
                Compare a caminhada
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Chapultepec
              </span>

              <strong>
                Vários acessos
              </strong>

              <p>
                O bosque é grande
                e o melhor transporte
                depende
                de qual atração
                você visitará.
              </p>

              <span class="route-compare-result">
                Informe o destino exato
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Coyoacán
              </span>

              <strong>
                Planeje o último trecho
              </strong>

              <p>
                A estação escolhida
                pode ainda exigir
                ônibus
                ou caminhada.
              </p>

              <span class="route-compare-result">
                Veja o endereço
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Xochimilco
              </span>

              <strong>
                Metro + Tren Ligero
              </strong>

              <p>
                Depois,
                veja o deslocamento
                até o embarcadouro.
              </p>

              <span class="route-compare-result">
                Viagem em etapas
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             CENTRO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Centro Histórico
          </h4>


          <div class="answer-block">

            <strong>
              Nem todo trajeto
              dentro do Centro
              precisa de transporte.
            </strong>

            <p>
              Zócalo,
              Catedral,
              Templo Mayor,
              Alameda
              e outras atrações
              ficam em uma área
              com grande circulação
              de pedestres.

              Compare sempre
              transporte
              com caminhada.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Bloqueios viários
              podem alterar
              transporte de superfície.
            </strong>

            Eventos,
            manifestações
            e atividades públicas
            podem mudar
            temporariamente
            ônibus
            e Metrobús.

          </div>

        </section>


        <!-- ==================================================
             CHAPULTEPEC
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Chapultepec não é um único ponto
          </h4>


          <div class="visitor-alert">

            <strong>
              Pesquise a atração específica.
            </strong>

            “Chapultepec”
            pode significar
            Bosque de Chapultepec,
            Castillo,
            Museo Nacional
            de Antropología,
            Museo Tamayo,
            Auditorio Nacional
            ou outra área.

            Cada destino
            pode ter
            uma estação
            ou corredor
            mais conveniente.

          </div>

        </section>


        <!-- ==================================================
             AICM PRINCIPIO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            AICM · primeiro confirme o terminal
          </h4>

          <p class="panel-intro">
            O Aeroporto Internacional
            da Cidade do México
            possui Terminal 1
            e Terminal 2.

            Não planeje
            apenas pesquisando
            “Aeroporto Cidade do México”.
          </p>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>1</span>

              <strong>
                Aeroporto
              </strong>

              <p>
                Confirme
                que o voo
                é pelo AICM.
              </p>

            </article>


            <article class="planner-check-card">

              <span>2</span>

              <strong>
                Terminal
              </strong>

              <p>
                Veja se é
                Terminal 1
                ou Terminal 2.
              </p>

            </article>


            <article class="planner-check-card">

              <span>3</span>

              <strong>
                Bagagem
              </strong>

              <p>
                Considere
                malas,
                escadas
                e conexões.
              </p>

            </article>


            <article class="planner-check-card">

              <span>4</span>

              <strong>
                Horário
              </strong>

              <p>
                Reserve margem
                para chegar
                ao aeroporto.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             AICM METRO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            AICM · Metro
          </h4>


          <div class="answer-block">

            <strong>
              Terminal Aérea
              fica na Linha 5.
            </strong>

            <p>
              A estação
              Terminal Aérea
              faz parte
              da Linha 5
              do Metro,
              entre Hangares
              e Oceanía.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              O nome da estação
              não resolve automaticamente
              os dois terminais.
            </strong>

            Antes de escolher
            a viagem pelo Metro,
            confirme
            qual terminal
            você utilizará
            e quanto será necessário
            caminhar ou complementar
            o deslocamento.

          </div>

        </section>


        <!-- ==================================================
             AICM METROBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            AICM · Metrobús
          </h4>


          <div class="answer-block">

            <strong>
              A Linha 4
              atende Terminal 1
              e Terminal 2.
            </strong>

            <p>
              O serviço aeroportuário
              conecta o aeroporto
              à região central
              da Cidade do México
              e utiliza
              uma tarifa própria.
            </p>

          </div>


          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Serviço AICM
              </span>

              <strong>
                MX$ 30
              </strong>

              <p>
                Tarifa específica
                do Metrobús
                aeroportuário.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Em 2026,
              consulte a operação
              antes de sair.
            </strong>

            O AICM
            está passando
            por intervenções
            e o próprio aeroporto
            recomenda conferir
            as opções
            de chegada
            para o dia do voo.

          </div>

        </section>


        <!-- ==================================================
             AICM ENTRE TERMINAIS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            AICM · Terminal 1 ↔ Terminal 2
          </h4>


          <div class="answer-block">

            <strong>
              Existe Aerotrén
              entre os terminais.
            </strong>

            <p>
              O Aerotrén
              é um serviço interno
              do AICM
              para deslocamento
              entre Terminal 1
              e Terminal 2.
            </p>

          </div>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚆</span>

              <strong>
                Aerotrén
              </strong>

              <p>
                Faz a ligação
                entre os dois terminais.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🎫</span>

              <strong>
                Passageiro
              </strong>

              <p>
                É necessário
                apresentar
                passe de embarque.
              </p>

            </article>


            <article class="planner-check-card">

              <span>💵</span>

              <strong>
                Tarifa
              </strong>

              <p>
                O serviço
                é gratuito.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             AIFA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            AIFA · não confunda com o AICM
          </h4>


          <div class="visitor-alert">

            <strong>
              O Aeroporto Internacional
              Felipe Ángeles
              é outro aeroporto.
            </strong>

            Ele fica fora
            da área central
            da Cidade do México
            e exige
            um planejamento
            terrestre próprio.

            Não utilize
            Terminal Aérea
            ou Metrobús Linha 4
            como referência
            para chegar ao AIFA.

          </div>

        </section>


        <!-- ==================================================
             AIFA TREN
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            AIFA · Tren Felipe Ángeles
          </h4>

          <p class="panel-intro">
            Em 2026,
            o aeroporto possui
            conexão ferroviária
            direta com Buenavista
            por meio
            do Tren Felipe Ángeles.
          </p>


          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                AIFA
              </span>

              <strong>
                Terminal Intermodal
              </strong>

              <p>
                A estação ferroviária
                fica integrada
                à área
                de transporte terrestre
                do aeroporto.
              </p>

              <span class="route-compare-result">
                Início da viagem
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Cidade do México
              </span>

              <strong>
                Buenavista
              </strong>

              <p>
                A chegada
                permite conexão
                com outros meios
                de transporte urbano.
              </p>

              <span class="route-compare-result">
                Hub urbano
              </span>

            </article>

          </div>


          <div class="answer-block">

            <strong>
              Planeje também
              Buenavista → destino final.
            </strong>

            <p>
              Chegar a Buenavista
              não significa
              que você chegou
              ao hotel.

              A partir dali,
              pode ser necessário
              continuar
              por Metro,
              Metrobús,
              caminhada
              ou outro transporte.
            </p>

          </div>

        </section>


        <!-- ==================================================
             AIFA OUTRAS CONEXOES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            AIFA possui uma terminal intermodal
          </h4>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚆</span>

              <strong>
                Trem
              </strong>

              <p>
                Tren Felipe Ángeles.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Ônibus
              </strong>

              <p>
                O aeroporto
                possui terminal
                de ônibus.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                Mexibús
              </strong>

              <p>
                Também integra
                a área
                de transporte terrestre.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚕</span>

              <strong>
                Transporte autorizado
              </strong>

              <p>
                Compare
                de acordo
                com seu destino final.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             AICM X AIFA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            AICM e AIFA exigem
            planejamentos diferentes
          </h4>


          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                AICM
              </span>

              <strong>
                Dentro da CDMX
              </strong>

              <p>
                Pode envolver
                Metro Linha 5,
                Metrobús Linha 4
                ou outras opções.
              </p>

              <span class="route-compare-result">
                Rede urbana
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
                Pode envolver
                Tren Felipe Ángeles,
                Mexibús,
                ônibus
                ou transporte rodoviário.
              </p>

              <span class="route-compare-result">
                Viagem metropolitana
              </span>

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
            Se sua viagem
            continua para outra cidade,
            confirme primeiro
            qual terminal rodoviário
            sua empresa utiliza.
          </p>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Norte
              </strong>

              <p>
                A estação
                Autobuses del Norte
                da Linha 5
                atende a região
                da terminal.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Sur
              </strong>

              <p>
                A região
                de Tasqueña
                é referência
                para a terminal sul.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Oriente
              </strong>

              <p>
                Pesquise
                o terminal TAPO
                como destino específico.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Poniente
              </strong>

              <p>
                Confirme
                a operação
                e o acesso
                pela região
                de Observatorio.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             HORARIO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O horário muda a melhor rota
          </h4>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🌅</span>

              <strong>
                Muito cedo
              </strong>

              <p>
                Confira
                se todos
                os sistemas
                já começaram
                a operar.
              </p>

            </article>


            <article class="planner-check-card">

              <span>👥</span>

              <strong>
                Pico
              </strong>

              <p>
                Considere
                lotação
                e tempo adicional
                de embarque.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🌙</span>

              <strong>
                Noite
              </strong>

              <p>
                Veja
                o último horário
                do serviço necessário.
              </p>

            </article>


            <article class="planner-check-card">

              <span>📅</span>

              <strong>
                Fim de semana
              </strong>

              <p>
                Horários
                e intervenções
                podem ser diferentes.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             LOTACAO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Não planeje apenas pelo tempo
          </h4>


          <div class="visitor-alert">

            <strong>
              Uma previsão de 35 minutos
              não conta toda a experiência.
            </strong>

            Escadas,
            corredores,
            espera,
            lotação,
            fila para embarcar,
            conexões
            e caminhada final
            também fazem parte
            da viagem.

          </div>

        </section>


        <!-- ==================================================
             MAIS RAPIDA
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
                Compare
                a duração total.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚶</span>

              <strong>
                Caminhada
              </strong>

              <p>
                Veja quanto
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
                Menos conexões
                podem compensar
                alguns minutos a mais.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🧳</span>

              <strong>
                Bagagem
              </strong>

              <p>
                Transferências
                pesam mais
                quando há malas.
              </p>

            </article>


            <article class="planner-check-card">

              <span>♿</span>

              <strong>
                Acessibilidade
              </strong>

              <p>
                Analise
                a viagem inteira.
              </p>

            </article>


            <article class="planner-check-card">

              <span>💵</span>

              <strong>
                Custo
              </strong>

              <p>
                Mudanças de sistema
                podem gerar
                novas tarifas.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             TARIFAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Trocar de veículo
            não significa
            transferência gratuita
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
                interna
                sem sair
                da rede tarifada.
              </p>

              <span class="fare-scenario-result">
                Uma tarifa
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
                Pode haver
                transbordo gratuito
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
                A Tarjeta MI
                pode pagar ambos,
                mas as cobranças
                são separadas.
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
                Considere
                a tarifa
                de cada acesso.
              </p>

              <span class="fare-scenario-result">
                Cobranças separadas
              </span>

            </article>

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
            Não escolha uma rota
            apenas porque
            o planejador
            mostrou menos minutos.

            Verifique todas
            as etapas
            da viagem.
          </p>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>♿</span>

              <strong>
                Estação
              </strong>

              <p>
                Veja
                quais recursos
                estão disponíveis.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔀</span>

              <strong>
                Correspondência
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
                Metrobús
                ou transporte
                de superfície
                podem reduzir
                certas barreiras.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚶</span>

              <strong>
                Último trecho
              </strong>

              <p>
                Veja também
                calçadas
                e distância
                até o destino.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             BAGAGEM
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Com malas,
            mude o critério
          </h4>


          <div class="visitor-alert">

            <strong>
              A rota mais barata
              pode não ser
              a mais confortável.
            </strong>

            Escadas,
            corredores longos,
            estações cheias
            e várias transferências
            pesam muito mais
            quando você está
            carregando bagagem.

          </div>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🧳</span>

              <strong>
                Trocas
              </strong>

              <p>
                Quanto menos,
                melhor
                tende a ser.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚶</span>

              <strong>
                Caminhada
              </strong>

              <p>
                Veja a distância
                até o hotel.
              </p>

            </article>


            <article class="planner-check-card">

              <span>👥</span>

              <strong>
                Horário
              </strong>

              <p>
                Evite,
                quando possível,
                grande lotação.
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
              O mapa mostra
              como a rede deveria funcionar.
              O aviso operacional mostra
              o que está acontecendo agora.
            </strong>

            Obras,
            manutenção,
            manifestações,
            eventos,
            acidentes,
            bloqueios
            e intervenções
            podem modificar
            temporariamente
            uma rota.

          </div>


          <div class="answer-block">

            <strong>
              Faça uma nova consulta
              no dia.
            </strong>

            <p>
              Isso é especialmente
              importante
              antes de um voo,
              viagem rodoviária,
              compromisso com horário
              ou deslocamento
              muito cedo
              ou muito tarde.
            </p>

          </div>

        </section>


        <!-- ==================================================
             PLANEJADORES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Planejadores de viagem
          </h4>

          <p class="panel-intro">
            A própria SEMOVI
            referencia ferramentas
            de planejamento
            que trabalham
            com origem
            e destino.
          </p>


          <div class="purchase-grid">

            <article class="purchase-card">

              <span>📍</span>

              <strong>
                Google Maps
              </strong>

              <p>
                Útil para comparar
                transporte público,
                caminhada
                e localização
                das estações.
              </p>

            </article>


            <article class="purchase-card">

              <span>📱</span>

              <strong>
                Citymapper
              </strong>

              <p>
                Outra opção
                para comparar
                diferentes combinações
                de transporte.
              </p>

            </article>


            <article class="purchase-card">

              <span>🗺️</span>

              <strong>
                Moovit
              </strong>

              <p>
                Permite pesquisar
                deslocamentos
                em transporte público.
              </p>

            </article>


            <article class="purchase-card">

              <span>🧭</span>

              <strong>
                HERE WeGo
              </strong>

              <p>
                Também aparece
                entre as ferramentas
                referenciadas
                pela SEMOVI.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO USAR PLANEJADOR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Use o planejador
            como ponto de partida
          </h4>


          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Pesquise
              </strong>

              <p>
                Coloque
                origem
                e destino exatos.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Compare
              </strong>

              <p>
                Veja pelo menos
                duas alternativas.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Identifique os sistemas
              </strong>

              <p>
                Metro,
                Metrobús,
                RTP,
                Trolebús
                ou outro meio.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Abra o mapa oficial
              </strong>

              <p>
                Confirme
                as linhas
                e conexões.
              </p>

            </article>


            <article class="bus-use-step">

              <span>5</span>

              <strong>
                Confira alterações
              </strong>

              <p>
                Veja
                se há avisos
                naquele dia.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             NÃO DEPENDER SÓ APP
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Não dependa apenas
            da rota automática
          </h4>


          <div class="visitor-alert">

            <strong>
              Um aplicativo
              pode sugerir
              uma combinação possível,
              não necessariamente
              a mais confortável para você.
            </strong>

            Antes de aceitar
            a primeira sugestão,
            veja:

            quantidade de trocas,
            caminhada,
            tarifa,
            lotação,
            horário,
            acessibilidade
            e distância
            do último trecho.

          </div>

        </section>


        <!-- ==================================================
             OFFLINE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Salve a viagem
            antes de sair
          </h4>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>📸</span>

              <strong>
                Screenshot
              </strong>

              <p>
                Salve
                a rota principal
                e as conexões.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔢</span>

              <strong>
                Linha
              </strong>

              <p>
                Anote
                número
                ou nome.
              </p>

            </article>


            <article class="planner-check-card">

              <span>↔</span>

              <strong>
                Sentido
              </strong>

              <p>
                Salve
                o terminal
                de referência.
              </p>

            </article>


            <article class="planner-check-card">

              <span>📍</span>

              <strong>
                Descida
              </strong>

              <p>
                Saiba
                qual estação
                ou parada
                você procura.
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
                Confirme
                o endereço exato.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Transporte
              </strong>

              <p>
                Veja
                quais sistemas
                serão utilizados.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Sentido
              </strong>

              <p>
                Confira
                linha,
                terminal
                e direção.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Trocas
              </strong>

              <p>
                Saiba
                onde serão feitas.
              </p>

            </article>


            <article class="bus-use-step">

              <span>5</span>

              <strong>
                Saldo
              </strong>

              <p>
                Tenha valor
                suficiente
                na Tarjeta MI.
              </p>

            </article>


            <article class="bus-use-step">

              <span>6</span>

              <strong>
                Operação
              </strong>

              <p>
                Confira
                alterações atuais.
              </p>

            </article>


            <article class="bus-use-step">

              <span>7</span>

              <strong>
                Volta
              </strong>

              <p>
                Saiba também
                como retornar.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ERROS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Erros que vale evitar
          </h4>


          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>⚠️</span>

              <strong>
                Pesquisar só o bairro
              </strong>

              <p>
                Regiões grandes
                podem ter
                várias estações.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⚠️</span>

              <strong>
                Escolher pela cor
              </strong>

              <p>
                Confirme sempre
                a linha
                e o sentido.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⚠️</span>

              <strong>
                Ignorar a última etapa
              </strong>

              <p>
                A estação
                pode estar longe
                do destino final.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⚠️</span>

              <strong>
                Ignorar tarifas
              </strong>

              <p>
                Trocas de sistema
                podem gerar
                nova cobrança.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⚠️</span>

              <strong>
                Confundir aeroportos
              </strong>

              <p>
                AICM
                e AIFA
                exigem rotas
                diferentes.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⚠️</span>

              <strong>
                Não conferir o dia
              </strong>

              <p>
                A operação
                pode mudar
                temporariamente.
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

              <span>🗺️</span>

              <strong>
                Mapa MI
              </strong>

              <p>
                Visão integrada
                da rede
                de transporte
                da Cidade do México.
              </p>

            </article>


            <article class="purchase-card">

              <span>📍</span>

              <strong>
                Visor MI
              </strong>

              <p>
                Mapa interativo
                oficial
                da Movilidad Integrada.
              </p>

            </article>


            <article class="purchase-card">

              <span>🚇</span>

              <strong>
                Metro
              </strong>

              <p>
                Linhas,
                estações,
                correspondências
                e informações
                da rede.
              </p>

            </article>


            <article class="purchase-card">

              <span>🚌</span>

              <strong>
                Metrobús
              </strong>

              <p>
                Mapas,
                rotas
                e horários
                por linha.
              </p>

            </article>


            <article class="purchase-card">

              <span>🚎</span>

              <strong>
                STE
              </strong>

              <p>
                Trolebús,
                Tren Ligero
                e Cablebús.
              </p>

            </article>


            <article class="purchase-card">

              <span>🚍</span>

              <strong>
                RTP
              </strong>

              <p>
                Rotas
                de ônibus
                organizadas
                por serviço.
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

              <span>📍</span>

              <strong>
                Endereço
              </strong>

              <p>
                Pesquise
                origem
                e destino exatos.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                Metro
              </strong>

              <p>
                Linha,
                terminal
                e correspondências.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Metrobús
              </strong>

              <p>
                Linha,
                percurso
                e destino
                do serviço.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                RTP
              </strong>

              <p>
                Útil
                para complementar
                a rede.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚎</span>

              <strong>
                Trolebús
              </strong>

              <p>
                Consulte
                linha
                e paradas.
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
                Considere
                como parte
                da rede pública.
              </p>

            </article>


            <article class="planner-check-card">

              <span>✈️</span>

              <strong>
                AICM
              </strong>

              <p>
                Confirme
                Terminal 1
                ou Terminal 2.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚆</span>

              <strong>
                AIFA
              </strong>

              <p>
                Planejamento próprio,
                incluindo
                Tren Felipe Ángeles.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔀</span>

              <strong>
                Integrações
              </strong>

              <p>
                Nem toda troca
                é tarifariamente
                gratuita.
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
            href="https://semovi.cdmx.gob.mx/movilidad-integrada/mi-mapa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mapa de Movilidad Integrada · SEMOVI
          </a>


          <a
            class="official-link"
            href="https://semovi.cdmx.gob.mx/movilidad-integrada/mapa-interactivo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visor MI · SEMOVI
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
            href="https://www.aicm.com.mx/pasajeros/servicios/prestadores-de-servicios/transportes/metrobus"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transporte · AICM
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


        <div class="planner-updated">
          Informações verificadas em agosto de 2026.
        </div>


      </div>

    `;

  }

};
