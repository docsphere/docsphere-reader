<template>
  <q-page class="row">
    <q-scroll-area id="content" class="col home">
      <div class="text-center">
        <img class="platform" alt="Quasar Platforms" src="statics/quasar/responsive-logo.png">
        <h1>Quasar Documentation++ <span class="text-negative">(WIP)</span></h1>
        <p class="caption"><span v-html="$t('_.home.texts[0]')"></span><a href="https://quasar-framework.org/" target="_blank">Quasar Framework</a>!</p>
        <p class="caption"><span></span>{{ $t('_.home.texts[1]') }}<a href="https://github.com/slowaways/" target="_blank">@slowaways</a></p>
        <hr>
      </div>
      <div class="about"></div>
    </q-scroll-area>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      radio: 'two'
    }
  }
}
</script>

<style lang="stylus">
  img.platform
      padding-top: 30px;
      padding-bottom: 30px;
</style>
