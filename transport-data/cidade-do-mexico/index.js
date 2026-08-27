(function () {
  'use strict';


  window.MEXICO_CITY_TRANSPORT_MODULES =
    window.MEXICO_CITY_TRANSPORT_MODULES || {};


  const MEXICO_CITY_TRANSPORT = {

    id: 'mexico-city',
    slug: 'mexico-city',

    city: 'Cidade do México',
    state: 'Ciudad de México',
    country: 'México',

    page: {

      eyebrow: 'Malha de transportes',

      title: 'Cidade do México',

      description:
        'Entenda Metro, Metrobús, Trolebús, RTP, Tren Ligero, Cablebús e as principais conexões para circular pela Cidade do México com mais clareza e autonomia.',

      updatedAt: 'Agosto de 2026'

    },


    map: {

      image:
        null,

      officialPage:
        'https://semovi.cdmx.gob.mx/movilidad-integrada/mi-mapa',

      alt:
        'Mapa oficial da Rede de Movilidad Integrada da Cidade do México'

    },


    cards: [

      {
        id: 'network',
        module: 'network',
        icon: '⌘',
        eyebrow: 'Visão geral',
        title: 'Rede de Transporte',
        description:
          'Entenda Metro, Metrobús, Trolebús, RTP, Tren Ligero, Cablebús e como os principais sistemas se conectam.'
      },


      {
        id: 'fares',
        module: 'fares',
        icon: '$',
        eyebrow: 'Valores e integrações',
        title: 'Tarifas e integração',
        description:
          'Veja como funcionam as tarifas, cobranças e integrações entre os principais sistemas de transporte.'
      },


      {
        id: 'payment',
        module: 'payment',
        icon: '▣',
        eyebrow: 'Bilhetes e pagamento',
        title: 'Como pagar',
        description:
          'Entenda a Tarjeta de Movilidad Integrada, recargas e os meios de pagamento utilizados na rede.'
      },


      {
        id: 'bus',
        module: 'bus',
        icon: '🚌',
        eyebrow: 'Rede de ônibus',
        title: 'Como usar os ônibus',
        description:
          'Entenda Metrobús, RTP, Trolebús e as diferenças entre os principais serviços de superfície.'
      },


      {
        id: 'planner',
        module: 'planner',
        icon: '⌖',
        eyebrow: 'Organização do percurso',
        title: 'Planeje o trajeto',
        description:
          'Compare Metro, Metrobús, ônibus, sistemas elétricos e conexões úteis para áreas turísticas e aeroportos.'
      }

    ],


    quickAccess: [

      {
        label: 'Mapa de Movilidad Integrada · SEMOVI',
        url: 'https://semovi.cdmx.gob.mx/movilidad-integrada/mi-mapa'
      },


      {
        label: 'Metro · CDMX',
        url: 'https://www.metro.cdmx.gob.mx/'
      },


      {
        label: 'Mapas e rotas · Metrobús',
        url: 'https://www.metrobus.cdmx.gob.mx/mapas-rutas'
      },


      {
        label: 'Transportes Elétricos · STE',
        url: 'https://www.ste.cdmx.gob.mx/'
      },


      {
        label: 'RTP · CDMX',
        url: 'https://www.rtp.cdmx.gob.mx/'
      }

    ],


    emergency: {

      title: 'Canais de atendimento',

      items: [

        {
          label: 'Emergências',
          value: '911',
          url: 'tel:911'
        },


        {
          label: 'LOCATEL',
          value: '*0311',
          url: 'tel:*0311'
        }

      ]

    }

  };


  // ==========================================================
  // MÓDULOS
  // ==========================================================

  function getModule(moduleName) {

    return (
      window.MEXICO_CITY_TRANSPORT_MODULES[moduleName] ||
      null
    );

  }


  function getCard(cardId) {

    return (
      MEXICO_CITY_TRANSPORT.cards.find(
        function (card) {
          return card.id === cardId;
        }
      ) || null
    );

  }


  function getCardModule(cardId) {

    const card =
      getCard(cardId);


    if (!card) {
      return null;
    }


    return getModule(
      card.module
    );

  }


  function getAvailableCards() {

    return MEXICO_CITY_TRANSPORT.cards.filter(
      function (card) {

        return Boolean(
          getModule(card.module)
        );

      }
    );

  }


  function validateModules() {

    const missingModules =
      MEXICO_CITY_TRANSPORT.cards

        .filter(
          function (card) {

            return !getModule(
              card.module
            );

          }
        )

        .map(
          function (card) {

            return card.module;

          }
        );


    if (missingModules.length > 0) {

      console.warn(
        '[Transportes · Cidade do México] Módulos ainda não carregados:',
        missingModules.join(', ')
      );

    }


    return missingModules;

  }


  // ==========================================================
  // CARDS
  // ==========================================================

  function renderCards(container) {

    if (!container) {
      return;
    }


    container.innerHTML =
      MEXICO_CITY_TRANSPORT.cards

        .map(
          function (card) {

            return `

              <button
                class="transport-card"
                type="button"
                data-transport-card="${card.id}"
                aria-label="Abrir ${card.title}"
              >

                <span
                  class="transport-card-icon"
                  aria-hidden="true"
                >
                  ${card.icon}
                </span>


                <span class="transport-card-content">

                  <span class="transport-card-eyebrow">
                    ${card.eyebrow}
                  </span>


                  <strong class="transport-card-title">
                    ${card.title}
                  </strong>


                  <span class="transport-card-description">
                    ${card.description}
                  </span>

                </span>


                <span
                  class="transport-card-arrow"
                  aria-hidden="true"
                >
                  →
                </span>

              </button>

            `;

          }
        )

        .join('');

  }


  // ==========================================================
  // ACESSO RÁPIDO
  // ==========================================================

  function renderQuickAccess(container) {

    if (!container) {
      return;
    }


    container.innerHTML =
      MEXICO_CITY_TRANSPORT.quickAccess

        .map(
          function (item) {

            return `

              <a
                class="transport-quick-link"
                href="${item.url}"
                target="_blank"
                rel="noopener noreferrer"
              >

                ${item.label}

                <span aria-hidden="true">
                  ↗
                </span>

              </a>

            `;

          }
        )

        .join('');

  }


  // ==========================================================
  // ABRIR MÓDULO
  // ==========================================================

  function openModule(
    cardId,
    elements
  ) {

    const card =
      getCard(cardId);


    const moduleData =
      getCardModule(cardId);


    if (
      !card ||
      !moduleData
    ) {

      console.error(
        `[Transportes · Cidade do México] Não foi possível abrir o módulo "${cardId}".`
      );

      return false;

    }


    const modal =
      elements &&
      elements.modal;


    const kicker =
      elements &&
      elements.kicker;


    const title =
      elements &&
      elements.title;


    const body =
      elements &&
      elements.body;


    if (
      !modal ||
      !kicker ||
      !title ||
      !body
    ) {

      console.error(
        '[Transportes · Cidade do México] Elementos do modal não foram encontrados.'
      );

      return false;

    }


    kicker.textContent =
      moduleData.kicker ||
      card.eyebrow;


    title.textContent =
      moduleData.title ||
      card.title;


    body.innerHTML =
      typeof moduleData.body === 'function'
        ? moduleData.body()
        : moduleData.body || '';


    modal.classList.add(
      'is-open'
    );


    modal.setAttribute(
      'aria-hidden',
      'false'
    );


    document.documentElement.classList.add(
      'transport-modal-open'
    );


    document.body.classList.add(
      'transport-modal-open'
    );


    const closeButton =
      modal.querySelector(
        '[data-close-transport-modal], #closeTransportModal'
      );


    if (closeButton) {

      window.setTimeout(
        function () {

          closeButton.focus();

        },
        50
      );

    }


    return true;

  }


  // ==========================================================
  // FECHAR MÓDULO
  // ==========================================================

  function closeModule(modal) {

    if (!modal) {
      return;
    }


    modal.classList.remove(
      'is-open'
    );


    modal.setAttribute(
      'aria-hidden',
      'true'
    );


    document.documentElement.classList.remove(
      'transport-modal-open'
    );


    document.body.classList.remove(
      'transport-modal-open'
    );

  }


  // ==========================================================
  // INICIALIZAÇÃO
  // ==========================================================

  function initializeTransportPage(options) {

    const settings =
      options || {};


    const cardsContainer =
      settings.cardsContainer ||
      document.querySelector(
        '[data-transport-cards]'
      );


    const quickAccessContainer =
      settings.quickAccessContainer ||
      document.querySelector(
        '[data-transport-quick-access]'
      );


    const modal =
      settings.modal ||
      document.querySelector(
        '[data-transport-modal]'
      );


    const kicker =
      settings.kicker ||
      document.querySelector(
        '[data-transport-modal-kicker]'
      );


    const title =
      settings.title ||
      document.querySelector(
        '[data-transport-modal-title]'
      );


    const body =
      settings.body ||
      document.querySelector(
        '[data-transport-modal-body]'
      );


    renderCards(
      cardsContainer
    );


    renderQuickAccess(
      quickAccessContainer
    );


    validateModules();


    document.addEventListener(
      'click',
      function (event) {

        const cardButton =
          event.target.closest(
            '[data-transport-card]'
          );


        if (cardButton) {

          const cardId =
            cardButton.getAttribute(
              'data-transport-card'
            );


          openModule(
            cardId,
            {
              modal: modal,
              kicker: kicker,
              title: title,
              body: body
            }
          );


          return;

        }


        const closeButton =
          event.target.closest(
            '[data-close-transport-modal], #closeTransportModal'
          );


        if (closeButton) {

          closeModule(
            modal
          );


          return;

        }


        if (
          modal &&
          event.target === modal &&
          modal.classList.contains(
            'is-open'
          )
        ) {

          closeModule(
            modal
          );

        }

      }
    );


    document.addEventListener(
      'keydown',
      function (event) {

        if (
          event.key === 'Escape' &&
          modal &&
          modal.classList.contains(
            'is-open'
          )
        ) {

          closeModule(
            modal
          );

        }

      }
    );

  }


  // ==========================================================
  // API PÚBLICA
  // ==========================================================

  window.MEXICO_CITY_TRANSPORT =
    MEXICO_CITY_TRANSPORT;


  window.MEXICO_CITY_TRANSPORT_API = {

    getModule:
      getModule,

    getCard:
      getCard,

    getCardModule:
      getCardModule,

    getAvailableCards:
      getAvailableCards,

    validateModules:
      validateModules,

    renderCards:
      renderCards,

    renderQuickAccess:
      renderQuickAccess,

    openModule:
      openModule,

    closeModule:
      closeModule,

    initialize:
      initializeTransportPage

  };


  // ==========================================================
  // EVENTO DE PRONTIDÃO
  // ==========================================================

  document.dispatchEvent(

    new CustomEvent(
      'mexicoCityTransportReady',
      {

        detail: {

          city:
            MEXICO_CITY_TRANSPORT,

          api:
            window.MEXICO_CITY_TRANSPORT_API

        }

      }
    )

  );

})();
