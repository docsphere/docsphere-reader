export default [
  {
    path: '/starting/intro',
    component: () => import('layouts/default'),
    meta: {
      dir: '0-starting/1-intro',
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
          status: 6
        }
      }
    ]
  },

  {
    path: '/style/color',
    component: () => import('layouts/default'),
    meta: {
      dir: '1-style/1-color',
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
          status: 6
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/1-style/1-color/showcase/'),
        meta: {
          status: 9
        }
      },
      {
        path: 'showcase/code',
        component: () => import('pages/1-style/1-color/showcase/code/'),
        meta: {
          status: 9
        }
      }
    ]
  },
  {
    path: '/style/typography',
    component: () => import('layouts/default'),
    meta: {
      dir: '1-style/2-typography',
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
          status: 1
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/1-style/2-typography/showcase/'),
        meta: {
          status: 9
        }
      },
      {
        path: 'showcase/code',
        component: () => import('pages/1-style/2-typography/showcase/code/'),
        meta: {
          status: 9
        }
      }
    ]
  },
  {
    path: '/style/ripples',
    component: () => import('layouts/default'),
    meta: {
      dir: '1-style/3-ripples',
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
          status: 1
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/1-style/3-ripples/showcase/'),
        meta: {
          status: 9
        }
      },
      {
        path: 'showcase/code',
        component: () => import('pages/1-style/3-ripples/showcase/code/'),
        meta: {
          status: 9
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
