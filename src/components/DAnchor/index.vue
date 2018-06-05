<template>
  <q-tree default-expand-all :nodes="nodes" node-key="label" :selected.sync="selected" />
</template>

<script>
export default {
  name: 'DAnchor',

  props: {
    nodes: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      selected: ''
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
  #anchor.anchor-fixed
    border-left 1px solid #e0e0e0
  #anchor.anchor-on-top
    border-bottom 1px solid #e0e0e0
    padding-bottom 5px
    margin-bottom 20px
  #anchor.anchor-fixed > .q-tree-node
    position fixed
</style>
