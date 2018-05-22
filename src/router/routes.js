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
    path: '*',
    component: () => import('pages/404')
  }
]
