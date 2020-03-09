import Cookie from 'js-cookie'

const state = {
  menu: [], //侧边栏菜单
  currentMenu: {},
  tabsList: [{ path: '/', label: '首页', icon: 's-home', name: 'home' }]
}
const mutations = {
  // 1.登录成功清除menu
  clearMenu(state) {
    state.menu = []
    Cookie.remove('menu')
  },
  // 2.登录成功设置menu
  setMenu(state, val) {
    state.menu = val
    Cookie.set('menu', JSON.stringify(val))
  },
  // 3.添加路由
  addMenu(state, router) {
    if (!Cookie.get('menu')) return
    let menu = JSON.parse(Cookie.get('menu'))
    state.menu = menu
    let currentMenu = [
      {
        path: '/',
        component: () => import(`views/Main`),
        children: []
      }
    ]
    menu.forEach(item => {
      if (item.children) {
        // 有孩子的情况
        item.children = item.children.map(item => {
          item.component = () => import(`views/${item.url}`)
          return item
        })
        currentMenu[0].children.push(...item.children)
      } else {
        // 没有孩子的情况
        item.component = () => import(`views/${item.url}`)
        currentMenu[0].children.push(item)
      }
    })
    router.addRoutes(currentMenu)
  },
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
