<template>
  <article v-if="index" class="source-code">
    <div class="content code white">
      <div v-if="lines" class="lines">
        <template v-for="(line, index) in lines" :key="index">
          <a class="line" :href="`${$store.state.page.base}#${anchor}${line}`" :id="`${anchor}${line}`">
            <i aria-hidden="true" data-hidden="true" class="fa fa-link"></i>
            <span>{{ line }}</span>
          </a>
        </template>
      </div>
      <pre>
        <code :class="`language-${language}`" v-html="code"></code>
      </pre>
    </div>
  </article>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'DPageSourceCode',

  props: {
    index: {
      type: Number,
      required: true
    },
    language: {
      type: String,
      default: 'html'
    }
  },

  computed: {
    anchor () {
      return this.printToLetter(this.index + 1)
    },
    lines () {
      const lines = this.text.split(/\r\n|\r|\n/).length
      return lines
    },
    code () {
      if (this.text) {
        const code = Prism.highlight(this.text, Prism.languages[this.language], this.language)
        return code
      } else {
        return ''
      }
    }
  },

  methods: {
    // TODO move to library/utils
    printToLetter (number) {
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      let result = ''

      let charIndex = number % alphabet.length
      let quotient = number / alphabet.length

      if (charIndex - 1 === -1) {
        charIndex = alphabet.length
        quotient--
      }

      result = alphabet.charAt(charIndex - 1)

      if (quotient >= 1) {
        return this.printToLetter(parseInt(quotient)) + result
      }

      return result
    }
  },

  // @ Events
  beforeCreate () {
    if (this.index) {
      const pathbase = this.$store.state.i18n.base
      const path = `_.${pathbase}.overview.codes[${this.index}]`

      if (pathbase.length > 0 && (this.$te(path) || this.$te(path, 'en-US'))) {
        this.text = this.$tm(path)
      } else {
        this.text = ''
      }
    }
  }
}
</script>

<style lang="sass">
article.source-code
  .content
    font-family: "Menlo", "DejaVu Sans Mono", "Liberation Mono", "Consolas", "Ubuntu Mono", "Courier New", "Andale Mono", "Lucida Console", Monospace
    border: 1px solid #ddd
    border-bottom: 1px solid #ccc
    border-radius: 3px
    margin: 0
    padding: 0

    .lines
      padding: 10px 5px
      text-align: right
      float: left
      -webkit-user-select: none
      user-select: none
      background-color: #fafafa

      a
        display: block
        border-color: #f0f0f0
        font-size: 90% !important
        min-height: 19px
        white-space: nowrap
        padding: 0 3px
        color: rgba(27, 31, 35, 0.5) !important

        &:hover
          i
            visibility: visible

        i
          float: left
          margin-top: 3px
          margin-right: 5px
          visibility: hidden
    pre
      display: flex

      margin: 0
      border: 0
      padding: 10px

      white-space: pre
      word-wrap: normal

      line-height: 19px

      overflow: auto
      overflow-y: hidden

      > code
        display: block
        font-size: 90%
        min-width: 100%
        padding: 0

/* Tokens */
.token.comment,
.token.prolog,
.token.doctype,
.token.cdata
  color: #4e5a65

.token.punctuation
  color: #999

.token.namespace
  opacity: .7

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted
  color: #905

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted
  color: #416200

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string
  color: #9a6e3a
  /* This background color was intended by the author of this theme. */
  background: hsla(0, 0%, 100%, .5)

.token.atrule,
.token.attr-value,
.token.keyword
  color: #07a

.token.function,
.token.class-name
  color: #DD4A68

.token.regex,
.token.important,
.token.variable
  color: #e90

.token.important,
.token.bold
  font-weight: bold
.token.italic
  font-style: italic

.token.entity
  cursor: help
</style>
