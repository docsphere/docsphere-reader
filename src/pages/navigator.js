import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll

export default {
  methods: {
    anchor (id) {
      if (typeof id === 'string') {
        id = Number(id.replace(/^\D+/g, ''))
      }

      if (typeof id === 'number') {
        id = '' + id
        const Anchor = document.getElementById(id)
        if (typeof Anchor === 'object') {
          let target = getScrollTarget(Anchor)
          let offset = Anchor.offsetTop - Anchor.scrollHeight
          let duration = 300

          setScrollPosition(target, offset, duration)

          this.$store.commit('page/setAnchor', Number(id))
        }

        return true
      }

      return false
    }
  }
}
