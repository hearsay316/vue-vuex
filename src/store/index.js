import Vue from 'vue'
import Vuex from './vuex.js'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        age: 10
    },
    getters: {
        myAge(state) {
            return state.age + 10
        }
    },
    mutations: {
        addAge(state, payload) {
            state.age += payload;
        }
    },
    actions: {
        addAge({commit}, payload) {
            setTimeout(() => {
                commit("addAge", payload)
            }, 3000)
        }
    },
    modules: {}
})
