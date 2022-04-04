<template lang="pug">
q-page-container
  q-page#content.q-pa-lg
    .text-center
      img.platform(alt="Quasar Platforms" src="quasar/responsive-logo.png" width="325" height="257")
      h1 Quasar Documentation++
        span.text-negative (WIP)
      p.caption
        span(v-html="t('_.home.texts[0]') + t('_.home.texts[1]') + t('_.home.texts[2]')")
        a(href="https://quasar-framework.org/" target="_blank") Quasar Framework
        | !
      p.caption
        span
        | {{ $t('_.home.texts[3]') }}
        a(href="https://github.com/slowaways/" target="_blank") @slowaways
      hr
</template>

<script>
import translation from 'src/i18n/translation'

export default {
  data () {
    return {
      radio: 'two'
    }
  },
  mixins: [translation]
}
</script>

<style lang="sass">
img.platform
  padding-top: 30px
  padding-bottom: 30px
</style>
