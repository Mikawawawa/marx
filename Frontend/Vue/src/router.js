import VueRouter from 'vue-router'

import Login from './views/Login.vue'
import About from "./views/About.vue"
import Home from "./views/Home.vue"

const  routes=[
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/reset',
      name: 'reset',
      component: About
    },
    {
      path:'/home',
      name:'home',
      component: Home
    }
  ]

  // router
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
export default router