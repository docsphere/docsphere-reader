export default {
  computed: {
    row () {
      if (this.$q.screen.lt.md) {
        return ''
      } else {
        return 'row reverse'
      }
    },
    content () {
      if (this.$store.state.layout.anchor) {
        if (this.$q.screen.lt.md) {
          return ''
        } else {
          return 'col-9'
        }
      } else {
        return 'col-12'
      }
    },
    anchor () {
      if (this.$store.state.layout.anchor) {
        if (this.$q.screen.lt.md) {
          return 'anchor-on-top'
        } else {
          return 'col-3 anchor-fixed'
        }
      } else {
        return 'hidden'
      }
    }
  }
}
