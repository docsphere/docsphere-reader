<template>
  <q-page class="page-showcase layout-padding">
    <div class="showcase-top text-center">
      <img alt="Quasar logo" src="/assets/logo.svg">
      <p class="caption">{{ $t('section.home.p1') }}</p>
    </div>
    <div class="row justify-center" style="width: 850px; max-width: 90vw;">
      <div class="col-xs-6 col-sm-4 col-lg-3"></div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style lang="stylus">
  .page-showcase img
    width: 100px
    height: 100px
    margin-bottom: 30px
  .showcase-top
    margin-bottom: 35px
</style>
