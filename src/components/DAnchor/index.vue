<template>
  <q-tree
    default-expand-all
    :nodes="nodes" node-key="id"
    :selected.sync="selected" ref="anchor">
    <div slot="default-header" slot-scope="prop" class="row items-center">
      <a v-if="prop.node.id !== 0"
         :href="`${$route.path}#${$t(`_.${namespace}.overview.h[${prop.node.id-1}][0]`)}`">
        <span>{{ $t(`_.${namespace}.overview.h[${prop.node.id-1}][1]`) }}</span>
      </a>
      <a v-else
         :href="`${$route.path}#${$t(`_.${namespace}._[0]`)}`">
        <span>{{ $t(`_.${namespace}._[1]`) }}</span>
      </a>
    </div>
  </q-tree>
</template>

<script>
export default {
  name: 'DAnchor',

  props: {
    nodes: {
      type: Array,
      required: true
    },
    namespace: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      selected: 1
    }
  },

  mounted () {
    this.$store.commit('layout/setAnchorToggle', true)
  },
  beforeDestroy () {
    this.$store.commit('layout/setAnchorToggle', false)
  }
}
</script>

<style lang="stylus">
  #anchor a
    color #286fa3
    font-weight 600
  #anchor.anchor-on-right
    border-left 1px solid #e0e0e0
  #anchor.anchor-on-top
    border-bottom 1px solid #e0e0e0
    padding-bottom 5px
    margin-bottom 20px
  #anchor .q-tree-node-link
    cursor auto
  #anchor .q-tree-node-link:hover
    background none
  #anchor .q-tree-node-header
    margin 0
    border-radius 0
  #anchor .scroll
    padding-top 12px
</style>
