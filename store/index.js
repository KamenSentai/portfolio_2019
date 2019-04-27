export const state = () => ({
  prevRoute: '',
  nextRoute: '',
  color: ''
})

export const mutations = {
  UPDATE_VISIT(state, path) {
    state.prevRoute = state.nextRoute
    state.nextRoute = path
  },
  CHANGE_COLOR(state, color) {
    state.color = color
  }
}
