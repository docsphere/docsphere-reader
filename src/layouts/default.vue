<template>
  <q-layout view="lHh LpR lFf">
    <q-header elevated>
      <q-toolbar id="toolbar" color="primary">
        <q-btn flat class="filled" icon="menu" aria-label="Toggle Menu" @click="toogleMenu" />

        <q-toolbar-title>
          <q-icon class="q-mb-xs q-mr-sm" :name="headerTitleIcon" />
          {{ headerTitleText }}
        </q-toolbar-title>

        <q-btn flat class="filled" icon="settings" aria-label="Configuration" @click="openSettingsDialog" />
      </q-toolbar>
    </q-header>

    <q-drawer elevated show-if-above side="left" v-model="layout.menu">
      <d-menu></d-menu>
    </q-drawer>

    <router-view />

    <q-footer elevated v-if="this.$route.matched[0].meta.layouts.footer !== false" v-model="this.$store.state.layout.footer">
      <d-footer :status="$route.meta.status" />
    </q-footer>
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
      layout: {
        menu: false
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
    }
  },

  methods: {
    toogleMenu () {
      this.layout.menu = !this.layout.menu
    },
    openSettingsDialog () {
      this.$store.commit('settings/dialog', true)
    },

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
    }
  },

  created () {
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
