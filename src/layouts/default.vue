<template>
  <q-layout view="lHh Lpr lFr">
    <q-layout-header>
      <q-toolbar color="primary">
        <q-btn flat dense round @click="left = !left" aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>

        <router-view name="header" />

        <q-btn
          v-if="$store.state.layout.rightToggle"
          flat dense round
          @click="right = !right"
          aria-label="Submenu">
          <q-icon name="more_vert" />
        </q-btn>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer v-model="left">
      <d-menu></d-menu>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-layout-footer v-if="$route.matched[0].meta.layout.footer" v-model="footer">
      <d-footer :status="$route.meta.status" :edit="$route.meta.github"></d-footer>
    </q-layout-footer>

    <q-layout-drawer v-if="$route.matched[0].meta.layout.submenu" mini side="right" v-model="right">
      <d-submenu
        :overview="$route.matched[0].path"
        :showcase="$route.matched[0].meta.layout.submenu.showcase" />
    </q-layout-drawer>
  </q-layout>
</template>

<script>
import DMenu from '/src/components/DMenu'
import DFooter from '/src/components/DFooter'
import DSubmenu from '/src/components/DSubmenu'

export default {
  name: 'LayoutDefault',

  components: {
    DMenu, DFooter, DSubmenu
  },

  data () {
    return {
      meta: {
        submenu: {
          showcase: false
        }
      }
    }
  },
  computed: {
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
    },
    right: {
      get () {
        return this.$store.state.layout.right
      },
      set (value) {
        this.$store.commit('layout/setRight', value)
      }
    }
  },

  created () {
    this.left = this.$q.platform.is.desktop
  }
}
</script>

<style lang="stylus">
  #content:not(.no-padding) .scroll:not(.overflow-hidden),
  #content:not(.no-padding) .scroll.overflow-hidden > div
    padding 1rem 1.5rem 1rem 1.5rem

  .meta-on-right
    border-left 1px solid #e0e0e0
    box-shadow 0 -8px 8px rgba(0,0,0,0.2), 0 -3px 4px rgba(0,0,0,0.14), 0 -3px 3px -2px rgba(0,0,0,0.12)
  .meta-on-top
    border-bottom 1px solid #e0e0e0
    padding-bottom 5px
    margin-bottom 20px

  .q-layout-drawer-right
    box-shadow: 0 -8px 8px rgba(0,0,0,0.2), 0 -3px 4px rgba(0,0,0,0.14), 0 -3px 3px -2px rgba(0,0,0,0.12)
    width 60px

  .q-layout-footer
    z-index: 999
</style>
