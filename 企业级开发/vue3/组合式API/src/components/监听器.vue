<script setup>
// 知识点：https://cn.vuejs.org/guide/essentials/watchers.html
// 基本用法
//   1. 监听ref属性
//   2. 监听reactive对象属性
//   3. 使用计算函数监听多个属性
//   4. 使用数组监听多个属性
// 深层监听器
// 停止监听器
// watchEffect

import {reactive, ref, watch, watchEffect} from 'vue'

const num1 = ref(0)
const num2 = ref(0)
const result = ref(0)
const state = reactive({name: '张三', age: 17})

function equal() {
    result.value = num1.value + num2.value
}

// 1. 监听ref属性
watch(num1, (newVal, oldVal) => {
    console.log('num1')
    console.log(newVal)
    console.log(oldVal)
})

// 2. 监听reactive对象属性
// 参数是一个计算函数(getter)
watch(() => {
    // 返回的内容就是要监听的内容
    return state.name
}, (newVal, oldVal) => {
    console.log('state.name')
    console.log(newVal)
    console.log(oldVal)
})

// 3. 使用计算函数监听多个属性
watch(() => {
    // 监听 num1 和 num2 的和
    // 这样一来 num1 或 num2 发生变化 都能被监听到
    return num1.value + num2.value
}, (newVal, oldVal) => {
    console.log('num1 或 num2 发生变化')
    console.log(newVal)
    console.log(oldVal)
})

// 4. 使用数组监听多个属性
// 数组成员:
// 此处可以使用 ref 响应式属性 或 reactive 属性值 或 一个计算函数 充当数组成员
watch([num2, () => state.age, () => num1.value - num2.value], (newVal, oldVal) => {
    console.log('通过数组监听多个属性')
    console.log(newVal)
    console.log(oldVal)
})

// 深层监听器
watch(state, (newVal, oldVal) => {
    console.log('深层监听器')
    // 深层监听器 newVal 和 oldVal 代表的都是 当前状态
    console.log(newVal)
    console.log(oldVal)
})

// 停止监听器
// 监听器的返回值是一个函数
// 调用该函数就可以停止这个监听器
const cancelFn = watch(result, (newVal, oldVal) => {
    console.log('result')
    console.log(newVal)
    console.log(oldVal)
})

// watchEffect
// 调用watchEffect时 会立即执行一次 回调函数
// 在此处回调函数中 使用过的响应式属性 都会被监听
// 一旦此处的响应式属性发生变化，watchEffect 的回调函数就会再次触发
watchEffect(() => {
    console.log('watchEffect 的回调函数')
    console.log(num1.value)
    console.log(num2.value)
})
</script>

<template>
    <div>
        <div>num1 <input type="number" v-model.number="num1"> + num2 <input type="number" v-model.number="num2">
            <button @click="equal">=</button>
            result {{ result }}
            <button @click="cancelFn">停止监听 result</button>
        </div>
        <div>姓名 <input type="text" v-model="state.name"></div>
        <div>年龄 <input type="number" v-model.number="state.age"></div>
    </div>
</template>

<style scoped>

</style>
