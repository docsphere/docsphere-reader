<template>
  <q-page class="padding">
    <h5>{{ $t('section.design.color._') }}</h5>
    <p>{{ $t('section.design.color.p1') }}</p>
    <p>{{ $t('section.design.color.p2') }} <a target="_blank" href="https://quasar-framework.org/guide/quasar-theming.html">Quasar Theming.</a> {{ $t('section.design.color.p3') }} <a href="https://quasar-framework.org/components/color-utils.html" target="_blank">Color Utils</a>.</p>
    <h6>{{ $t('section.design.color.t1') }}</h6>
    <p>{{ $t('section.design.color.p4') }} <code>primary</code>, <code>secondary</code> {{ $t('_.and') }} <code>tertiary</code>.</p>
    <p>{{ $t('section.design.color.p5') }}</p>
    <h6>{{ $t('section.design.color.t2') }}</h6>
    <p>{{ $t('section.design.color.p6') }} <code>{{code1}}</code> {{ $t('section.design.color.p7') }} <code>*.vue</code> {{ $t('_.files') }}:</p>
    <p><code>primary</code>, <code>secondary</code>, <code>tertiary</code>, <code>positive</code>, <code>negative</code>, <code>info</code>, <code>warning</code>, <code>white</code>, <code>light</code>, <code>dark</code>, <code>faded</code></p>
    <p>{{ $t('section.design.color.p8') }}: <code>red</code>, <code>pink</code>, <code>purple</code>, <code>deep-purple</code>, <code>indigo</code>, <code>blue</code>, <code>light-blue</code>, <code>cyan</code>, <code>teal</code>, <code>green</code>, <code>light-green</code>, <code>lime</code>, <code>yellow</code>, <code>amber</code>, <code>orange</code>, <code>deep-orange</code>, <code>brown</code>, <code>grey</code>, <code>blue-grey</code></p>
    <p>{{ $t('section.design.color.p9') }}: <code>red</code>, <code>red-1</code>, <code>red-2</code>, <code>…</code>, <code>red-14</code>. {{ $t('section.design.color.p10') }}.</p>
    <p>...</p>
    <pre class="prettyprint">{{code3}}</pre>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      code1: `<style lang="stylus">`,
      code2: `<q-input color="brand" ... />`,
      code3: `<!-- changing text color -->
<p class="text-primary">....</p>

<!-- changing background color -->
<p class="bg-positive">...</p>`
    }
  }
}
</script>

<style lang="stylus"></style>
