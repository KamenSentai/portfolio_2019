export default ({ store, route }) => {
  store.commit('UPDATE_VISIT', route.path)

  if (route.path === '/about') store.commit('CHANGE_COLOR', 'white')
  else store.commit('CHANGE_COLOR', 'black')
}
