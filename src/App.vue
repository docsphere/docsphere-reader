<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',

  mounted () {
    this.$i18n.locale = this.$q.localStorage.get.item('setting.language')
  }
}
</script>

<style>
</style>
