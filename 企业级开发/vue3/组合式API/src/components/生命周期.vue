<script setup>
// 知识点：
// 了解有哪些生命周期钩子函数 https://cn.vuejs.org/api/composition-api-lifecycle.html

import {onMounted} from 'vue'

onMounted(() => {
    console.log('onMounted')
})
</script>

<template>
    <div>

    </div>
</template>

<style scoped>

</style>
