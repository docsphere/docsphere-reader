<template lang="pug">
q-page-container
  q-page.content
    .text-center.q-pa-xs.q-pt-md
      h1 Docsphere Documentation System

      p.caption
        | {{ $t('_.home.texts[0]') }}
        a(href="https://github.com/docsphere/docsphere-reader/" target="_blank") Docsphere Reader
        | !
      p.caption
        | {{ $t('_.home.texts[1]') }}
        a(href="https://github.com/rodrigoslayertech/" target="_blank") Rodrigo Vieira
      hr

    div.row.no-wrap.justify-center.items-center.content-center(
      style="max-width: 735px; margin: auto; height: calc(100vh + 45px)"
    )
      q-carousel.content.col-12.text-center(
        v-model="slide", v-model:fullscreen="fullscreen"
        animated,
        swipeable,
        navigation, navigation-position="top"
        infinite,
        :autoplay="autoplay",
        control-type="push", control-color="primary"
        transition-prev="slide-right", transition-next="slide-left"
        :height="fullscreen ? '100vh' : '100%'"
      )
        template(v-slot:navigation-icon="{ active, btnProps, onClick }")
          q-btn(v-if="active" size="md" icon="radio_button_checked" color="primary" flat round dense @click="onClick")
          q-btn(v-else size="sm" icon="radio_button_unchecked" flat round dense @click="onClick")

        template(v-slot:control)
          q-carousel-control(v-if="$q.platform.is.mobile" position="top-right", :offset="[18, 5]")
            q-btn(
              push, round, dense,
              color="white", text-color="primary", :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'",
              @click="fullscreen = !fullscreen"
            )
</template>

<script>
import { useQuasar } from 'quasar'

import { ref } from 'vue'

export default {
  setup () {
    const $q = useQuasar()

    // TODO make the Carrousel a custom component?

    return {
      $q,

      slide: ref(1),
      autoplay: ref(8000),
      fullscreen: ref(false),

      links: [],
      videos: []
    }
  }
}
</script>

<style lang="sass">
img.platform
  padding-top: 30px
  padding-bottom: 30px
</style>
