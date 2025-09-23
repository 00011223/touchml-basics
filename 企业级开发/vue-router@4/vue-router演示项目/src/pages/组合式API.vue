<script setup>
// 使用 useRoute 来获取路由对象
// 使用 useRouter 来获取路由器对象

import {useRoute, useRouter} from 'vue-router'

// route 当前路由对象
const route = useRoute()
// router 路由器对象
const router = useRouter()

console.log(route)
</script>

<template>
    <div>
        <h1>组合式API</h1>
        <button @click="router.push('/p1')">to Page1</button>
    </div>
</template>

<style scoped>

</style>
