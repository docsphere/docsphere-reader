export default [
  {
    path: '/starting/intro',
    component: () => import('layouts/default'),
    meta: {
      dir: '0-starting/1-intro',

      layout: {
        footer: true,
        submenu: {
          showcase: false
        }
      }
    },

    children: [
      {
        path: '',
        components: {
          header: () => import('pages/0-starting/1-intro/header'),
          default: () => import('pages/0-starting/1-intro/')
        },
        meta: {
          status: 6,
          github: '0-starting/1-intro/index.vue'
        }
      }
    ]
  },

  {
    path: '/style/color',
    component: () => import('layouts/default'),
    meta: {
      dir: '1-style/1-color',

      layout: {
        footer: true,
        submenu: {
          showcase: true
        }
      }
    },

    children: [
      {
        path: '',
        components: {
          header: () => import('pages/1-style/1-color/header'),
          default: () => import('pages/1-style/1-color/')
        },
        meta: {
          status: 6,
          github: '1-style/1-color/index.vue'
        }
      },

      {
        path: 'showcase',
        components: {
          header: () => import('pages/1-style/1-color/showcase/header'),
          default: () => import('pages/1-style/1-color/showcase/')
        },
        meta: {
          status: 9,
          github: '1-style/1-color/showcase/index.vue'
        }
      },
      {
        path: 'showcase/code',
        components: {
          header: () => import('pages/1-style/1-color/showcase/code/header'),
          default: () => import('pages/1-style/1-color/showcase/code/')
        },
        meta: {
          status: 9,
          github: '1-style/1-color/showcase/code/index.vue'
        }
      }
    ]
  },
  {
    path: '/style/typography',
    component: () => import('layouts/default'),
    meta: {
      dir: '1-style/2-typography',

      layout: {
        footer: true,
        submenu: {
          showcase: true
        }
      }
    },

    children: [
      {
        path: '',
        components: {
          header: () => import('pages/1-style/2-typography/header'),
          default: () => import('pages/1-style/2-typography/')
        },
        meta: {
          status: 1,
          github: '1-style/2-typography/index.vue'
        }
      },

      {
        path: 'showcase',
        components: {
          header: () => import('pages/1-style/2-typography/showcase/header'),
          default: () => import('pages/1-style/2-typography/showcase/')
        },
        meta: {
          status: 9,
          github: '1-style/2-typography/showcase/index.vue'
        }
      },
      {
        path: 'showcase/code',
        components: {
          header: () => import('pages/1-style/2-typography/showcase/code/header'),
          default: () => import('pages/1-style/2-typography/showcase/code/')
        },
        meta: {
          status: 9,
          github: '1-style/2-typography/showcase/code/index.vue'
        }
      }
    ]
  },
  {
    path: '/style/ripples',
    component: () => import('layouts/default'),
    meta: {
      dir: '1-style/3-ripples',

      layout: {
        footer: true,
        submenu: {
          showcase: true
        }
      }
    },

    children: [
      {
        path: '',
        components: {
          header: () => import('pages/1-style/3-ripples/header'),
          default: () => import('pages/1-style/3-ripples')
        },
        meta: {
          status: 1,
          github: '1-style/3-ripples/index.vue'
        }
      },

      {
        path: 'showcase',
        components: {
          header: () => import('pages/1-style/3-ripples/showcase/header'),
          default: () => import('pages/1-style/3-ripples/showcase/')
        },
        meta: {
          status: 9,
          github: '1-style/3-ripples/showcase/index.vue'
        }
      },
      {
        path: 'showcase/code',
        components: {
          header: () => import('pages/1-style/3-ripples/showcase/code/header'),
          default: () => import('pages/1-style/3-ripples/showcase/code/')
        },
        meta: {
          status: 9,
          github: '1-style/3-ripples/showcase/code/index.vue'
        }
      }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/default'),
    meta: {
      layout: {
        footer: false,
        submenu: false
      }
    },

    children: [
      {
        path: '',
        components: {
          header: () => import('pages/header'),
          default: () => import('pages/index')
        }
      },
      {
        path: '/settings',
        components: {
          header: () => import('pages/{settings}/header'),
          default: () => import('pages/{settings}')
        }
      },
      {
        path: '/changelog',
        components: {
          header: () => import('pages/{changelog}/header'),
          default: () => import('pages/{changelog}')
        }
      },
      {
        path: '*',
        component: () => import('pages/404')
      }
    ]
  }
]
