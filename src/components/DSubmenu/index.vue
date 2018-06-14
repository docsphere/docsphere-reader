<template>
  <div id="submenu" class="row bg-white" style="height: 100%">
    <q-list highlight>
      <q-item :to="overview" v-bind:exact="$store.state.page.relative !== '/'">
        <q-item-side icon="pageview" />
        <q-tooltip v-if="$q.platform.is.desktop" anchor="center right" self="center left">{{ $t('submenu.overview') }}</q-tooltip>
      </q-item>
      <q-item-separator v-if="showcase" />

      <q-item v-if="showcase" :to="`${overview}/showcase`" exact>
        <q-item-side icon="play_circle_filled" />
        <q-tooltip v-if="$q.platform.is.desktop" anchor="center right" self="center left">{{ $t('submenu.showcase._') }}</q-tooltip>
      </q-item>
      <q-item v-if="showcase" :to="`${overview}/showcase/code`">
        <q-item-side icon="fas fa-file-code" />
        <q-tooltip v-if="$q.platform.is.desktop" anchor="center right" self="center left">{{ $t('submenu.showcase.code') }}</q-tooltip>
      </q-item>
      <q-item-separator />

      <q-item class="bg-red-3">
        <q-item-side icon="assignment" />
        <q-tooltip v-if="$q.platform.is.desktop" anchor="center right" self="center left">{{ $t('submenu.changelog') }}</q-tooltip>
      </q-item>
      <q-item-separator />

      <q-item v-if="builder" class="bg-red-3">
        <q-item-side icon="build" />
        <q-tooltip v-if="$q.platform.is.desktop" anchor="center right" self="center left">{{ $t('submenu.builder') }}</q-tooltip>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: 'DSubmenu',

  props: {
    overview: {
      type: String,
      required: true
    },

    showcase: {
      type: Boolean,
      default: true
    },
    changelog: {
      type: Boolean,
      default: false
    },
    builder: {
      type: Boolean,
      default: false
    }
  },

  mounted () {
    this.$store.commit('layout/setRight', true)
    this.$store.commit('layout/setRightToggle', true)
  },
  beforeDestroy () {
    this.$store.commit('layout/setRight', false)
    this.$store.commit('layout/setRightToggle', false)
  }
}
</script>

<style lang="stylus">
  #submenu
    position: fixed
    z-index: 1000
    max-width: 60px
  #submenu .q-item-side
    min-width: 28px

  #submenu .q-list
    border: 0
</style>
