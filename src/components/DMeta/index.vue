<template>
  <q-toolbar color="dark">
    <!--<q-btn icon="subject" dense color="white" text-color="black"></q-btn>-->
    <q-toolbar-title>Last updated: ?*</q-toolbar-title>
    <q-btn v-if="edit"
           flat dense no-caps :icon="icons" :color="color" class="float-right"
           @click="openURL(`https://github.com/slowaways/quasar-documentation-pp/blob/master/src/pages/${edit}`)">
      <div class="gt-xs">
        <span class="hm" v-if="status === 9">{{ $t('toolbar.edit') }}</span>
        <span class="hm" v-else-if="status === 6">{{ $t('toolbar.complete') }}</span>
        <span class="hm" v-else>{{ $t('toolbar.start') }}</span>
        <q-icon name="fab fa-github"></q-icon>
      </div>
    </q-btn>
  </q-toolbar>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'DMeta',
  props: {
    edit: {
      type: String,
      default: ''
    },

    status: {
      type: Number,
      default: 1
    }
  },
  computed: {
    color () {
      if (this.status === 9) {
        return 'white'
      } else if (this.status === 6) {
        return 'secondary'
      } else {
        return 'negative'
      }
    },
    icons () {
      if (this.status === 9) {
        return 'edit'
      } else if (this.status === 6) {
        return 'border_color'
      } else {
        return 'note_add'
      }
    }
  },

  methods: {
    openURL
  }
}
</script>

<style lang="stylus" scoped>
  .q-toolbar
    min-height: 30px
  .q-toolbar-title
    font-size: 12px
  span.hm
    margin: 0 5px
</style>
