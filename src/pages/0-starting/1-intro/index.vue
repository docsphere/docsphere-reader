<template>
  <q-scroll-area id="main">
    <h1>{{ $t('_.starting.intro._') }}</h1>
    <p v-html="p(1) + l(1) + $t('_a') + l(2) + p(2) + l(3) + p(3)"></p>
    <p v-html="p(4) + l(4) + '.'"></p>
    <p v-html="p(5)"></p>

    <h2 v-html="h(1)"></h2>
    <p v-html="p(6) + sm(1) + p(7)"></p>
    <div v-html="c(1)"></div>

    <h3 v-html="h(2)"></h3>
    <p v-html="p(8) + sm(2) + p(9) + l(5) + p(10) + sm(3) + $t('_o') + sm(4) + ').'"></p>
    <p v-html="p(11)"></p>
    <div v-html="c(2)"></div>
    <p v-html="p(12) + sm(2) + p(13)"></p>

    <h2 v-html="h(3)"></h2>
    <p v-html="p(14) + l(6) + p(15)"></p>
    <p v-html="p(16)"></p>
    <div v-html="c(3)"></div>
    <blockquote>
      <p v-html="p(17) + sm(5) + p(18) + sm(6) + '.'"></p>
    </blockquote>
    <p v-html="p(19) + sm(7) + p(20)"></p>
    <div v-html="c(4)"></div>
    <p v-html="p(21) + sm(7)"></p>
    <div v-html="c(5)"></div>
    <p v-html="p(22)"></p>
    <div v-html="c(6)"></div>

    <h2 v-html="h(4)"></h2>
    <p style="color: red;">... (This page is in the process of being finalized!)</p>
  </q-scroll-area>
</template>

<script>
import translation from 'src/i18n/translation'

export default {
  mixins: [translation],

  data () {
    return {
      namespace: 'starting.intro',
      dir: '0-starting/1-intro',
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

<style lang="stylus"></style>
