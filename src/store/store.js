import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        snippet_list: []
    },
    mutations: {
        change(state, flavor) {
          state.snippet_list = flavor
        }
    },
    getters: {
        snippet_list: state => state.snippet_list
    }
})
