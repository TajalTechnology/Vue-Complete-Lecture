<template>
  <div id="app">
     <span v-bind:title="message">
    Hover your mouse over me for a few seconds
    to see my dynamically bound title!
       {{message}}
  </span>
      <hr>
      <TwoWay></TwoWay>
      <hr>
      <OneWay></OneWay>
      <hr>
      <h1>User input Handling</h1>
      <UserInputHandling></UserInputHandling>

<router-view></router-view>
  </div>
</template>

<script>
    import UserInputHandling from "./components/UserInputHandling";
    import TwoWay from "./components/TwoWay";
    import OneWay from "./components/OneWay";


export default {
  name: 'App',
  components: {
      TwoWay,
      OneWay,
      UserInputHandling

  },
   data(){
    return{
       message: 'You loaded this page on ' + new Date().toLocaleString()
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
