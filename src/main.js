import Vue from 'vue'
import App from './App.vue'
import store from './store'

console.log("hellohears己家ah")
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
