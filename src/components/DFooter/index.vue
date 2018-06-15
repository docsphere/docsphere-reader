<template>
  <q-toolbar color="dark" id="d-footer">
    <q-btn v-if="relative" flat dense no-caps :icon="icons" :color="color" @click="openURL(`${base}${relative}/index.vue`)">
      <div class="gt-xs">
        <span class="hm" v-if="status === 9">{{ $t('footer.github.edit') }}</span>
        <span class="hm" v-else-if="status === 6">{{ $t('footer.github.complete') }}</span>
        <span class="hm" v-else>{{ $t('footer.github.start') }}</span>
        <q-icon name="fab fa-github"></q-icon>
      </div>
    </q-btn>
    <q-chip class="q-ml-sm" dense square>
      <q-icon name="translate" size="1.3rem" />
      <span><b> {{ progress }}</b> ({{ $i18n.locale }})</span>
      <q-tooltip v-if="$q.platform.is.desktop" anchor="top middle" self="bottom middle" :offset="[10, 10]">
        {{ $t('footer.progress') }}
      </q-tooltip>
    </q-chip>
    <q-chip class="q-ml-sm" dense square>
      <q-icon name="language" size="1.3rem" />
      <span> #{{ languages }}</span>
      <q-tooltip v-if="$q.platform.is.desktop" anchor="top middle" self="bottom middle" :offset="[10, 10]">
        {{ $t('footer.translations') }}
      </q-tooltip>
    </q-chip>

    <q-chip class="anchor-toggle" dense square v-if="metaToggle">
      <q-icon name="link" size="1.3rem" class="q-mr-xs" />
      <q-toggle v-model="meta" checked-icon="visibility" unchecked-icon="visibility_off" />
      <q-tooltip v-if="$q.platform.is.desktop" anchor="top middle" self="bottom middle" :offset="[10, 10]">
        {{ $t('footer.anchor') }}
      </q-tooltip>
    </q-chip>
  </q-toolbar>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'DFooter',

  props: {
    status: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      base: 'https://github.com/slowaways/quasar-documentation-pp/blob/master/src/pages/'
    }
  },
  computed: {
    relative () {
      return this.$route.matched[0].meta.dir + this.$store.state.page.relative
    },
    color () {
      if (this.status === 9) {
        return 'white'
      } else if (this.status === 6) {
        return 'warning'
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
      // i18n
      // |-> paths
      const absolute = this.$store.state.i18n.absolute
      const enUpdated = this.$t(`_.${absolute}._updated_`, 'en')
      const updated = this.$t(`_.${absolute}._updated_`)

      // Subsections
      let percent = '?'

      if (enUpdated !== updated) {
        let total = Number(this.$t(`_.${absolute}._subsections_`))

        if (!isNaN(total)) {
          const current = this.$t(`_.${absolute}.h`).length
          percent = ~~((current / total) * 100)
        }
      }

      return `${percent}%`
    },
    languages () {
      // i18n
      // |-> paths
      const absolute = this.$store.state.i18n.absolute
      // |-> meta data
      const languages = Object.keys(this.$i18n.messages)
      // |->-> en->updated
      const enUpdated = this.$t(`_.${absolute}._updated_`, 'en')

      let available = 1
      for (let i = 0; i < languages.length; i++) {
        if (this.$t(`_.${absolute}._updated_`, languages[i]) !== enUpdated) {
          available++
        }
      }

      return `${available} ${this.$t('footer.of')} ${languages.length}`
    },

    metaToggle () {
      return this.$store.state.layout.metaToggle
    },
    meta: {
      get () {
        return this.$store.state.layout.meta
      },
      set (value) {
        if (this.$q.platform.is.desktop) {
          this.$store.state.layout.left = !value
        }

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
