const state = {
  menu: [],
  currentMenu: {}
}
const mutations = {
  selectMenu(state, value) {
    value.name !== 'home' ? (state.currentMenu = value) : (state.currentMenu = {})
  }
}
const actions = {}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
