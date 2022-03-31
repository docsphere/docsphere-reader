<template>
  <div :id="id" :class="stylize" @click="push(id)">{{ heading }}</div>
</template>

<script>
import Navigator from 'pages/navigator'

export default {
  name: 'DPageH',
  mixins: [Navigator],

  props: {
    h: {
      type: String,
      required: true
    }
  },

  computed: {
    id () {
      const fields = this.h.split('-')
      return fields[1]
    },
    stylize () {
      const fields = this.h.split('-')

      const h = `h${fields[0]}`

      return `dh ${h}`
    },
    heading () {
      const base = this.$store.state.i18n.base
      const absolute = this.$store.state.i18n.absolute

      let h = ''
      if (base && absolute) {
        if (this.id === '0') {
          h = this.$t(`_.${base}._`)
        } else {
          h = this.$t(`_.${absolute}.headers[${this.id - 1}]`)
        }
      } else {
        // TODO exception?
      }

      return h
    }
  },

  methods: {
    register (element) {
      const Anchor = document.getElementById(element.id)
      if (typeof Anchor === 'object') {
        const anchors = this.$store.state.page.anchors

        if (!anchors[Anchor.id]) {
          this.$store.commit('page/setAnchors', Anchor.offsetTop - Anchor.scrollHeight + 33)
        }
      }
    }
  },

  mounted () {
    this.register(this.$el)
  }
}
</script>

<style lang="scss">
.h1,
.h2,
.h3,
.h4 {
  font-weight: 600;
  color: #286fa3;
  user-select: none;
}
.h1 {
  font-size: 2rem;
  margin: 0 0 0.7em;
}
.h2 {
  font-size: 1.5rem;
  margin: 1.5em 0 0.8em;
  padding-bottom: 0.4em;
  border-bottom: 1px solid #ddd;
}
.h3 {
  font-size: 1.17rem;
  margin: 1.2em 0 0.9em;
  &:first-child {
    margin-top: 0;
  }
  &:before {
    content: '# ';
  }
}
.dh {
  color: #286fa3;
  padding: 6px;
  cursor: pointer;
  &:hover {
    color: #4e9bd4;
  }
}
.h1:hover:after,
.h2:hover:after,
.h3:hover:after,
.h4:hover:after,
.h5:hover:after,
.h6:hover:after {
  content: ' #';
  color: #286fa3;
  font-weight: bold;
}

</style>
