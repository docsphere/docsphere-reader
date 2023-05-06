<template lang="pug">
router-view

q-dialog#settings(v-model="toogleDialog" :maximized="$q.platform.is.mobile ? true : false")
  q-layout(view="Lhh lpR fff" container :class="$q.dark.isActive ? `bg-dark` : `bg-white`")
    q-header.d-header(elevated)
      q-toolbar.q-pr-none
        q-icon(name="settings" style="font-size: 1.5rem")
        q-toolbar-title {{ $t('menu.settings') }}
        q-btn.filled(v-close-popup text-color="white" icon="close")
    q-page-container.content
      q-page
        q-list
          q-item
            q-item-section
              q-item-label(header) {{ $t('settings.general._') }}
          q-item(dense)
            q-item-section(avatar)
              q-icon(name="language").q-pl-sm
            q-item-section
              q-select(
                v-model="settings.general.language.default" :options="settings.general.language.options"
                stack-label dense outlined
                emit-value map-options
                :label="$t('settings.general.language._')"
                options-selected-class="bg-primary text-white"
                behavior="menu"
                @update:model-value="setLanguage")
                  template(v-slot:option="scope")
                    q-item(v-bind="scope.itemProps")
                      q-item-section(avatar)
                        q-img(
                          no-spinner
                          :src="scope.opt.image"
                          width="24px" height="24px"
                        )
                      q-item-section
                        q-item-label {{ scope.opt.label }}
                        //-q-item-label(caption) {{ scope.opt.description }}
                  template(v-slot:selected-item="scope")
                    q-item(
                      @remove="scope.removeAtIndex(scope.index)"
                      :tabindex="scope.tabindex"
                    )
                      q-item-section(avatar)
                        q-img(
                          no-spinner
                          :src="scope.opt.image"
                          width="24px" height="24px"
                        )
                      q-item-section
                        q-item-label {{ scope.opt.label }}

          q-separator(spaced)

          q-item
            q-item-section
              q-item-label(header) {{ $t('settings.appearance._') }}

          q-item(dense)
            q-item-section(avatar)
              q-icon(name="format_color_fill").q-pl-sm
            q-item-section
              q-select(
                v-model="settings.appearance.background.default" :options="settings.appearance.background.options"
                stack-label dense outlined
                emit-value map-options
                :label="$t('settings.appearance.background._')"
                behavior="menu"
                options-selected-class="bg-primary text-white"
                @update:model-value="setBackground")
                  template(v-slot:option="scope")
                    q-item(v-bind="scope.itemProps")
                      q-item-section(avatar)
                        q-icon(:name="scope.opt.icon")
                      q-item-section.text-weight-bold
                        q-item-label {{ scope.opt.label }}
                        //-q-item-label(caption) {{ scope.opt.description }}
                  template(v-slot:selected-item="scope")
                    q-item(@remove="scope.removeAtIndex(scope.index)" :tabindex="scope.tabindex")
                      q-item-section(avatar)
                        q-icon(:name="scope.opt.icon")
                      q-item-section
                        q-item-label {{ scope.opt.label }}
</template>

<script>
export default {
  name: 'App',

  data () {
    return {
      settings: {
        general: {
          language: {
            default: this.$q.localStorage.getItem('setting.language'),

            options: [
              {
                image: '/Docsphere/flags/united-states-of-america.png',
                label: 'English (US)',
                value: 'en-US'
              },
              {
                image: '/Docsphere/flags/brazil.png',
                label: 'Português (BR)',
                value: 'pt-BR'
              }
            ]
          }
        },
        appearance: {
          background: {
            default: this.$q.localStorage.getItem('setting.background'),

            options: [
              {
                icon: 'light_mode',
                label: 'Modo Claro',
                value: false
              },
              {
                icon: 'dark_mode',
                label: 'Modo Escuro',
                value: true
              }
            ]
          }
        }
      }
    }
  },
  computed: {
    toogleDialog: {
      get () {
        return this.$store.getters['settings/dialog']
      },
      set (value) {
        return this.$store.commit('settings/dialog', value)
      }
    }
  },

  methods: {
    // Language
    setLanguage (language) {
      this.$q.localStorage.set('setting.language', language)

      this.$store.commit('page/resetAnchor')
      this.$store.commit('page/resetAnchors')
      this.$store.commit('page/resetNodes')

      this.$i18n.locale = language

      this.$router.go()
    },

    // Background
    setBackground (mode) {
      this.$q.localStorage.set('setting.background', mode)
      this.$q.dark.set(mode)
    }
  },

  mounted () {
    // Language
    let locale = this.$q.localStorage.getItem('setting.language')
    if (locale === null) {
      locale = 'en-US'
      this.$q.localStorage.set('setting.language', locale)
      this.settings.general.language.default = locale
    }
    this.$i18n.locale = locale

    // Background
    let dark = this.$q.localStorage.getItem('setting.background')
    if (dark === null) {
      dark = false
      this.$q.localStorage.set('setting.background', dark)
      this.settings.appearance.background.default = dark
    }
    this.$q.dark.set(dark)
  }
}
</script>

<style lang="sass">
#settings
  .q-select
    .q-field__append, .q-field--dense .q-field__marginal
      height: 63px !important
    .q-item
      padding: 8px 0
      .q-item__section--side
        padding-right: 12px
      .q-item__section--avatar
        min-width: 24px
.q-menu
  .q-item__section--side
    padding-right: 12px
  .q-item__section--avatar
    min-width: 24px
</style>
