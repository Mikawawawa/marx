import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'

import store from './store'
import router from './router'
import VueMaterial from 'vue-material'

import './views/theme.scss'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  el: '#app'
})