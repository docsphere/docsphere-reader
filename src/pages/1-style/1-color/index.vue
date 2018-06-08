<template>
  <q-page :class="row">
    <q-scroll-area id="anchor" :class="meta">
      <d-anchor :nodes="nodes" :namespace="namespace" />
    </q-scroll-area>
    <q-scroll-area id="content" :class="main">
      <h1 v-html="h(0)"></h1>
      <p v-html="t(1)"></p>
      <p v-html="t(2) + l(1) + '.' + t(3) + l(2) + '.'"></p>

      <h2 v-html="h(1)"></h2>
      <p v-html="t(4) + sc(1, 'a')"></p>
      <p v-html="t(5)"></p>

      <h2 v-html="h(2)"></h2>
      <p v-html="t(6) + sc(2) + t(7) + sc(3) + e1() + ':'"></p>
      <p v-html="sc(4)"></p>
      <p v-html="t(8) + sc(5, 'a')"></p>
      <p v-html="t(9) + sc(6) + t(10)"></p>

      <h2 v-html="h(3)"></h2>
      <p v-html="t(11) + sc(7, 'o', '') + t(12)"></p>
      <div v-html="c(1)"></div>

      <h2 v-html="h(4)"></h2>
      <p v-html="t(13) + sc(3) + t(14) + sc(8, ',', '') + t(15)"></p>
      <div v-html="c(2)"></div>

      <h2 v-html="h(5)"></h2>
      <p v-html="t(16)"></p>
      <div v-html="c(3)"></div>
      <p v-html="t(17)"></p>
      <div v-html="c(4)"></div>
      <p style="color: red;">... (This page is still under construction!)</p>

      <d-nav :prev="prev" :next="next" />
    </q-scroll-area>
  </q-page>
</template>

<script>
import DAnchor from '/src/components/DPage/DAnchor'
import DNav from '/src/components/DPage/DNav'

import Translation from '/src/i18n/translation'
import Flexbox from '/src/layouts/flexbox'

export default {
  components: {
    DAnchor, DNav
  },
  mixins: [Translation, Flexbox],

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

      namespace: 'style.color',
      dir: '1-style/1-color',

      codes: [
        ['primary', 'secondary', 'tertiary'],
        '&lt;style lang=&quot;stylus&quot;&gt;',
        '*.vue',
        ['primary', 'secondary', 'tertiary', 'positive', 'negative', 'info', 'warning', 'white', 'light', 'dark', 'faded'],
        ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey'],
        ['red', 'red-1', 'red-2', '…', 'red-14'],
        ['text-', 'bg-'],
        ['$primary', '$red-1']
      ],

      prev: [
        'starting/rtl', this.$t('_.starting.rtl._')
      ],
      next: [
        'starting/platform', this.$t('_.starting.platform._')
      ]
    }
  },

  methods: {
    e1 () { // Exception 1
      if (this.$i18n.locale === 'en') {
        return ` ${this.$t('_f')}`
      }

      return ''
    }
  }
}
</script>

<style lang="stylus"></style>
