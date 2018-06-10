<template>
  <q-toolbar-title>
    <q-icon v-if="icon" :name="icon" />
    <q-icon v-else :name="$route.meta.icon" />

    <span v-if="section"> {{ $t(`_.${section}._`) }} </span>
    <span v-else> {{ $t(`menu.${$route.meta.menu}`) }} </span>

    <span v-if="subsection">
      <span>- </span>
      <q-icon v-if="subsection === '/'" name="pageview" />
      <q-icon v-else-if="subsection === '/play'" name="play_circle_filled" />
      <q-icon v-else-if="subsection === '/showcase'" name="play_circle_filled" />
      <q-icon v-else-if="subsection === '/showcase/code'" name="fas fa-file-code" />
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

    section: {
      type: String,
      default: ''
    },

    matched: {
      type: Array,
      default: Array
    }
  },

  computed: {
    subsection () {
      if (this.matched[0].path) {
        return this.matched[1].path.substr(this.matched[0].path.length)
      }

      return ''
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
