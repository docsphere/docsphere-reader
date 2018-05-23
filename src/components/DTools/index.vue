<template>
  <q-layout-drawer side="right" v-model="rightDrawerOpen">
    <div id="tools" class="row bg-white" style="height: 100%;">
      <q-list highlight>
        <q-item :to="guide" exact>
          <q-item-side icon="pageview" />
          <q-tooltip anchor="center right" self="center left">Guide</q-tooltip>
        </q-item>
        <q-item-separator />
        <q-item v-if="showcase" :to="showcase" exact>
          <q-item-side icon="play_circle_filled" />
          <q-tooltip anchor="center right" self="center left">Showcase</q-tooltip>
        </q-item>
        <q-item v-if="showcase" :to="`${showcase}/code`">
          <q-item-side icon="code" />
          <q-tooltip anchor="center right" self="center left">Showcase Code</q-tooltip>
        </q-item>
        <q-item-separator />
        <q-item class="bg-red-3">
          <q-item-side icon="assignment" />
          <q-tooltip anchor="center right" self="center left">Changelog (WIP)</q-tooltip>
        </q-item>
        <q-item-separator />
        <q-item v-if="build" class="bg-red-3">
          <q-item-side icon="build" />
          <q-tooltip anchor="center right" self="center left">Build (WIP)</q-tooltip>
        </q-item>
      </q-list>
    </div>
  </q-layout-drawer>
</template>

<script>
export default {
  name: 'DTools',

  props: {
    guide: {
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

    build: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      rightDrawerOpen: true
    }
  }
}
</script>

<style scoped>

</style>
