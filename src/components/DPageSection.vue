<template lang="pug">
section
  template(v-for="(token, index) in tokenized" v-key="index")
    d-h2(
      v-if="token.tag === 'h2'"
      :id="this.id + token.map[0]"
      :value="token.content"
    )
    d-h3(
      v-else-if="token.tag === 'h3'"
      :id="this.id + token.map[0]"
      :value="token.content"
    )
    d-h4(
      v-else-if="token.tag === 'h4'"
      :id="this.id + token.map[0]"
      :value="token.content"
    )
    d-h5(
      v-else-if="token.tag === 'h5'"
      :id="this.id + token.map[0]"
      :value="token.content"
    )
    d-h6(
      v-else-if="token.tag === 'h6'"
      :id="this.id + token.map[0]"
      :value="token.content"
    )

    ul(
      v-else-if="token.tag === 'ul'"
      v-html="token.content"
    )
    ol(
      v-else-if="token.tag === 'ol'"
      v-html="token.content"
    )

    table(
      v-else-if="token.tag === 'table'"
      v-html="token.content"
    )

    p(
      v-else-if="token.tag === 'p'"
      v-html="token.content"
    )

    d-page-source-code(
      v-else-if="token.tag === 'code'"
      :index="this.id + index"
      :text="token.content"
      :language="token.info"
    )
</template>

<script>
import MarkdownIt from 'markdown-it'
import attrs from 'markdown-it-attrs'

import DH2 from './DH2.vue'
import DH3 from './DH3.vue'
import DH4 from './DH4.vue'
import DH5 from './DH5.vue'
import DH6 from './DH6.vue'
import DPageSourceCode from './DPageSourceCode.vue'

export default {
  name: 'DPageSection',
  components: {
    DH2,
    DH3,
    DH4,
    DH5,
    DH6,
    DPageSourceCode
  },

  props: {
    id: {
      type: Number,
      required: true
    }
  },

  data () {
    return {
      // Data
      tokens: [],
      // Meta
      parsed: false
    }
  },
  computed: {
    tokenized () {
      const absolute = this.$store.state.i18n.absolute

      if (!absolute) {
        return
      }

      const source = this.$t(`_.${absolute}.source`)

      const Markdown = new MarkdownIt()
      Markdown.use(attrs, {
        leftDelimiter: ':',
        rightDelimiter: ';',
        allowedAttributes: [] // empty array = all attributes are allowed
      })

      const parsed = Markdown.parse(source)

      // @ map
      const tokens = []
      let level = 0
      let tag = ''
      const children = []
      parsed.forEach((element) => {
        switch (element.type) {
          case 'bullet_list_open':
          case 'ordered_list_open':
          case 'table_open':
            level++
        }

        // Render
        if (element.type === 'inline') {
          element.content = Markdown.renderInline(element.content)
        }

        if (level === 0) {
          // Prepare
          switch (element.type) {
            case 'heading_open':
            case 'paragraph_open':
            case 'list_item_open':
              tag = element.tag
          }

          // Push
          switch (element.type) {
            case 'inline':
              tokens.push({
                tag,
                map: element.map,
                content: element.content,
                info: element.info,
                children
              })

              break
            case 'fence':
              tokens.push({
                tag: element.tag,
                content: element.content,
                info: element.info
              })
          }
        } else if (level === 1) {
          const parent = tokens[tokens.length - 1]

          switch (element.type) {
            case 'bullet_list_open':
              tokens.push({
                tag: 'ul',
                content: ''
              })
              break
            case 'ordered_list_open':
              tokens.push({
                tag: 'ol',
                content: ''
              })
              break
            case 'table_open':
              tokens.push({
                tag: 'table',
                content: ''
              })
              break

            case 'list_item_open':
              parent.content += '<li>'
              break

            case 'thead_open':
              parent.content += '<thead>'
              break
            case 'tbody_open':
              parent.content += '<tbody>'
              break
            case 'tr_open':
              parent.content += '<tr>'
              break
            case 'th_open':
              parent.content += '<th>'
              break
            case 'td_open':
              parent.content += '<td>'
              break

            case 'inline':
              // TODO support to level > 1
              parent.content += element.content
              break

            case 'list_item_close':
              parent.content += '</li>'
              break

            case 'thead_close':
              parent.content += '</thead>'
              break
            case 'tbody_close':
              parent.content += '</tbody>'
              break
            case 'tr_close':
              parent.content += '</tr>'
              break
            case 'th_close':
              parent.content += '</th>'
              break
            case 'td_close':
              parent.content += '</td>'
              break
          }
        }

        switch (element.type) {
          case 'bullet_list_close':
          case 'ordered_list_close':
          case 'table_close':
            level--
        }
      })

      // console.log(parsed, tokens)

      return tokens
    }
  },
  // @ Events
  created () {
    // console.log('DPageSection.created!')
  },

  beforeMount () {
    // console.log('DPageSection.beforeMount!')
  },
  mounted () {
    // console.log('DPageSection.mounted!')
  },

  beforeUpdate () {
    // console.log('DPageSection.beforeUpdate!')
  },
  updated () {
    // console.log('DPageSection.updated!')
  },

  beforeUnmount () {
    // console.log('DPageSection.beforeUnmount!')
  },
  unmount () {
    // console.log('DPageSection.unmount!')
  }
}
</script>

<style lang="sass">
.content
  p
    line-height: 1.6em

    &.overview
      word-spacing: 0.05em

  .source-code
    margin: 0 0 16px
</style>
