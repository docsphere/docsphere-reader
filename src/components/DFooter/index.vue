<template>
  <q-toolbar class="bg-dark text-white" id="d-footer">
    <q-btn v-if="relative" flat dense no-caps class="q-mr-sm" :color="color" @click="openURL(`${base}${relative}/index.vue`)">
      <q-icon :name="icon" size="20px"></q-icon>
      <div class="gt-xs">
        <span class="hm" v-if="status === 9">{{ $t('footer.github.edit') }}</span>
        <span class="hm" v-else-if="status === 6">{{ $t('footer.github.complete') }}</span>
        <span class="hm" v-else>{{ $t('footer.github.start') }}</span>
        <q-icon name="fab fa-github" size="20px"></q-icon>
      </div>
    </q-btn>

    <q-chip class="languages-progress q-mr-sm q-ml-none" dense square>
      <q-icon class="q-mr-xs" name="translate" size="20px" />
      <span>({{ $i18n.locale }}) <b> {{ progress }}</b></span>
      <q-tooltip v-if="$q.platform.is.desktop" anchor="top middle" self="bottom middle" :offset="[10, 10]">{{ $t('footer.progress') }}</q-tooltip>
    </q-chip>
    <q-chip class="languages-available q-mr-sm q-ml-none" dense square>
      <q-icon class="q-mr-xs" name="language" size="20px" />
      <span>#{{ languages }}</span>
      <q-tooltip v-if="$q.platform.is.desktop" anchor="top middle" self="bottom middle" :offset="[10, 10]">{{ $t('footer.translations') }}</q-tooltip>
    </q-chip>

    <q-chip class="anchor-toggle q-mr-none q-ml-none" dense square v-if="metaToggle">
      <q-icon name="link" size="20px" class="q-mr-xs" />
      <q-toggle v-model="layoutMeta" checked-icon="visibility" unchecked-icon="visibility_off" aria-label="Toggle Visibility Anchor" />
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
    icon () {
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
      const enUpdated = this.$t(`_.${absolute}._updated_`, 'en-US')
      const updated = this.$t(`_.${absolute}._updated_`)

      // Subsections
      let percent = '?'

      if (this.$i18n.locale === 'en-US' || enUpdated !== updated) {
        const total = Number(this.$t(`_.${absolute}._subsections_`))

        if (!isNaN(total)) {
          const current = this.$tm(`_.${absolute}.headers`).length

          if (!isNaN(current)) {
            percent = ~~((current / total) * 100)
          }
        }
      }

      return `${percent}%`
    },
    languages () {
      // Get # of i18n languages available
      const languages = Object.keys(this.$i18n.messages)
      // Get default language updated status
      const enUpdated = this.$t(`_.${this.$store.state.i18n.absolute}._updated_`, 'en-US')

      // Set page content languages available
      let available = 1
      for (let i = 0; i < languages.length; i++) {
        if (this.$t(`_.${this.$store.state.i18n.absolute}._updated_`, languages[i]) !== enUpdated) {
          available++
        }
      }

      return `${available} ${this.$t('footer.of')} ${languages.length}`
    },

    metaToggle () {
      return this.$store.state.layout.metaToggle
    },
    layoutMeta: {
      get () {
        return this.$store.state.layout.meta
      },
      set (value) {
        if (this.$q.platform.is.desktop) {
          // this.$store.commit('layout/setLeft', !value)
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

<style lang="scss">
#d-footer {
  &.q-toolbar {
    min-height: 30px;
  }
  span {
    &.hm {
      margin: 0 5px;
    }
  }
  .anchor-toggle {
    position: absolute;
    height: 22px;
    top: 1px;
    right: 12px;
  }
  .q-toggle-handle {
    height: 20px;
  }

  @media only screen and (max-width: 374px)  {
    .languages-available {
      display: none;
    }
  }
}
</style>
