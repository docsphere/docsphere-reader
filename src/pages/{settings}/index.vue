<template>
  <q-scroll-area id="main" class="no-padding">
    <q-list>
      <q-list-header>{{ $t('settings.general') }}</q-list-header>
      <q-item>
        <q-item-side icon="language" />
        <q-item-main>
          <q-select
            :stack-label="$t('settings.language.label')"
            v-model="general.language.default" :options="general.language.options"
            @input="setLanguage" />
        </q-item-main>
      </q-item>
      <q-item-separator />
    </q-list>
  </q-scroll-area>
</template>

<script>
export default {
  name: 'Settings',

  data () {
    return {
      general: {
        language: {
          default: this.$q.localStorage.get.item('setting.language'),
          options: [
            {
              image: 'statics/flags/united-states-of-america.png',
              label: 'English (US)',
              value: 'en'
            },
            {
              image: 'statics/flags/brazil.png',
              label: 'Português (BR)',
              value: 'pt'
            }
          ]
        }
      }
    }
  },

  methods: {
    setLanguage (language) {
      this.$q.localStorage.set('setting.language', language)
      this.$i18n.locale = language
    }
  }
}
</script>

<style>
  .q-item-image {
    min-width: 24px;
    max-width: 24px;
    max-height: 24px;
  }
</style>
