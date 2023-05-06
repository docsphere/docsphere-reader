<template lang="pug">
h1(:id="id" @click="navigate(id)" v-html="heading")
</template>

<script>
import Navigator from 'components/navigator'

export default {
  name: 'DH1',

  mixins: [
    Navigator
  ],

  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    heading () {
      const base = this.$store.state.i18n.base
      const absolute = this.$store.state.i18n.absolute

      let h = ''
      if (base && absolute) {
        h = this.$t(`_.${base}._`)
      } else {
        // TODO exception?
      }

      return h
    }
  },

  // @ Events
  mounted () {
    // console.log('DH1.mounted!')

    this.register(this.id)
  },

  updated () {
    // console.log('DH1.mounted!')

    this.register(this.id)
  }
}
</script>

<style lang="sass">

</style>
