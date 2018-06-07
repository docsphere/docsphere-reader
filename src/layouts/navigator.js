import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll

export default {
  methods: {
    anchor (id) {
      let Id = null
      if (id.constructor === String) {
        Id = id
      } else {
        if (id) {
          Id = this.$t(`_.${this.namespace}.overview.h[${id - 1}][0]`)
        } else {
          Id = this.$t(`_.${this.namespace}._[0]`)
        }
      }

      const Anchor = document.getElementById(Id)
      if (Id) {
        let target = getScrollTarget(Anchor)
        let offset = Anchor.offsetTop - Anchor.scrollHeight
        let duration = 300

        setScrollPosition(target, offset, duration)
      }

      return false
    }
  }
}
