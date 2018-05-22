<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>

        <router-view name="toolbar" />
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer v-model="leftDrawerOpen" :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null">
      <div class="row flex-center bg-white" style="height: 115px;">
        <img src="/assets/logo.svg" style="height: 75px">
        <div class="text-weight-thin q-ml-md">Quasar v0.16.0</div>
      </div>
      <q-list no-border link inset-delimiter>
        <q-item to="/" exact>
          <q-item-side icon="home" />
          <q-item-main>{{ $t('menu.home') }}</q-item-main>
        </q-item>
        <q-item-separator />
        <q-collapsible :label="$t('section.design._')">
          <q-item to="/style">
            <q-item-side icon="style" />
            <q-item-main>{{ $t('section.design.color._') }}</q-item-main>
          </q-item>
          <q-item to="/typography">
            <q-item-side icon="format_bold" />
            <q-item-main>{{ $t('section.design.typography._') }}</q-item-main>
          </q-item>
          <q-item to="/ripples">
            <q-item-side icon="blur_on" />
            <q-item-main>{{ $t('section.design.ripples._') }}</q-item-main>
          </q-item>
        </q-collapsible>
        <q-collapsible :label="$t('section.css._')"></q-collapsible>
        <q-collapsible :label="$t('section.layout._')"></q-collapsible>
        <q-collapsible :label="$t('section.buttons._')"></q-collapsible>
        <q-collapsible :label="$t('section.navigation._')"></q-collapsible>
        <q-collapsible :label="$t('section.forms._')"></q-collapsible>
        <q-collapsible :label="$t('section.grouping._')"></q-collapsible>
        <q-collapsible :label="$t('section.popups._')"></q-collapsible>
        <q-collapsible :label="$t('section.progress._')"></q-collapsible>
        <q-collapsible :label="$t('section.media._')"></q-collapsible>
        <q-collapsible :label="$t('section.scrolling._')"></q-collapsible>
        <q-collapsible :label="$t('section.animation._')"></q-collapsible>
        <q-collapsible :label="$t('section.others._')"></q-collapsible>
        <q-item-separator />
        <q-collapsible :label="$t('section.touch._')"></q-collapsible>
        <q-collapsible :label="$t('section.api._')"></q-collapsible>
        <q-collapsible :label="$t('section.misc._')"></q-collapsible>
        <q-item-separator />
        <q-item to="/settings">
          <q-item-side icon="settings" />
          <q-item-main>{{ $t('menu.settings') }}</q-item-main>
        </q-item>
      </q-list>
    </q-layout-drawer>

    <router-view name="tools" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LayoutDefault',

  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  }
}
</script>

<style lang="stylus">
  .q-layout-drawer-right
    width: 58px

  h1, h2, h3, h4, h5, h6
    color: #286fa3
    font-weight: 600
  h1, h2, h3, h4, h5
    margin: 0 0 .7em
  h6
    margin: 2em 0 .8em
    padding-bottom: .4em
    border-bottom: 1px solid #ddd

  a, body
    color: #34495e;
  a
    text-decoration: none
    outline: 0
    cursor: pointer
  a:not([data-scroll]):not(.search-result):not(.support-button):not(.headerlink):hover:not(.button)
    color: #286fa3
    background-color: #cde3f3
  a:not([data-scroll]):not(.search-result):not(.support-button):not(.headerlink)
    color: #4e9bd4
    font-weight: 700
    padding: 0 2px
    transition: all .3s ease
    border-bottom: 1px dotted #4e9bd4

  .q-layout-drawer-right
    position: fixed
  #tools .q-item-side
    min-width: 24px

  code
    color: #286fa3
    padding: 2px 5px
    margin: 0 2px
    border-radius: 2px
    border: 1px solid #e6e6e6
    white-space: nowrap
    box-shadow: 0 1px 1px rgba(0,0,0,.125)

  code, pre
    font-family: 'Roboto Mono',Monaco,courier,monospace
    font-size: .8em
    -webkit-font-smoothing: initial
    -moz-osx-font-smoothing: initial

  hightlight, code, pre
    background-color: #f8f8f8

  .padding
    padding: 1rem 2rem

  #embed__container a
    display: none
  .gist-meta
    display: none
</style>
