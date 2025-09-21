<script setup>
import {useRoute} from 'vue-router'

// 获取当前路由对象
const route = useRoute()

console.log(route)
</script>

<template>
    <div>
        <h1>{{ route.meta.title }}</h1>
        <div>name: {{ route.meta.name }}</div>
    </div>
</template>

<style scoped>

</style>
