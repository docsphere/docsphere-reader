<template>
  <q-page class="padding">
    <h1>{{ $t('_.style.color._') }}</h1>
    <p>{{ _('p1') }}</p>
    <p>{{ _('p2') }} <a target="_blank" href="https://quasar-framework.org/guide/quasar-theming.html">Quasar Theming.</a> {{ _('p3') }} <a href="https://quasar-framework.org/components/color-utils.html" target="_blank">Color Utils</a>.</p>
    <h2>{{ _('t1') }}</h2>
    <p>{{ _('p4') }} <code>primary</code>, <code>secondary</code> {{ $t('_a') }} <code>tertiary</code>.</p>
    <p>{{ _('p5') }}</p>
    <h2>{{ _('t2') }}</h2>
    <p>{{ _('p6') }} <code>{{ smallcode1 }}</code>{{ _('p7') }} <code>*.vue</code>:</p>
    <p><code>primary</code>, <code>secondary</code>, <code>tertiary</code>, <code>positive</code>, <code>negative</code>, <code>info</code>, <code>warning</code>, <code>white</code>, <code>light</code>, <code>dark</code>, <code>faded</code></p>
    <p>{{ _('p8') }}: <code>red</code>, <code>pink</code>, <code>purple</code>, <code>deep-purple</code>, <code>indigo</code>, <code>blue</code>, <code>light-blue</code>, <code>cyan</code>, <code>teal</code>, <code>green</code>, <code>light-green</code>, <code>lime</code>, <code>yellow</code>, <code>amber</code>, <code>orange</code>, <code>deep-orange</code>, <code>brown</code>, <code>grey</code>, <code>blue-grey</code></p>
    <p>{{ _('p9') }}: <code>red</code>, <code>red-1</code>, <code>red-2</code>, <code>…</code>, <code>red-14</code>. {{ _('p10') }}.</p>
    <h2>{{ _('t3') }}</h2>
    <p>{{ _('p11') }} <code>text-</code> {{ $t('_o') }} <code>bg-</code> {{ _('p12') }}</p>
    <div v-html="code(1)"></div>
    <h2>{{ _('t4') }}</h2>
    <p>{{ _('p13') }} <code>*.vue</code> {{ _('p14') }} <code>$primary</code>, <code>$red-1</code>, {{ _('p15') }}</p>
    <div v-html="code(2)"></div>
    <h2>{{ _('t5') }}</h2>
    <p>{{ _('p16') }}</p>
    <div v-html="code(3)"></div>
    <p>{{ _('p17') }}</p>
    <div v-html="code(4)"></div>
    <p style="color: red;">... (This page is in the process of being finalized!)</p>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      smallcode1: `<style lang="stylus">`
    }
  },
  methods: {
    _ (property) {
      return this.$t(`_.style.color.overview.${property}`)
    },
    code (id) {
      const code = require(`./_/code${id}.json`)
      return code.div
    }
  }
}
</script>

<style lang="stylus"></style>
