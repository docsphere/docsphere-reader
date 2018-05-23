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
          toolbar: () => import('pages/1-style/color/toolbar'),
          default: () => import('pages/1-style/color/'),
          tools: () => import('pages/1-style/color/tools')
        }
      },

      {
        path: 'showcase',
        components: {
          toolbar: () => import('pages/1-style/color/showcase/toolbar'),
          default: () => import('pages/1-style/color/showcase/'),
          tools: () => import('pages/1-style/color/tools')
        }
      },
      {
        path: 'showcase/code',
        components: {
          toolbar: () => import('pages/1-style/color/showcase/code/toolbar'),
          default: () => import('pages/1-style/color/showcase/code/'),
          tools: () => import('pages/1-style/color/tools')
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
          toolbar: () => import('pages/1-style/typography/toolbar'),
          default: () => import('pages/1-style/typography/'),
          tools: () => import('pages/1-style/typography/tools')
        }
      },

      {
        path: 'showcase',
        components: {
          toolbar: () => import('pages/1-style/typography/showcase/toolbar'),
          default: () => import('pages/1-style/typography/showcase/'),
          tools: () => import('pages/1-style/typography/tools')
        }
      },
      {
        path: 'showcase/code',
        components: {
          toolbar: () => import('pages/1-style/typography/showcase/code/toolbar'),
          default: () => import('pages/1-style/typography/showcase/code/'),
          tools: () => import('pages/1-style/typography/tools')
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
          toolbar: () => import('pages/1-style/ripples/toolbar'),
          default: () => import('pages/1-style/ripples'),
          tools: () => import('pages/1-style/ripples/tools')
        }
      },

      {
        path: 'showcase',
        components: {
          toolbar: () => import('pages/1-style/ripples/showcase/toolbar'),
          default: () => import('pages/1-style/ripples/showcase/'),
          tools: () => import('pages/1-style/ripples/tools')
        }
      },
      {
        path: 'showcase/code',
        components: {
          toolbar: () => import('pages/1-style/ripples/showcase/code/toolbar'),
          default: () => import('pages/1-style/ripples/showcase/code/'),
          tools: () => import('pages/1-style/ripples/tools')
        }
      }
    ]
  },

  {
    path: '*',
    component: () => import('pages/404')
  }
]
