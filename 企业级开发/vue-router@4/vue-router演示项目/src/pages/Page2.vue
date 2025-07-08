<template>
    <div>
        <h1>Page2</h1>
        <button @click="toPage1">to page1</button>
        <button @click="go2">go2</button>
    </div>
</template>

<script>
export default {
    name: "Page2",
    methods: {
        toPage1() {
            this.$router.push('/p1')
        },
        go2() {
            // go 能够向前或向后跳转指定的页数
            // 参数是要跳转的页数
            // 正数代表前进，负数代表后退
            this.$router.go(-2)
        }
    }
}
</script>

<style scoped>

</style>
