<template>
  <q-toolbar-title style="padding-left: 6px">
    <q-icon v-if="icon" :name="icon" size="2rem"></q-icon>
    <span>{{ title }}</span>
    <span v-if="subsection">
      <span> - </span>
      <q-icon v-if="subsection === '/'" name="pageview" size="1.3rem"></q-icon>
      <q-icon v-else-if="subsection === '/play'" name="play_circle_filled" size="1.3rem"></q-icon>
      <q-icon v-else-if="subsection === '/showcase'" name="play_circle_filled" size="1.3rem"></q-icon>
      <q-icon v-else-if="subsection === '/showcase/code'" name="fas fa-file-code" size="1.3rem"></q-icon>
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
    title: {
      type: String,
      required: true
    },
    subsection: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus"></style>
