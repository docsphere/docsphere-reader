<template>
  <nav>
    <router-link v-if="prev[0]" :to="`/${prev[0]}`">
      <q-icon name="navigate_before" />
      <span>{{ prev[1] }}</span>
    </router-link>
    <router-link v-if="next[0]" :to="`/${next[0]}`" class="float-right">
      <span>{{ next[1] }}</span>
      <q-icon name="navigate_next" />
    </router-link>
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
