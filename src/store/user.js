import Cookie from 'js-cookie'

const state = {
  token: ''
}
const mutations = {
  setToken(state, val) {
    state.token = val
    Cookie.set('token', val)
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
