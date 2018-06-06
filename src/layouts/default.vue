<template>
  <q-layout view="lHh Lpr lFr">
    <q-layout-header>
      <q-toolbar color="primary">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>

        <router-view name="header" />

        <q-btn
          v-if="$store.state.layout.rightToggle"
          flat dense round
          @click="$store.commit('layout/setRight', !$store.state.layout.right)"
          aria-label="Submenu">
          <q-icon name="more_vert" />
        </q-btn>
      </q-toolbar>
    </q-layout-header>
    <q-layout-footer v-model="layoutFooter" :reveal="false">
      <router-view name="meta" />
    </q-layout-footer>

    <q-layout-drawer v-model="leftDrawerOpen">
      <d-menu></d-menu>
    </q-layout-drawer>

    <q-layout-drawer mini side="right" v-model="$store.state.layout.right">
      <router-view name="submenu" />
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import DMenu from 'src/components/DMenu'
import DMeta from 'src/components/DMeta'

export default {
  name: 'LayoutDefault',

  components: {
    DMenu, DMeta
  },

  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      layoutFooter: true
    }
  }
}
</script>

<style lang="stylus">
  .q-scrollarea.standard
    position absolute
    left 0
    top 0
    width 100%
    height 100%
    margin 0
    padding 0

  #content:not(.no-padding) .scroll:not(.overflow-hidden),
  #content:not(.no-padding) .scroll.overflow-hidden > div
    padding 1rem 1.5rem 1rem 1.5rem

  .q-layout-drawer-right
    box-shadow: 0 -8px 8px rgba(0,0,0,0.2), 0 -3px 4px rgba(0,0,0,0.14), 0 -3px 3px -2px rgba(0,0,0,0.12)
    width 60px

  .q-layout-footer
    z-index: 999
</style>
