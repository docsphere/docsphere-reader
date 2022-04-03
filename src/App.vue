<template>
  <router-view />

  <q-dialog v-model="toogleDialog" :maximized="$q.platform.is.mobile ? true : false">
    <q-layout view="Lhh lpR fff" container class="bg-white">
      <q-header class="bg-primary" elevated>
        <q-toolbar class="q-pr-none">
          <q-icon name="settings" style="font-size: 1.5rem" />
          <q-toolbar-title>{{ $t('menu.settings') }}</q-toolbar-title>
          <q-btn v-close-popup flat class="filled" color="white" text-color="white" icon="close" />
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-page>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label header>{{ $t('settings.general._') }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon name="language" />
              </q-item-section>
              <q-item-section>
                <q-select v-model="settings.general.language.default" :label="$t('settings.general.language._')" :options="settings.general.language.options" emit-value map-options @update:model-value="setLanguage" />
              </q-item-section>
            </q-item>
            <q-separator />
          </q-list>
        </q-page>
      </q-page-container>
    </q-layout>
  </q-dialog>
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
                image: 'flags/united-states-of-america.png',
                label: 'English (US)',
                value: 'en-US'
              },
              {
                image: 'flags/brazil.png',
                label: 'Português (BR)',
                value: 'pt-BR'
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
    // Settings
    setLanguage (language) {
      this.$q.localStorage.set('setting.language', language)
      this.$i18n.locale = language
    }
  },

  mounted () {
    let locale = this.$q.localStorage.getItem('setting.language')

    if (locale === null) {
      locale = 'en-US'
      this.$q.localStorage.set('setting.language', locale)
    }

    this.$i18n.locale = locale
  }
}
</script>
