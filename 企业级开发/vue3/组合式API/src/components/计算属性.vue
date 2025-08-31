<script setup>
// 知识点：
// 声明计算属性
// 计算属性的get和set

import {computed, ref} from 'vue'

const RMB = ref(10)
// 1. computed 参数为一个回调函数，该函数返回一个结算结果
// const USD = computed(() => RMB.value * 0.7)
// 2. computed 参数是一个配置对象，包含 get 和 set 访问器
const USD = computed({
    get() {
        return RMB.value * 0.7
    },
    set(value) {
        RMB.value = value / 0.7
    }
})

</script>

<template>
    <div>
        <div>RMB: {{ RMB }}</div>
        <div>USD: {{ USD }}</div>
        <div><input type="text" v-model="USD"></div>
    </div>
</template>

<style scoped>

</style>
