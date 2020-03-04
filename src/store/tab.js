const state = {
  menu: [],
  currentMenu: {},
  tabsList: [{ path: '/', label: '首页', icon: 's-home', name: 'home' }]
}
const mutations = {
  selectMenu(state, value) {
    // 根据Aside的点击,动态的切换面包屑组件和tags标签组
    if (value.name !== 'home') {
      // 面包屑
      state.currentMenu = value
      // tags组
      let clickValue = state.tabsList.findIndex(item => item.name === value.name)
      if (clickValue === -1) {
        state.tabsList.push(value)
      }
    } else {
      state.currentMenu = {}
    }
  },
  closeTab(state, value) {
    let result = state.tabsList.findIndex(item => item.name == value.name)
    state.tabsList.splice(result, 1)
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
