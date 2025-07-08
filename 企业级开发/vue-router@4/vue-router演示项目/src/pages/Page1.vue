<template>
    <div>
        <h1>Page1</h1>
        <button @click="toPage2">to page2</button>
        <!-- <button @click="forward">forward</button>-->
        <button @click="$router.forward()">forward</button>
        <button @click="$router.back()">back</button>
    </div>
</template>

<script>
export default {
    name: "Page1",
    methods: {
        toPage2() {
            this.$router.push('/p2')
        },
        forward() {
            // 前进
            this.$router.forward()
        },
        back() {
            // 后退
            this.$router.back()
        }
    }
}
</script>

<style scoped>

</style>
