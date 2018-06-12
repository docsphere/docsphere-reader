import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll

export default {
  methods: {
    anchor (id, select = true) {
      this.$store.commit('page/setScrolling', false)

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

          setScrollPosition(target, offset + 33, duration)

          if (select) {
            this.select(id)
          }

          setTimeout(() => {
            this.$store.commit('page/setScrolling', true)
          }, 600)
        }
      }
    },
    select (id) {
      this.$store.commit('page/setAnchor', Number(id))
    },
    scrolling (scroll) {
      if (this.$store.state.page.scrolling) {
        const position = scroll.position + 60
        const anchors = this.$store.state.page.anchors

        for (let i = 0; i < anchors.length; i++) {
          if (anchors[i] >= position) {
            this.select(i - 1)
            break
          }

          if (typeof anchors[i + 1] === 'undefined' && position >= anchors[i]) {
            this.select(i)
          }
        }
      }
    }
  }
}
