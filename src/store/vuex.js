// export {vuex}
let Vue;
const forEach = (obj,cb)=>{
    Object.keys(obj).forEach(key=>{
        cb(key,obj[key])
    })
};
class Store {
    constructor(options = {}) {
        // this.state =   options.state;
        this.data = new Vue({
            data() {
                return {
                    state: options.state
                }
            }
        });
        let getters = options.getters;
        this.getters = {};
        // Object.keys(getters).forEach(getterName => {
        //     Object.defineProperty(this.getters, getterName, {
        //         get: () => {
        //             return getters[getterName](this.state)
        //         }
        //     })
        // })
        forEach(getters,(getterName,fn)=>{
            Object.defineProperty(this.getters, getterName, {
                get: () => {
                    return fn(this.state)
                }
            })
        });
        let mutations = options.mutations;
        this.mutations = {};
        // Object.keys(mutations).forEach(mutationName => {
        //     this.mutations[mutationName] = (payload) => {
        //         mutations[mutationName](this.state, payload)
        //     }
        // })
        forEach(mutations,(mutationName,fn)=>{
            this.mutations[mutationName] = (payload) => {
                fn(this.state, payload)
            }
        })
        let actions = options.actions;
        this.actions = {};
        forEach(actions,(actionName,fn)=>{
            this.actions[actionName] = (payload) => {
                fn(this, payload)
            }
        })
    }
    dispatch= (actionName,payload)=>{
        this.actions[actionName](payload)
    }
    commit = (mutationName, payload) => {
        this.mutations[mutationName](payload)
    };

    get state() {
        return this.data.state
    }
}

const install = (_Vue) => {
    Vue = _Vue;
    console.log("install");
    Vue.mixin({
        beforeCreate() {
            // 没有把store没有用到原型了
            if (this.$options && this.$options.store) {
                this.$store = this.$options.store;
            } else {
                this.$store = this.$parent && this.$parent.$store;
            }
        }
    })
};
export default {
    install, // 给vue 提供一个全局的vuex
    Store
}