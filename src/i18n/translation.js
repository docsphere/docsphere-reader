export default {
  methods: {
    h (index) {
      let h = null
      if (index === 0) {
        h = this.$t(`_.${this.namespace}._`)
      } else {
        h = this.$t(`_.${this.namespace}.overview.h[${index - 1}]`)
      }

      return `<span id="${index}" class="header-link">${h}</span>`
    },
    t (index) {
      return this.$t(`_.${this.namespace}.overview.t[${--index}]`)
    },
    l (index) {
      const l = this.$t(`_.${this.namespace}.overview.l[${--index}]`)
      return `<a href="${l[0]}" target="_blank">${l[1]}</a>`
    },

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
    },
    c (id) {
      const code = require(`../pages/${this.dir}/_/codes/en/${id}.json`)
      return code.div
    }
  }
}
