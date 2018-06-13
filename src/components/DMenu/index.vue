<template>
  <q-scroll-area id="menu" style="width: 100%; height: 100%;" :class="$q.theme === 'mat' ? 'bg-grey-3' : null">
    <div class="row flex-center bg-white" style="height: 115px;">
      <div class="col-5">
        <img class="q-mr-xs" src="/assets/logo.svg" style="height: 75px; float: right;">
      </div>
      <div class="col-7">
        <div class="text-weight-thin q-mb-xs">Quasar v0.16.0</div>
        <div>Documentation++</div>
        <q-btn class="q-mt-xs" style="color: goldenrod;"
               dense no-caps outline size="sm" icon="fa fa-ambulance" label="Support Quasar"
               @click="openURL('https://quasar-framework.org/support-quasar-framework.html')"/>
      </div>
    </div>

    <q-list no-border link inset-delimiter>
      <q-search hide-underline clearable v-model="term" @input="search" :placeholder="$t('menu.search')" class="q-ml-lg q-mr-md" />
    </q-list>
    <q-item-separator class="list" />

    <q-list no-border link inset-delimiter>
      <q-item to="/" exact>
        <q-item-side icon="home" />
        <q-item-main>{{ $t('menu.home') }}</q-item-main>
      </q-item>
      <q-item to="/changelog">
        <q-item-side icon="assignment" />
        <q-item-main>Changelog</q-item-main>
      </q-item>
      <q-item to="/settings">
        <q-item-side icon="settings" />
        <q-item-main>{{ $t('menu.settings') }}</q-item-main>
      </q-item>
    </q-list>
    <q-item-separator class="list" />

    <q-list no-border link inset-delimiter>
      <template v-for="(item, index) in $router.options.routes.slice(0, -1)">
        <q-list-header v-if="item.meta.menu.header" :key="`${index}-h`">
          <q-icon :name="item.meta.menu.header.icon" size="1.5rem" />
          <span> {{ $t(`_.${item.meta.menu.header.name}._`) }}</span>
        </q-list-header>
        <q-item-separator v-if="item.meta.menu.header" :key="`${index}-s`" class="partial" />
        <q-list-header v-if="item.meta.menu.sub" :key="`${index}-sh`" class="subpage">
          <span>{{ $t(`_.${item.meta.menu.sub}._`) }}</span>
        </q-list-header>

        <q-item :key="`${index}-i`" :to="item.path" v-show="matches[index] || !matches">
          <q-item-side :icon="item.meta.icon" />
          <q-item-main>{{ $t(`_${item.path.replace(/\//g, '.')}._`) }}</q-item-main>
        </q-item>

        <q-item-separator v-if="item.meta.menu.separator" :key="`${index}-s2`" :class="item.meta.menu.separator" />
      </template>
    </q-list>
  </q-scroll-area>
</template>

<script>
import { openURL, scroll } from 'quasar'
import menu from '/src/i18n/menu.json'

const { getScrollTarget, setScrollPosition } = scroll

export default {
  name: 'DMenu',

  data () {
    return {
      term: null,
      matches: false
    }
  },

  methods: {
    openURL,

    search (term) {
      if (term.length > 0) {
        term = term.toLowerCase()
        const lang = this.$q.localStorage.get.item('setting.language')
        this.matches = menu[lang].map(item => {
          return item.indexOf(term) !== -1
        })
      } else {
        this.matches = false
      }
    }
  },

  mounted () {
    const menu = document.getElementById('menu')
    const menuActive = (menu.getElementsByClassName('router-link-active'))[0]

    const target = getScrollTarget(menuActive)
    const offset = menuActive.offsetTop - menuActive.scrollHeight
    const duration = 300

    setScrollPosition(target, offset - (window.innerHeight / 2), duration)
  }
}
</script>

<style lang="stylus" scoped>
  .q-list-header
    text-align: center
    padding-bottom: 0
    min-height: 32px
  .q-list-header.subpage
    text-align: left
    padding-bottom: 5px

  .q-item-separator-component.list
    height 3px
    margin 0

  .q-item-separator-component.page
    height: 3px
  .q-item-separator-component.subpage
    height: 1px
  .q-item-separator-component.partial
    margin: 6px auto
    width: 30px
    height: 3px
</style>
