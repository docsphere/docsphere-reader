<template>
  <q-page id="page">
    <q-toolbar id="submenu" color="tertiary">
      <q-toolbar-title class="text-center">
        <q-btn-group v-bind:class="$q.screen.lt.md ? 'mobile' : null">
          <q-btn v-if="overview" @click="pRoute('/')"
                 v-bind:class="pActive('/')"
                 :label="$t('submenu.overview')" icon="pageview" no-caps flat />
          <q-btn v-if="showcase" @click="pRoute('/showcase')"
                 v-bind:class="pActive('/showcase')"
                 :label="$t('submenu.showcase')" icon="play_circle_filled" no-caps flat />
        </q-btn-group>
      </q-toolbar-title>
    </q-toolbar>
    <q-page :class="row" style="min-height: calc(100vh - 122px)">
      <q-scroll-area v-if="nodes.length > 0" id="anchor" :class="meta">
        <d-page-anchor :nodes="nodes" />
      </q-scroll-area>
      <q-scroll-area id="content" :class="main">
        <slot></slot>
        <d-page-nav v-if="!disableNav" />
        <q-scroll-observable v-if="nodes.length > 0" @scroll="scrolling" :debounce="200" />
      </q-scroll-area>
    </q-page>
  </q-page>
</template>

<script>
import DPageAnchor from '/src/components/DPageAnchor'
import DPageNav from '/src/components/DPageNav'

import Navigator from '/src/pages/navigator'

export default {
  components: {
    DPageAnchor, DPageNav
  },
  mixins: [Navigator],

  props: {
    nodes: {
      type: Array,
      default: Array
    },
    disableNav: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    overview () {
      return this.$route.matched[0].path
    },
    showcase () {
      if (this.$route.matched[0].meta.pages.showcase !== false) {
        return this.overview + '/showcase'
      }
      return false
    },

    row () {
      let classes = ''

      if (!this.$q.screen.lt.lg) {
        classes = 'row reverse'
      }

      return classes
    },

    main () {
      let classes = ''

      if (this.$store.state.layout.meta && this.nodes.length > 0) {
        if (!this.$q.screen.lt.lg) {
          classes = 'col-9'
        }
      } else {
        classes = 'col-12'
      }

      switch (this.$store.state.page.relative) {
        case '/showcase':
          classes += ' showcase'
          break
        default:
          classes += ' overview'
      }

      return classes
    },
    meta () {
      let classes = ''

      if (this.$store.state.layout.meta) {
        if (this.$q.screen.lt.lg) {
          classes = 'meta-on-top'
        } else {
          classes = 'col-3 meta-on-right'
        }
      } else {
        classes = 'hidden'
      }

      return classes
    }
  },
  methods: {
    pActive (relative) {
      if (this.$store.state.page.relative === relative) {
        return 'active'
      }

      return null
    },
    pRoute (to) {
      const base = '/' + this.$store.state.page.base
      const relative = this.$store.state.page.relative
      let path = base

      if (to !== '/') {
        path += to
      }

      if (relative === to) {
        if (to !== '/showcase') {
          return this.push('0')
        } else {
          return this.push('1')
        }
      }

      this.$router.push(path)

      return true
    }
  }
}
</script>

<style lang="stylus">
  #content, #content > div.scroll
    min-height calc(100vh - 122px)

  #submenu
    min-height 36px
    padding 0
    box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 6px rgba(0,0,0,0.12)
    overflow visible
  #submenu .q-toolbar-title
    overflow visible
  #submenu .q-btn-group
    box-shadow none
  #submenu a, #submenu button
    border-radius 0
    padding: 6px 12px
  #submenu a.active, #submenu button.active
    background-color white !important
    color: black
    box-shadow: 0 10px 0 0 #fff;

  #submenu .q-btn-inner .q-icon
    margin 0
  #submenu .q-btn-inner div:not(.focus-helper)
    margin-left 6px
  #submenu .q-btn-group.mobile .q-btn-inner div
    display none
</style>
