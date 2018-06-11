<template>
  <div :id="id" v-bind:class="stylize" @click="anchor(id)">{{ heading }}</div>
</template>

<script>
import Navigator from '/src/pages/navigator'

export default {
  name: 'DH',
  mixins: [Navigator],

  props: {
    h: {
      type: String,
      required: true
    }
  },

  computed: {
    id () {
      const fields = this.h.split('-')
      return fields[1]
    },
    stylize () {
      const fields = this.h.split('-')

      let h = `h${fields[0]}`

      return `dh ${h}`
    },
    heading () {
      const base = this.$store.state.i18n.base
      const absolute = this.$store.state.i18n.absolute

      let h = ''
      if (base && absolute) {
        if (this.id === '0') {
          h = this.$t(`_.${base}._`)
        } else {
          h = this.$t(`_.${absolute}.h[${this.id - 1}]`)
        }
      } else {
        // TODO exception
      }

      return h
    }
  }
}
</script>

<style lang="stylus">
  .h1, .h2, .h3, .h4
    font-weight 600
    color #286fa3
  .h1
    font-size 2rem
    margin 0 0 .7em
  .h2
    font-size 1.5rem
    margin 1.5em 0 .8em
    padding-bottom .4em
    border-bottom 1px solid #ddd
  .h3
    font-size 1.17rem
    margin 1.2em 0 0.9em
  .dh
    color #286fa3
    padding 6px
    cursor pointer
  .dh:hover
    background-color #cde3f3
</style>
