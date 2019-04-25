export const state = () => ({
  color: 'black'
})

export const mutations = {
  CHANGE_COLOR(state, color) {
    state.color = color
  }
}
