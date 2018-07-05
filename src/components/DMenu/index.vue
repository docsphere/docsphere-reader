<template>
  <q-scroll-area id="menu" :class="$q.theme === 'mat' ? 'bg-grey-3' : null">
    <transition appear enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
      <q-list id="search" class="fixed" no-border link inset-delimiter>
        <q-search hide-underline clearable v-model="term" @input="search" :placeholder="$t('menu.search')" />
      </q-list>
    </transition>

    <div class="row flex-center bg-white" style="height: 115px;">
      <div class="col-5">
        <img class="q-mr-xs" src="statics/logo.svg" style="height: 75px; float: right;">
      </div>
      <div class="col-7">
        <div class="text-weight-thin q-mb-xs">Quasar v0.16.x</div>
        <div>Documentation++</div>
        <q-btn class="q-mt-xs" style="color: goldenrod;"
               dense no-caps outline size="sm" icon="fa fa-ambulance" :label="$t('system.support')"
               @click="openURL('https://quasar-framework.org/support-quasar-framework.html')"/>
      </div>
    </div>
    <q-item-separator class="list" />
    <div class="row bg-white">
      <div class="col text-center">
        <q-btn-group flat>
          <q-btn icon="forum" @click="openURL('http://forum.quasar-framework.org/')" />
          <q-btn icon="fab fa-github" @click="openURL('https://github.com/quasarframework/quasar')" />
          <q-btn icon="fab fa-discord" @click="openURL('https://discord.gg/5TDhbDg')" />
          <q-btn icon="fab fa-twitter" @click="openURL('https://twitter.com/quasarframework')" />
          <q-btn icon="email" @click="openURL('mailto:razvan.stoenescu@gmail.com')" />
        </q-btn-group>
      </div>
    </div>
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
          <q-item-side right>
            <q-icon class="float-right" name="fiber_manual_record" :color="colorize(item.meta.status)" />
          </q-item-side>
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

        if (typeof menu[lang] === 'object') {
          this.matches = menu[lang].map(item => {
            return item.indexOf(term) !== -1
          })

          // Default search
          if (lang !== 'en') {
            this.matches = menu['en'].map((item, index) => {
              return this.matches[index] === true || item.indexOf(term) !== -1
            })
          }
        }
      } else {
        this.matches = false
      }
    },

    colorize (status) {
      if (status === 9) {
        return 'transparent'
      } else if (status === 6) {
        return 'warning'
      } else {
        return 'negative'
      }
    },

    scroll () {
      const menu = document.getElementById('menu')
      const active = (menu.getElementsByClassName('router-link-active'))[0]

      if (typeof active === 'object') {
        const target = getScrollTarget(active)
        const offset = active.offsetTop - active.scrollHeight
        const duration = 300

        setScrollPosition(target, offset - (window.innerHeight / 2) + 80, duration)
      }
    }
  },

  mounted () {
    setTimeout(() => {
      this.scroll()
    }, 1000)

    this.$router.afterEach((to, from) => {
      if (!to.hash || (from.path !== to.path)) {
        setTimeout(() => {
          this.scroll()
        }, 1000)
      }
    })
  }
}
</script>

<style lang="stylus">
  #menu
    width 100%
    height calc(100% - 40px)
    margin-top 40px
  #menu .q-item-section + .q-item-section
    margin-left 0
  #menu .q-item-side-right
    min-width 21px
  #menu .q-list-header
    text-align: center
    padding-bottom: 0
    min-height: 32px
  #menu .q-list-header.subpage
    text-align: left
    padding-bottom: 5px

  #menu .q-item-separator-component.list
    height 3px
    margin 0
  #menu .q-item-separator-component.page
    height: 3px
  #menu .q-item-separator-component.subpage
    height: 1px
  #menu .q-item-separator-component.partial
    margin: 6px auto
    width: 30px
    height: 3px

  #search.fixed
    position fixed
    top 0
    width 300px
    padding-left 24px
    padding-right 16px
    background-color #eee
    box-shadow 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12)
    z-index 1
</style>
