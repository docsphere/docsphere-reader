<template>
  <nav>
    <router-link v-if="prev" :to="`${prev}`">
      <q-icon name="navigate_before" />
      <span>{{ $t(`_${prev.replace(/\//g, '.')}._`) }}</span>
    </router-link>
    <router-link v-if="next" :to="`${next}`" class="float-right">
      <span>{{ $t(`_${next.replace(/\//g, '.')}._`) }}</span>
      <q-icon name="navigate_next" />
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'DPageNav',

  data () {
    return {
      prev: this._prev(),
      next: this._next()
    }
  },
  methods: {
    _prev () {
      const base = this.$store.state.page.base
      const routes = this.$router.options.routes.slice(0, -1)

      for (let i = 0; i < routes.length; i++) {
        if ('/' + base === routes[i].path) {
          if (i > 0) {
            return routes[i - 1].path
          }
        }
      }

      return ''
    },
    _next () {
      const base = this.$store.state.page.base
      const routes = this.$router.options.routes.slice(0, -1)

      for (let i = 0; i < routes.length; i++) {
        if ('/' + base === routes[i].path) {
          if (typeof routes[i + i] !== 'undefined') {
            return routes[i + 1].path
          }
        }
      }

      return ''
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
