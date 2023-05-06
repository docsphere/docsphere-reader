<template lang="pug">
q-page-container
  q-page.content.q-pa-lg
    h1 Support Development
    p ...
    q-btn-group(push)
      q-btn(push label="Github Sponsor" color="primary" icon="card_giftcard" @click="goGithubSponsor")
    br
    br

    p Join us and help ensure that Docsphere survives and evolves!
</template>

<script>
export default {
  methods: {
    goGithubSponsor () {
      window.open('https://github.com/sponsors/docsphere/', '_blank')
    }
  }
}
</script>

<style lang="sass">
img
  &.qr-code
    width: 180px
    height: 180px
    margin: auto
  &.platform
    padding-top: 30px
    padding-bottom: 30px
</style>
