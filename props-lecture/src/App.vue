<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <p v-bind:taj="t"></p>
        <HelloWorld msg="Welcome to Your Vue.js App" v-bind:taj="t"></HelloWorld>
        <PropsAccept v-bind:taj="{obj: t, header: m}"></PropsAccept>

        <router-view></router-view>
    </div>
</template>

<script>
    import PropsAccept from "./components/PropsAccept";
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'App',
        props: ["hand"],
        components: {
            HelloWorld,
            PropsAccept
        },
        data() {
            return {
                t: 'This is props from parents to child',
              m:'this is props two'
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
