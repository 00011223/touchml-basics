<template>
    <div>
        <h1>App</h1>

        <!-- 使用 router-link 来切换页面，类似于 a 标签的作用 -->
        <div>
            <!-- to: 要跳转的地址 -->
<!--            <router-link to="/p1">to page1</router-link> |
            <router-link to="/p2">to page2</router-link>-->
        </div>

        <!-- 给程序添加路由视口 -->
        <!--
            路由视口将用于显示 vue-router 的当前页面
         -->
        <router-view></router-view>
    </div>
</template>

<script>

export default {

}
</script>

<style>
</style>
