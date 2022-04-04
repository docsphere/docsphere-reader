<template lang="pug">
q-tree(default-expand-all :nodes="nodes" node-key="id" v-model:selected="selected" v-bind:class="stylize")
  template(v-slot:default-header="props")
    b(v-if="props.node.id") {{ $t(`_.${$store.state.i18n.absolute}.headers[${props.node.id - 1}]`) }}
    b(v-else) {{ $t(`_.${$store.state.i18n.base}._`) }}
</template>

<script>
import Navigator from 'pages/navigator'

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
        let anchor = this.$store.state.page.anchor

        if (this.$store.state.page.relative !== '' && anchor === 0) {
          anchor = anchor + 1
        }

        // console.log('Anchor: ', this.$store.state.page.relative, anchor)

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
        return 'q-ma-xs'
      }
    }
  },

  // @ Methods
  methods: {
    getNodeLabel () {}
  },
  // @ Events
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
  beforeUnmount () {
    this.$store.commit('layout/setMetaToggle', false)
    this.$store.commit('page/setAnchor', 0)
    this.$store.commit('page/setAnchors', false)
    this.$store.commit('page/setScrolling', false)
  }
}
</script>

<style lang="sass">
#anchor
  .q-tree
    padding-top: 12px
    width: 100%
  b
    color: #1A496B
    font-size: 15px
  .q-tree-node-header
    margin: 0
    border-radius: 0
  .q-tree__node--selected
    background-color: peachpuff
</style>
