<template>
  <q-page :class="row">
    <q-scroll-area v-if="nodes.length > 0" id="anchor" :class="meta">
      <d-anchor :nodes="nodes" />
    </q-scroll-area>
    <q-scroll-area id="content" :class="main">
      <slot></slot>
      <d-nav v-if="!disableNav" />
      <q-scroll-observable v-if="nodes.length > 0" @scroll="scrolling" />
    </q-scroll-area>
  </q-page>
</template>

<script>
import DAnchor from '/src/components/DAnchor'
import DNav from '/src/components/DNav'

import Flexbox from '/src/layouts/flexbox'
import Navigator from '/src/pages/navigator'

export default {
  components: {
    DAnchor, DNav
  },
  props: {
    nodes: {
      type: Array,
      default: Array
    },
    disableNav: {
      type: Boolean,
      default: true
    }
  },
  mixins: [Flexbox, Navigator]
}
</script>

<style lang="stylus"></style>
