<template>
  <q-tree
    default-expand-all
    :nodes="nodes" node-key="id"
    :selected.sync="selected" ref="anchor">
    <div slot="default-header" slot-scope="prop" class="row items-center">
      <a v-if="prop.node.h" :href="`/${route}#${prop.node.h[0]}`">{{ prop.node.h[1] }}</a>
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
    route: {
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
  #anchor span
    color #286fa3
    font-weight 600
  #anchor.anchor-fixed
    border-left 1px solid #e0e0e0
  #anchor.anchor-on-top
    border-bottom 1px solid #e0e0e0
    padding-bottom 5px
    margin-bottom 20px
  #anchor.anchor-fixed > .q-tree-node
    position fixed
  #anchor .q-tree-node-link
    cursor auto
  #anchor .q-tree-node-link:hover
    background none
</style>
