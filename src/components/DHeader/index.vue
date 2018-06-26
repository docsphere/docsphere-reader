<template>
  <q-toolbar-title>
    <q-icon v-if="icon" :name="icon" />
    <q-icon v-else :name="$route.meta.icon" />

    <span v-if="$store.state.i18n.base"> {{ $t(`_.${$store.state.i18n.base}._`) }} </span>
    <span v-else> {{ $t(`menu.${$route.matched[1].meta.menu}`) }} </span>
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
