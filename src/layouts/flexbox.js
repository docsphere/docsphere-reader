export default {
  computed: {
    row () {
      if (this.$q.screen.lt.md) {
        return ''
      } else {
        return 'row reverse'
      }
    },

    main () {
      if (this.$store.state.layout.meta) {
        if (this.$q.screen.lt.md) {
          return ''
        } else {
          return 'col-9'
        }
      } else {
        return 'col-12'
      }
    },
    meta () {
      if (this.$store.state.layout.meta) {
        if (this.$q.screen.lt.md) {
          return 'meta-on-top'
        } else {
          return 'col-3 meta-on-right'
        }
      } else {
        return 'hidden'
      }
    }
  }
}
