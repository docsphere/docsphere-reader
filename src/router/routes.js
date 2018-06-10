export default [
  {
    path: '/starting/intro',
    component: () => import('layouts/default'),
    meta: {
      dir: '0-starting/1-intro',
      namespace: 'starting.intro',
      icon: 'announcement',

      layouts: {
        footer: true,
        submenu: true
      },
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/0-starting/1-intro/'),
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
      namespace: 'style.color',
      icon: 'style',

      layouts: {
        footer: true,
        submenu: true
      },
      pages: {
        showcase: true
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/1-style/1-color/'),
        meta: {
          status: 6,
          github: '1-style/1-color/index.vue'
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/1-style/1-color/showcase/'),
        meta: {
          status: 9,
          github: '1-style/1-color/showcase/index.vue'
        }
      },
      {
        path: 'showcase/code',
        component: () => import('pages/1-style/1-color/showcase/code/'),
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
      namespace: 'style.typography',
      icon: 'format_bold',

      layouts: {
        footer: true,
        submenu: true
      },
      pages: {
        showcase: true
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/1-style/2-typography/'),
        meta: {
          status: 1,
          github: '1-style/2-typography/index.vue'
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/1-style/2-typography/showcase/'),
        meta: {
          status: 9,
          github: '1-style/2-typography/showcase/index.vue'
        }
      },
      {
        path: 'showcase/code',
        component: () => import('pages/1-style/2-typography/showcase/code/'),
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
      namespace: 'style.ripples',
      icon: 'blur_on',

      layouts: {
        footer: true,
        submenu: true
      },
      pages: {
        showcase: true
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/1-style/3-ripples'),
        meta: {
          status: 1,
          github: '1-style/3-ripples/index.vue'
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/1-style/3-ripples/showcase/'),
        meta: {
          status: 9,
          github: '1-style/3-ripples/showcase/index.vue'
        }
      },
      {
        path: 'showcase/code',
        component: () => import('pages/1-style/3-ripples/showcase/code/'),
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
      layouts: {
        footer: false,
        submenu: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/index'),
        meta: {
          icon: 'home',
          menu: 'home'
        }
      },
      {
        path: '/settings',
        component: () => import('pages/{settings}'),
        meta: {
          icon: 'settings',
          menu: 'settings'
        }
      },
      {
        path: '/changelog',
        component: () => import('pages/{changelog}'),
        meta: {
          icon: 'assignment',
          menu: 'changelog'
        }
      },
      {
        path: '*',
        component: () => import('pages/404')
      }
    ]
  }
]
