<template lang="pug">
q-page-container#page
  q-toolbar#submenu.bg-grey-8.text-white(v-if="overview && (showcase || vs)")
    q-toolbar-title.toolbar-container
      q-btn-group(v-bind:class="$q.screen.lt.md ? 'mobile' : null")
        q-btn(v-if="overview"
          no-caps flat
          v-bind:class="pActive('/overview')"
          :label="$t('submenu.overview')" icon="pageview"
          @click="subroute('/overview')"
        )
        q-btn(v-if="showcase"
          no-caps flat
          v-bind:class="pActive('/showcase')"
          :label="$t('submenu.showcase')" icon="play_circle_filled"
          @click="subroute('/showcase')"
        )
        q-btn(v-if="vs"
          no-caps flat
          v-bind:class="pActive('/vs')"
          :label="$t('submenu.versus')" icon="compare"
          @click="subroute('/vs')"
        )

  q-page(style="min-height: calc(100vh - 115px)")
    q-scroll-area.content(:class="main" ref="pageScrollArea")
      slot
      d-page-nav(v-if="!disableNav")
      q-scroll-observer(@scroll="scrolling" :debounce="300")
    //-q-page-sticky(v-if="showBackToTop" position="bottom-right" :offset="[18, 18]")
        q-btn.rotate-90(
          round :aria-label="$t('system.backToTop')"
          color="primary" icon="arrow_back" @click="backToTop"
        )

  q-drawer(elevated show-if-above side="right" v-model="layoutMeta")
    d-page-anchor#anchor
</template>

<script>
import DPageAnchor from 'components/DPageAnchor'
import DPageNav from 'components/DPageNav'

import Navigator from 'components/navigator'

export default {
  name: 'DPage',

  components: {
    DPageAnchor,
    DPageNav
  },

  mixins: [
    Navigator
  ],

  props: {
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
      const showcase = this.$route.matched[0].meta.subpages.showcase
      if (showcase === true) {
        return this.overview + '/showcase'
      }
      return false
    },
    vs () {
      const vs = this.$route.matched[0].meta.subpages.vs
      if (vs === true) {
        return this.overview + '/vs'
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
        case '/vs':
          classes = 'vs'
          break
        default:
          classes = 'overview'
      }

      if (this.showcase || this.vs) {
        classes += ' with-submenu'
      } else {
        classes += ' without-submenu'
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
    subroute (to) {
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
    },
    resetPageScroll () {
      const pageScrollArea = this.$refs.pageScrollArea

      if (pageScrollArea !== null) {
        this.$refs.pageScrollArea.setScrollPosition('vertical', 0, 0)
      }
    }
    // @ Events

    /*
    backToTop () {
      this.$refs.pageScrollArea.setScrollPosition('vertical', 0, 300)
      this.$store.commit('page/setAnchor', 0)
    }
    */
  },
  // @ Events
  mounted () {
    this.$router.beforeEach((to, from, next) => {
      this.resetPageScroll()

      if (to.hash === '' && from.path !== to.path) {
        this.$store.commit('page/resetAnchor')
        this.$store.commit('page/resetAnchors')
        this.$store.commit('page/resetNodes')
      }

      next()
    })
  }
}
</script>

<style lang="sass">
#page
  padding-bottom: 30px !important

.content.with-submenu,
.content.with-submenu > div.scroll
  min-height: calc(100vh - 115px)

.content.without-submenu,
.content.without-submenu > div.scroll
  min-height: calc(100vh - 80px)

.content:not(.no-padding) > div.scroll > div.q-scrollarea__content
  padding: 20px

#submenu
  min-height: 36px
  padding: 0
  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 6px rgba(0,0,0,0.12)
  overflow: visible

  .on-left
    margin-right: 5px
  .toolbar-container
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

// * Coloring
// Light
body.body--light
  #submenu a.active,
  #submenu button.active
    background-color: #fff !important
    color: #000
    box-shadow: 0 10px 0 0 #fff
// Dark
body.body--dark
  #submenu a.active,
  #submenu button.active
    background-color: #000 !important
    color: #fff
    box-shadow: 0 10px 0 0 #000
</style>
