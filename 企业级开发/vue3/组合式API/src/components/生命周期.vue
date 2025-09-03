<script setup>
// 知识点：
// 了解有哪些生命周期钩子函数 https://cn.vuejs.org/api/composition-api-lifecycle.html

import {onMounted} from 'vue'
// 引入组件相当于注册组件
import ErrorBoundary from './ErrorBoundary.vue'
import ErrorChild from './ErrorChild.vue'

onMounted(() => {
    console.log('onMounted')
})
</script>

<template>
    <div>
        <ErrorBoundary>
            <ErrorChild></ErrorChild>
        </ErrorBoundary>
    </div>
</template>

<style scoped>

</style>
