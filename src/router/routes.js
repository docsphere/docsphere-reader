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
    path: '/style/color',
    component: () => import('layouts/default'),
    children: [
      {
        path: '',
        components: {
          toolbar: () => import('pages/2-style/color/toolbar'),
          default: () => import('pages/2-style/color/index'),
          tools: () => import('pages/2-style/color/tools')
        }
      },

      {
        path: 'play',
        components: {
          toolbar: () => import('pages/2-style/color/toolbar'),
          default: () => import('pages/2-style/color/play/index'),
          tools: () => import('pages/2-style/color/tools')
        }
      },
      {
        path: 'code',
        components: {
          toolbar: () => import('pages/2-style/color/toolbar'),
          default: () => import('pages/2-style/color/code/index'),
          tools: () => import('pages/2-style/color/tools')
        }
      }
    ]
  },
  {
    path: '/style/typography',
    component: () => import('layouts/default'),
    children: [
      {
        path: '',
        components: {
          toolbar: () => import('pages/2-style/typography/toolbar'),
          default: () => import('pages/2-style/typography/index'),
          tools: () => import('pages/2-style/typography/tools')
        }
      },

      {
        path: 'play',
        components: {
          toolbar: () => import('pages/2-style/typography/toolbar'),
          default: () => import('pages/2-style/typography/play/index'),
          tools: () => import('pages/2-style/typography/tools')
        }
      },
      {
        path: 'code',
        components: {
          toolbar: () => import('pages/2-style/typography/toolbar'),
          default: () => import('pages/2-style/typography/code/index'),
          tools: () => import('pages/2-style/typography/tools')
        }
      }
    ]
  },
  {
    path: '/style/ripples',
    component: () => import('layouts/default'),
    children: [
      {
        path: '',
        components: {
          toolbar: () => import('pages/2-style/ripples/toolbar'),
          default: () => import('pages/2-style/ripples/index'),
          tools: () => import('pages/2-style/ripples/tools')
        }
      },

      {
        path: 'play',
        components: {
          toolbar: () => import('pages/2-style/ripples/toolbar'),
          default: () => import('pages/2-style/ripples/play/index'),
          tools: () => import('pages/2-style/ripples/tools')
        }
      },
      {
        path: 'code',
        components: {
          toolbar: () => import('pages/2-style/ripples/toolbar'),
          default: () => import('pages/2-style/ripples/code/index'),
          tools: () => import('pages/2-style/ripples/tools')
        }
      }
    ]
  },

  {
    path: '*',
    component: () => import('pages/404')
  }
]
