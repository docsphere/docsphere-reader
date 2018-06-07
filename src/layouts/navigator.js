import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll

export default {
  methods: {
    anchor (id) {
      if (id[0] === '#') {
        id = id.substring(1)
      }

      this.$store.commit('page/setAnchor', Number(id))

      const Anchor = document.getElementById(id)
      if (id) {
        let target = getScrollTarget(Anchor)
        let offset = Anchor.offsetTop - Anchor.scrollHeight
        let duration = 300

        setScrollPosition(target, offset, duration)
      }

      return false
    }
  }
}
