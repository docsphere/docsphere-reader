<template>
  <q-page :class="row">
    <q-scroll-area id="anchor" :class="meta">
      <d-anchor :nodes="nodes" />
    </q-scroll-area>
    <q-scroll-area id="content" :class="main">
      <slot></slot>
      <d-nav />
      <q-scroll-observable @scroll="scrolling" />
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
    nodes: Array,
    required: true
  },
  mixins: [Flexbox, Navigator]
}
</script>

<style lang="stylus" scoped></style>
