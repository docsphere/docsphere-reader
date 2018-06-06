<template>
  <q-page class="row">
    <q-scroll-area id="content" class="col">
      <div v-html="code.div"></div>
    </q-scroll-area>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      code: require('../index.json')
    }
  }
}
</script>

<style lang="stylus"></style>
