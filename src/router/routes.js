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
          toolbar: () => import('pages/settings/toolbar'),
          default: () => import('pages/settings')
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
          toolbar: () => import('pages/design/toolbar'),
          default: () => import('pages/design/index'),
          tools: () => import('pages/design/tools')
        }
      },
      {
        path: 'play',
        components: {
          toolbar: () => import('pages/design/toolbar'),
          default: () => import('pages/design/play/index'),
          tools: () => import('pages/design/tools')
        }
      },
      {
        path: 'code',
        components: {
          toolbar: () => import('pages/design/toolbar'),
          default: () => import('pages/design/code/index'),
          tools: () => import('pages/design/tools')
        }
      }
    ]
  },

  {
    path: '*',
    component: () => import('pages/404')
  }
]
