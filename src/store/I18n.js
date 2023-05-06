export default {
  namespaced: true,

  state: {
    base: '',
    relative: '',
    absolute: ''
  },
  getters: {},
  mutations: {
    setBase (state, val) {
      state.base = val
    },
    setRelative (state, val) {
      state.relative = val
    },
    setAbsolute (state, val) {
      state.absolute = val
    }
  },
  actions: {}
}
