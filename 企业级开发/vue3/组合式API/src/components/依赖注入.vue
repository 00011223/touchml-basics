<script setup>
// 知识点：
// 声明供应商
// 声明消费者

import {ref, provide, computed} from 'vue'
import InjectChild from './InjectChild.vue'

const theme = ref('light')

provide('theme', computed(() => theme.value))
</script>

<template>
    <div>
        <div>{{ theme }}</div>
        <select v-model="theme">
            <option value="light">亮色</option>
            <option value="dark">暗色</option>
        </select>
        <InjectChild></InjectChild>
    </div>
</template>

<style scoped>

</style>
