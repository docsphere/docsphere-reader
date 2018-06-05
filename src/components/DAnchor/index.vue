<template>
  <q-tree class="fixed" default-expand-all :nodes="nodes" node-key="label" :selected.sync="selected" />
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

<style scoped></style>
