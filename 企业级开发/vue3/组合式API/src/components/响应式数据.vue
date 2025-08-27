<script setup>
// 知识点：
// ref 将数据转换成响应式数据
//      自动解包: ref属性不需要通过 .value 来访问值，这种情况就是自动解包
//      若 ref 内的数据是对象类型 ref 内会自动通过 reactive 进行响应式转换
//      若 ref 中嵌套 ref 那么嵌套的 ref 将自动解包
//      shallowRef 不会自动解包的 ref
// reactive 将对象类型中所有属性深层次的转换成响应式属性
//      reactive 中嵌套的 ref 会自动解包
//      shallowReactive 不会自动解包的 reactive
// 只读属性
// toRefs


import {ref, shallowRef, reactive, shallowReactive, readonly, toRefs} from 'vue'

// 使用 ref 创建响应式的数据
// 参数是响应式属性的初始值

const count = ref(0)

// const obj = ref({name: '张三', count})
const obj = shallowRef({name: '张三', count})


// 使用 reactive 声明响应式的 数组或对象
// const arr = reactive([1, {name: '老王'}, false, 'hello world', count])
const arr = reactive(ref([{name: '张三'}, {name: '李四'}, count]))

// 若希望完整替换 reactive 包裹的数组或对象 那么可以使用 ref 进行包裹
const arr2 = ref(arr)

function modifyObj() {
    // ref 创建的响应式属性，通过value来读值和赋值
    // obj.value = {a: 1, sex: 'female'}
    // obj.value.name = '李四'
    obj.value.count.value = 10
}

function modifyArr() {
    // arr[0] = 10
    // arr[1].name = '隔壁老王'
    // arr = [1, 2, 3, 4, 5]

    // arr2.value = reactive([1, 2, 3, 4, 5])
    // arr.count = 50
    // arr[2] = 50
    // arr.value[2] = 50
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
            user: {{ name }} {{ sex }} {{ age }}
        </div>
    </div>
</template>

<style scoped>

</style>
