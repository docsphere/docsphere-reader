<template>
  <q-layout view="lHh Lpr lFr">
    <q-layout-header>
      <q-toolbar color="primary">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>

        <router-view name="header" />
      </q-toolbar>
    </q-layout-header>
    <q-layout-footer v-model="layoutFooter" :reveal="false">
      <router-view name="meta" />
    </q-layout-footer>

    <q-layout-drawer v-model="leftDrawerOpen">
      <d-menu></d-menu>
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
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  }
}
</script>

<style lang="stylus"></style>
