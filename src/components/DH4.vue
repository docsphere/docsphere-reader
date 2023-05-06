<template lang="pug">
h4(:id="id" @click="navigate(id)" v-html="value")
</template>

<script>
import Navigator from 'components/navigator'

export default {
  name: 'DH4',

  mixins: [
    Navigator
  ],

  props: {
    id: {
      type: Number,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },

  // @ Events
  created () {
    // console.log('DH4 - created!')
  },

  mounted () {
    // console.log('DH4.mounted!')

    // this.register(this.id)

    // this.index(this.id)
  },

  beforeUpdate () {
    // console.log('DH4 - beforeUpdate!')
  },
  updated () {
    // console.log('DH4.mounted!')

    // this.register(this.id)

    // this.index(this.id)
  }
}
</script>

<style lang="sass">

</style>
