<template lang="pug">
h2(:id="id" @click="navigate(id)" v-html="value")
</template>

<script>
import Navigator from 'components/navigator'

export default {
  name: 'DH2',

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
  beforeCreated () {
    // console.log(`DH2 ${this.value} beforeCreated!`)
  },
  created () {
    // console.log(`DH2 ${this.value} created!`)
  },

  beforeMount () {
    // console.log(`DH2 ${this.value} mounted!`)
  },
  mounted () {
    // console.log(`DH2 ${this.value} mounted!`)

    this.register(this.id)
    this.index(this.id)
  },

  beforeUpdate () {
    // console.log('DH2 - beforeUpdate!')
  },
  updated () {
    // console.log('DH2.mounted!')

    this.register(this.id)
    this.index(this.id)
  }
}
</script>

<style lang="sass">

</style>
