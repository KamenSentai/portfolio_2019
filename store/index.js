export const state = () => ({
  prevRoute: '',
  nextRoute: '',
  theme: '',
  isTouchevents: false,
})

export const mutations = {
  UPDATE_VISIT(state, path) {
    state.prevRoute = state.nextRoute
    state.nextRoute = path
  },
  CHANGE_COLOR(state, color) {
    state.theme = color
  },
  CHECK_TOUCHEVENTS(state, value) {
    state.isTouchevents = value
  },
}
