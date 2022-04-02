export default {
  computed: {},
  methods: {
    // Texts
    t (key) {
      const base = this.$store.state.i18n.base

      // if (base.length === 0) return ''

      if (typeof key === 'number' && base.length > 0) {
        return this.$tm(`_.${base}.overview.texts[${--key}]`)
      } else if (typeof key === 'string') {
        return this.$t(key)
      }
    },
    // Links
    l (index) {
      const base = this.$store.state.i18n.base

      const l = this.$tm(`_.${base}.overview.links[${--index}]`)
      return `<a href="${l[0]}" target="_blank">${l[1]}</a>`
    },
    // Codes
    c (index) {
      const base = this.$store.state.i18n.base
      const path = `_.${base}.overview.codes[${--index}]`

      if (typeof index === 'number' && base.length > 0 && this.$te(path)) {
        return this.$tm(path)
      } else {
        return ''
      }
    },
    // Small Codes
    sc (index, separator = '', final = '.') {
      const code = this.tokens[--index]

      if (code.constructor === Array) {
        let codes = ''

        switch (separator) {
          case 'a':
            separator = this.$t('_a')
            break
          case 'o':
            separator = this.$t('_o')
            break
        }

        const codeLength = code.length
        for (let i = 0; i < codeLength; i++) {
          if (code[codeLength - 1] === code[i]) {
            codes += `<code>${code[i]}</code>${final}`
          } else if (separator && code[codeLength - 2] === code[i]) {
            codes += `<code>${code[i]}</code>${separator} `
          } else {
            codes += `<code>${code[i]}</code>, `
          }
        }

        return codes
      }

      return `<code>${code}</code>`
    }
  }
}
