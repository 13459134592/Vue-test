import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: null,
    avatar: null,
    mobile: null,
    token: null,
    remark: null,
    auth: false,
  },
  mutations: {
    addSign(state, sign) {
      state.sign = sign;
    }
  },
  actions: {
    addSign (commit, sign) {
      commit.commit('addSign', sign)
    }
  }
})
