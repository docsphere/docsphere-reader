export default {
  computed: {
    row () {
      if (this.$q.screen.lt.lg) {
        return ''
      } else {
        return 'row reverse'
      }
    },

    main () {
      if (this.$store.state.layout.meta && this.nodes.length > 0) {
        if (this.$q.screen.lt.lg) {
          return ''
        } else {
          return 'col-9 content'
        }
      } else {
        return 'col-12 content'
      }
    },
    meta () {
      if (this.$store.state.layout.meta) {
        if (this.$q.screen.lt.lg) {
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
