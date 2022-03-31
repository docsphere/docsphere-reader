<template>
  <q-page-container>
    <q-page id="content" class="q-pa-lg">
      <div class="text-center">
        <img class="platform" alt="Quasar Platforms" src="quasar/responsive-logo.png" width="325" height="257">
        <h1>Quasar Documentation++ <span class="text-negative">(WIP)</span></h1>
        <p class="caption"><span v-html="t('_.home.texts[0]') + t('_.home.texts[1]') + t('_.home.texts[2]')"></span><a href="https://quasar-framework.org/" target="_blank">Quasar Framework</a>!</p>
        <p class="caption"><span></span>{{ $t('_.home.texts[3]') }}<a href="https://github.com/slowaways/" target="_blank">@slowaways</a></p>
        <hr>
      </div>
      <h2>Features</h2>
      <h3>Internationalization with i18n</h3>
      <p>We want the documentation to be available in any language so that it can reach everyone. Currently available in 2 languages: English (en) and Portuguese (pt).</p>
      <h3>Menu search engine based in keywords and i18n (Beta)</h3>
      <p>The search for content in the documentation is simple, fast and easy. The search input text in the menu makes it easy to search for any content using keywords and you can do it in your favorite language. If the defined language is not English and if the search term is not found or has not been set in current language, by default a search is still performed using keywords in English.</p>
      <h3>Documentation codes in local files (WIP)</h3>
      <p>This documentation uses the same syntax code highlight than Github and the code is inserted into the templates of the documentation pages using <code>&lt;tr&gt;</code> tags for each line of code with the Vue <code>v-pre</code> directive (when necessary). So you can access the codes of the documentation offline and we can also use i18n for example to translate code comments, insert headers with anchors, etc.</p>
      <h3>Navigation using anchored links (RC)</h3>
      <p>Anchor links work in hash and history mode and provide faster navigation and better orientation when navigating through subsections of documentation.</p>
      <h3>Partial Code View in the Showcase (TODO)</h3>
      <p></p>
      <h3>Component Builder with Source Code Output (TODO)</h3>
      <p></p>
      <div class="about"></div>
    </q-page>
  </q-page-container>
</template>

<script>
import translation from 'src/i18n/translation'

export default {
  data () {
    return {
      radio: 'two'
    }
  },
  mixins: [translation]
}
</script>

<style lang="scss">
img.platform {
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
