export const state = () => ({
  prevRoute: '',
  nextRoute: '',
  color: '',
  isTouchevents: false
})

export const mutations = {
  UPDATE_VISIT(state, path) {
    state.prevRoute = state.nextRoute
    state.nextRoute = path
  },
  CHANGE_COLOR(state, color) {
    state.color = color
  },
  TOGGLE_TOUCHEVENTS(state, value) {
    state.isTouchevents = value
  }
}
