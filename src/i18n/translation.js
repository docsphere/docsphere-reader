export default {
  methods: {
    h (index) {
      let h = null
      if (index === 0) {
        h = this.$t(`_.${this.namespace}._`)
      } else {
        h = this.$t(`_.${this.namespace}.overview.h[${--index}]`)
      }

      if (h) {
        return `<a id="${h[0]}" href="/${this.route}#${h[0]}" class="headerlink">${h[1]}</a>`
      } else {
        return ''
      }
    },
    p (index) {
      return this.$t(`_.${this.namespace}.overview.p[${--index}]`)
    },
    l (index) {
      const l = this.$t(`_.${this.namespace}.overview.l[${--index}]`)
      return `<a href="${l[0]}" target="_blank">${l[1]}</a>`
    },

    sm (index) {
      return `<code>${this.codes[--index]}</code>`
    },
    c (id) {
      const code = require(`../pages/${this.dir}/_/codes/en/${id}.json`)
      return code.div
    }
  }
}
