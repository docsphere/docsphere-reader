<template>
  <nav>
    <a v-if="prev[0]" :href="`/${prev[0]}`">
      <q-icon name="navigate_before" />
      <span>{{ prev[1] }}</span>
    </a>
    <a v-if="next[0]" :href="`/${next[0]}`" class="float-right">
      <span>{{ next[1] }}</span>
      <q-icon name="navigate_next" />
    </a>
  </nav>
</template>

<script>
export default {
  name: 'DNav',

  props: {
    prev: {
      type: Array,
      default: Array
    },
    next: {
      type: Array,
      default: Array
    }
  }
}
</script>

<style lang="stylus" scoped>
  nav
    min-height 36px
    padding-top 15px
    margin-top 15px
    border-top 3px solid #e0e0e0
</style>
