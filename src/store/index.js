import Vue from 'vue'
import Vuex from './vuex.js'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        age:10
    },
    getters:{
        myAge(state){
            return state.age + 10
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})
