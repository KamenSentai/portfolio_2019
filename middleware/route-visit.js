export default ({ store, route }) => {
  store.commit('UPDATE_VISIT', route.path)

  if (route.path === '/about') store.commit('theme/CHANGE_COLOR', 'white')
  else store.commit('theme/CHANGE_COLOR', 'black')
}
