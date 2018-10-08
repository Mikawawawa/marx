import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    setUser(state,id){
      state.id=id
    },
    deleteUser(state){
      state.id=undefined
    }
  },
  actions: {
    
  }
})
