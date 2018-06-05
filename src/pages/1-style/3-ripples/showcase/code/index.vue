<template>
  <div id="main">
    <div id="content" v-html="code.div"></div>
  </div>
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
