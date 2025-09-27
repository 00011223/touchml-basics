<script setup>

import {useRouter} from 'vue-router'

const router = useRouter()

// 添加路由
function addRoute() {
    // 动态添加子路由
    // 第一个参数: 父路由的名称
    // 第二个参数: 新的路由配置
    router.addRoute('dr', {
        path: 'p1',
        name: 'p1',
        component: () => import('@/pages/动态路由/P1.vue')
    })

    // 在根级上添加一个路由
    router.addRoute({
        path: '/p2',
        name: 'p2',
        component: () => import('@/pages/动态路由/P2.vue')
    })
}

// 删除路由
function removeRoute() {
    // 判断路由是否存在
    if (router.hasRoute('p1')) {
        // 删除路由
        router.removeRoute('p1')
    }
}

// 获取当前的路由配置
function getRoutes() {
    console.log(router.getRoutes())
}
</script>

<template>
    <div>
        <h1>动态路由</h1>
        <button @click="addRoute">addRoute</button>
        <button @click="removeRoute">removeRoute</button>
        <button @click="getRoutes">getRoutes</button>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>

</style>
