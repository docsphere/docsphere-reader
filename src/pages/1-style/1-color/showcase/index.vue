<template>
  <div id="main">
    <div id="content">
      <p class="caption">Main Colors</p>
      <div class="main-color shadow-1 row inline flex-center text-white" v-for="color in main" :key="color" :class="`bg-${color}`">
        {{ color }}
      </div><br><br>
      <div class="main-color shadow-1 row inline flex-center text-white" v-for="color in alert" :key="color" :class="`bg-${color}`">
        {{ color }}
      </div><br><br>
      <div class="main-color shadow-1 row inline flex-center text-white" v-for="color in dark" :key="color" :class="`bg-${color}`">
        {{ color }}
      </div><br><br>
      <div class="main-color shadow-1 row inline flex-center text-dark" v-for="color in light" :key="color" :class="`bg-${color}`">
        {{ color }}
      </div><br><br>
      <p class="caption">Full Palette</p>
      <q-tabs inverted>
        <q-tab default slot="title" name="tab-default" label="red" color="red" />
        <q-tab-pane name="tab-default">
          <div class="detailed-color column flex-center" v-for="n in 14" :key="n" :class="`bg-red-${n}`">red-{{ n }}</div>
        </q-tab-pane>

        <q-tab v-for="(color, index) in colors" :key="color" slot="title" :name="`tab-${index}`" :label="color" :color="color" />
        <q-tab-pane v-for="(color, index) in colors" :key="color" :name="`tab-${index}`">
          <div class="detailed-color column flex-center" v-for="n in 14" :key="n" :class="`bg-${color}-${n}`">{{ color }}-{{ n }}</div>
        </q-tab-pane>
      </q-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      main: ['primary', 'secondary', 'tertiary'],
      alert: ['positive', 'negative', 'info', 'warning'],
      dark: ['faded', 'dark', 'black'],
      light: ['white', 'light'],
      colors: ['pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey']
    }
  }
}
</script>

<style lang="stylus" scoped>
  div.main-color
    width 110px
    margin 5px
    height 40px
  .detailed-color
    width 100%
  div.detailed-color
    height 55px
  div.detail
    margin-bottom 25px
    max-width 400px
    min-width 135px
    display inline-block
    margin-right 5px
</style>
