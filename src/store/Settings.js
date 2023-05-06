export default {
  namespaced: true,

  state: {
    dialog: false
  },
  getters: {
    dialog (state) {
      return state.dialog
    }
  },
  mutations: {
    dialog (state, value) {
      state.dialog = value
    }
  },
  actions: {}
}
