<template>
  <q-page class="padding">
    <h5>{{ $t('_.starting.intro._') }}</h5>
    <p>{{ _('p1') }}<a :href="_('l1')" target="_blank">{{ _('p2') }}</a> {{ $t('_and') }} <a :href="_('l2')" target="_blank">{{ _('p3') }}</a>{{ _('p4') }} <a href="_('l3')" target="_blank">{{ _('p5') }}</a> {{ _('p6') }}</p>
    <p>{{ _('p7') }} <a :href="_('l4')" target="_blank">{{ _('p8') }}.</a></p>
    <p>{{ _('p9') }}</p>
    <h6>{{ _('t1') }}</h6>
    <p>{{ _('p10') }} <code>*.vue</code> {{ _('p11') }}</p>
    <div v-html="code(1)"></div>
    <h7>{{ _('t2') }}</h7>
    <p>{{ _('p12') }} <code v-html="smallcode1"></code> {{ _('p13') }}</p>
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
