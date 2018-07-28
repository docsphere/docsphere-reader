<template>
  <q-layout view="lHh Lpr lFr">
    <q-layout-header>
      <q-toolbar color="primary">
        <q-btn dense round @click="left = !left">
          <q-icon name="menu" />
        </q-btn>

        <d-header :icon="_[0].meta.icon" :matched="_" />

        <q-btn dense round @click="opened = !opened">
          <q-icon name="settings" />
        </q-btn>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer v-model="left">
      <d-menu></d-menu>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-layout-footer v-if="_[0].meta.layouts.footer !== false" v-model="footer">
      <d-footer :status="$route.meta.status" />
    </q-layout-footer>

    <q-modal v-model="opened" :content-css="{minWidth: '100vw', minHeight: '100vh'}">
      <q-modal-layout>
        <q-toolbar slot="header">
          <q-icon name="settings" style="font-size: 1.5rem" />
          <q-toolbar-title>
            <span>{{ $t(`menu.settings`) }}</span>
          </q-toolbar-title>
          <q-btn color="white" text-color="black" v-close-overlay icon="close" />
        </q-toolbar>

        <q-list>
          <q-list-header>{{ $t('settings.general._') }}</q-list-header>
          <q-item>
            <q-item-side icon="language" />
            <q-item-main>
              <q-select
                :stack-label="$t('settings.general.language._')"
                v-model="settings.general.language.default"
                :options="settings.general.language.options"
                @input="setLanguage" />
            </q-item-main>
          </q-item>
          <q-item-separator />
        </q-list>
      </q-modal-layout>
    </q-modal>
  </q-layout>
</template>

<script>
import DMenu from '/src/components/DMenu'
import DFooter from '/src/components/DFooter'
import DHeader from '/src/components/DHeader'

export default {
  name: 'LayoutDefault',

  components: {
    DMenu, DFooter, DHeader
  },

  data () {
    return {
      opened: false,
      settings: {
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
    }
  },
  computed: {
    _ () {
      return this.$route.matched
    },
    footer () {
      return this.$store.state.layout.footer
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
    commit () {
      const root = this.$route.matched[0].path
      const child = this.$route.matched[1].path

      const base = root.substr(1)
      let relative = child.substr(root.length)

      this.$store.commit('page/setBase', base)
      this.$store.commit('page/setRelative', relative)
      this.$store.commit('page/setAbsolute', base + relative)

      if (relative === '/') {
        relative = '/overview'
      }

      if (root) {
        this.$store.commit('i18n/setBase', base.replace(/\//g, '.'))
        this.$store.commit('i18n/setRelative', relative.substr(1).replace(/\//g, '.'))
        this.$store.commit('i18n/setAbsolute', (base + relative).replace(/\//g, '.'))
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

    this.commit()
    this.$router.afterEach((to, from) => {
      if (!to.hash || (from.path !== to.path)) {
        this.commit()
      }
    })

    this.$store.commit('page/setAnchors', false)
  }
}
</script>

<style lang="stylus">
  #content:not(.no-padding) .scroll:not(.overflow-hidden),
  #content:not(.no-padding) .scroll.overflow-hidden > div
    padding 1rem 1.5rem 1rem 1.5rem

  .meta-on-right
    border-left 1px solid #e0e0e0
    box-shadow 0 0 8px rgba(0,0,0,0.2)
  .meta-on-top
    border-bottom 1px solid #e0e0e0
    padding-bottom 5px
    margin-bottom 20px

  .q-layout-drawer-right
    box-shadow: 0 -8px 8px rgba(0,0,0,0.2), 0 -3px 4px rgba(0,0,0,0.14), 0 -3px 3px -2px rgba(0,0,0,0.12)
    max-width 60px

  .q-layout-footer
    z-index: 999

  .q-item-image
    min-width 24px
    max-width 24px
    max-height 24px
</style>
