<template lang="pug">
nav
  router-link.link.float-left(v-if="prev" :to="`${prev}/overview`")
    div.text-caption
      | {{ $t('nav.prev') }}
    q-icon(name="navigate_before")
    span {{ $t(`_${prev.replace(/_$/, '').replace(/\//g, '.')}._`) }}
  router-link.link.float-right(v-if="next" :to="`${next}/overview`")
    div.text-caption
      | {{ $t('nav.next') }}
    span {{ $t(`_${next.replace(/_$/, '').replace(/\//g, '.')}._`) }}
    q-icon(name="navigate_next")
</template>

<script>
export default {
  name: 'DPageNav',

  computed: {
    prev () {
      const base = this.$store.state.page.base
      const routes = this.$router.options.routes.slice(0, -2)

      for (let i = 0; i < routes.length; i++) {
        if ('/' + base === routes[i].path) {
          if (i > 0) {
            return routes[i - 1].path
          }
        }
      }

      return ''
    },
    next () {
      const base = this.$store.state.page.base
      const routes = this.$router.options.routes.slice(0, -2)

      for (let i = 0; i < routes.length; i++) {
        if ('/' + base === routes[i].path) {
          if (typeof routes[i + 1] !== 'undefined') {
            return routes[i + 1].path
          }
        }
      }

      return ''
    }
  }
}
</script>

<style lang="sass" scoped>
nav
  display: inline-block
  width: 100%
  min-height: 36px
  margin-top: 15px
  border-top: 3px solid #e0e0e0
  &:first-child
    margin-top: calc(100vh - 200px)
  .link
    margin-top: 20px
    border: 1px solid #e0e0e0
    padding: 20px !important
</style>
