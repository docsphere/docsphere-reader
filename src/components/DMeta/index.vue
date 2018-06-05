<template>
  <q-toolbar color="dark">
    <q-btn v-if="edit"
           flat dense no-caps :icon="icons" :color="color"
           @click="openURL(`https://github.com/slowaways/quasar-documentation-pp/blob/master/src/pages/${edit}`)">
      <div>
        <span class="hm" v-if="status === 9">{{ $t('toolbar.edit') }}</span>
        <span class="hm" v-else-if="status === 6">{{ $t('toolbar.complete') }}</span>
        <span class="hm" v-else>{{ $t('toolbar.start') }}</span>
        <q-icon name="fab fa-github"></q-icon>
      </div>
    </q-btn>
    <q-toolbar-title class="text-center">
      <!--<q-chip class="q-mr-md" dense square icon="translate" color="grey-4" text-color="black">{{ progress }}</q-chip>-->
    </q-toolbar-title>
    <q-chip class="desktop-only q-ml-md" dense v-if="$store.state.layout.anchorToggle">
      <q-icon name="subject" size="1.3rem" />
      <q-toggle v-model="$store.state.layout.anchor" checked-icon="visibility" unchecked-icon="visibility_off"/>
    </q-chip>
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
    },
    translation: {
      type: Number,
      default: 0
    }
  },
  computed: {
    color () {
      if (this.status === 9) {
        return 'white'
      } else if (this.status === 6) {
        return 'positive'
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
    },
    progress () {
      const locale = this.$i18n.locale
      return `${this.translation}% (${locale})`
    },

    navigation: {
      get () { return true },
      set (val) {}
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
