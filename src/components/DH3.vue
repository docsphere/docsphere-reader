<template lang="pug">
h3(:id="id" @click="navigate(id)" v-html="value")
</template>

<script>
import Navigator from 'components/navigator'

export default {
  name: 'DH3',

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
    // console.log(`DH3 ${this.value} beforeCreated!`)
  },
  created () {
    // console.log(`DH3 ${this.value} created!`)
  },

  beforeMount () {
    // console.log(`DH3 ${this.value} mounted!`)
  },
  mounted () {
    // console.log(`DH3 ${this.value} mounted!`)

    this.register(this.id)
    this.index(this.id, true)
  },

  beforeUpdate () {
    // console.log('DH3 - beforeUpdate!')
  },
  updated () {
    // console.log('DH3.mounted!')

    this.register(this.id)
    this.index(this.id, true)
  }
}
</script>

<style lang="sass">

</style>
