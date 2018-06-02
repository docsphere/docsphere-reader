<template>
  <div id="tools" class="row bg-white" style="height: 100%">
    <q-list highlight>
      <q-item :to="overview" exact>
        <q-item-side icon="pageview" />
        <q-tooltip anchor="center right" self="center left">{{ $t('tools.overview') }}</q-tooltip>
      </q-item>
      <q-item-separator v-if="showcase" />
      <q-item v-if="showcase" :to="showcase" exact>
        <q-item-side icon="play_circle_filled" />
        <q-tooltip anchor="center right" self="center left">{{ $t('tools.showcase._') }}</q-tooltip>
      </q-item>
      <q-item v-if="showcase" :to="`${showcase}/code`">
        <q-item-side icon="fas fa-file-code" />
        <q-tooltip anchor="center right" self="center left">{{ $t('tools.showcase.code') }}</q-tooltip>
      </q-item>
      <q-item-separator />
      <q-item class="bg-red-3">
        <q-item-side icon="assignment" />
        <q-tooltip anchor="center right" self="center left">{{ $t('tools.changelog') }}</q-tooltip>
      </q-item>
      <q-item-separator />
      <q-item v-if="builder" class="bg-red-3">
        <q-item-side icon="build" />
        <q-tooltip anchor="center right" self="center left">{{ $t('tools.builder') }}</q-tooltip>
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
      type: String,
      default: ''
    },
    changelog: {
      type: String,
      default: ''
    },

    builder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  #tools .q-item-side
    min-width: 28px

  #tools .q-list
    border: 0
</style>
