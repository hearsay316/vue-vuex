<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>
      今年是2020多少月{{$store.state.age}}
      这个是{{$store.getters.myAge}}
    </p>
    <button @click="addClick">按钮</button>
    <button @click="dispatchAddClick">异步修改</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  mounted() {
    console.log(this.$store);
    // setInterval(()=>{
    //   this.$store.state.age +=this.$store.state.age
    // },1000)
  },
  methods:{
    addClick(){
      console.log(11)
      this.$store.commit("addAge",10)
    },
    dispatchAddClick(){
      this.$store.dispatch("addAge",100)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
