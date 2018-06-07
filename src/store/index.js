import Vue from 'vue'
import Vuex from 'vuex'

import layout from './layout'
import page from './page'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    layout, page
  }
})

export default store
