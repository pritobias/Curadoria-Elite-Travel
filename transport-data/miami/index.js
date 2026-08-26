(function () {
  'use strict';

  window.MIAMI_TRANSPORT_MODULES =
    window.MIAMI_TRANSPORT_MODULES || {};


  const MIAMI_TRANSPORT = {

    id: 'miami',
    slug: 'miami',

    city: 'Miami',
    state: 'Florida',
    country: 'Estados Unidos',

    page: {

      eyebrow: 'Malha de transportes',

      title: 'Miami',

      description:
        'Entenda Metrorail, Metromover, Metrobus, Brightline, Tri-Rail e conexões aeroportuárias para circular por Miami com mais clareza e autonomia.',

      updatedAt: 'Agosto de 2026'

    },


    map: {

      image:
        '/images/mapa-transporte-miami.jpg',

      officialPage:
        'https://www.miamidade.gov/global/transportation/home.page',

      alt:
        'Mapa da rede de transporte de Miami'

    },


    cards: [

      {
        id: 'network',
        module: 'network',
        icon: '⌘',
        eyebrow: 'Visão geral',
        title: 'Rede de Transporte',
        description:
          'Entenda Metrorail, Metromover, Metrobus, Brightline, Tri-Rail e as principais conexões da região.'
      },


      {
        id: 'fares',
        module: 'fares',
        icon: '$',
        eyebrow: 'Valores e integrações',
        title: 'Tarifas e integração',
        description:
          'Veja tarifas, transferências, passes e diferenças entre os principais sistemas.'
      },


      {
        id: 'card',
        module: 'card',
        icon: '▣',
        eyebrow: 'Bilhetes e pagamento',
        title: 'Como pagar',
        description:
          'Entenda EASY Card, EASY Ticket, pagamento por aproximação e os meios usados nos diferentes sistemas.'
      },


      {
        id: 'bus',
        module: 'bus',
        icon: '🚌',
        eyebrow: 'Rede de ônibus',
        title: 'Como usar os ônibus',
        description:
          'Aprenda a identificar linhas, rotas, sentidos, paradas e conexões com Metrorail e Metromover.'
      },


      {
        id: 'planner',
        module: 'planner',
        icon: '⌖',
        eyebrow: 'Organização do percurso',
        title: 'Planeje o trajeto',
        description:
          'Compare Metrorail, Metromover, Metrobus, Brightline, Tri-Rail e conexões com os aeroportos.'
      }

    ],


    quickAccess: [

      {
        label: 'Transporte público · Miami-Dade',
        url: 'https://www.miamidade.gov/global/transportation/home.page'
      },


      {
        label: 'Metrorail e Metromover',
        url: 'https://www.miamidade.gov/global/transportation/metrorail.page'
      },


      {
        label: 'Metrobus',
        url: 'https://www.miamidade.gov/global/transportation/metrobus.page'
      },


      {
        label: 'EASY Card',
        url: 'https://www.miamidade.gov/global/service.page?Mduid_service=ser1519766209086486'
      },


      {
        label: 'Brightline',
        url: 'https://www.gobrightline.com/'
      },


      {
        label: 'Tri-Rail',
        url: 'https://www.tri-rail.com/'
      }

    ],


    emergency: {

      title: 'Canais de atendimento',

      items: [

        {
          label: 'Miami-Dade Transit',
          value: '311',
          url: 'tel:311'
        },


        {
          label: 'Outside Miami-Dade',
          value: '305-468-5900',
          url: 'tel:3054685900'
        }

      ]

    }

  };


  // ==========================================================
  // MÓDULOS
  // ==========================================================

  function getModule(moduleName) {

    return (
      window.MIAMI_TRANSPORT_MODULES[moduleName] ||
      null
    );

  }


  function getCard(cardId) {

    return (
      MIAMI_TRANSPORT.cards.find(
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

    return MIAMI_TRANSPORT.cards.filter(
      function (card) {

        return Boolean(
          getModule(card.module)
        );

      }
    );

  }


  function validateModules() {

    const missingModules =
      MIAMI_TRANSPORT.cards

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
        '[Transportes · Miami] Módulos ainda não carregados:',
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
      MIAMI_TRANSPORT.cards

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
      MIAMI_TRANSPORT.quickAccess

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
        `[Transportes · Miami] Não foi possível abrir o módulo "${cardId}".`
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
        '[Transportes · Miami] Elementos do modal não foram encontrados.'
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

  window.MIAMI_TRANSPORT =
    MIAMI_TRANSPORT;


  window.MIAMI_TRANSPORT_API = {

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
      'miamiTransportReady',
      {

        detail: {

          city:
            MIAMI_TRANSPORT,

          api:
            window.MIAMI_TRANSPORT_API

        }

      }
    )

  );

})();
