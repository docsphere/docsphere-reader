<template>
  <transition appear enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
    <q-input for="search" v-model="term" @update:model-value="searchTerm" :placeholder="$t('menu.search')" :debounce="200">
      <template v-slot:prepend>
        <q-icon name="search" class="q-ml-sm" />
      </template>
      <template v-slot:append>
        <q-icon v-if="term" name="clear" @click="clearSearchTerm" class="cursor-pointer clear" />
      </template>
    </q-input>
  </transition>

  <q-scroll-area id="menu" class="bg-grey-2">
    <div class="row flex-center bg-white" style="height: 115px;">
      <div class="col-5">
        <img class="q-mr-xs" src="logo.svg" alt="Quasar Logo" width="75" height="75" style="float: right;">
      </div>
      <div class="col-7">
        <div class="text-weight-medium">Quasar v2.x.x</div>
        <div>Documentation++</div>
        <q-btn dense no-caps outline class="q-mt-xs q-pl-sm support" size="sm" :label="$t('system.support')" icon="fa fa-ambulance" @click="openURL('https://github.com/sponsors/rstoenescu')" />
      </div>
    </div>

    <q-separator class="separator list" />
    <div class="row bg-white">
      <div class="col text-center">
        <q-btn-group flat>
          <q-btn icon="forum" size="sm" @click="openURL('http://forum.quasar-framework.org/')" aria-label="Quasar Forum" />
          <q-btn icon="fab fa-github" size="sm" @click="openURL('https://github.com/quasarframework/quasar')" aria-label="Quasar Github" />
          <q-btn icon="fab fa-discord" size="sm" @click="openURL('https://discord.gg/5TDhbDg')" aria-label="Quasar Discord" />
          <q-btn icon="fab fa-twitter" size="sm" @click="openURL('https://twitter.com/quasarframework')" aria-label="Quasar Twitter" />
          <q-btn icon="email" size="sm" @click="openURL('mailto:razvan.stoenescu@gmail.com')" aria-label="Quasar Email" />
        </q-btn-group>
      </div>
    </div>
    <q-separator class="separator list" />

    <q-list no-border link inset-delimiter>
      <q-item to="/" exact>
        <q-item-section side>
          <q-icon name="home"></q-icon>
        </q-item-section>
        <q-item-section>{{ $t('menu.home') }}</q-item-section>
      </q-item>
      <q-item to="/changelog">
        <q-item-section side>
          <q-icon name="assignment"></q-icon>
        </q-item-section>
        <q-item-section>{{ $t('menu.changelog') }}</q-item-section>
      </q-item>
      <q-item to="/donate">
        <q-item-section side>
          <q-icon name="favorite" color="red"></q-icon>
        </q-item-section>
        <q-item-section>{{ $t('menu.donate') }}</q-item-section>
      </q-item>
    </q-list>
    <q-separator class="separator list" />

    <q-list v-if="items !== null && items.constructor === Array && items.length > 0" no-border link inset-delimiter>
      <template v-for="(item, index) in items" :key="index">
        <!-- Custom Separators -->
        <q-item-section v-if="item.meta.menu.header">
          <q-item-label header class="label header">
            <q-icon :name="item.meta.menu.header.icon" size="1.5rem" />
            <span> {{ $t(`_.${item.meta.menu.header.name}._`) }}</span>
          </q-item-label>
        </q-item-section>

        <q-separator v-if="item.meta.menu.header" class="separator partial" />

        <q-item-section v-if="item.meta.menu.subheader">
          <q-item-label header class="label subheader">
            <span> {{ $t(`_.${item.meta.menu.subheader}._`) }}</span>
          </q-item-label>
        </q-item-section>
        <!-- Menu Item -->
        <q-item :to="item.path" v-show="matches[index] || !matches">
          <q-item-section side>
            <q-icon v-if="item.meta.icon" :name="item.meta.icon" />
          </q-item-section>
          <q-item-section>{{ getMenuItemLabel(item, index) }}</q-item-section>
          <q-item-section side>
            <q-icon class="float-right" size="xs" :name="getPageStatusIcon(item.meta.status)" />
            <q-tooltip>{{ getPageStatusTooltipText(item.meta.status) }}</q-tooltip>
          </q-item-section>
        </q-item>

        <q-separator v-if="item.meta.menu.separator" :class="'separator' + item.meta.menu.separator" />
      </template>
    </q-list>
  </q-scroll-area>
</template>

<script>
import { openURL, scroll } from 'quasar'
const { getScrollTarget, setVerticalScrollPosition } = scroll

import menu from 'src/i18n/menu.hjson'

export default {
  name: 'DMenu',

  data () {
    return {
      loaded: false,

      term: null,
      matches: false
    }
  },
  computed: {},

  methods: {
    openURL,

    searchTerm (term) {
      if (term.length > 0) {
        term = term.toLowerCase()

        const lang = this.$q.localStorage.getItem('setting.language')

        // console.log(term, lang)

        // TODO highlight menu item and page content terms

        // ! Search in Menu item label
        // TODO
        // ! Search in i18n/menu.hjson
        if (typeof menu[lang] === 'object' && typeof menu[lang] !== 'undefined') {
          this.matches = menu[lang].map(item => {
            return item.indexOf(term) !== -1
          })

          // Search in english (en-US) language too
          if (lang !== 'en-US') {
            this.matches = menu['en-US'].map((item, index) => {
              return this.matches[index] === true || item.indexOf(term) !== -1
            })
          }
        }
        // ! Search in Page content
        // TODO
      } else {
        this.matches = false
      }
    },
    clearSearchTerm () {
      this.term = ''
      this.searchTerm('')
      return true
    },

    getMenuItemLabel (item, index) {
      // if (this.loaded) return

      if (index === this.items.length - 1) {
        this.loaded = true
      }

      const path = `_${item.path.replace(/_$/, '').replace(/\//g, '.')}._`
      // console.log(path)
      // TODO fix re-render at menu scrolling?! Lol
      if (this.$te(path)) {
        return this.$t(path)
      } else {
        return this.$t(path, 'en-US')
      }
    },

    getPageStatusIcon (status) {
      if (status === 9) {
        return ''
      } else if (status === 6) {
        return 'fas fa-spinner'
      } else {
        return 'fas fa-exclamation-circle'
      }
    },
    getPageStatusTooltipText (status) {
      // TODO put text in i18n
      if (status === 9) {
        return ''
      } else if (status === 6) {
        return 'Documentation page is under constrution.'
      } else {
        return 'Documentation page is empty!'
      }
    },

    scrollToActiveMenuItem () {
      const menu = document.getElementById('menu')

      if (menu) {
        const menuItemActive = (menu.getElementsByClassName('q-router-link--active'))[0]

        if (menuItemActive && typeof menuItemActive === 'object') {
          const target = getScrollTarget(menuItemActive)
          const offset = menuItemActive.offsetTop
          const duration = 300

          // TODO fix tremor
          // TODO detect scrollarea scroll position and only setVertical in initial position (top = 0)
          setVerticalScrollPosition(target, offset - (window.innerHeight / 2) + 80, duration)
        }
      }
    }
  },

  // @ Events
  beforeCreate () {
    // console.log('DMenu - beforeCreate()!')

    const routes = this.$router.options.routes.slice(0, -1) // Delete last route
    const items = []

    for (const [index, route] of routes.entries()) {
      items[index] = Object.freeze({
        path: route.path,
        meta: {
          icon: route.meta.icon,
          menu: route.meta.menu,
          status: route.meta.status
        }
      })
    }

    this.items = Object.freeze(items)

    // console.log(this.items, routes)
  },
  created () {
    // console.log('DMenu - created()!')
  },
  beforeMount () {
    // console.log('DMenu - beforeMount()!')
  },
  mounted () {
    // console.log('DMenu - mounted()!')

    // ! Autoscrolling to active menu item after 1.5s
    setTimeout(() => {
      this.scrollToActiveMenuItem()
    }, 1500)
    // * After each route change
    this.$router.afterEach((to, from) => {
      if (!to.hash || (from.path !== to.path)) {
        setTimeout(() => {
          this.scrollToActiveMenuItem()
        }, 1500)
      }
    })

    // console.log(this.items)
  },
  beforeUpdate () {
    // console.log('DMenu - beforeUpdate()!')
  },
  updated () {
    // console.log('DMenu - updated()!')
  }
}
</script>

<style lang="scss">
#menu {
  width: 100%;
  height: calc(100% - 50px);

  // Support Button
  .q-btn.support {
    color: #9c3700; // Contrast Checker - OK
  }
  // List
  .q-list {
    padding: 8px 0;
  }

  // List Item
  .q-item {
    padding: 8px 12px;
    min-height: 45px;
  }
  .q-item.q-router-link--active, .q-item--active {
    color: black;
    background: rgba(189,189,189,0.5);
  }
  .q-icon {
    color: #363636;
  }

  // List Item Label
  .label {
    color: #363636;

    &.header {
      text-align: center;
      padding: 12px 0 4px 0;
      min-height: 32px;

      .q-icon {
        padding-right: 5px;
      }
    }
    &.subheader {
      text-align: left;
      padding-bottom: 5px;
      padding-left: 10px;
    }
  }

  // List Item Separator
  .separator {
    &.list {
      height: 3px;
      margin: 0;
    }
    &.page {
      height: 3px;
    }
    &.subpage {
      height: 1px;
    }
    &.partial {
      margin: 3px auto 10px auto;
      width: 30px;
      height: 3px;
    }
  }
}

// Search
label[for="search"] {
  z-index: 2;

  .q-field__control,
  .q-field__marginal {
    height: 50px;
  }

  i.clear {
    padding: 13px 8px;
  }
}
</style>
