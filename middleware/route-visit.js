export default ({ store, route }) => {
  store.commit('UPDATE_VISIT', route.name)

  if (route.path === '/about') store.commit('CHANGE_COLOR', 'white')
  else store.commit('CHANGE_COLOR', 'black')
}
