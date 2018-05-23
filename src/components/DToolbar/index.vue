<template>
  <q-toolbar-title>
    <q-icon v-if="icon" :name="icon"></q-icon>
    {{ title }}
    <q-btn flat dense icon="edit" @click="openURL(`https://github.com/slowaways/quasar-documentation-pp/blob/master/src/pages/${edit}`)">
      <q-tooltip anchor="bottom middle" self="top middle">Edit this page on Github!</q-tooltip>
    </q-btn>
  </q-toolbar-title>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'DToolbar',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    edit: {
      type: String,
      required: true
    }
  },

  methods: {
    openURL
  }
}
</script>

<style scoped></style>
