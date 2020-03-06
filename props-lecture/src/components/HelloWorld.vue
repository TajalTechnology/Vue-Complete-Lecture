<template>
    <div class="hello">
        <h1>Hello World Page</h1>
        <p>{{taj}}</p>
    </div>
</template>

<script>

    export default {
        name: 'HelloWorld',
        props: ["taj"],

        components: {}

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
