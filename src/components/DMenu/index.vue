<template>
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
      <q-search hide-underline clearable v-model="term" @input="search" :placeholder="$t('menu.search')" class="q-ml-sm q-mr-xs" />
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

      <q-list-header>{{ $t('_.starting._') }}</q-list-header>
      <q-item to="/starting/intro" v-show="matches[0] || !matches">
        <q-item-side icon="announcement" />
        <q-item-main>{{ $t('_.starting.intro._') }}</q-item-main>
      </q-item>
      <q-item to="/starting/platform" v-show="matches[1] || !matches">
        <q-item-side icon="phonelink" />
        <q-item-main>{{ $t('_.starting.platform._') }}</q-item-main>
      </q-item>
      <q-item to="/starting/events" v-show="matches[2] || !matches">
        <q-item-side icon="event" />
        <q-item-main>{{ $t('_.starting.events._') }}</q-item-main>
      </q-item>
      <q-item to="/starting/injections" v-show="matches[3] || !matches">
        <q-item-side icon="vertical_align_bottom" />
        <q-item-main>{{ $t('_.starting.injections._') }}</q-item-main>
      </q-item>
      <q-item to="/starting/i18n" v-show="matches[4] || !matches">
        <q-item-side icon="language" />
        <q-item-main>{{ $t('_.starting.i18n._') }}</q-item-main>
      </q-item>
      <q-item to="/starting/rtl" v-show="matches[5] || !matches">
        <q-item-side icon="format_list_numbered_rtl" />
        <q-item-main>{{ $t('_.starting.rtl._') }}</q-item-main>
      </q-item>
      <q-item-separator />

      <q-list-header>{{ $t('_.style._') }}</q-list-header>
      <q-item to="/style/color" v-show="matches[6] || !matches">
        <q-item-side icon="style" />
        <q-item-main>{{ $t('_.style.color._') }}</q-item-main>
      </q-item>
      <q-item to="/style/typography" v-show="matches[7] || !matches">
        <q-item-side icon="format_bold" />
        <q-item-main>{{ $t('_.style.typography._') }}</q-item-main>
      </q-item>
      <q-item to="/style/ripples" v-show="matches[8] || !matches">
        <q-item-side icon="blur_on" />
        <q-item-main>{{ $t('_.style.ripples._') }}</q-item-main>
      </q-item>
      <q-item-separator class="partial" />
      <q-item v-show="matches[9] || !matches">
        <q-item-side icon="border_style" />
        <q-item-main>{{ $t('_.style.stylus._') }}</q-item-main>
      </q-item>
      <q-item v-show="matches[10] || !matches">
        <q-item-side icon="insert_emoticon" />
        <q-item-main>{{ $t('_.style.icons._') }}</q-item-main>
      </q-item>
      <q-item v-show="matches[11] || !matches">
        <q-item-side icon="space_bar" />
        <q-item-main>{{ $t('_.style.addressbar._') }}</q-item-main>
      </q-item>
      <q-item-separator />

      <q-list-header>{{ $t('_.layout._') }}</q-list-header>
      <q-item v-show="matches[12] || !matches">
        <q-item-side icon="play_circle_outline" />
        <q-item-main>{{ $t('_.layout.play._') }}</q-item-main>
      </q-item>
      <q-item v-show="matches[13] || !matches">
        <q-item-side icon="view_array" />
        <q-item-main>{{ $t('_.layout.drawer._') }}</q-item-main>
      </q-item>
      <q-item v-show="matches[14] || !matches">
        <q-item-side icon="pin_drop" />
        <q-item-main>{{ $t('_.layout.sticky._') }}</q-item-main>
      </q-item>
      <q-item v-show="matches[15] || !matches">
        <q-item-side icon="play_for_work" />
        <q-item-main>{{ $t('_.layout.floating._') }}</q-item-main>
      </q-item>
      <q-item-separator class="partial" />
      <q-item to="/layout/flexbox" v-show="matches[16] || !matches">
        <q-item-side icon="web" />
        <q-item-main>{{ $t('_.layout.flexbox._') }}</q-item-main>
      </q-item>
      <q-item-separator />

      <q-list-header>{{ $t('_.components._') }}</q-list-header>
      <q-collapsible :label="$t('_.components.buttons._')">
        <q-item v-show="matches[17] || !matches">
          <q-item-side icon="panorama_wide_angle" />
          <q-item-main>Standard Button</q-item-main>
        </q-item>
        <q-item v-show="matches[18] || !matches">
          <q-item-side icon="group" />
          <q-item-main>Button Groups</q-item-main>
        </q-item>
        <q-item v-show="matches[19] || !matches">
          <q-item-side icon="details" />
          <q-item-main>Dropdown Groups</q-item-main>
        </q-item>
      </q-collapsible>
      <q-collapsible :label="$t('_.components.navigation._')">
        <q-item v-show="matches[20] || !matches">
          <q-item-side icon="view_day" />
          <q-item-main>Toolbar</q-item-main>
        </q-item>
        <q-item v-show="matches[21] || !matches">
          <q-item-side icon="tab" />
          <q-item-main>Tabs</q-item-main>
        </q-item>
        <q-item v-show="matches[22] || !matches">
          <q-item-side icon="vertical_align_center" />
          <q-item-main>Pull to Refresh</q-item-main>
        </q-item>
        <q-item v-show="matches[23] || !matches">
          <q-item-side icon="content_paste" />
          <q-item-main>Context Menu</q-item-main>
        </q-item>
        <q-item v-show="matches[24] || !matches">
          <q-item-side icon="skip_next" />
          <q-item-main>Breadcrumbs</q-item-main>
        </q-item>
        <q-item v-show="matches[25] || !matches">
          <q-item-side icon="linear_scale" />
          <q-item-main>Pagination</q-item-main>
        </q-item>
      </q-collapsible>
      <q-collapsible :label="$t('_.components.forms._')">
        <q-item v-show="matches[26] || !matches">
          <q-item-side icon="text_fields" />
          <q-item-main>Fields</q-item-main>
        </q-item>
        <q-item v-show="matches[27] || !matches">
          <q-item-side icon="text_format" />
          <q-item-main>Input Textfield</q-item-main>
        </q-item>
        <q-item v-show="matches[28] || !matches">
          <q-item-side icon="dns" />
          <q-item-main>Chips Input</q-item-main>
        </q-item>
        <q-item v-show="matches[29] || !matches">
          <q-item-side icon="brush" />
          <q-item-main>Color Picker</q-item-main>
        </q-item>
        <q-item v-show="matches[30] || !matches">
          <q-item-side icon="more_horiz" />
          <q-item-main>Autocomplete</q-item-main>
        </q-item>
        <q-item v-show="matches[31] || !matches">
          <q-item-side icon="mode_edit" />
          <q-item-main>Editor (WYSIWYG)</q-item-main>
        </q-item>
        <q-item v-show="matches[32] || !matches">
          <q-item-side icon="search" />
          <q-item-main>Search</q-item-main>
        </q-item>
        <q-item v-show="matches[33] || !matches">
          <q-item-side icon="tune" />
          <q-item-main>Slider</q-item-main>
        </q-item>
        <q-item v-show="matches[34] || !matches">
          <q-item-side icon="linear_scale" />
          <q-item-main>Range</q-item-main>
        </q-item>
        <q-item v-show="matches[35] || !matches">
          <q-item-side icon="check_box" />
          <q-item-main>Checkbox</q-item-main>
        </q-item>
        <q-item v-show="matches[36] || !matches">
          <q-item-side icon="repeat" />
          <q-item-main>Toggle</q-item-main>
        </q-item>
        <q-item v-show="matches[37] || !matches">
          <q-item-side icon="view_compact" />
          <q-item-main>Button Toggle</q-item-main>
        </q-item>
        <q-item v-show="matches[38] || !matches">
          <q-item-side icon="toc" />
          <q-item-main>Option Group</q-item-main>
        </q-item>
        <q-item v-show="matches[39] || !matches">
          <q-item-side icon="access_time" />
          <q-item-main>Date & Time</q-item-main>
        </q-item>
        <q-item v-show="matches[40] || !matches">
          <q-item-side icon="event_note" />
          <q-item-main>Select</q-item-main>
        </q-item>
        <q-item v-show="matches[41] || !matches">
          <q-item-side icon="star_half" />
          <q-item-main>Rating</q-item-main>
        </q-item>
        <q-item v-show="matches[42] || !matches">
          <q-item-side icon="timelapse" />
          <q-item-main>Knob</q-item-main>
        </q-item>
        <q-item v-show="matches[43] || !matches">
          <q-item-side icon="cloud_upload" />
          <q-item-main>Uploader</q-item-main>
        </q-item>
      </q-collapsible>
      <q-collapsible :label="$t('_.components.grouping._')">
        <q-item v-show="matches[44] || !matches">
          <q-item-side icon="contact_mail" />
          <q-item-main>Card</q-item-main>
        </q-item>
        <q-item v-show="matches[45] || !matches">
          <q-item-side icon="format_line_spacing" />
          <q-item-main>Collapsible</q-item-main>
        </q-item>
        <q-item v-show="matches[46] || !matches">
          <q-item-side icon="border_all" />
          <q-item-main>Data Table</q-item-main>
        </q-item>
        <q-item v-show="matches[47] || !matches">
          <q-item-side icon="list" />
          <q-item-main>List</q-item-main>
        </q-item>
        <q-item v-show="matches[48] || !matches">
          <q-item-side icon="directions_run" />
          <q-item-main>Stepper</q-item-main>
        </q-item>
        <q-item v-show="matches[49] || !matches">
          <q-item-side icon="format_indent_increase" />
          <q-item-main>Tree</q-item-main>
        </q-item>
      </q-collapsible>
      <q-collapsible :label="$t('_.components.popups._')">
        <q-item v-show="matches[50] || !matches">
          <q-item-side icon="assignment" />
          <q-item-main>Action Sheet</q-item-main>
        </q-item>
        <q-item v-show="matches[51] || !matches">
          <q-item-side icon="question_answer" />
          <q-item-main>Dialog</q-item-main>
        </q-item>
        <q-item v-show="matches[52] || !matches">
          <q-item-side icon="settings_overscan" />
          <q-item-main>Modal</q-item-main>
        </q-item>
        <q-item v-show="matches[53] || !matches">
          <q-item-side icon="warning" />
          <q-item-main>Notify</q-item-main>
        </q-item>
        <q-item v-show="matches[54] || !matches">
          <q-item-side icon="filter_none" />
          <q-item-main>Popover</q-item-main>
        </q-item>
        <q-item v-show="matches[55] || !matches">
          <q-item-side icon="speaker_notes" />
          <q-item-main>Tooltip</q-item-main>
        </q-item>
      </q-collapsible>
      <q-collapsible :label="$t('_.components.progress._')">
        <q-item v-show="matches[56] || !matches">
          <q-item-side icon="trending_flat" />
          <q-item-main>Ajax Bar</q-item-main>
        </q-item>
        <q-item v-show="matches[57] || !matches">
          <q-item-side icon="hourglass_full" />
          <q-item-main>Loading</q-item-main>
        </q-item>
        <q-item v-show="matches[58] || !matches">
          <q-item-side icon="hourglass_empty" />
          <q-item-main>Inner Loading</q-item-main>
        </q-item>
        <q-item v-show="matches[59] || !matches">
          <q-item-side icon="sort" />
          <q-item-main>Progress Bar</q-item-main>
        </q-item>
        <q-item v-show="matches[60] || !matches">
          <q-item-side icon="refresh" />
          <q-item-main>Spinner</q-item-main>
        </q-item>
      </q-collapsible>
      <q-collapsible :label="$t('_.components.media._')">
        <q-item v-show="matches[61] || !matches">
          <q-item-side icon="vibration" />
          <q-item-main>Carousel</q-item-main>
        </q-item>
        <q-item v-show="matches[62] || !matches">
          <q-item-side icon="theaters" />
          <q-item-main>Parallax</q-item-main>
        </q-item>
        <q-item v-show="matches[63] || !matches">
          <q-item-side icon="movie" />
          <q-item-main>Video Embedding</q-item-main>
        </q-item>
      </q-collapsible>
      <q-collapsible :label="$t('_.components.scrolling._')">
        <q-item v-show="matches[64] || !matches">
          <q-item-side icon="update" />
          <q-item-main>Infinite Scroll</q-item-main>
        </q-item>
        <q-item v-show="matches[65] || !matches">
          <q-item-side icon="aspect_ratio" />
          <q-item-main>Scroll Area</q-item-main>
        </q-item>
        <q-item v-show="matches[66] || !matches">
          <q-item-side icon="low_priority" />
          <q-item-main>Scroll Fire</q-item-main>
        </q-item>
        <q-item v-show="matches[67] || !matches">
          <q-item-side icon="vertical_align_top" />
          <q-item-main>Back To Top</q-item-main>
        </q-item>
      </q-collapsible>
      <q-collapsible :label="$t('_.components.others._')">
        <q-item v-show="matches[68] || !matches">
          <q-item-side icon="assignment_late" />
          <q-item-main>Alert</q-item-main>
        </q-item>
        <q-item v-show="matches[69] || !matches">
          <q-item-side icon="loyalty" />
          <q-item-main>Chip</q-item-main>
        </q-item>
        <q-item v-show="matches[70] || !matches">
          <q-item-side icon="chat" />
          <q-item-main>Chat</q-item-main>
        </q-item>
        <q-item v-show="matches[71] || !matches">
          <q-item-side icon="date_range" />
          <q-item-main>Timeline</q-item-main>
        </q-item>
      </q-collapsible>
      <q-item-separator />

      <q-list-header>{{ $t('_.plugins._') }}</q-list-header>
      <q-item v-show="matches[72] || !matches">
        <q-item-side icon="cloud_upload" />
        <q-item-main>Cookies</q-item-main>
      </q-item>
      <q-item v-show="matches[73] || !matches">
        <q-item-side icon="storage" />
        <q-item-main>Web Storage</q-item-main>
      </q-item>
      <q-item v-show="matches[74] || !matches">
        <q-item-side icon="devices_other" />
        <q-item-main>Screen</q-item-main>
      </q-item>
      <q-item v-show="matches[75] || !matches">
        <q-item-side icon="fullscreen" />
        <q-item-main>App Fullscreen</q-item-main>
      </q-item>
      <q-item v-show="matches[76] || !matches">
        <q-item-side icon="visibility" />
        <q-item-main>App Visibility</q-item-main>
      </q-item>
      <q-item-separator />

      <q-list-header>{{ $t('_.directives._') }}</q-list-header>
      <q-item v-show="matches[77] || !matches">
        <q-item-side icon="touch_app" />
        <q-item-main>Panning Touch/Mouse</q-item-main>
      </q-item>
      <q-item v-show="matches[78] || !matches">
        <q-item-side icon="touch_app" />
        <q-item-main>Swipe Touch/Mouse</q-item-main>
      </q-item>
      <q-item v-show="matches[79] || !matches">
        <q-item-side icon="touch_app" />
        <q-item-main>Touch/Mouse Hold</q-item-main>
      </q-item>
      <q-item-separator />

      <q-list-header>{{ $t('_.helpers._') }}</q-list-header>
      <q-item v-show="matches[80] || !matches">
        <q-item-side icon="space_bar" />
        <q-item-main>Spacing</q-item-main>
      </q-item>
      <q-item to="/helpers/shadows" v-show="matches[81] || !matches">
        <q-item-side icon="layers" />
        <q-item-main>{{ $t('_.helpers.shadows._') }}</q-item-main>
      </q-item>
      <q-item v-show="matches[82] || !matches">
        <q-item-side icon="visibility_off" />
        <q-item-main>Visibility</q-item-main>
      </q-item>
      <q-item v-show="matches[83] || !matches">
        <q-item-side icon="line_style" />
        <q-item-main>Positioning</q-item-main>
      </q-item>
      <q-item v-show="matches[84] || !matches">
        <q-item-side icon="more_horiz" />
        <q-item-main>Other Helpers Classes</q-item-main>
      </q-item>
      <q-item-separator />

      <q-list-header>{{ $t('_.animations._') }}</q-list-header>
      <q-item v-show="matches[85] || !matches">
        <q-item-side icon="transform" />
        <q-item-main>Transition</q-item-main>
      </q-item>
      <q-item v-show="matches[86] || !matches">
        <q-item-side icon="swap_vert" />
        <q-item-main>Slide Transition</q-item-main>
      </q-item>
      <q-item v-show="matches[87] || !matches">
        <q-item-side icon="fab fa-js" />
        <q-item-main>JS Animations</q-item-main>
      </q-item>
      <q-item v-show="matches[88] || !matches">
        <q-item-side icon="fab fa-css3-alt" />
        <q-item-main>Animation CSS Helpers</q-item-main>
      </q-item>
      <q-item-separator />

      <q-list-header>{{ $t('_.utils._') }}</q-list-header>
      <q-item v-show="matches[89] || !matches">
        <q-item-side icon="date_range" />
        <q-item-main>Date Utils</q-item-main>
      </q-item>
      <q-item v-show="matches[90] || !matches">
        <q-item-side icon="format_color_fill" />
        <q-item-main>Color Utils</q-item-main>
      </q-item>
      <q-item v-show="matches[91] || !matches">
        <q-item-side icon="code" />
        <q-item-main>DOM Utils</q-item-main>
      </q-item>
      <q-item v-show="matches[92] || !matches">
        <q-item-side icon="text_format" />
        <q-item-main>Formatter Utils</q-item-main>
      </q-item>
      <q-item v-show="matches[93] || !matches">
        <q-item-side icon="more_horiz" />
        <q-item-main>Other Utils</q-item-main>
      </q-item>
    </q-list>
  </q-scroll-area>
</template>

<script>
import { openURL } from 'quasar'
import menu from 'src/i18n/menu.json'

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
  }
}
</script>

<style lang="stylus" scoped>
  .q-item-separator-component.partial
    margin: 6px auto
    width: 30px
    height: 3px
</style>
