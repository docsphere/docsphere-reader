export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      {
        path: '',
        components: {
          toolbar: () => import('pages/toolbar'),
          default: () => import('pages/index')
        }
      },
      {
        path: '/settings',
        components: {
          toolbar: () => import('pages/{settings}/toolbar'),
          default: () => import('pages/{settings}')
        }
      },
      {
        path: '/changelog',
        components: {
          toolbar: () => import('pages/{changelog}/toolbar'),
          default: () => import('pages/{changelog}')
        }
      }
    ]
  },

  {
    path: '/starting/intro',
    component: () => import('layouts/default'),
    children: [
      {
        path: '',
        components: {
          toolbar: () => import('pages/0-starting/1-intro/toolbar'),
          default: () => import('pages/0-starting/1-intro/')
        }
      }
    ]
  },

  {
    path: '/style/color',
    component: () => import('layouts/showcase'),
    children: [
      {
        path: '',
        components: {
          toolbar: () => import('pages/1-style/1-color/toolbar'),
          default: () => import('pages/1-style/1-color/'),
          tools: () => import('pages/1-style/1-color/tools')
        }
      },

      {
        path: 'showcase',
        components: {
          toolbar: () => import('pages/1-style/1-color/showcase/toolbar'),
          default: () => import('pages/1-style/1-color/showcase/'),
          tools: () => import('pages/1-style/1-color/tools')
        }
      },
      {
        path: 'showcase/code',
        components: {
          toolbar: () => import('pages/1-style/1-color/showcase/code/toolbar'),
          default: () => import('pages/1-style/1-color/showcase/code/'),
          tools: () => import('pages/1-style/1-color/tools')
        }
      }
    ]
  },
  {
    path: '/style/typography',
    component: () => import('layouts/showcase'),
    children: [
      {
        path: '',
        components: {
          toolbar: () => import('pages/1-style/2-typography/toolbar'),
          default: () => import('pages/1-style/2-typography/'),
          tools: () => import('pages/1-style/2-typography/tools')
        }
      },

      {
        path: 'showcase',
        components: {
          toolbar: () => import('pages/1-style/2-typography/showcase/toolbar'),
          default: () => import('pages/1-style/2-typography/showcase/'),
          tools: () => import('pages/1-style/2-typography/tools')
        }
      },
      {
        path: 'showcase/code',
        components: {
          toolbar: () => import('pages/1-style/2-typography/showcase/code/toolbar'),
          default: () => import('pages/1-style/2-typography/showcase/code/'),
          tools: () => import('pages/1-style/2-typography/tools')
        }
      }
    ]
  },
  {
    path: '/style/ripples',
    component: () => import('layouts/showcase'),
    children: [
      {
        path: '',
        components: {
          toolbar: () => import('pages/1-style/3-ripples/toolbar'),
          default: () => import('pages/1-style/3-ripples'),
          tools: () => import('pages/1-style/3-ripples/tools')
        }
      },

      {
        path: 'showcase',
        components: {
          toolbar: () => import('pages/1-style/3-ripples/showcase/toolbar'),
          default: () => import('pages/1-style/3-ripples/showcase/'),
          tools: () => import('pages/1-style/3-ripples/tools')
        }
      },
      {
        path: 'showcase/code',
        components: {
          toolbar: () => import('pages/1-style/3-ripples/showcase/code/toolbar'),
          default: () => import('pages/1-style/3-ripples/showcase/code/'),
          tools: () => import('pages/1-style/3-ripples/tools')
        }
      }
    ]
  },

  {
    path: '*',
    component: () => import('pages/404')
  }
]
