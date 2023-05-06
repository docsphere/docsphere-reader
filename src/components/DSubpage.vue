<template lang="pug">
d-page
  header
    d-h1(:id="0")

  main
    d-page-section(:id="id")
</template>

<script>
import Subpages from 'src/components/subpages'

export default {
  name: 'DSubpage',

  mixins: [
    Subpages
  ],

  computed: {
    id () {
      const path = this.$route.path

      let hash = 5381
      for (let i = 0; i < path.length; i++) {
        hash = (hash * 33) ^ path.charCodeAt(i)
      }

      return hash >>> 0
    }
  }
}
</script>

<style scoped></style>
