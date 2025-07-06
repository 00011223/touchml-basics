<template>
    <div>
        <h1>name: {{ name }}</h1>
    </div>
</template>

<script>
export default {
    name: "UserInfo",
    data() {
        return {
            name: ''
        }
    },
    mounted() {
        // this.$route 当前路由对象
        // this.$router 全局路由器对象
        console.log(this.$route)
        this.name = this.$route.params.name
    }
}
</script>

<style scoped>

</style>
