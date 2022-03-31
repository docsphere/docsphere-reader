<template>
  <q-layout view="lHh LpR lFf">
    <q-header elevated>
      <q-toolbar id="toolbar" color="primary">
        <q-btn flat class="filled" icon="menu" aria-label="Toggle Menu" @click="left = !left" />

        <q-toolbar-title>
          <q-icon class="q-mb-xs q-mr-sm" :name="headerTitleIcon" />
          {{ headerTitleText }}
        </q-toolbar-title>

        <q-btn flat class="filled" icon="settings" aria-label="Configuration" @click="opened = true" />
      </q-toolbar>
    </q-header>

    <q-drawer elevated show-if-above side="left" :model-value="left">
      <d-menu></d-menu>
    </q-drawer>

    <router-view />

    <q-footer elevated v-if="this.$route.matched[0].meta.layouts.footer !== false" :model-value="this.$store.state.layout.footer">
      <d-footer :status="$route.meta.status" />
    </q-footer>

    <q-dialog v-model="opened" :maximized="$q.platform.is.mobile ? true : false">
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
  </q-layout>
</template>

<script>
import DMenu from 'components/DMenu'
import DFooter from 'components/DFooter'

export default {
  name: 'LayoutDefault',

  components: {
    DMenu, DFooter
  },

  data () {
    return {
      opened: false,
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
    headerTitleIcon () {
      return this.$route.matched[0].meta.icon ?? this.$route.meta.icon
    },
    headerTitleText () {
      if (this.$store.state.i18n.base) {
        return this.$t(`_.${this.$store.state.i18n.base}._`)
      } else {
        return this.$t(`menu.${this.$route.matched[1].meta.menu}`)
      }
    },

    left: {
      get () {
        return this.$store.state.layout.left
      },
      set (val) {
        this.$store.commit('layout/setLeft', val)
      }
    }
  },

  methods: {
    configureLanguage () {
      // Route
      const root = this.$route.matched[0].path
      const child = this.$route.matched[1].path

      const base = root.substr(1)
      let relative = child.substr(root.length)

      // console.log(relative)

      this.$store.commit('page/setBase', base)
      this.$store.commit('page/setRelative', relative)
      this.$store.commit('page/setAbsolute', base + relative)

      if (relative === '/' || relative === '') {
        relative = '/overview'
      }

      if (root) {
        this.$store.commit('i18n/setBase', base.replace(/_$/, '').replace(/\//g, '.'))
        this.$store.commit('i18n/setRelative', relative.substr(1).replace(/_$/, '').replace(/\//g, '.'))
        this.$store.commit('i18n/setAbsolute', (base + relative).replace(/_$/, '').replace(/\//g, '.'))
      } else {
        this.$store.commit('i18n/setBase', '')
        this.$store.commit('i18n/setRelative', '')
        this.$store.commit('i18n/setAbsolute', '')
      }
    },
    setLanguage (language) {
      this.$q.localStorage.set('setting.language', language)
      this.$i18n.locale = language
    }
  },

  created () {
    if (this.$q.platform.is.desktop) {
      this.$store.commit('layout/setLeft', true)
    }

    this.configureLanguage()
    this.$router.afterEach((to, from) => {
      if (!to.hash || (from.path !== to.path)) {
        this.configureLanguage()
      }
    })

    this.$store.commit('page/setAnchors', false)
  }
}
</script>

<style lang="scss">
// Header
#toolbar {
  padding: 0;
}

.q-footer {
  z-index: 999;
}
</style>
