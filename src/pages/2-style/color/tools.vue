<template>
  <q-layout-drawer side="right" v-model="rightDrawerOpen">
    <div id="tools" class="row bg-white" style="height: 100%;">
      <q-list highlight>
        <q-item to="/style/color" exact>
          <q-item-side icon="pageview" />
          <q-tooltip anchor="center right" self="center left">Guide</q-tooltip>
        </q-item>
        <q-item-separator />
        <q-item to="/style/color/play">
          <q-item-side icon="play_circle_filled" />
          <q-tooltip anchor="center right" self="center left">Examples</q-tooltip>
        </q-item>
        <q-item to="/style/color/code">
          <q-item-side icon="code" />
          <q-tooltip anchor="center right" self="center left">Code</q-tooltip>
        </q-item>
        <q-item class="bg-red-3">
          <q-item-side icon="assignment" />
          <q-tooltip anchor="center right" self="center left">Changelog (WIP)</q-tooltip>
        </q-item>
      </q-list>
    </div>
  </q-layout-drawer>
</template>

<script>
export default {
  data () {
    return {
      rightDrawerOpen: true
    }
  }
}
</script>

<style scoped>

</style>
