<template>
  <q-page-container id="page">
    <q-toolbar id="submenu" class="bg-grey-8 text-white">
      <q-toolbar-title class="toolbar-title text-center">
        <q-btn-group v-bind:class="$q.screen.lt.md ? 'mobile' : null">
          <q-btn v-if="overview" @click="pRoute('/')" v-bind:class="pActive('/')" :label="$t('submenu.overview')" icon="pageview" no-caps flat />
          <q-btn v-if="showcase" @click="pRoute('/showcase')" v-bind:class="pActive('/showcase')" :label="$t('submenu.showcase')" icon="play_circle_filled" no-caps flat />
        </q-btn-group>
      </q-toolbar-title>
    </q-toolbar>

    <q-drawer elevated show-if-above side="right" v-model="layoutMeta">
      <d-page-anchor v-if="nodes.length > 0" id="anchor" :nodes="nodes" />
    </q-drawer>

    <q-page style="min-height: calc(100vh - 118px)">
      <q-scroll-area id="content" :class="main">
        <slot></slot>

        <d-page-nav v-if="!disableNav" />

        <q-scroll-observer v-if="nodes.length > 0" @scroll="scrolling" :debounce="200" />
      </q-scroll-area>
    </q-page>
  </q-page-container>
</template>

<script>
import DPageAnchor from 'components/DPageAnchor'
import DPageNav from 'components/DPageNav'

import Navigator from 'pages/navigator'

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

    // Set CSS classes
    layoutMeta: {
      get () {
        return this.$store.state.layout.meta
      },
      set (value) {
        this.$store.commit('layout/setMeta', value)
      }
    },
    main () {
      let classes = ''

      switch (this.$store.state.page.relative) {
        case '/showcase':
          classes = 'showcase'
          break
        default:
          classes = 'overview'
      }

      return classes
    }
  },
  methods: {
    pActive (relative) {
      if (relative === '/' && (this.$store.state.page.relative === relative || this.$store.state.page.relative === '')) {
        return 'active'
      } else if (this.$store.state.page.relative === relative) {
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

<style lang="sass">
#content,
#content > div.scroll
  min-height: calc(100vh - 118px)
#content:not(.no-padding) > div.scroll > div.q-scrollarea__content
  padding: 20px

#submenu
  min-height: 36px
  padding: 0
  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 6px rgba(0,0,0,0.12)
  overflow: visible

  .toolbar-title
    overflow: visible
  .q-btn-group
    box-shadow: none
    &.mobile
      .q-btn-inner
        div
          display: none
  .q-btn-inner
    .q-icon
      margin: 0
    div
      &:not(.focus-helper)
        margin-left: 6px

#submenu a,
#submenu button
  border-radius: 0
  padding: 6px 12px
#submenu a.active,
#submenu button.active
  background-color: #fff !important
  color: #000
  box-shadow: 0 10px 0 0 #fff
</style>
