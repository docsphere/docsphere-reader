import { scroll } from 'quasar'
const { getScrollTarget, setVerticalScrollPosition } = scroll

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
          const target = getScrollTarget(Anchor)
          const offset = Anchor.offsetTop - Anchor.scrollHeight
          const duration = 300

          if (this.$q.platform.is.desktop) {
            setVerticalScrollPosition(target, offset + 33, duration)
          } else {
            let additional = 0
            if (this.$q.screen.lt.lg) {
              const Anchors = document.getElementById('anchor')
              additional = Anchors.offsetHeight

              if (additional > 0) {
                additional += 20
              }
            }

            window.scrollTo(0, offset + 78 + additional)
          }

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
      // console.log(this.$store.state.page.scrolling, scroll.position)

      if (this.$store.state.page.scrolling && scroll.position.top > 5) {
        const position = scroll.position.top + 60
        const anchors = this.$store.state.page.anchors
        let additional = 0

        if (this.$store.state.page.relative !== '') {
          additional = 1
        }

        for (let i = 0; i < anchors.length; i++) {
          if (anchors[i] >= position) {
            this.select(i - 1 + additional)
            this.push(i - 1 + additional, false)
            break
          }

          if (typeof anchors[i + 1] === 'undefined' && position >= anchors[i]) {
            this.select(i + additional)
            this.push(i + additional, false)
          }
        }
      }
    },

    push (value, anchor = true) {
      if (anchor) {
        if (('#' + value) === this.$route.hash) {
          this.anchor(value)
          return
        } else if (value === null) {
          this.anchor(this.selected, false)
          return
        }
      }

      this.$router.push(this.$route.path + '#' + value)
      // TODO Prevent moving to the top on mobile devices by changing routes

      if (anchor) {
        if (this.$q.platform.is.desktop) {
          this.anchor(value)
        } else {
          setTimeout(() => {
            this.anchor(value)
          }, 600)
        }
      }
    }
  }
}
