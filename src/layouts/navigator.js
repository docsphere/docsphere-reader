import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll

export default {
  methods: {
    anchor (id) {
      if (typeof id === 'string') {
        id = id.replace(/^\D+/g, '')
      }

      if (typeof id === 'number') {
        this.$store.commit('page/setAnchor', id)

        id = '' + id
        const Anchor = document.getElementById(id)
        if (id) {
          let target = getScrollTarget(Anchor)
          let offset = Anchor.offsetTop - Anchor.scrollHeight
          let duration = 300

          setScrollPosition(target, offset, duration)
        }

        return true
      }

      return false
    }
  }
}
