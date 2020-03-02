import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 1.normalize.css引入
import 'normalize.css/normalize.css'
// 2.element-ui的全局引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
