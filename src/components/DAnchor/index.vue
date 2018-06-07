<template>
  <q-tree
    default-expand-all
    :nodes="nodes" node-key="id"
    :selected.sync="selected">
    <div slot="default-header" slot-scope="prop">
      <b v-if="prop.node.id" @click="anchor(prop.node.id)">{{ $t(`_.${namespace}.overview.h[${prop.node.id - 1}][1]`) }}</b>
      <b v-else @click="anchor(prop.node.id)">{{ $t(`_.${namespace}._[1]`) }}</b>
    </div>
  </q-tree>
</template>

<script>
import Navigator from '/src/layouts/navigator'

export default {
  name: 'DAnchor',
  mixins: [Navigator],

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
      selected: 0
    }
  },

  mounted () {
    this.$store.commit('layout/setMetaToggle', true)
  },
  beforeDestroy () {
    this.$store.commit('layout/setMetaToggle', false)
  }
}
</script>

<style lang="stylus">
  #anchor .q-tree
    padding-top 12px
  #anchor b
    color #286fa3
  #anchor .q-tree-node-header
    margin 0
    border-radius 0
</style>
