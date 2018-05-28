<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',

  mounted () {
    let lang = this.$q.localStorage.get.item('setting.language')

    if (lang === null) {
      lang = 'en'
      this.$q.localStorage.set('setting.language', lang)
    }

    this.$i18n.locale = lang
  }
}
</script>

<style>
</style>
