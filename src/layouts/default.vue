<template lang="pug">
q-layout(view="lHh LpR lFf")
  q-header(elevated)
    q-toolbar#toolbar(color="primary")
      q-btn.filled(flat icon="menu" aria-label="Toggle Menu" @click="toogleMenu")
      q-toolbar-title
        q-icon.q-mb-xs.q-mr-sm(:name="headerTitleIcon")
        | {{ headerTitleText }}
      q-btn.filled(flat icon="settings" aria-label="Configuration" @click="openSettingsDialog")
  q-drawer(elevated show-if-above side="left" v-model="layout.menu")
    d-menu
  router-view
  q-footer(elevated v-if="this.$route.matched[0].meta.layouts.footer !== false" v-model="this.$store.state.layout.footer")
    d-footer(:status="$route.meta.status")
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
    }
  },

  created () {
    this.$store.dispatch('app/configureLanguage', this.$route.matched)

    this.$router.afterEach((to, from) => {
      if (!to.hash || (from.path !== to.path)) {
        this.$store.dispatch('app/configureLanguage', to.matched)
      }
    })

    this.$store.commit('page/setAnchors', false)
  }
}
</script>

<style lang="sass">
// Header
#toolbar
  padding: 0

.q-footer
  z-index: 999
</style>
