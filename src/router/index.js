import Vue from 'vue'
import VueRouter from 'vue-router'

const Main = () => import(/* webpackChunkName: "msite" */ 'views/Main')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/main' },
  { path: '/main', component: Main }
]

const router = new VueRouter({
  routes
})

export default router
