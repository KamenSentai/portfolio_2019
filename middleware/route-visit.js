export default ({ store, route }) => {
  const color = route.path === '/about' ? 'white' : 'black'

  store.commit('UPDATE_VISIT', route.name)
  store.commit('CHANGE_COLOR', color)
}
