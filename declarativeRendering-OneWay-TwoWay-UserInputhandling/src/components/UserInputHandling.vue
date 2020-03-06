<template>
    <div>
        Main message : <h2 style="color: blue">{{popUp}}</h2>
        <p>If you change message :
        <button v-on:click="reverseMessage">
        ReverceMainMessage </button></p>

    </div>
</template>

<script>
    export default {
        name: "UserInputHandling",
        data(){
            return{
                popUp:'Hello vue.js'
            }
        },
        methods:{
            reverseMessage: function () {
                this.popUp = this.popUp.split('').reverse().join('')

            }

        }
    }
</script>

<style scoped>

</style>