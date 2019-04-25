export const state = () => ({
  color: ''
})

export const mutations = {
  CHANGE_COLOR(state, color) {
    state.color = color
  }
}
