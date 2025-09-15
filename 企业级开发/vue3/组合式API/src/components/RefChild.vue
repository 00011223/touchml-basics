<script setup>
import {ref} from 'vue'

const value = ref('')
const count = ref(0)

function getCount() {
    count.value++
}

// 暴露属性给父组件
defineExpose({value, getCount})
</script>

<template>
    <div>
        <h1>读取输入框的次数: {{ count }}</h1>
        <input type="text" v-model="value">
    </div>
</template>

<style scoped>

</style>
