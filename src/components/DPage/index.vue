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

import Flexbox from '/src/layouts/flexbox'
import Navigator from '/src/pages/navigator'

export default {
  components: {
    DPageAnchor, DPageNav
  },
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
  mixins: [Flexbox, Navigator]
}
</script>

<style lang="stylus"></style>
