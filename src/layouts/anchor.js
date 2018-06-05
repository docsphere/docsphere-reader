export default {
  computed: {
    content () {
      if (this.$store.state.layout.anchor) {
        return 'col-9'
      } else {
        return 'col-12'
      }
    },
    anchor () {
      if (this.$store.state.layout.anchor) {
        return 'col-3'
      } else {
        return 'hidden'
      }
    }
  }
}
