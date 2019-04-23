import Vuex from 'vuex'

import modules from './modules'

const store = () => new Vuex.Store({
  modules,
  state: {
    prevRoute: '',
    nextRoute: ''
  },
  mutations: {
    UPDATE_VISIT(state, path) {
      state.prevRoute = state.nextRoute
      state.nextRoute = path
    }
  }
})

export default store
