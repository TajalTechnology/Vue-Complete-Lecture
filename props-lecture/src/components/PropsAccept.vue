<template>
    <div>
        {{look}}
        {{taj.body}}<br>
        {{taj.header}}
    </div>
</template>

<script>
    export default {
        name: "PropsAccept",
        props: ['taj'],
        data() {
            return {
                look: 'this is tajal',

            }
        }
    }
</script>

<style scoped>

</style>