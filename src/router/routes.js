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
      }
    ]
  },

  {
    path: '/style',
    component: () => import('layouts/default'),
    children: [
      {
        path: '',
        components: {
          toolbar: () => import('pages/style/01/toolbar'),
          default: () => import('pages/style/01/index'),
          tools: () => import('pages/style/01/tools')
        }
      },
      {
        path: 'play',
        components: {
          toolbar: () => import('pages/style/01/toolbar'),
          default: () => import('pages/style/01/play/index'),
          tools: () => import('pages/style/01/tools')
        }
      },
      {
        path: 'code',
        components: {
          toolbar: () => import('pages/style/01/toolbar'),
          default: () => import('pages/style/01/code/index'),
          tools: () => import('pages/style/01/tools')
        }
      }
    ]
  },

  {
    path: '*',
    component: () => import('pages/404')
  }
]
