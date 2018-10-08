import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'

import store from './store'
import router from './router'
import VueMaterial from 'vue-material'

import VueLocalStorage from 'vue-localstorage'

import './views/theme.scss'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.config.productionTip = false

Vue.use(VueLocalStorage)
// Or you can specify any other name and use it via this.$ls, this.$whatEverYouWant
Vue.use(VueLocalStorage, {
  name: 'marx',
  bind: true //created computed members from your variable declarations
})


new Vue({
  router,
  store,
  el: '#app',
  localStorge:{
    id:"",
    type:{}
  }
})