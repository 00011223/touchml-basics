<script setup>
// onBeforeRouteLeave
// onBeforeRouteUpdate

import {onBeforeRouteLeave, onBeforeRouteUpdate} from 'vue-router'

// 路由离开前
onBeforeRouteLeave((to, from, next) => {
    console.log('onBeforeRouteLeave')
    next()
})

// 路由更新
// 当动态路由匹配的参数发生变化时，将触发此守卫
onBeforeRouteUpdate((to, from, next) => {
    console.log('onBeforeRouteUpdate')
    next()
})
</script>

<template>
    <div>
        <h1>组合式API</h1>
    </div>
</template>

<style scoped>

</style>
