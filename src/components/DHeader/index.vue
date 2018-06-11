<template>
  <q-toolbar-title>
    <q-icon v-if="icon" :name="icon" />
    <q-icon v-else :name="$route.meta.icon" />

    <span v-if="$store.state.i18n.base"> {{ $t(`_.${$store.state.i18n.base}._`) }} </span>
    <span v-else> {{ $t(`menu.${$route.matched[1].meta.menu}`) }} </span>

    <span v-if="child">
      <span>- </span>
      <q-icon v-if="child === '/'" name="pageview" />
      <q-icon v-else-if="child === '/play'" name="play_circle_filled" />
      <q-icon v-else-if="child === '/showcase'" name="play_circle_filled" />
      <q-icon v-else-if="child === '/showcase/code'" name="fas fa-file-code" />
    </span>
  </q-toolbar-title>
</template>

<script>
export default {
  name: 'DHeader',

  props: {
    icon: {
      type: String,
      default: ''
    },

    matched: {
      type: Array,
      default: Array
    }
  },

  computed: {
    child () {
      let child = ''

      if (this.matched[0].path) {
        child = this.matched[1].path.substr(this.matched[0].path.length)
      }

      return child
    }
  }
}
</script>

<style lang="stylus" scoped>
  .q-toolbar-title
    padding-left: 6px
  .q-icon
    font-size: 1.5rem
  span .q-icon
    font-size: 1.3rem
</style>
