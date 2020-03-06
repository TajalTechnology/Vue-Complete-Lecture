<template>
    <div>
        <p>{{ message }}</p>
        <p><input v-model="message"></p>
    </div>
</template>

<script>
    export default {
        name: "TwoWay",
        data() {
            return {
                message: 'Hello Vue!'
            }
        }
    }
</script>

<style scoped>

</style>