<template lang="pug">
blockquote
  strong(v-if="message === 'important'") Important
  strong(v-else-if="warning") Warning
  strong(v-else-if="note") Note
  slot
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
