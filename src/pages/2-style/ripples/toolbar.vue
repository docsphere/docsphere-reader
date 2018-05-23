<template>
  <q-toolbar-title>
    <q-icon name="style"></q-icon>
    {{ $t('section.style.ripples._') }}
    <q-btn
      flat dense
      icon="edit"
      @click="openURL('https://github.com/slowaways/quasar-documentation-pp/blob/master/src/pages/2-style/ripples/index.vue')">
      <q-tooltip anchor="bottom middle" self="top middle">Edit this page on Github!</q-tooltip>
    </q-btn>
  </q-toolbar-title>
</template>

<script>
import { openURL } from 'quasar'

export default {
  methods: {
    openURL
  }
}
</script>

<style scoped>

</style>
