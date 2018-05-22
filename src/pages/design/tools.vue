<template>
  <q-layout-drawer side="right" v-model="rightDrawerOpen">
    <div id="tools" class="row bg-white" style="height: 100%;">
      <q-list highlight>
        <q-item to="/style" exact>
          <q-item-side icon="pageview" />
        </q-item>
        <q-item-separator />
        <q-item to="/style/play">
          <q-item-side icon="visibility" />
        </q-item>
        <q-item to="/style/code">
          <q-item-side icon="code" />
        </q-item>
      </q-list>
    </div>
  </q-layout-drawer>
</template>

<script>
export default {
  name: 'Design_Tools',
  data () {
    return {
      rightDrawerOpen: true
    }
  }
}
</script>

<style scoped>

</style>
