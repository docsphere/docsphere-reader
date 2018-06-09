export default [
  {
    path: '/starting/intro',
    component: () => import('layouts/default'),
    meta: {
      layout: {
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
          default: () => import('pages/0-starting/1-intro/'),
          footer: () => import('pages/0-starting/1-intro/footer')
        }
      }
    ]
  },

  {
    path: '/style/color',
    component: () => import('layouts/default'),
    meta: {
      layout: {
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
          footer: () => import('pages/1-style/1-color/footer'),
          default: () => import('pages/1-style/1-color/')
        }
      },

      {
        path: 'showcase',
        components: {
          header: () => import('pages/1-style/1-color/showcase/header'),
          footer: () => import('pages/1-style/1-color/showcase/footer'),
          default: () => import('pages/1-style/1-color/showcase/')
        }
      },
      {
        path: 'showcase/code',
        components: {
          header: () => import('pages/1-style/1-color/showcase/code/header'),
          footer: () => import('pages/1-style/1-color//showcase/footer'),
          default: () => import('pages/1-style/1-color/showcase/code/')
        }
      }
    ]
  },
  {
    path: '/style/typography',
    component: () => import('layouts/default'),
    meta: {
      layout: {
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
          footer: () => import('pages/1-style/2-typography/footer'),
          default: () => import('pages/1-style/2-typography/')
        }
      },

      {
        path: 'showcase',
        components: {
          header: () => import('pages/1-style/2-typography/showcase/header'),
          footer: () => import('pages/1-style/2-typography/showcase/footer'),
          default: () => import('pages/1-style/2-typography/showcase/')
        }
      },
      {
        path: 'showcase/code',
        components: {
          header: () => import('pages/1-style/2-typography/showcase/code/header'),
          footer: () => import('pages/1-style/2-typography/showcase/code/footer'),
          default: () => import('pages/1-style/2-typography/showcase/code/')
        }
      }
    ]
  },
  {
    path: '/style/ripples',
    component: () => import('layouts/default'),
    meta: {
      layout: {
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
          footer: () => import('pages/1-style/3-ripples/footer'),
          default: () => import('pages/1-style/3-ripples')
        }
      },

      {
        path: 'showcase',
        components: {
          header: () => import('pages/1-style/3-ripples/showcase/header'),
          footer: () => import('pages/1-style/3-ripples/showcase/footer'),
          default: () => import('pages/1-style/3-ripples/showcase/')
        }
      },
      {
        path: 'showcase/code',
        components: {
          header: () => import('pages/1-style/3-ripples/showcase/code/header'),
          footer: () => import('pages/1-style/3-ripples/showcase/code/footer'),
          default: () => import('pages/1-style/3-ripples/showcase/code/')
        }
      }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/default'),
    meta: {
      layout: {
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
