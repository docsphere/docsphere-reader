<template lang="pug">
d-page
  .docs-ripple(style="width: 500px; max-width: 90vw; margin: 0 auto;")
    p.caption
      span.desktop-only Click
      span.mobile-only Tap
      | on the area below to see it in action.
    .relative-position(v-ripple :class="classes")
</template>

<script>
import Showcase from 'src/pages/showcase'

const colors = ['primary', 'amber', 'secondary', 'orange', 'accent', 'lime', 'cyan', 'purple', 'brown', 'blue']

export default {
  mixins: [Showcase],

  data () {
    return {
      color: colors[0],
      index: 0
    }
  },
  computed: {
    classes () {
      return `bg-${this.color}`
    }
  },

  mounted () {
    this.timer = setInterval(() => {
      this.index = (this.index + 1) % colors.length
      this.color = colors[this.index]
    }, 3000)
  },
  beforeUnmount () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="sass">
.docs-ripple
  & > .relative-position
    height: 150px
    border-radius: 3px
    cursor: pointer
    color: #fff
    transition: background 1.5s
    box-shadow: $shadow-2
</style>
