// export {vuex}
let Vue;

class Store {
    constructor(options={}) {
     // this.state =   options.state;
        this.data = new Vue({
            data(){
                return{
                    state:options.state
                }
            }
        });
      let getters = options.getters;
      this.getters = {};
      Object.keys(getters).forEach(getterName=>{
          Object.defineProperty(this.getters,getterName,{
              get:()=>{
                  return getters[getterName](this.state)
              }
          })
      })

    }
    get state (){
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