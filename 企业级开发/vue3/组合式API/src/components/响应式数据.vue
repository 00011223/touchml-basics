<script setup>
// 知识点：
// 创建响应式的数据
// 数组或对象的响应式
// 只读属性
// toRefs


import {ref, reactive, readonly, toRefs} from 'vue'

// 使用 ref 创建响应式的数据
// 参数是响应式属性的初始值
const obj = ref({name: '张三'})


// 使用 reactive 声明响应式的 数组或对象
const arr = reactive([1, {name: '老王'}, false, 'hello world'])

// 若希望完整替换 reactive 包裹的数组或对象 那么可以使用 ref 进行包裹
const arr2 = ref(arr)

function modifyObj() {
    // ref 创建的响应式属性，通过value来读值和赋值
    // obj.value = {a: 1, sex: 'female'}
    obj.value.name = '李四'
}

function modifyArr() {
    // arr[0] = 10
    // arr[1].name = '隔壁老王'
    // arr = [1, 2, 3, 4, 5]

    arr2.value = reactive([1, 2, 3, 4, 5])
}

// 声明只读属性
const objReadOnly = readonly(obj)

function modifyReadOnly() {
    console.log(objReadOnly.value)
    objReadOnly.value = {name: '李四'}
}

const state = reactive({name: '张三', sex: 'female', age: 17})
// 通过 toRefs 将 reactive 的对象转换成 ref 的属性
const {name, sex, age} = toRefs(state)
// 此处结构出来的 name sex age 就是 ref 属性
// 所以可以使用 .value 来读值
console.log(name.value)
</script>

<template>
    <div>
        <div>obj: {{ obj }}</div>
        <div>
            <button @click="modifyObj">修改obj</button>
        </div>
        <div>arr: {{ arr }}</div>
        <div>arr: {{ arr2 }}</div>
        <div>
            <button @click="modifyArr">修改arr</button>
        </div>
        <div>objReadOnly: {{ objReadOnly }}</div>
        <div>
            <button @click="modifyReadOnly">修改objReadOnly</button>
        </div>
        <div>
            user: {{ name }}  {{sex}}  {{age}}
        </div>
    </div>
</template>

<style scoped>

</style>
