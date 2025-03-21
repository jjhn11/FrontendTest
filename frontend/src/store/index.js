import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },
  getters: {
    isLoggedIn: state => !!state.user
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    login({ commit }, credentials) {
      // Here you would typically make an API call
      // For now, we'll just simulate a successful login
      return new Promise((resolve) => {
        setTimeout(() => {
          const user = { username: credentials.username, role: 'user' }
          commit('setUser', user)
          resolve(user)
        }, 1000)
      })
    },
    logout({ commit }) {
      commit('setUser', null)
    }
  },
  modules: {
  }
})