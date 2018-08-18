<template>
  <blockquote>
    <strong v-if="message === 'important'">Important</strong>
    <strong v-else-if="warning">Warning</strong>
    <strong v-else-if="note">Note</strong>
    <slot></slot>
  </blockquote>
</template>

<script>
export default {
  name: 'QPageBlockquote',

  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
