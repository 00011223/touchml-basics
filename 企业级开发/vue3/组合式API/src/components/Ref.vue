<script setup>
// 知识点：
// 创建ref属性来获取页面元素
// 使用函数获取页面元素
// v-for中的ref
// 组件上的ref
//    子组件defineExpose

import RefChild from './RefChild.vue'
import {ref} from 'vue'


// 声明一个ref属性值用来存储页面元素
const inp1 = ref(null)
// 用于存储函数形式返回的元素
const inp2 = ref(null)
const inp3 = ref(null)

// 子组件
const child = ref(null)

function readInput() {
    console.log(inp1.value)
    console.log(inp1.value.value)
}

function readInput2() {
    console.log(inp2.value)
    console.log(inp2.value.value)
}

function readChild() {
    console.log(child.value)

    console.log(child.value.value)

    child.value.getCount()
}

function readForInput(i) {
    console.log(i)
    console.log(inp3.value)
    console.log(inp3.value[i].value)
}
</script>

<template>
    <div>
        <div>
            <h1>获取页面元素</h1>
            <input ref="inp1" type="text">
            <button @click="readInput">读取输入框值</button>
            <br>
            <input :ref="el=>{inp2 = el}" type="text">
            <button @click="readInput2">使用函数读取输入框值</button>
        </div>
        <div>
            <h1>读取组件</h1>
            <RefChild ref="child"></RefChild>
            <button @click="readChild">调用组件属性和方法</button>
        </div>
        <div>
            <h1>v-for中的ref</h1>
            <div v-for="(_, i) in 5">
                <input ref="inp3" type="text">
                <button @click="readForInput(i)">读取输入框值</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
