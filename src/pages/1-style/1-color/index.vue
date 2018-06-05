<template>
  <q-scroll-area id="standard">
    <div id="main" class="row">
      <div id="content" :class="content">
        <h1>{{ $t('_.style.color._') }}</h1>
        <p v-html="p(1)"></p>
        <p v-html="p(2) + l(1) + '.' + p(3) + l(2) + '.'"></p>

        <h2 v-html="h(1)"></h2>
        <p>{{ _('p4') }} <code>primary</code>, <code>secondary</code> {{ $t('_a') }} <code>tertiary</code>.</p>
        <p>{{ _('p5') }}</p>

        <h2 v-html="h(2)"></h2>
        <p>{{ _('p6') }} <code>{{ codes[0] }}</code>{{ _('p7') }} <code>*.vue</code>:</p>
        <p><code>primary</code>, <code>secondary</code>, <code>tertiary</code>, <code>positive</code>, <code>negative</code>, <code>info</code>, <code>warning</code>, <code>white</code>, <code>light</code>, <code>dark</code>, <code>faded</code></p>
        <p>{{ _('p8') }}: <code>red</code>, <code>pink</code>, <code>purple</code>, <code>deep-purple</code>, <code>indigo</code>, <code>blue</code>, <code>light-blue</code>, <code>cyan</code>, <code>teal</code>, <code>green</code>, <code>light-green</code>, <code>lime</code>, <code>yellow</code>, <code>amber</code>, <code>orange</code>, <code>deep-orange</code>, <code>brown</code>, <code>grey</code>, <code>blue-grey</code></p>
        <p>{{ _('p9') }}: <code>red</code>, <code>red-1</code>, <code>red-2</code>, <code>…</code>, <code>red-14</code>. {{ _('p10') }}.</p>

        <h2 v-html="h(3)"></h2>
        <p>{{ _('p11') }} <code>text-</code> {{ $t('_o') }} <code>bg-</code> {{ _('p12') }}</p>
        <div v-html="c(1)"></div>

        <h2 v-html="h(4)"></h2>
        <p>{{ _('p13') }} <code>*.vue</code> {{ _('p14') }} <code>$primary</code>, <code>$red-1</code>, {{ _('p15') }}</p>
        <div v-html="c(2)"></div>

        <h2 v-html="h(5)"></h2>
        <p>{{ _('p16') }}</p>
        <div v-html="c(3)"></div>
        <p>{{ _('p17') }}</p>
        <div v-html="c(4)"></div>
        <p style="color: red;">... (This page is in the process of being finalized!)</p>
      </div>
      <div id="anchor" :class="anchor">
        <d-anchor :nodes="nodes" />
      </div>
    </div>
  </q-scroll-area>
</template>

<script>
import Translation from 'src/i18n/translation'
import Anchor from 'src/layouts/anchor'
import DAnchor from 'src/components/DAnchor'

export default {
  components: {
    DAnchor
  },
  mixins: [Translation, Anchor],

  data () {
    return {
      nodes: [
        {
          label: this.$t('_.style.color._'),
          children: [
            {
              label: this.$t('_.style.color.overview.h[0]')
            },
            {
              label: this.$t('_.style.color.overview.h[1]')
            },
            {
              label: this.$t('_.style.color.overview.h[2]')
            },
            {
              label: this.$t('_.style.color.overview.h[3]')
            },
            {
              label: this.$t('_.style.color.overview.h[4]')
            }
          ]
        }
      ],
      namespace: 'style.color',
      dir: '1-style/1-color',
      codes: [
        '<style lang="stylus">'
      ]
    }
  },

  methods: {
    _ (property) {
      return this.$t(`_.style.color.overview.${property}`)
    }
  }
}
</script>

<style lang="stylus"></style>
