(function () {
  'use strict';

  window.ORLANDO_TRANSPORT_MODULES =
    window.ORLANDO_TRANSPORT_MODULES || {};


  const ORLANDO_TRANSPORT = {

    id: 'orlando',
    slug: 'orlando',

    city: 'Orlando',
    state: 'Florida',
    country: 'Estados Unidos',

    page: {

      eyebrow: 'Malha de transportes',

      title: 'Orlando',

      description:
        'Entenda LYNX, LYMMO, SunRail, conexões com o aeroporto e os principais serviços de transporte para circular por Orlando e região com mais clareza.',

      updatedAt: 'Agosto de 2026'

    },


    map: {

      image:
        '/images/mapa-transporte-orlando.jpg',

      officialPage:
        'https://www.golynx.com/',

      alt:
        'Mapa da rede de transporte de Orlando'

    },


    cards: [

      {
        id: 'network',
        module: 'network',
        icon: '⌘',
        eyebrow: 'Visão geral',
        title: 'Rede de Transporte',
        description:
          'Entenda LYNX, LYMMO, SunRail e as principais conexões entre Downtown, aeroportos, parques e região metropolitana.'
      },


      {
        id: 'fares',
        module: 'fares',
        icon: '$',
        eyebrow: 'Valores e integrações',
        title: 'Tarifas e integração',
        description:
          'Veja tarifas, passes, transferências e diferenças entre LYNX, SunRail e outros serviços da região.'
      },


      {
        id: 'card',
        module: 'card',
        icon: '▣',
        eyebrow: 'Bilhetes e pagamento',
        title: 'Como pagar',
        description:
          'Entenda cartões, aplicativo, dinheiro, bilhetes do SunRail e os meios aceitos nos diferentes sistemas.'
      },


      {
        id: 'bus',
        module: 'bus',
        icon: '🚌',
        eyebrow: 'Rede de ônibus',
        title: 'Como usar os ônibus',
        description:
          'Aprenda a identificar linhas LYNX, LYMMO, sentidos, paradas e conexões importantes.'
      },


      {
        id: 'planner',
        module: 'planner',
        icon: '⌖',
        eyebrow: 'Organização do percurso',
        title: 'Planeje o trajeto',
        description:
          'Compare LYNX, LYMMO, SunRail, conexões aeroportuárias e deslocamentos para atrações e parques.'
      }

    ],


    quickAccess: [

      {
        label: 'LYNX · transporte público',
        url: 'https://www.golynx.com/'
      },


      {
        label: 'Trip Planner · LYNX',
        url: 'https://www.golynx.com/plan-trip/'
      },


      {
        label: 'LYMMO · Downtown Orlando',
        url: 'https://www.golynx.com/plan-trip/riding-lynx/lymmo/'
      },


      {
        label: 'SunRail',
        url: 'https://sunrail.com/'
      },


      {
        label: 'Orlando International Airport',
        url: 'https://flymco.com/'
      },


      {
        label: 'Orlando Sanford International Airport',
        url: 'https://flysfb.com/'
      }

    ],


    emergency: {

      title: 'Canais de atendimento',

      items: [

        {
          label: 'LYNX Customer Service',
          value: '407-841-5969',
          url: 'tel:4078415969'
        },


        {
          label: 'LYNX Lost & Found',
          value: '407-841-2279',
          url: 'tel:4078412279'
        }

      ]

    }

  };


  // ==========================================================
  // MÓDULOS
  // ==========================================================

  function getModule(moduleName) {

    return (
      window.ORLANDO_TRANSPORT_MODULES[moduleName] ||
      null
    );

  }


  function getCard(cardId) {

    return (
      ORLANDO_TRANSPORT.cards.find(
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

    return ORLANDO_TRANSPORT.cards.filter(
      function (card) {

        return Boolean(
          getModule(card.module)
        );

      }
    );

  }


  function validateModules() {

    const missingModules =
      ORLANDO_TRANSPORT.cards

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
        '[Transportes · Orlando] Módulos ainda não carregados:',
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
      ORLANDO_TRANSPORT.cards

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
      ORLANDO_TRANSPORT.quickAccess

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
        `[Transportes · Orlando] Não foi possível abrir o módulo "${cardId}".`
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
        '[Transportes · Orlando] Elementos do modal não foram encontrados.'
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

  window.ORLANDO_TRANSPORT =
    ORLANDO_TRANSPORT;


  window.ORLANDO_TRANSPORT_API = {

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
      'orlandoTransportReady',
      {

        detail: {

          city:
            ORLANDO_TRANSPORT,

          api:
            window.ORLANDO_TRANSPORT_API

        }

      }
    )

  );

})();
