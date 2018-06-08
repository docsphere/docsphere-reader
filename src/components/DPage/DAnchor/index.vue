<template>
  <q-tree
    default-expand-all
    :nodes="nodes" node-key="id"
    :selected.sync="selected">
    <div slot="default-header" slot-scope="prop">
      <b v-if="prop.node.id">{{ $t(`_.${namespace}.overview.h[${prop.node.id - 1}]`) }}</b>
      <b v-else>{{ $t(`_.${namespace}._`) }}</b>
    </div>
  </q-tree>
</template>

<script>
import Navigator from '/src/pages/navigator'

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
  computed: {
    selected: {
      get () {
        return this.$store.state.page.anchor
      },
      set (value) {
        if (value === null) {
          this.anchor(this.selected)
          return
        }

        this.$router.push(this.$route.path + '#' + value)
      }
    }
  },

  mounted () {
    this.$store.commit('layout/setMetaToggle', true)

    this.$router.afterEach((to, from) => {
      if (to.hash) {
        this.anchor(to.hash)
      }
    })

    const id = this.$route.hash.replace(/^\D+/g, '')
    if (id === (Number(id) + '')) {
      this.anchor(id)
    }
  },
  beforeDestroy () {
    this.$store.commit('layout/setMetaToggle', false)
    this.$store.commit('page/setAnchor', 0)
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
