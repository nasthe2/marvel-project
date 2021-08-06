import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: []
  },
  mutations: {
    SET_CHARACTERS: (state, characters) => {
      state.characters = state.characters.concat(characters);
      console.log(state.characters);
    }
  },
  actions: {
    SET_CHARACTERS: ({ commit }, characters) => 
      commit('SET_CHARACTERS', characters)
  },
  modules: {
  }
})
