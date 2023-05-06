<template lang="pug">
q-toolbar#d-footer.bg-dark.text-white
  q-btn.q-mr-sm(v-if="relative" flat dense no-caps :color="color" @click="openURL(url)")
    q-icon(:name="icon" size="20px")
    .gt-xs
      span.hm(v-if="status === 'completed'") {{ $t('footer.github.edit') }}
      span.hm(v-else-if="status === 'draft'") {{ $t('footer.github.complete') }}
      span.hm(v-else-if="status === 'empty'") {{ $t('footer.github.start') }}
      q-icon(name="fab fa-github" size="20px")

  q-chip.languages-progress.q-mr-sm.q-ml-none(dense square)
    q-icon.q-mr-xs(name="translate" size="20px")
    span
      | {{ $i18n.locale }}:
      b {{ ' ' + progress }}
    q-tooltip(v-if="$q.platform.is.desktop" anchor="top middle" self="bottom middle" :offset="[10, 10]") {{ $t('footer.progress') }}

  q-chip.languages-available.q-mr-sm.q-ml-none(dense square)
    q-icon.q-mr-xs(name="language" size="20px")
    span {{ '#' + languages }}
    q-tooltip(v-if="$q.platform.is.desktop" anchor="top middle" self="bottom middle" :offset="[10, 10]") {{ $t('footer.translations') }}

  q-chip.anchor-toggle.q-mr-none.q-ml-none(dense square v-if="metaToggle")
    q-icon.q-mr-xs(name="link" size="20px")
    q-toggle(v-model="layoutMeta" checked-icon="visibility" unchecked-icon="visibility_off" aria-label="Toggle Visibility Anchor")
    q-tooltip(v-if="$q.platform.is.desktop" anchor="top middle" self="bottom middle" :offset="[10, 10]") {{ $t('footer.anchor') }}
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'DFooter',

  props: {
    status: {
      type: String,
      default: 'empty'
    }
  },

  data () {
    return {
      base: 'https://github.com/docsphere/docsphere-reader/blob/master/src/pages/'
    }
  },
  computed: {
    url () {
      return `${this.base}${this.relative}.${this.$i18n.locale}.md`
    },
    relative () {
      const path = this.$route.path
      return path
    },
    color () {
      if (this.status === 'completed') {
        return 'white'
      } else if (this.status === 'draft') {
        return 'warning'
      } else {
        return 'red-6'
      }
    },
    icon () {
      if (this.status === 'completed') {
        return 'edit'
      } else if (this.status === 'draft') {
        return 'border_color'
      } else {
        return 'note_add'
      }
    },
    progress () {
      // i18n
      // |-> paths
      const i18nPathAbsolute = this.$store.state.i18n.absolute

      // Subsections
      let translationPercent = '?'

      const subsectionsTotal = this.$tm(`_.${i18nPathAbsolute}._subsections_.total`)

      if (!isNaN(subsectionsTotal)) {
        const subsectionsDone = Number(this.$tm(`_.${i18nPathAbsolute}._subsections_.done`))

        if (!isNaN(subsectionsDone)) {
          translationPercent = ~~((subsectionsDone / subsectionsTotal) * 100)
        }
      }

      return `${translationPercent}%`
    },
    languages () {
      // i18n
      // |-> paths
      const i18nPathAbsolute = this.$store.state.i18n.absolute
      const i18nPath = `_.${i18nPathAbsolute}._translations_.available`

      // Get # of i18n locales available
      const i18nLocales = Object.keys(this.$i18n.messages)
      // Get page last updated status of default language
      let fallbackLastUpdated = null
      if (this.$te(i18nPath, 'en-US')) {
        fallbackLastUpdated = this.$tm(i18nPath, 'en-US')
      }

      // Set page content locales available
      let i18nLocalesAvailable = 0
      if (fallbackLastUpdated) {
        for (let i = 0; i < i18nLocales.length; i++) {
          if (this.$t(i18nPath, i18nLocales[i]) !== fallbackLastUpdated) {
            i18nLocalesAvailable++
          }
        }
      } else {
        i18nLocalesAvailable = 1
      }

      return `${i18nLocalesAvailable} ${this.$t('footer.of')} ${i18nLocales.length}`
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

<style lang="sass">
#d-footer
  &.q-toolbar
    min-height: 30px
  span
    &.hm
      margin: 0 5px

  .anchor-toggle
    position: absolute
    height: 22px
    top: 1px
    right: 12px

  .q-toggle-handle
    height: 20px

  @media only screen and (max-width: 374px)
    .languages-available
      display: none
</style>
