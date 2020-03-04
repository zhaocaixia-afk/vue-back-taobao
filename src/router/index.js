import Vue from 'vue'
import VueRouter from 'vue-router'

const Main = () => import(/* webpackChunkName: "msite" */ 'views/Main')

const Home = () => import(/* webpackChunkName: "main" */ 'views/Home/Home')
const PageOne = () => import(/* webpackChunkName: "main" */ 'views/Other/PageOne')
const PageTwo = () => import(/* webpackChunkName: "main" */ 'views/Other/PageTwo')
const UserManage = () => import(/* webpackChunkName: "main" */ 'views/UserManage/UserManage')
const VideoManage = () => import(/* webpackChunkName: "main" */ 'views/VideoManage/VideoManage')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/main' },
  {
    path: '/main',
    component: Main,
    children: [
      { path: '/', component: Home, name: 'home' },
      {
        path: '/video',
        component: VideoManage,
        name: 'video'
      },
      {
        path: '/user',
        component: UserManage,
        name: 'user'
      },
      {
        path: '/page1',
        component: PageOne,
        name: 'page1'
      },
      {
        path: '/page2',
        component: PageTwo,
        name: 'page2'
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
