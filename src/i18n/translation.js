export default {
  methods: {
    // Texts
    t (index) {
      if (typeof index === 'number') {
        const base = this.$store.state.i18n.base
        return this.$t(`_.${base}.overview.texts[${--index}]`)
      } else if (typeof index === 'string') {
        return this.$t(index)
      }
    },
    // Links
    l (index) {
      const base = this.$store.state.i18n.base
      const l = this.$t(`_.${base}.overview.links[${--index}]`)
      return `<a href="${l[0]}" target="_blank">${l[1]}</a>`
    },
    // Small Codes
    sc (index, separator = '', final = '.') {
      let code = this.codes[--index]

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
