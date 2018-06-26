<template>
  <q-tabs id="page" color="tertiary" style="width: 100%">
    <q-route-tab v-if="overview" :to="overview" slot="title" icon="pageview" />
    <q-route-tab v-if="showcase" :to="showcase" slot="title" icon="play_circle_filled" />
    <q-route-tab v-if="code" :to="code" slot="title" icon="fas fa-file-code" />

    <q-page :class="row" style="min-height: calc(100vh - 134px)">
      <q-scroll-area v-if="nodes.length > 0" id="anchor" :class="meta">
        <d-page-anchor :nodes="nodes" />
      </q-scroll-area>
      <q-scroll-area id="content" :class="main">
        <slot></slot>
        <d-page-nav v-if="!disableNav" />
        <q-scroll-observable v-if="nodes.length > 0" @scroll="scrolling" />
      </q-scroll-area>
    </q-page>
  </q-tabs>
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
    code () {
      if (this.$route.matched[0].meta.pages.showcase !== false) {
        return this.showcase + '/code'
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
        case '/showcase/code':
          classes += ' showcase-code'
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
  }
}
</script>

<style lang="stylus">
  #page .q-tabs-head
    box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12)
</style>
