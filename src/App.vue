<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',

  mounted () {
    let lang = this.$q.localStorage.getItem('setting.language')

    if (lang === null) {
      lang = 'en-US'
      this.$q.localStorage.set('setting.language', lang)
    }

    this.$i18n.locale = lang
  }
}
</script>
