<template>
  <q-toolbar color="dark" id="d-footer">
    <q-btn v-if="edit"
           flat dense no-caps
           :icon="icons" :color="color"
           @click="openURL(`https://github.com/slowaways/quasar-documentation-pp/blob/master/src/pages/${edit}`)">
      <div class="gt-xs">
        <span class="hm" v-if="status === 9">{{ $t('meta.github.edit') }}</span>
        <span class="hm" v-else-if="status === 6">{{ $t('meta.github.complete') }}</span>
        <span class="hm" v-else>{{ $t('meta.github.start') }}</span>
        <q-icon name="fab fa-github"></q-icon>
      </div>
    </q-btn>
    <!--
    <q-chip class="q-ml-sm" dense square>
      <q-icon name="translate" size="1.3rem" />
      <span>{{ progress }}</span>
    </q-chip>
    <q-chip class="q-ml-sm" dense square>
      <q-icon name="language" size="1.3rem" />
      <span>6912 of 6912</span>
    </q-chip>-->

    <q-chip class="anchor-toggle" dense square v-if="metaToggle">
      <q-icon name="link" size="1.3rem" class="q-mr-xs" />
      <q-toggle v-model="meta" checked-icon="visibility" unchecked-icon="visibility_off" />
    </q-chip>
  </q-toolbar>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'DFooter',
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
    },
    languages: {
      type: Number,
      default: 0
    }
  },
  computed: {
    color () {
      if (this.status === 9) {
        return 'white'
      } else if (this.status === 6) {
        return 'green-6'
      } else {
        return 'red-6'
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
      return `100% (${locale})`
    },

    metaToggle () {
      return this.$store.state.layout.metaToggle
    },
    meta: {
      get () {
        return this.$store.state.layout.meta
      },
      set (value) {
        this.$store.commit('layout/setMeta', value)
      }
    }
  },

  methods: {
    openURL
  }
}
</script>

<style lang="stylus">
  #d-footer.q-toolbar
    min-height: 30px
  #d-footer span.hm
    margin: 0 5px

  #d-footer .anchor-toggle
    position absolute
    height 22px
    top 7px
    right 12px

  #d-footer .q-toggle-handle
    height: 20px
</style>
