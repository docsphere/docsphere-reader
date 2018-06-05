<template>
  <q-scroll-area id="standard">
    <div id="main" v-html="code.div"></div>
  </q-scroll-area>
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
