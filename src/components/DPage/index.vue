<template>
  <q-page :class="row">
    <q-scroll-area v-if="nodes.length > 0" id="anchor" :class="meta">
      <d-page-anchor :nodes="nodes" />
    </q-scroll-area>
    <q-scroll-area id="content" :class="main">
      <slot></slot>
      <d-page-nav v-if="!disableNav" />
      <q-scroll-observable v-if="nodes.length > 0" @scroll="scrolling" />
    </q-scroll-area>
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

<style lang="stylus"></style>
