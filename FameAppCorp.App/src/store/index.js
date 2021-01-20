import Vuex from 'vuex'
import Vue from 'vue'
import login from './modules/login'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login
  },

  state: {
    context: null,
    userContext: null,
    messageStatus: null,
    hub: null,
    isLoading: true
  },

  getters: {
    isAdmin: (state) => {
      return state.userContext.RoleID == 1
    }
  },

  //Actions can be complex but never update the state
  actions: {
    changeLocale(context, payload) {
      context.commit('setLocale', payload)
    },
    setMessageStatus(context, value) {
      context.commit('setMessageStatus', value)
    }
  },

  // mutations should be as simple as possible and only responsible for updating just a piece of the state
  mutations: {
    setContext(state, value) {
      state.context = value,
      state.userContext = JSON.parse(value.userContextJson)
    },
    setLoadingStatus(state, value) {
      state.isLoading = value
    },
    setLocale(state, value) {
      i18n.locale = value
    },
    setMessageStatus(state, value) {
      state.messageStatus = value
      setTimeout(function () {
        state.messageStatus = null
      }, 5000)
    }
  }
})
