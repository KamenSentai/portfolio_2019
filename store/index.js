import Vuex from 'vuex'

import modules from './modules'

const store = () => {
  return new Vuex.Store({
    modules
  })
}

export default store
