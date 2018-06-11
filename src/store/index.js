import Vue from 'vue'
import Vuex from 'vuex'

import layout from './layout'
import page from './page'
import i18n from './i18n'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    layout, page, i18n
  }
})

export default store
