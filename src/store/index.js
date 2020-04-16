import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogged: true
  },
  mutations: {
    changeUserState (state) {
      state.isLogged = !state.isLogged
    }
  },
  actions: {
    triggerchangeUser (context) {
      context.commit('changeUserState')
    }
  }
})
