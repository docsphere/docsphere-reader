<template lang="pug">
d-page(disable-nav :nodes="nodes")
  d-page-h(h="3-1")
  .main-color.shadow-1.row.inline.flex-center.text-white(v-for="color in main" :key="color" :class="`bg-${color}`") {{ color }}
  br
  br
  .main-color.shadow-1.row.inline.flex-center.text-white(v-for="color in alert" :key="color" :class="`bg-${color}`") {{ color }}
  br
  br
  d-page-h(h="3-2")
  q-tabs(v-model="tab" inverted)
    q-tab.text-red(default name="tab-default" label="red")
      template(v-slot:title)
    q-tab(v-for="(color, index) in colors" :key="color" :name="`tab-${index}`" :label="color" :class="`text-${color}`")
      template(v-slot:title)
  q-tab-panels(v-model="tab" animated)
    q-tab-pane(name="tab-default")
      .detailed-color.column.flex-center(v-for="n in 14" :key="n" :class="`bg-red-${n}`")
        | {{ 'red-' + n }}
    q-tab-pane(v-for="(color, index) in colors" :key="color" :name="`tab-${index}`")
      .detailed-color.column.flex-center(v-for="n in 14" :key="n" :class="`bg-${color}-${n}`")
        | {{ color + '-' + n }}
</template>

<script>
import Showcase from 'src/pages/showcase'

export default {
  mixins: [Showcase],
  data () {
    return {
      nodes: [
        { id: 1 },
        { id: 2 }
      ],

      tab: 'tab-default',

      main: ['primary', 'secondary', 'accent'],
      alert: ['positive', 'negative', 'info', 'warning'],

      colors: ['pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey']
    }
  }
}
</script>

<style lang="sass" scoped>
div
  &.main-color
    width: 110px
    margin: 5px
    height: 40px
  &.detailed-color
    height: 55px
  &.detail
    margin-bottom: 25px
    max-width: 400px
    min-width: 135px
    display: inline-block
    margin-right: 5px
.detailed-color
  width: 100%
</style>
