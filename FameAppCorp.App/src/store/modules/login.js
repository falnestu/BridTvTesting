
export default {
  namespaced: true,
  state: () => ({
    username: '',
    password: '',
    loginStatus: null
  }),
  getters: {},
  mutations: {
    setLoginStatus(state, status) {
      state.loginStatus = status
    },
    updateUsername(state, username) {
      state.username = username
    },
    updatePassword(state, password) {
      state.password = password
    }
  },
  actions: {
    connect(context, { router }) {
     // api.post('/api/token',
     //   "username=" + context.state.username + "&password=" + context.state.password + "&grant_type=password"
     // )
     //.then(response => {
     //   context.commit('setContext', response.data, { root: true })
     //   router.push('/home')
     // })
     //   .catch(error => {
     //     context.commit('updatePassword', '')
     //     context.commit('setLoginStatus', 'Login ou mot de passe incorrect')
     // })
    }
  }
}
