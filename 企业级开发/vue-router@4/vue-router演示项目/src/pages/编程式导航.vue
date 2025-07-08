<template>
    <div>
        <button @click="toPage1">to page1</button>
        <button @click="toPage2">to page2</button>
    </div>
</template>

<script>
export default {
    methods: {
        toPage1() {
            // this.$router 全局路由对象

            // push 入栈导航
            this.$router.push('/p1')
        },

        toPage2() {
            // replace 替换
            this.$router.replace('/p2')
        }
    }
}
</script>

<style scoped>

</style>
