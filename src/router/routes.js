export default [
  {
    path: '/starting/introduction',
    component: () => import('layouts/default'),
    meta: {
      dir: '0-starting/1-introduction',
      icon: 'grade',
      status: 0,

      menu: {
        header: {
          icon: 'contact_support',
          name: 'starting'
        }
      },
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/0-starting/1-introduction/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/starting/contribution',
    component: () => import('layouts/default'),
    meta: {
      dir: '0-starting/2-contribution',
      icon: 'group',
      status: 0,

      menu: {},
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/0-starting/2-contribution/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/starting/roadmap',
    component: () => import('layouts/default'),
    meta: {
      dir: '0-starting/3-roadmap',
      icon: 'directions',
      status: 0,

      menu: {},
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/0-starting/3-roadmap/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/starting/upgrade',
    component: () => import('layouts/default'),
    meta: {
      dir: '0-starting/4-upgrade',
      icon: 'system_update',
      status: 0,

      menu: {},
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/0-starting/4-upgrade/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/starting/installation_',
    component: () => import('layouts/default'),
    meta: {
      dir: '0-starting/5-installation',
      icon: 'get_app',
      status: 0,

      menu: {},
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/0-starting/5-installation/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/starting/modes_',
    component: () => import('layouts/default'),
    meta: {
      dir: '0-starting/6-modes',
      icon: 'library_add',
      status: 0,

      menu: {},
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/0-starting/6-modes/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/starting/wrappers_',
    component: () => import('layouts/default'),
    meta: {
      dir: '0-starting/7-wrappers',
      icon: 'new_releases',
      status: 0,

      menu: {
        separator: 'subpage'
      },
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/0-starting/7-wrappers/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/starting/installation/umd',
    component: () => import('layouts/default'),
    meta: {
      dir: '0-starting/5-installation/1-umd',
      icon: 'settings_input_hdmi',
      status: 0,

      menu: {
        sub: 'starting.installation'
      },
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/0-starting/5-installation/1-umd/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/starting/installation/quasar',
    component: () => import('layouts/default'),
    meta: {
      dir: '0-starting/5-installation/2-quasar',
      icon: 'important_devices',
      status: 0,

      menu: {},
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/0-starting/5-installation/2-quasar/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/starting/installation/cli',
    component: () => import('layouts/default'),
    meta: {
      dir: '0-starting/5-installation/3-cli',
      icon: 'queue_play_next',
      status: 0,

      menu: {},
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/0-starting/5-installation/3-cli/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/starting/modes/spa',
    component: () => import('layouts/default'),
    meta: {
      dir: '0-starting/6-modes/1-spa',
      icon: 'open_in_browser',
      status: 0,

      menu: {
        sub: 'starting.modes'
      },
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/0-starting/6-modes/1-spa/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/starting/modes/pwa',
    component: () => import('layouts/default'),
    meta: {
      dir: '0-starting/6-modes/2-pwa',
      icon: 'devices_other',
      status: 0,

      menu: {},
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/0-starting/6-modes/2-pwa/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/starting/modes/ssr',
    component: () => import('layouts/default'),
    meta: {
      dir: '0-starting/6-modes/3-ssr',
      icon: 'dns',
      status: 0,

      menu: {},
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/0-starting/6-modes/3-ssr/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/starting/wrappers/cordova',
    component: () => import('layouts/default'),
    meta: {
      dir: '0-starting/7-wrappers/1-cordova',
      icon: 'stay_current_portrait',
      status: 0,

      menu: {
        sub: 'starting.wrappers'
      },
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/0-starting/7-wrappers/1-cordova/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/starting/wrappers/electron',
    component: () => import('layouts/default'),
    meta: {
      dir: '0-starting/7-wrappers/2-electron',
      icon: 'desktop_windows',
      status: 0,

      menu: {
        separator: 'subpage'
      },
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/0-starting/7-wrappers/2-electron/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/starting/resources/intro',
    component: () => import('layouts/default'),
    meta: {
      dir: '0-starting/1-intro/8-resources',
      icon: 'announcement',
      status: 6,

      menu: {
        sub: 'starting.resources'
      },
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/0-starting/8-resources/1-intro/'),
        meta: {
          status: 6
        }
      }
    ]
  },
  {
    path: '/starting/resources/platform',
    component: () => import('layouts/default'),
    meta: {
      dir: '0-starting/2-platform/8-resources',
      icon: 'phonelink',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/0-starting/8-resources/2-platform/'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/0-starting/8-resources/2-platform/showcase'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/starting/resources/events',
    component: () => import('layouts/default'),
    meta: {
      dir: '0-starting/3-events/8-resources',
      icon: 'event',

      menu: {},
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/0-starting/8-resources/3-events/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/starting/resources/injections',
    component: () => import('layouts/default'),
    meta: {
      dir: '0-starting/4-injections/8-resources',
      icon: 'vertical_align_bottom',

      menu: {},
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/0-starting/8-resources/4-injections/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/starting/resources/i18n',
    component: () => import('layouts/default'),
    meta: {
      dir: '0-starting/5-i18n/8-resources',
      icon: 'language',

      menu: {},
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/0-starting/8-resources/5-i18n/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/starting/resources/rtl',
    component: () => import('layouts/default'),
    meta: {
      dir: '0-starting/6-rtl/8-resources',
      icon: 'format_list_numbered_rtl',

      menu: {
        separator: 'page'
      },
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/0-starting/8-resources/6-rtl/'),
        meta: {
          status: 0
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
      status: 6,

      menu: {
        header: {
          icon: 'color_lens',
          name: 'style'
        }
      },
      layouts: {},
      pages: {}
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
      }
    ]
  },
  {
    path: '/style/typography',
    component: () => import('layouts/default'),
    meta: {
      dir: '1-style/2-typography',
      icon: 'format_bold',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/1-style/2-typography/'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/1-style/2-typography/showcase/'),
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

      menu: {
        separator: true
      },
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/1-style/3-ripples'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/1-style/3-ripples/showcase/'),
        meta: {
          status: 9
        }
      }
    ]
  },
  {
    path: '/style/stylus',
    component: () => import('layouts/default'),
    meta: {
      dir: '1-style/4-stylus',
      icon: 'border_style',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/1-style/4-stylus'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/1-style/4-stylus/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/style/icons',
    component: () => import('layouts/default'),
    meta: {
      dir: '1-style/5-icons',
      icon: 'insert_emoticon',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/1-style/5-icons'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/1-style/5-icons/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/style/addressbar',
    component: () => import('layouts/default'),
    meta: {
      dir: '1-style/6-addressbar',
      icon: 'space_bar',

      menu: {
        separator: 'page'
      },
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/1-style/6-addressbar'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/1-style/6-addressbar/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },

  {
    path: '/layout/play',
    component: () => import('layouts/default'),
    meta: {
      dir: '2-layout/1-play',
      icon: 'play_circle_outline',

      menu: {
        header: {
          icon: 'web',
          name: 'layout'
        }
      },
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/2-layout/1-play'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/2-layout/1-play/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/layout/drawer',
    component: () => import('layouts/default'),
    meta: {
      dir: '2-layout/2-drawer',
      icon: 'view_array',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/2-layout/2-drawer'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/2-layout/2-drawer/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/layout/sticky',
    component: () => import('layouts/default'),
    meta: {
      dir: '2-layout/3-sticky',
      icon: 'pin_drop',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/2-layout/3-sticky'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/2-layout/3-sticky/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/layout/floating',
    component: () => import('layouts/default'),
    meta: {
      dir: '2-layout/4-floating',
      icon: 'play_for_work',

      menu: {
        separator: true
      },
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/2-layout/4-floating'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/2-layout/4-floating/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/layout/flexbox',
    component: () => import('layouts/default'),
    meta: {
      dir: '2-layout/5-flexbox',
      icon: 'web',

      menu: {
        separator: 'page'
      },
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/2-layout/5-flexbox'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/2-layout/5-flexbox/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },

  {
    path: '/components/buttons/standard',
    component: () => import('layouts/default'),
    meta: {
      dir: '3-components/1-buttons/1-standard',
      icon: 'panorama_wide_angle',

      menu: {
        header: {
          icon: 'device_hub',
          name: 'components'
        },
        sub: 'components.buttons'
      },
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/1-buttons/1-standard'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/1-buttons/1-standard/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/buttons/groups',
    component: () => import('layouts/default'),
    meta: {
      dir: '3-components/1-buttons/2-groups',
      icon: 'group',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/1-buttons/2-groups'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/1-buttons/2-groups/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/buttons/dropdown',
    component: () => import('layouts/default'),
    meta: {
      dir: '3-components/1-buttons/3-dropdown',
      icon: 'details',

      menu: {
        separator: 'subpage'
      },
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/1-buttons/3-dropdown'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/1-buttons/3-dropdown/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },

  {
    path: '/components/navigation/toolbar',
    component: () => import('layouts/default'),
    meta: {
      dir: '3-components/2-navigation/1-toolbar',
      icon: 'view_day',

      menu: {
        sub: 'components.navigation'
      },
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/2-navigation/1-toolbar'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/2-navigation/1-toolbar/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/navigation/tabs',
    component: () => import('layouts/default'),
    meta: {
      dir: '3-components/2-navigation/2-tabs',
      icon: 'tab',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/2-navigation/2-tabs'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/2-navigation/2-tabs/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/navigation/pull',
    component: () => import('layouts/default'),
    meta: {
      dir: '3-components/2-navigation/3-pull',
      icon: 'vertical_align_center',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/2-navigation/3-pull'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/2-navigation/3-pull/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/navigation/context',
    component: () => import('layouts/default'),
    meta: {
      dir: '3-components/2-navigation/4-context',
      icon: 'content_paste',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/2-navigation/4-context'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/2-navigation/4-context/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/navigation/breadcrumbs',
    component: () => import('layouts/default'),
    meta: {
      dir: '3-components/2-navigation/5-breadcrumbs',
      icon: 'skip_next',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/2-navigation/5-breadcrumbs'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/2-navigation/5-breadcrumbs/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/navigation/pagination',
    component: () => import('layouts/default'),
    meta: {
      dir: '3-components/2-navigation/6-pagination',
      icon: 'linear_scale',

      menu: {
        separator: 'subpage'
      },
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/2-navigation/6-pagination'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/2-navigation/6-pagination/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },

  {
    path: '/components/forms/fields',
    component: () => import('layouts/default'),
    meta: {
      dir: '3-components/3-forms/1-fields',
      icon: 'text_fields',

      menu: {
        sub: 'components.forms'
      },
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/3-forms/1-fields'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/3-forms/1-fields/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/forms/input',
    component: () => import('layouts/default'),
    meta: {
      icon: 'text_format',
      dir: '3-components/3-forms/2-input',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/3-forms/2-input'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/3-forms/2-input/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/forms/chips',
    component: () => import('layouts/default'),
    meta: {
      icon: 'dns',
      dir: '3-components/3-forms/3-chips',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/3-forms/3-chips'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/3-forms/3-chips/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/forms/color',
    component: () => import('layouts/default'),
    meta: {
      icon: 'brush',
      dir: '3-components/3-forms/4-color',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/3-forms/4-color'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/3-forms/4-color/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/forms/autocomplete',
    component: () => import('layouts/default'),
    meta: {
      icon: 'more_horiz',
      dir: '3-components/3-forms/5-autocomplete',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/3-forms/5-autocomplete'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/3-forms/5-autocomplete/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/forms/editor',
    component: () => import('layouts/default'),
    meta: {
      icon: 'mode_edit',
      dir: '3-components/3-forms/6-editor',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/3-forms/6-editor'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/3-forms/6-editor/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/forms/search',
    component: () => import('layouts/default'),
    meta: {
      icon: 'search',
      dir: '3-components/3-forms/7-search',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/3-forms/7-search'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/3-forms/7-search/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/forms/slider',
    component: () => import('layouts/default'),
    meta: {
      icon: 'tune',
      dir: '3-components/3-forms/8-slider',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/3-forms/8-slider'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/3-forms/8-slider/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/forms/range',
    component: () => import('layouts/default'),
    meta: {
      icon: 'linear_scale',
      dir: '3-components/3-forms/9-range',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/3-forms/9-range'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/3-forms/9-range/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/forms/checkbox',
    component: () => import('layouts/default'),
    meta: {
      icon: 'check_box',
      dir: '3-components/3-forms/10-checkbox',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/3-forms/10-checkbox'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/3-forms/10-checkbox/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/forms/toggle',
    component: () => import('layouts/default'),
    meta: {
      icon: 'repeat',
      dir: '3-components/3-forms/11-toggle',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/3-forms/11-toggle'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/3-forms/11-toggle/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/forms/button',
    component: () => import('layouts/default'),
    meta: {
      icon: 'view_compact',
      dir: '3-components/3-forms/12-button',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/3-forms/12-button'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/3-forms/12-button/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/forms/option',
    component: () => import('layouts/default'),
    meta: {
      icon: 'toc',
      dir: '3-components/3-forms/13-option',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/3-forms/13-option'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/3-forms/13-option/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/forms/datetime',
    component: () => import('layouts/default'),
    meta: {
      icon: 'access_time',
      dir: '3-components/3-forms/14-datetime',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/3-forms/14-datetime'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/3-forms/14-datetime/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/forms/select',
    component: () => import('layouts/default'),
    meta: {
      icon: 'event_note',
      dir: '3-components/3-forms/15-select',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/3-forms/15-select'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/3-forms/15-select/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/forms/rating',
    component: () => import('layouts/default'),
    meta: {
      icon: 'star_half',
      dir: '3-components/3-forms/16-rating',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/3-forms/16-rating'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/3-forms/16-rating/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/forms/knob',
    component: () => import('layouts/default'),
    meta: {
      icon: 'timelapse',
      dir: '3-components/3-forms/17-knob',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/3-forms/17-knob'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/3-forms/17-knob/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/forms/uploader',
    component: () => import('layouts/default'),
    meta: {
      icon: 'cloud_upload',
      dir: '3-components/3-forms/18-uploader',

      menu: {
        separator: 'subpage'
      },
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/3-forms/18-uploader'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/3-forms/18-uploader/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },

  {
    path: '/components/grouping/card',
    component: () => import('layouts/default'),
    meta: {
      icon: 'contact_mail',
      dir: '3-components/4-grouping/1-card',

      menu: {
        sub: 'components.grouping'
      },
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/4-grouping/1-card'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/4-grouping/1-card/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/grouping/collapsible',
    component: () => import('layouts/default'),
    meta: {
      icon: 'format_line_spacing',
      dir: '3-components/4-grouping/2-collapsible',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/4-grouping/2-collapsible'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/4-grouping/2-collapsible/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/grouping/table',
    component: () => import('layouts/default'),
    meta: {
      icon: 'border_all',
      dir: '3-components/4-grouping/3-table',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/4-grouping/3-table'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/4-grouping/3-table/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/grouping/list',
    component: () => import('layouts/default'),
    meta: {
      icon: 'list',
      dir: '3-components/4-grouping/4-list',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/4-grouping/4-list'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/4-grouping/4-list/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/grouping/stepper',
    component: () => import('layouts/default'),
    meta: {
      icon: 'directions_run',
      dir: '3-components/4-grouping/5-stepper',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/4-grouping/5-stepper'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/4-grouping/5-stepper/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/grouping/tree',
    component: () => import('layouts/default'),
    meta: {
      icon: 'format_indent_increase',
      dir: '3-components/4-grouping/6-tree',

      menu: {
        separator: 'subpage'
      },
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/4-grouping/6-tree'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/4-grouping/6-tree/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },

  {
    path: '/components/popups/sheet',
    component: () => import('layouts/default'),
    meta: {
      icon: 'assignment',
      dir: '3-components/5-popups/1-sheet',

      menu: {
        sub: 'components.popups'
      },
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/5-popups/1-sheet'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/5-popups/1-sheet/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/popups/dialog',
    component: () => import('layouts/default'),
    meta: {
      icon: 'question_answer',
      dir: '3-components/5-popups/2-dialog',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/5-popups/2-dialog'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/5-popups/2-dialog/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/popups/modal',
    component: () => import('layouts/default'),
    meta: {
      icon: 'settings_overscan',
      dir: '3-components/5-popups/3-modal',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/5-popups/3-modal'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/5-popups/3-modal/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/popups/notify',
    component: () => import('layouts/default'),
    meta: {
      icon: 'warning',
      dir: '3-components/5-popups/4-notify',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/5-popups/4-notify'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/5-popups/4-notify/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/popups/popover',
    component: () => import('layouts/default'),
    meta: {
      icon: 'filter_none',
      dir: '3-components/5-popups/5-popover',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/5-popups/5-popover'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/5-popups/5-popover/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/popups/tooltip',
    component: () => import('layouts/default'),
    meta: {
      icon: 'speaker_notes',
      dir: '3-components/5-popups/6-tooltip',

      menu: {
        separator: 'subpage'
      },
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/5-popups/6-tooltip'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/5-popups/6-tooltip/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },

  {
    path: '/components/progress/ajax',
    component: () => import('layouts/default'),
    meta: {
      icon: 'trending_flat',
      dir: '3-components/6-progress/1-ajax',

      menu: {
        sub: 'components.progress'
      },
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/6-progress/1-ajax'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/6-progress/1-ajax/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/progress/loading',
    component: () => import('layouts/default'),
    meta: {
      icon: 'hourglass_full',
      dir: '3-components/6-progress/2-loading',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/6-progress/2-loading'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/6-progress/2-loading/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/progress/inner',
    component: () => import('layouts/default'),
    meta: {
      icon: 'hourglass_empty',
      dir: '3-components/6-progress/3-inner',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/6-progress/3-inner'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/6-progress/3-inner/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/progress/bar',
    component: () => import('layouts/default'),
    meta: {
      icon: 'sort',
      dir: '3-components/6-progress/4-bar',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/6-progress/4-bar'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/6-progress/4-bar/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/progress/spinner',
    component: () => import('layouts/default'),
    meta: {
      icon: 'refresh',
      dir: '3-components/6-progress/5-spinner',

      menu: {
        separator: 'subpage'
      },
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/6-progress/5-spinner'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/6-progress/5-spinner/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },

  {
    path: '/components/media/carousel',
    component: () => import('layouts/default'),
    meta: {
      icon: 'vibration',
      dir: '3-components/7-media/1-carousel',

      menu: {
        sub: 'components.media'
      },
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/7-media/1-carousel'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/7-media/1-carousel/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/media/parallax',
    component: () => import('layouts/default'),
    meta: {
      icon: 'theaters',
      dir: '3-components/7-media/2-parallax',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/7-media/2-parallax'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/7-media/2-parallax/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/media/video',
    component: () => import('layouts/default'),
    meta: {
      icon: 'movie',
      dir: '3-components/7-media/3-video',

      menu: {
        separator: 'subpage'
      },
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/7-media/3-video'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/7-media/3-video/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },

  {
    path: '/components/scrolling/infinite',
    component: () => import('layouts/default'),
    meta: {
      icon: 'update',
      dir: '3-components/8-scrolling/1-infinite',

      menu: {
        sub: 'components.scrolling'
      },
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/8-scrolling/1-infinite'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/8-scrolling/1-infinite/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/scrolling/area',
    component: () => import('layouts/default'),
    meta: {
      icon: 'aspect_ratio',
      dir: '3-components/8-scrolling/2-area',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/8-scrolling/2-area'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/8-scrolling/2-area/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/scrolling/fire',
    component: () => import('layouts/default'),
    meta: {
      icon: 'low_priority',
      dir: '3-components/8-scrolling/3-fire',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/8-scrolling/3-fire'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/8-scrolling/3-fire/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/scrolling/top',
    component: () => import('layouts/default'),
    meta: {
      icon: 'vertical_align_top',
      dir: '3-components/8-scrolling/4-top',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/8-scrolling/4-top'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/8-scrolling/4-top/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/scrolling/observable',
    component: () => import('layouts/default'),
    meta: {
      icon: 'control_camera',
      dir: '3-components/8-scrolling/5-observable',

      menu: {
        separator: 'subpage'
      },
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/8-scrolling/5-observable'),
        meta: {
          status: 0
        }
      }
    ]
  },

  {
    path: '/components/others/alert',
    component: () => import('layouts/default'),
    meta: {
      icon: 'assignment_late',
      dir: '3-components/9-others/1-alert',

      menu: {
        sub: 'components.others'
      },
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/9-others/1-alert'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/9-others/1-alert/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/others/chip',
    component: () => import('layouts/default'),
    meta: {
      icon: 'loyalty',
      dir: '3-components/9-others/2-chip',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/9-others/2-chip'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/9-others/2-chip/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/others/chat',
    component: () => import('layouts/default'),
    meta: {
      icon: 'chat',
      dir: '3-components/9-others/3-chat',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/9-others/3-chat'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/9-others/3-chat/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/others/timeline',
    component: () => import('layouts/default'),
    meta: {
      icon: 'format_list_bulleted',
      dir: '3-components/9-others/4-timeline',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/9-others/4-timeline'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/9-others/4-timeline/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/others/jumbotron',
    component: () => import('layouts/default'),
    meta: {
      icon: 'description',
      dir: '3-components/9-others/5-jumbotron',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/9-others/5-jumbotron'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/3-components/9-others/5-jumbotron/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/components/others/nossr',
    component: () => import('layouts/default'),
    meta: {
      icon: 'power_off',
      dir: '3-components/9-others/6-nossr',

      menu: {
        separator: 'subpage'
      },
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/3-components/9-others/6-nossr'),
        meta: {
          status: 0
        }
      }
    ]
  },

  {
    path: '/plugins/cookies',
    component: () => import('layouts/default'),
    meta: {
      icon: 'cloud_upload',
      dir: '4-plugins/1-cookies',

      menu: {
        header: {
          icon: 'settings_input_hdmi',
          name: 'plugins'
        }
      },
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/4-plugins/1-cookies'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/plugins/storage',
    component: () => import('layouts/default'),
    meta: {
      icon: 'storage',
      dir: '4-plugins/2-storage',

      menu: {},
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/4-plugins/2-storage'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/plugins/screen',
    component: () => import('layouts/default'),
    meta: {
      icon: 'devices_other',
      dir: '4-plugins/3-screen',

      menu: {},
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/4-plugins/3-screen'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/plugins/fullscreen',
    component: () => import('layouts/default'),
    meta: {
      icon: 'fullscreen',
      dir: '4-plugins/4-fullscreen',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/4-plugins/4-fullscreen'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/4-plugins/4-fullscreen/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/plugins/visibility',
    component: () => import('layouts/default'),
    meta: {
      icon: 'visibility',
      dir: '4-plugins/5-visibility',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/4-plugins/5-visibility'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/4-plugins/5-visibility/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/plugins/meta',
    component: () => import('layouts/default'),
    meta: {
      icon: 'assignment_late',
      dir: '4-plugins/6-meta',

      menu: {
        separator: 'page'
      },
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/4-plugins/6-meta'),
        meta: {
          status: 0
        }
      }
    ]
  },

  {
    path: '/directives/panning',
    component: () => import('layouts/default'),
    meta: {
      icon: 'touch_app',
      dir: '5-directives/1-panning',

      menu: {
        header: {
          icon: 'touch_app',
          name: 'directives'
        }
      },
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/5-directives/1-panning'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/5-directives/1-panning/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/directives/swipe',
    component: () => import('layouts/default'),
    meta: {
      icon: 'touch_app',
      dir: '5-directives/2-swipe',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/5-directives/2-swipe'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/5-directives/2-swipe/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/directives/hold',
    component: () => import('layouts/default'),
    meta: {
      icon: 'touch_app',
      dir: '5-directives/3-hold',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/5-directives/3-hold'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/5-directives/3-hold/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/directives/scroll',
    component: () => import('layouts/default'),
    meta: {
      icon: 'wrap_text',
      dir: '5-directives/4-scroll',

      menu: {
        separator: 'page'
      },
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/5-directives/4-scroll'),
        meta: {
          status: 0
        }
      }
    ]
  },

  {
    path: '/helpers/spacing',
    component: () => import('layouts/default'),
    meta: {
      icon: 'space_bar',
      dir: '6-helpers/1-spacing',

      menu: {
        header: {
          icon: 'local_hospital',
          name: 'helpers'
        }
      },
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/6-helpers/1-spacing'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/helpers/shadows',
    component: () => import('layouts/default'),
    meta: {
      icon: 'layers',
      dir: '6-helpers/2-shadows',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/6-helpers/2-shadows'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/6-helpers/2-shadows/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/helpers/visibility',
    component: () => import('layouts/default'),
    meta: {
      icon: 'visibility_off',
      dir: '6-helpers/3-visibility',

      menu: {},
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/6-helpers/3-visibility'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/helpers/positioning',
    component: () => import('layouts/default'),
    meta: {
      icon: 'line_style',
      dir: '6-helpers/4-positioning',

      menu: {},
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/6-helpers/4-positioning'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/helpers/others',
    component: () => import('layouts/default'),
    meta: {
      icon: 'more_horiz',
      dir: '6-helpers/5-others',

      menu: {
        separator: 'page'
      },
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/6-helpers/5-others'),
        meta: {
          status: 0
        }
      }
    ]
  },

  {
    path: '/animations/transition',
    component: () => import('layouts/default'),
    meta: {
      icon: 'transform',
      dir: '7-animations/1-transition',

      menu: {
        header: {
          icon: 'blur_linear',
          name: 'animations'
        }
      },
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/7-animations/1-transition'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/7-animations/1-transition/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/animations/slide',
    component: () => import('layouts/default'),
    meta: {
      icon: 'swap_vert',
      dir: '7-animations/2-slide',

      menu: {},
      layouts: {},
      pages: {}
    },

    children: [
      {
        path: '',
        component: () => import('pages/7-animations/2-slide'),
        meta: {
          status: 0
        }
      },

      {
        path: 'showcase',
        component: () => import('pages/7-animations/2-slide/showcase/'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/animations/js',
    component: () => import('layouts/default'),
    meta: {
      icon: 'fab fa-js',
      dir: '7-animations/3-js',

      menu: {},
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/7-animations/3-js'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/animations/css',
    component: () => import('layouts/default'),
    meta: {
      icon: 'fab fa-css3-alt',
      dir: '7-animations/4-css',

      menu: {
        separator: 'page'
      },
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/7-animations/4-css'),
        meta: {
          status: 0
        }
      }
    ]
  },

  {
    path: '/utils/date',
    component: () => import('layouts/default'),
    meta: {
      icon: 'date_range',
      dir: '8-utils/1-date',

      menu: {
        header: {
          icon: 'fas fa-wrench',
          name: 'utils'
        }
      },
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/8-utils/1-date'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/utils/color',
    component: () => import('layouts/default'),
    meta: {
      icon: 'format_color_fill',
      dir: '8-utils/2-color',

      menu: {},
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/8-utils/2-color'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/utils/dom',
    component: () => import('layouts/default'),
    meta: {
      icon: 'code',
      dir: '8-utils/3-dom',

      menu: {},
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/8-utils/3-dom'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/utils/formatter',
    component: () => import('layouts/default'),
    meta: {
      icon: 'text_format',
      dir: '8-utils/4-formatter',

      menu: {},
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/8-utils/4-formatter'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/utils/scroll',
    component: () => import('layouts/default'),
    meta: {
      icon: 'import_export',
      dir: '8-utils/5-scroll',

      menu: {},
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/8-utils/5-scroll'),
        meta: {
          status: 0
        }
      }
    ]
  },
  {
    path: '/utils/others',
    component: () => import('layouts/default'),
    meta: {
      icon: 'more_horiz',
      dir: '8-utils/6-others',

      menu: {},
      layouts: {},
      pages: {
        showcase: false
      }
    },

    children: [
      {
        path: '',
        component: () => import('pages/8-utils/6-others'),
        meta: {
          status: 0
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
      },
      pages: {}
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
        path: '/changelog',
        component: () => import('pages/{changelog}'),
        meta: {
          icon: 'assignment',
          menu: 'changelog'
        }
      },
      {
        path: '*',
        component: () => import('pages/404'),
        meta: {
          menu: '_404'
        }
      }
    ]
  }
]
