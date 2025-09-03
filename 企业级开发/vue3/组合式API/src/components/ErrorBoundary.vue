<script setup>
import {onErrorCaptured, ref} from 'vue'

onErrorCaptured((err, instance, info) => {
    console.log('错误边界触发了')
    console.error(err) // 异常对象
    console.log(instance) // 产生异常的组件实例
    console.log(info) // 异常出处的提示信息

    hasError.value = true

    // 返回 false 代表异常事件不会冒泡
    return false
})

// 是否存在异常
const hasError = ref(false)
</script>

<template>
    <div>
        <template v-if="!hasError">
            <slot></slot>
        </template>
        <div v-else>
            错误边界捕获到异常
        </div>
    </div>
</template>

<style scoped>

</style>
