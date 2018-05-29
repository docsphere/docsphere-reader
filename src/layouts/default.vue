<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>

        <router-view name="toolbar" />
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer v-model="leftDrawerOpen">
      <q-scroll-area style="width: 100%; height: 100%;" :class="$q.theme === 'mat' ? 'bg-grey-3' : null">
        <div class="row flex-center bg-white" style="height: 115px;">
          <div class="col-5">
            <img class="q-mr-xs" src="/assets/logo.svg" style="height: 75px; float: right;">
          </div>
          <div class="col-7">
            <q-btn class="q-mb-xs" dense no-caps outline size="sm" icon="fa fa-ambulance" label="Support Quasar"
              style="color: goldenrod;"
              @click="openURL('https://quasar-framework.org/support-quasar-framework.html')"
            />
            <div class="text-weight-thin q-mb-xs">Quasar v0.16.2</div>
            <div>Documentation++</div>
          </div>
        </div>
        <q-list no-border link inset-delimiter>
          <q-search hide-underline clearable v-model="term" @input="search" :placeholder="$t('menu.search')" class="q-ml-sm" />
          <q-item-separator />

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
          <q-item-separator />

          <q-list-header>{{ $t('section.starting._') }}</q-list-header>
          <q-item>
            <!--<q-item-side icon="phonelink" />-->
            <q-item-main>Introdution for Beginners</q-item-main>
          </q-item>
          <q-item>
            <q-item-side icon="phonelink" />
            <q-item-main>Platform Detection</q-item-main>
          </q-item>
          <q-item>
            <!--<q-item-side icon="phonelink" />-->
            <q-item-main>Global Event Bus</q-item-main>
          </q-item>
          <q-item>
            <!--<q-item-side icon="phonelink" />-->
            <q-item-main>Vue Prototype Injections</q-item-main>
          </q-item>
          <q-item>
            <!--<q-item-side icon="phonelink" />-->
            <q-item-main>Internationalization (i18n)</q-item-main>
          </q-item>
          <q-item>
            <!--<q-item-side icon="phonelink" />-->
            <q-item-main>RTL Support</q-item-main>
          </q-item>
          <q-item-separator />

          <q-list-header>{{ $t('section.style._') }}</q-list-header>
          <q-item to="/style/color" v-show="matches[0] || !matches">
            <q-item-side icon="style" />
            <q-item-main>{{ $t('section.style.color._') }}</q-item-main>
          </q-item>
          <q-item to="/style/typography" v-show="matches[1] || !matches">
            <q-item-side icon="format_bold" />
            <q-item-main>{{ $t('section.style.typography._') }}</q-item-main>
          </q-item>
          <q-item to="/style/ripples" v-show="matches[2] || !matches">
            <q-item-side icon="blur_on" />
            <q-item-main>{{ $t('section.style.ripples._') }}</q-item-main>
          </q-item>
          <q-item-separator class="partial" />
          <q-item>
            <!--<q-item-side icon="phonelink" />-->
            <q-item-main>Stylus Variables</q-item-main>
          </q-item>
          <q-item>
            <!--<q-item-side icon="phonelink" />-->
            <q-item-main>Icons</q-item-main>
          </q-item>
          <q-item>
            <!--<q-item-side icon="phonelink" />-->
            <q-item-main>Addressbar Color</q-item-main>
          </q-item>
          <q-item-separator />

          <q-list-header>{{ $t('section.layout._') }}</q-list-header>
          <q-item v-show="matches[3] || !matches">
            <q-item-side icon="play_circle_outline" />
            <q-item-main>Play with Layout</q-item-main>
          </q-item>
          <q-item v-show="matches[4] || !matches">
            <q-item-side icon="view_array" />
            <q-item-main>Drawer Panels</q-item-main>
          </q-item>
          <q-item v-show="matches[5] || !matches">
            <q-item-side icon="pin_drop" />
            <q-item-main>Page Sticky</q-item-main>
          </q-item>
          <q-item v-show="matches[6] || !matches">
            <q-item-side icon="play_for_work" />
            <q-item-main>Floating Action Button</q-item-main>
          </q-item>
          <q-item-separator class="partial" />
          <q-item to="/layout/flexbox" v-show="matches[7] || !matches">
            <q-item-side icon="web" />
            <q-item-main>{{ $t('section.layout.flexbox._') }}</q-item-main>
          </q-item>
          <q-item-separator />

          <q-list-header>{{ $t('section.components._') }}</q-list-header>
          <q-collapsible :label="$t('section.components.buttons._')">
            <q-item>
              <q-item-side icon="panorama_wide_angle" />
              <q-item-main>Standard Button</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="group" />
              <q-item-main>Button Groups</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="details" />
              <q-item-main>Dropdown Groups</q-item-main>
            </q-item>
          </q-collapsible>
          <q-collapsible :label="$t('section.components.navigation._')">
            <q-item>
              <q-item-side icon="view_day" />
              <q-item-main>Toolbar</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="tab" />
              <q-item-main>Tabs</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="vertical_align_center" />
              <q-item-main>Pull to Refresh</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="content_paste" />
              <q-item-main>Context Menu</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="skip_next" />
              <q-item-main>Breadcrumbs</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="linear_scale" />
              <q-item-main>Pagination</q-item-main>
            </q-item>
          </q-collapsible>
          <q-collapsible :label="$t('section.components.forms._')">
            <q-item>
              <q-item-side icon="text_fields" />
              <q-item-main>Fields</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="text_format" />
              <q-item-main>Input Textfield</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="dns" />
              <q-item-main>Chips Input</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="brush" />
              <q-item-main>Color Picker</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="more_horiz" />
              <q-item-main>Autocomplete</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="mode_edit" />
              <q-item-main>Editor (WYSIWYG)</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="search" />
              <q-item-main>Search</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="tune" />
              <q-item-main>Slider</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="linear_scale" />
              <q-item-main>Range</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="check_box" />
              <q-item-main>Checkbox</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="repeat" />
              <q-item-main>Toggle</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="view_compact" />
              <q-item-main>Button Toggle</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="toc" />
              <q-item-main>Option Group</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="access_time" />
              <q-item-main>Date & Time</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="event_note" />
              <q-item-main>Select</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="star_half" />
              <q-item-main>Rating</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="timelapse" />
              <q-item-main>Knob</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="cloud_upload" />
              <q-item-main>Uploader</q-item-main>
            </q-item>
          </q-collapsible>
          <q-collapsible :label="$t('section.components.grouping._')">
            <q-item>
              <q-item-side icon="contact_mail" />
              <q-item-main>Card</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="format_line_spacing" />
              <q-item-main>Collapsible</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="border_all" />
              <q-item-main>Data Table</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="list" />
              <q-item-main>List</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="directions_run" />
              <q-item-main>Stepper</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="format_indent_increase" />
              <q-item-main>Tree</q-item-main>
            </q-item>
          </q-collapsible>
          <q-collapsible :label="$t('section.components.popups._')">
            <q-item>
              <q-item-side icon="assignment" />
              <q-item-main>Action Sheet</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="question_answer" />
              <q-item-main>Dialog</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="settings_overscan" />
              <q-item-main>Modal</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="warning" />
              <q-item-main>Notify</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="filter_none" />
              <q-item-main>Popover</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="speaker_notes" />
              <q-item-main>Tooltip</q-item-main>
            </q-item>
          </q-collapsible>
          <q-collapsible :label="$t('section.components.progress._')">
            <q-item>
              <q-item-side icon="trending_flat" />
              <q-item-main>Ajax Bar</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="hourglass_full" />
              <q-item-main>Loading</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="hourglass_empty" />
              <q-item-main>Inner Loading</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="sort" />
              <q-item-main>Progress Bar</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="refresh" />
              <q-item-main>Spinner</q-item-main>
            </q-item>
          </q-collapsible>
          <q-collapsible :label="$t('section.components.media._')">
            <q-item>
              <q-item-side icon="vibration" />
              <q-item-main>Carousel</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="theaters" />
              <q-item-main>Parallax</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="movie" />
              <q-item-main>Video Embedding</q-item-main>
            </q-item>
          </q-collapsible>
          <q-collapsible :label="$t('section.components.scrolling._')">
            <q-item>
              <q-item-side icon="update" />
              <q-item-main>Infinite Scroll</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="aspect_ratio" />
              <q-item-main>Scroll Area</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="low_priority" />
              <q-item-main>Scroll Fire</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="vertical_align_top" />
              <q-item-main>Back To Top</q-item-main>
            </q-item>
          </q-collapsible>
          <q-collapsible :label="$t('section.components.others._')">
            <q-item>
              <q-item-side icon="assignment_late" />
              <q-item-main>Alert</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="loyalty" />
              <q-item-main>Chip</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="chat" />
              <q-item-main>Chat</q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="date_range" />
              <q-item-main>Timeline</q-item-main>
            </q-item>
          </q-collapsible>
          <q-item-separator />

          <q-list-header>{{ $t('section.plugins._') }}</q-list-header>
          <q-item>
            <!--<q-item-side icon="visibility" />-->
            <q-item-main>Cookies</q-item-main>
          </q-item>
          <q-item>
            <!--<q-item-side icon="visibility" />-->
            <q-item-main>Web Storage</q-item-main>
          </q-item>
          <q-item>
            <!--<q-item-side icon="visibility" />-->
            <q-item-main>Screen</q-item-main>
          </q-item>
          <q-item>
            <q-item-side icon="fullscreen" />
            <q-item-main>App Fullscreen</q-item-main>
          </q-item>
          <q-item>
            <q-item-side icon="visibility" />
            <q-item-main>App Visibility</q-item-main>
          </q-item>
          <q-item-separator />

          <q-list-header>{{ $t('section.directives._') }}</q-list-header>
          <q-item>
            <q-item-side icon="touch_app" />
            <q-item-main>Panning Touch/Mouse</q-item-main>
          </q-item>
          <q-item>
            <q-item-side icon="touch_app" />
            <q-item-main>Swipe Touch/Mouse</q-item-main>
          </q-item>
          <q-item>
            <q-item-side icon="touch_app" />
            <q-item-main>Touch/Mouse Hold</q-item-main>
          </q-item>
          <q-item-separator />

          <q-list-header>{{ $t('section.helpers._') }}</q-list-header>
          <q-item>
            <!--<q-item-side icon="visibility" />-->
            <q-item-main>Spacing</q-item-main>
          </q-item>
          <q-item to="/helpers/shadows">
            <q-item-side icon="layers" />
            <q-item-main>{{ $t('section.helpers.shadows._') }}</q-item-main>
          </q-item>
          <q-item>
            <!--<q-item-side icon="visibility" />-->
            <q-item-main>Visibility</q-item-main>
          </q-item>
          <q-item>
            <!--<q-item-side icon="visibility" />-->
            <q-item-main>Positioning</q-item-main>
          </q-item>
          <q-item>
            <!--<q-item-side icon="visibility" />-->
            <q-item-main>Other Helpers Classes</q-item-main>
          </q-item>
          <q-item-separator />

          <q-list-header>{{ $t('section.animations._') }}</q-list-header>
          <q-item>
            <q-item-side icon="transform" />
            <q-item-main>Transition</q-item-main>
          </q-item>
          <q-item>
            <q-item-side icon="swap_vert" />
            <q-item-main>Slide Transition</q-item-main>
          </q-item>
          <q-item>
            <!--<q-item-side icon="visibility" />-->
            <q-item-main>JS Animations</q-item-main>
          </q-item>
          <q-item>
            <!--<q-item-side icon="visibility" />-->
            <q-item-main>Animation CSS Helpers</q-item-main>
          </q-item>
          <q-item-separator />

          <q-list-header>{{ $t('section.utils._') }}</q-list-header>
          <q-item>
            <!--<q-item-side icon="visibility" />-->
            <q-item-main>Date Utils</q-item-main>
          </q-item>
          <q-item>
            <!--<q-item-side icon="visibility" />-->
            <q-item-main>Color Utils</q-item-main>
          </q-item>
          <q-item>
            <!--<q-item-side icon="visibility" />-->
            <q-item-main>DOM Utils</q-item-main>
          </q-item>
          <q-item>
            <!--<q-item-side icon="visibility" />-->
            <q-item-main>Formatter Utils</q-item-main>
          </q-item>
          <q-item>
            <!--<q-item-side icon="visibility" />-->
            <q-item-main>Other Utils</q-item-main>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-layout-drawer>

    <router-view name="tools" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import menu from 'assets/menu.json'

export default {
  name: 'LayoutDefault',

  data () {
    return {
      term: null,
      matches: false,
      leftDrawerOpen: this.$q.platform.is.desktop
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
  }
}
</script>

<style lang="stylus">
  .q-layout-drawer-right
    width: 58px

  h1, h2, h3, h4, h5, h6
    color: #286fa3
    font-weight: 600
  h1, h2, h3, h4, h5
    margin: 0 0 .7em
  h6
    margin: 2em 0 .8em
    padding-bottom: .4em
    border-bottom: 1px solid #ddd

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

  .q-layout-drawer-right
    position: fixed
  #tools .q-item-side
    min-width: 24px

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

  .q-item-separator-component.partial
    margin: 6px auto
    width: 30px
    height: 3px
</style>
