<template>
  <q-layout view="lHh Lpr lFr">
    <q-layout-header>
      <q-toolbar color="primary">
        <q-btn flat dense round @click="left = !left">
          <q-icon name="menu" />
        </q-btn>

        <d-header :icon="_[0].meta.icon" :section="_[0].meta.namespace" :matched="_" />

        <q-btn v-if="$store.state.layout.rightToggle" flat dense round @click="right = !right">
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

    <q-layout-footer v-if="_[0].meta.layouts.footer" v-model="footer">
      <d-footer :status="$route.meta.status" :edit="$route.meta.github" />
    </q-layout-footer>

    <q-layout-drawer v-if="_[0].meta.layouts.submenu" mini side="right" v-model="right">
      <d-submenu :overview="_[0].path" :showcase="_[0].meta.pages.showcase" />
    </q-layout-drawer>
  </q-layout>
</template>

<script>
import DMenu from '/src/components/DMenu'
import DFooter from '/src/components/DFooter'
import DSubmenu from '/src/components/DSubmenu'
import DHeader from '/src/components/DHeader'

export default {
  name: 'LayoutDefault',

  components: {
    DMenu, DFooter, DSubmenu, DHeader
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
