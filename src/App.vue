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
  h1, h2, h3, h4
    font-weight: 600
    color: #286fa3
  h1
    font-size: 2rem
    margin: 0 0 .7em
  h2
    font-size: 1.5rem
    margin: 1.5em 0 .8em
    padding-bottom: .4em
    border-bottom: 1px solid #ddd
  h3
    font-size: 1.17rem
    margin: 1.2em 0 0.9em;
    position: relative;

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
  blockquote
    margin: 0 0 16px;
  blockquote p
    margin: 0

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

  #main
    position absolute
    left 0
    top 0
    width 100%
    height 100%
    margin 0
    padding 0
  #content
    padding 1rem 2rem
</style>
