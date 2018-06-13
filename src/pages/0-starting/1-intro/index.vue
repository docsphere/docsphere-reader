<template>
  <d-page :nodes="nodes">
    <d-h h="1-0" />
    <p v-html="t(1) + l(1) + t('_a') + l(2) + t(2) + l(3) + t(3)"></p>
    <p v-html="t(4) + l(4) + '.'"></p>
    <p v-html="t(5)"></p>

    <d-h h="2-1" />
    <p v-html="t(6) + sc(1) + t(7)"></p>
    <div v-html="c(1)"></div>

    <d-h h="3-2" />
    <p v-html="t(8) + sc(2) + t(9) + l(5) + t(10) + sc(3) + t('_o') + sc(4) + ').'"></p>
    <p v-html="t(11)"></p>
    <div v-html="c(2)"></div>
    <p v-html="t(12) + sc(2) + t(13)"></p>

    <d-h h="2-3" />
    <p v-html="t(14) + l(6) + t(15)"></p>
    <p v-html="t(16)"></p>
    <div v-html="c(3)"></div>
    <blockquote>
      <p v-html="t(17) + sc(5) + t(18) + sc(6) + '.'"></p>
    </blockquote>
    <p v-html="t(19) + sc(7) + t(20)"></p>
    <div v-html="c(4)"></div>
    <p v-html="t(21) + sc(7)"></p>
    <div v-html="c(5)"></div>
    <p v-html="t(22)"></p>
    <div v-html="c(6)"></div>

    <d-h h="2-4" />
    <p style="color: red;">... (This page is still under construction!)</p>
  </d-page>
</template>

<script>
import DPage from '/src/components/DPage'

import DH from '/src/components/DH'

import Translation from '/src/i18n/translation'

export default {
  components: {
    DPage, DH
  },
  mixins: [Translation],

  data () {
    return {
      nodes: [
        {
          id: 0,
          children: [
            {
              id: 1,
              children: [
                { id: 2 }
              ]
            },
            { id: 3 },
            { id: 4 }
          ]
        }
      ],

      codes: [
        '*.vue',
        '&lt;style&gt;',
        'yarn add --dev less-loader',
        'npm install --save-dev less-loader',
        'v-ripple',
        'v-',
        '/quasar.conf.js'
      ]
    }
  }
}
</script>

<style lang="stylus" scoped></style>
