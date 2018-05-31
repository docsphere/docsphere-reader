<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>

        <router-view name="toolbar" />

        <q-btn flat dense round @click="rightDrawerOpen = !rightDrawerOpen" aria-label="Menu">
          <q-icon name="more_vert" />
        </q-btn>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer v-model="leftDrawerOpen">
      <d-menu></d-menu>
    </q-layout-drawer>

    <q-layout-drawer mini side="right" v-model="rightDrawerOpen">
      <router-view name="tools" />
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import DMenu from 'src/components/DMenu'

export default {
  name: 'LayoutShowcase',

  components: {
    DMenu
  },

  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      rightDrawerOpen: this.$q.platform.is.desktop
    }
  }
}
</script>

<style lang="stylus">
  .q-layout-drawer-right
    position: fixed

  #tools .q-item-side
    min-width: 24px
</style>
