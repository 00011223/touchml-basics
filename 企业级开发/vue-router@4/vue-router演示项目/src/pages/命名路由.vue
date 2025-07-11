<template>
    <div>
        <h1>命名路由</h1>
        <router-view></router-view>
        <!-- router-link 使用路由名称进行跳转 -->
        <router-link :to="{name: 'page1'}">to page1</router-link>
        <button @click="toPage1">to page1</button>
        <router-link :to="{name: 'userInfo', params: {name: '真假美猴王'}}">to userInfo</router-link>
        <button @click="toUserInfo">to userInfo</button>
    </div>
</template>

<script>
export default {
    methods: {
        toPage1() {
            // 使用命名路由跳转的时候，参数将变成一个对象
            // 参数对象的name属性就是路由的名称
            this.$router.push({name: 'page1'})
        },
        toUserInfo() {
            this.$router.push({name: 'userInfo', params: {name: '斯巴达三百勇士'}})
        }
    }
}
</script>

<style scoped>

</style>
