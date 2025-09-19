<script setup>
import {inject} from 'vue'

// 注入参数
// 第二个参数是默认值
const theme = inject('theme', 'unknown')
</script>

<template>
    <div>
        <h1>子组件</h1>
        <div>子组件接收的theme: {{ theme }}</div>
    </div>
</template>

<style scoped>

</style>
