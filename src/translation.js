export default {
  methods: {
    h (index) {
      return this.$t(`_.${this.namespace}.overview.h[${--index}]`)
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
      const code = require(`./pages/${this.dir}/_/codes/en/${id}.json`)
      return code.div
    }
  }
}
