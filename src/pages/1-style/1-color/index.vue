<template>
  <q-page class="padding">
    <h5>{{ $t('section.style.color._') }}</h5>
    <p>{{ $t('section.style.color.overview.p1') }}</p>
    <p>{{ $t('section.style.color.overview.p2') }} <a target="_blank" href="https://quasar-framework.org/guide/quasar-theming.html">Quasar Theming.</a> {{ $t('section.style.color.overview.p3') }} <a href="https://quasar-framework.org/components/color-utils.html" target="_blank">Color Utils</a>.</p>
    <h6>{{ $t('section.style.color.overview.t1') }}</h6>
    <p>{{ $t('section.style.color.overview.p4') }} <code>primary</code>, <code>secondary</code> {{ $t('_.and') }} <code>tertiary</code>.</p>
    <p>{{ $t('section.style.color.overview.p5') }}</p>
    <h6>{{ $t('section.style.color.overview.t2') }}</h6>
    <p>{{ $t('section.style.color.overview.p6') }} <code>{{ smallcode1 }}</code>{{ $t('section.style.color.overview.p7') }} <code>*.vue</code>:</p>
    <p><code>primary</code>, <code>secondary</code>, <code>tertiary</code>, <code>positive</code>, <code>negative</code>, <code>info</code>, <code>warning</code>, <code>white</code>, <code>light</code>, <code>dark</code>, <code>faded</code></p>
    <p>{{ $t('section.style.color.overview.p8') }}: <code>red</code>, <code>pink</code>, <code>purple</code>, <code>deep-purple</code>, <code>indigo</code>, <code>blue</code>, <code>light-blue</code>, <code>cyan</code>, <code>teal</code>, <code>green</code>, <code>light-green</code>, <code>lime</code>, <code>yellow</code>, <code>amber</code>, <code>orange</code>, <code>deep-orange</code>, <code>brown</code>, <code>grey</code>, <code>blue-grey</code></p>
    <p>{{ $t('section.style.color.overview.p9') }}: <code>red</code>, <code>red-1</code>, <code>red-2</code>, <code>…</code>, <code>red-14</code>. {{ $t('section.style.color.overview.p10') }}.</p>
    <h6>{{ $t('section.style.color.overview.t3') }}</h6>
    <p>{{ $t('section.style.color.overview.p11') }} <code>text-</code> {{ $t('_.or') }} <code>bg-</code> {{ $t('section.style.color.overview.p12') }}</p>
    <div v-html="code(1)"></div>
    <h6>{{ $t('section.style.color.overview.t4') }}</h6>
    <p>{{ $t('section.style.color.overview.p13') }} <code>*.vue</code> {{ $t('section.style.color.overview.p14') }} <code>$primary</code>, <code>$red-1</code>, {{ $t('section.style.color.overview.p15') }}</p>
    <div v-html="code(2)"></div>
    <h6>{{ $t('section.style.color.overview.t5') }}</h6>
    <p>{{ $t('section.style.color.overview.p16') }}</p>
    <div v-html="code(3)"></div>
    <p>{{ $t('section.style.color.overview.p17') }}</p>
    <div v-html="code(4)"></div>
    <p>... (UNDER CONSTRUCTION)</p>
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
    code (id) {
      const code = require(`./_/code${id}.json`)
      return code.div
    }
  }
}
</script>

<style lang="stylus"></style>
