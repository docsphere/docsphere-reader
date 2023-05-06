
import pages from 'pages'

const pagesRoutes = []
for (const [path, page] of Object.entries(pages)) {
  const config = page.config

  if (config === null) {
    continue
  }

  const children = [
    {
      path: 'overview',
      component: () => import('components/DSubpage'),
      meta: {
        status: config.status
      }
    }
  ]
  if (config?.subpages?.showcase === true) {
    children.push({
      path: 'showcase',
      component: () => import('components/DSubpage'),
      meta: {
        status: config.status
      }
    })
  }
  if (config?.subpages?.vs === true) {
    children.push({
      path: 'vs',
      component: () => import('components/DSubpage'),
      meta: {
        status: config.status
      }
    })
  }

  pagesRoutes.push({
    path,
    component: () => import('layouts/DefaultLayout'),
    meta: config,
    children
  })
}

const routes = [
  ...pagesRoutes,

  {
    path: '/',
    component: () => import('layouts/DefaultLayout'),
    meta: {
      layouts: {
        footer: false,
        submenu: false
      },
      pages: {}
    },
    children: [
      {
        path: '',
        component: () => import('pages/@/BootPage'),
        meta: {
          icon: 'home',
          menu: 'home'
        }
      },

      {
        path: '/changelog',
        component: () => import('pages/@/ChangelogPage'),
        meta: {
          icon: 'assignment',
          menu: 'changelog'
        }
      },
      {
        path: '/roadmap',
        component: () => import('pages/@/RoadmapPage'),
        meta: {
          icon: 'playlist_add_check_circle',
          menu: 'roadmap'
        }
      },
      {
        path: '/sponsor',
        component: () => import('pages/@/SponsorPage'),
        meta: {
          icon: 'favorite',
          menu: 'sponsor'
        }
      }
    ]
  },

  {
    path: '/(.*)*',
    component: () => import('layouts/SystemLayout'),
    meta: {
      menu: {}
    },
    children: [
      {
        path: '',
        component: () => import('pages/@/404Page')
      }
    ]
  }
]

export default routes
