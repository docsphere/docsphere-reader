export default {
  // Sections
  _: {
    home: {
      texts: [
        'Uma <b>documentação alternativa</b> do ',
        'Criado por'
      ]
    },

    starting: {
      _: 'O Framework',
      introduction: { _: 'Introdução ao Quasar' },

      contribution: { _: 'Guia de contribuição' },
      roadmap: { _: 'Roadmap' },
      upgrade: { _: 'Guia de atualização' },

      installation: {
        _: 'Instalação',
        umd: { _: 'UMD / Standalone' },
        quasar: { _: 'Quasar Starter Kit' },
        cli: { _: 'Quasar CLI' }
      },
      modes: {
        _: 'Modes',
        spa: { _: 'SPA' },
        pwa: { _: 'PWA' },
        ssr: { _: 'SSR' }
      },
      wrappers: {
        _: 'Wrappers',
        cordova: { _: 'Cordova' },
        electron: { _: 'Electron' }
      },
      resources: {
        _: 'Recursos',
        intro: {
          _: 'Introdução para Iniciantes'
        },
        platform: {
          _: 'Detecção de Plataforma'
        },
        events: {
          _: 'Global Event Bus'
        },
        injections: {
          _: 'Vue Prototype Injections'
        },
        i18n: {
          _: 'Internacionalização (i18n)'
        },
        rtl: {
          _: 'Suporte RTL'
        }
      },
      misc: {
        _: 'Misc.'
      }
    },

    style: {
      _: 'Estilo',
      color: {
        _: 'Paleta de cores',
        overview: {
          _updated_: '2018-06-14T15:34:07.984Z',

          headers: [
            'Cores principais',
            'Lista de cores',
            'Usando como classes CSS',
            'Usando Variáveis Stylus',
            'Adicionando suas próprias cores'
          ],
          texts: [
            'Quasar Framework oferece uma ampla seleção de cores "fora da caixa". Você pode usar as cores como variáveis Stylus em seu código CSS ou diretamente como classes CSS em seus templates HTML.',
            'Esta página é muito útil depois de ler ',
            ' Você também pode querer verificar ',
            'Pode haver três cores principais usadas em todo o seu aplicativo, chamadas ',
            'A maioria das cores que o Quasar Components usa estão fortemente ligadas a essas três cores que você pode alterar. A escolha dessas cores é o primeiro passo que se deve adotar ao diferenciar o design de seu próprio aplicativo. Você perceberá imediatamente ao alterar seus valores padrão que os Componentes Quasar seguem essas cores como uma diretriz.',
            'Esta é a lista de cores fornecidas imediatamente. Use-os como classes CSS (em templates HTML) ou como variáveis Stylus (em tags ',
            ') dentro do aplicativo em arquivos ',
            'Nas seguintes cores existem variações disponíveis: ',
            'Exemplo de variação de cor: ',
            ' Veja a demonstração para ter uma boa ideia das variações. As variações entre 11 e 14 são cores acentuadas.',
            'Use os prefixos ', ' como nomes de classes para alterar a cor do texto ou a cor do plano de fundo.',
            'Nos arquivos ',
            ' do seu aplicativo, você pode usar as cores ',
            ' e assim por diante.',
            'Se você quiser usar cores próprias para componentes, digamos que estamos adicionando uma cor chamada "brand", tudo o que você precisa fazer é adicionar o seguinte CSS ao seu aplicativo:',
            'Agora podemos usar essa cor para os componentes do Quasar:'
          ],
          links: [
            ['https://quasar-framework.org/guide/quasar-theming.html', 'Quasar Theming'],
            ['https://quasar-framework.org/components/color-utils.html', 'Color Utils']
          ]
        },
        showcase: {
          _updated_: '2018-06-18T18:22:35.095Z',
          _subsections_: '2',

          headers: [
            'Cores principais',
            'Paleta completa'
          ]
        }
      },
      typography: {
        _: 'Tipografia',
        showcase: {
          _updated_: '2018-06-18T23:06:21.765Z',
          _subsections_: '5',

          headers: [
            'Cabeçalhos',
            'Tracejado',
            'Citações',
            'Listas de Definição - Vertical',
            'Listas de Definição - Horizontal'
          ]
        }
      },
      ripples: {
        _: 'Materiais Ripples'
      },
      stylus: {
        _: 'Variáveis Stylus'
      },
      icons: {
        _: 'Ícones'
      },
      addressbar: {
        _: 'Cor da barra de endereço'
      }
    },

    layout: {
      _: 'Layout',
      play: {
        _: 'Play with Layout'
      },
      drawer: {
        _: 'Drawer Panels'
      },
      sticky: {
        _: 'Page Sticky'
      },
      floating: {
        _: 'Floating Action Button'
      },
      flexbox: {
        _: 'Flexbox'
      }
    },

    components: {
      _: 'Componentes',
      buttons: {
        _: 'Botões'
      },
      navigation: {
        _: 'Navegação'
      },
      forms: {
        _: 'Formulários'
      },
      grouping: {
        _: 'Agrupamento'
      },
      popups: {
        _: 'Popups'
      },
      progress: {
        _: 'Progresso'
      },
      media: {
        _: 'Media'
      },
      scrolling: {
        _: 'Rolagem'
      },
      others: {
        _: 'Outros componentes'
      }
    },

    plugins: {
      _: 'Plugins'
    },

    directives: {
      _: 'Diretivas'
    },

    helpers: {
      _: 'Ajudadores',
      shadows: {
        _: 'Sombras'
      }
    },

    animations: {
      _: 'Animações'
    },

    utils: {
      _: 'Utilidades'
    }
  },

  footer: {
    github: {
      start: 'Comece esta página no ',
      complete: 'Complete esta página no ',
      edit: 'Edite esta página no '
    },
    progress: 'Progresso da tradução',
    translations: 'Traduções disponíveis',
    anchor: 'Navegação por âncoras',
    of: 'de'
  },
  submenu: {
    overview: 'Apresentação',
    showcase: 'Mostruário',
    changelog: 'Changelog',
    builder: 'Construtor'
  },
  menu: {
    search: 'Pesquisar',
    home: 'Página inicial',
    settings: 'Configurações',
    changelog: 'Changelog',
    _404: 'Erro 404 - Não encontrado'
  },

  system: {
    support: 'Ajude o Quasar'
  },
  changelog: {},
  settings: {
    general: {
      _: 'Configurações gerais',
      language: { _: 'Idioma' }
    },
    appearance: {
      _: 'Aparência',
      background: { _: 'Cor de fundo' }
    }
  },

  _a: ' e ',
  _o: ' ou ',
  _f: ' arquivos ',
  _s: 'Código Fonte'
}
