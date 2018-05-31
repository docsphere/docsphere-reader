<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',

  mounted () {
    let lang = this.$q.localStorage.get.item('setting.language')

    if (lang === null) {
      lang = 'en'
      this.$q.localStorage.set('setting.language', lang)
    }

    this.$i18n.locale = lang
  }
}
</script>

<style lang="stylus">
  h1, h2, h3, h4, h5, h6
    color: #286fa3
    font-weight: 600
  h1, h2, h3, h4, h5
    margin: 0 0 .7em
  h6
    margin: 2em 0 .8em
    padding-bottom: .4em
    border-bottom: 1px solid #ddd
  h7
    font-weight: 600;
    color: #286fa3;

  a, body
    color: #34495e;
  a
    text-decoration: none
    outline: 0
    cursor: pointer
  a:not([data-scroll]):not(.search-result):not(.support-button):not(.headerlink):hover:not(.button)
    color: #286fa3
    background-color: #cde3f3
  a:not([data-scroll]):not(.search-result):not(.support-button):not(.headerlink)
    color: #4e9bd4
    font-weight: 700
    padding: 0 2px
    transition: all .3s ease
    border-bottom: 1px dotted #4e9bd4

  code
    color: #286fa3
    padding: 2px 5px
    margin: 0 2px
    border-radius: 2px
    border: 1px solid #e6e6e6
    white-space: nowrap
    box-shadow: 0 1px 1px rgba(0,0,0,.125)

  code, pre
    font-family: 'Roboto Mono',Monaco,courier,monospace
    font-size: .8em
    -webkit-font-smoothing: initial
    -moz-osx-font-smoothing: initial

  hightlight, code, pre
    background-color: #f8f8f8

  .padding
    padding: 1rem 2rem

  #embed__container a
    display: none
  .gist-meta
    display: none

  .q-item-link .q-item-side, .q-item-division .q-item-side
    text-align: center
</style>
