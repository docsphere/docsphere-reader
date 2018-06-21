<template>
  <q-tree
    default-expand-all
    :nodes="nodes" node-key="id" :selected.sync="selected"
    v-bind:class="stylize">
    <div slot="default-header" slot-scope="prop">
      <b v-if="prop.node.id">{{ $t(`_.${$store.state.i18n.absolute}.headers[${prop.node.id - 1}]`) }}</b>
      <b v-else>{{ $t(`_.${$store.state.i18n.base}._`) }}</b>
    </div>
  </q-tree>
</template>

<script>
import Navigator from '/src/pages/navigator'

export default {
  name: 'DPageAnchor',
  mixins: [Navigator],

  props: {
    nodes: {
      type: Array,
      required: true
    }
  },
  computed: {
    selected: {
      get () {
        const anchor = this.$store.state.page.anchor

        if (this.$store.state.page.relative !== '/' && anchor === 0) {
          return anchor + 1
        }

        return anchor
      },
      set (value) {
        this.push(value)
      }
    },
    stylize () {
      if (this.$q.platform.is.mobile && !this.$q.screen.lt.lg) {
        return 'fixed'
      } else {
        return null
      }
    }
  },

  mounted () {
    this.$store.commit('layout/setMetaToggle', true)

    setTimeout(() => {
      this.$store.commit('page/setScrolling', true)
    }, 1000)

    const id = this.$route.hash.replace(/^\D+/g, '')
    if (id === (Number(id) + '')) {
      setTimeout(() => {
        this.anchor(id)
      }, 500)
    }
  },
  beforeDestroy () {
    this.$store.commit('layout/setMetaToggle', false)
    this.$store.commit('page/setAnchor', 0)
    this.$store.commit('page/setAnchors', false)
    this.$store.commit('page/setScrolling', false)
  }
}
</script>

<style lang="stylus">
  #anchor .q-tree
    padding-top 12px
    width 100%
  #anchor b
    color #286fa3
    font-size 15px
  #anchor .q-tree-node-header
    margin 0
    border-radius 0
</style>
