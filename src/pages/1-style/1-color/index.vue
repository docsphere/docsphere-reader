<template>
  <q-page class="padding">
    <h5>{{ $t('section.style.color._') }}</h5>
    <p>{{ $t('section.style.color.guide.p1') }}</p>
    <p>{{ $t('section.style.color.guide.p2') }} <a target="_blank" href="https://quasar-framework.org/guide/quasar-theming.html">Quasar Theming.</a> {{ $t('section.style.color.guide.p3') }} <a href="https://quasar-framework.org/components/color-utils.html" target="_blank">Color Utils</a>.</p>
    <h6>{{ $t('section.style.color.guide.t1') }}</h6>
    <p>{{ $t('section.style.color.guide.p4') }} <code>primary</code>, <code>secondary</code> {{ $t('_.and') }} <code>tertiary</code>.</p>
    <p>{{ $t('section.style.color.guide.p5') }}</p>
    <h6>{{ $t('section.style.color.guide.t2') }}</h6>
    <p>{{ $t('section.style.color.guide.p6') }} <code>{{ smallcode1 }}</code>{{ $t('section.style.color.guide.p7') }} <code>*.vue</code>:</p>
    <p><code>primary</code>, <code>secondary</code>, <code>tertiary</code>, <code>positive</code>, <code>negative</code>, <code>info</code>, <code>warning</code>, <code>white</code>, <code>light</code>, <code>dark</code>, <code>faded</code></p>
    <p>{{ $t('section.style.color.guide.p8') }}: <code>red</code>, <code>pink</code>, <code>purple</code>, <code>deep-purple</code>, <code>indigo</code>, <code>blue</code>, <code>light-blue</code>, <code>cyan</code>, <code>teal</code>, <code>green</code>, <code>light-green</code>, <code>lime</code>, <code>yellow</code>, <code>amber</code>, <code>orange</code>, <code>deep-orange</code>, <code>brown</code>, <code>grey</code>, <code>blue-grey</code></p>
    <p>{{ $t('section.style.color.guide.p9') }}: <code>red</code>, <code>red-1</code>, <code>red-2</code>, <code>…</code>, <code>red-14</code>. {{ $t('section.style.color.guide.p10') }}.</p>
    <h6>{{ $t('section.style.color.guide.t3') }}</h6>
    <p>{{ $t('section.style.color.guide.p11') }} <code>text-</code> {{ $t('_.or') }} <code>bg-</code> {{ $t('section.style.color.guide.p12') }}</p>
    <vue-embed-gist gist-id="/slowaways/408f5777df02764bf756906138b032fc" />
    <h6>{{ $t('section.style.color.guide.t4') }}</h6>
    <p>{{ $t('section.style.color.guide.p13') }} <code>*.vue</code> {{ $t('section.style.color.guide.p14') }} <code>$primary</code>, <code>$red-1</code>, {{ $t('section.style.color.guide.p15') }}</p>
    <vue-embed-gist gist-id="/slowaways/38d0a381cfa4fa00e6f9cccaf992cc93" />
    <h6>{{ $t('section.style.color.guide.t5') }}</h6>
    <p>{{ $t('section.style.color.guide.p16') }}</p>
    <vue-embed-gist gist-id="/slowaways/3d1b0710a65107e02ee1d1233dadc3f9" />
    <p>{{ $t('section.style.color.guide.p17') }}</p>
    <vue-embed-gist gist-id="/slowaways/bc8bf01394eee427530a4945134546cc" />
    <p>... (UNDER CONSTRUCTION)</p>
  </q-page>
</template>

<script>
import VueEmbedGist from 'vue-embed-gist'

export default {
  components: {
    VueEmbedGist
  },

  data () {
    return {
      smallcode1: `<style lang="stylus">`
    }
  }
}
</script>

<style lang="stylus"></style>
