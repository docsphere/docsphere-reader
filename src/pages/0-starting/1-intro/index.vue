<template>
  <q-page class="padding">
    <h1>{{ $t('_.starting.intro._') }}</h1>
    <p>{{ _('p1') }}<a :href="_('l1')" target="_blank">{{ _('p2') }}</a> {{ $t('_and') }} <a :href="_('l2')" target="_blank">{{ _('p3') }}</a>{{ _('p4') }} <a href="_('l3')" target="_blank">{{ _('p5') }}</a> {{ _('p6') }}</p>
    <p>{{ _('p7') }} <a :href="_('l4')" target="_blank">{{ _('p8') }}.</a></p>
    <p>{{ _('p9') }}</p>
    <h2>{{ _('t1') }}</h2>
    <p>{{ _('p10') }} <code>*.vue</code> {{ _('p11') }}</p>
    <div v-html="code(1)"></div>
    <h3>{{ _('t2') }}</h3>
    <p>{{ _('p12') }} <code v-html="smallcode1"></code> {{ _('p13') }} <a href="http://stylus-lang.com/" target="_blank">Stylus</a>{{ _('p14') }}<code>yarn add --dev less-loader</code>{{ $t('_or') }}<code>npm install --save-dev less-loader</code>)</p>
    <p>{{ _('p15') }}</p>
    <div v-html="code(2)"></div>
    <p>{{ _('p16') }}<code>stylus</code>{{ _('p17') }}</p>
    <h2>{{ _('t3') }}</h2>
    <p>{{ _('p18') }}<a :href="_('l5')">{{ _('p19') }}</a>. {{ _('p20') }}</p>
    <p>{{ _('p21') }}</p>
    <div v-html="code(3)"></div>
    <blockquote>
      <p>{{ _('p22') }}<code>v-ripple</code>. {{ _('p23') }}<code>v-</code>.</p>
    </blockquote>
    <p>{{ _('p24') }}<code>/quasar.conf.js</code> {{ _('p25') }}</p>
    <div v-html="code(4)"></div>
    <p>{{ _('p26') }}</p>
    <div v-html="code(5)"></div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      smallcode1: '&lt;style&gt;'
    }
  },
  methods: {
    _ (property) {
      return this.$t(`_.starting.intro.overview.${property}`)
    },
    code (id) {
      const code = require(`./_/code${id}.json`)
      return code.div
    }
  }
}
</script>

<style lang="stylus"></style>
