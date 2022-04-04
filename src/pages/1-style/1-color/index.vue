<template>
  <d-page :nodes="nodes">
    <d-page-h h="1-0" />

    <p v-html="t(1)"></p>
    <p v-html="t(2) + l(1) + '.' + t(3) + l(2) + '.'"></p>

    <d-page-h h="2-1" />

    <p v-html="t(4) + sc(1, 'a')"></p>
    <p v-html="t(5)"></p>

    <d-page-h h="2-2" />

    <p v-html="t(6) + sc(2) + t(7) + sc(3) + e1() + ':'"></p>
    <p v-html="sc(4)"></p>
    <p v-html="t(8) + sc(5, 'a')"></p>
    <p v-html="t(9) + sc(6) + t(10)"></p>

    <d-page-h h="2-3" />

    <p v-html="t(11) + sc(7, 'o', '') + t(12)"></p>

    <d-page-source-code :index="0" />

    <d-page-h h="2-4" />

    <p v-html="t(13) + sc(3) + t(14) + sc(8, ',', '') + t(15)"></p>

    <d-page-source-code :index="1" />

    <d-page-h h="2-5" />

    <p v-html="t(16)"></p>

    <d-page-source-code :index="2" language="css" />

    <p v-html="t(17)"></p>

    <d-page-source-code :index="3" />

    <p style="color: #b50000;">... (This page is still under construction!)</p>
  </d-page>
</template>

<script>
import Overview from 'src/pages/overview'

export default {
  mixins: [Overview],

  data () {
    return {
      nodes: [
        {
          id: 0,
          children: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 }
          ]
        }
      ],

      tokens: [
        ['primary', 'secondary', 'accent'],
        '&lt;style lang=&quot;stylus&quot;&gt;',
        '*.vue',
        ['primary', 'secondary', 'accent', 'positive', 'negative', 'info', 'warning', 'white', 'light', 'dark', 'faded'],
        ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey'],
        ['red', 'red-1', 'red-2', '…', 'red-14'],
        ['text-', 'bg-'],
        ['$primary', '$red-1']
      ]
    }
  },

  methods: {
    e1 () { // Exception 1
      if (this.$i18n.locale === 'en-US') {
        return ` ${this.$t('_f')}`
      }

      return ''
    }
  }
}
</script>
