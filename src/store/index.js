import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import app from './app'
import i18n from './i18n'
import layout from './layout'
import page from './page'
import settings from './settings'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      app, i18n, page, layout, settings
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
