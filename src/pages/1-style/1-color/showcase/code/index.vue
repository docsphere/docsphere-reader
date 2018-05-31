<template>
  <q-page class="padding">
    <div v-html="code.div"></div>
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
