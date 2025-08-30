<script setup>
// 知识点：
// ref 将数据转换成响应式数据
//      解包: ref 通过 .value 来访问，此过程叫解包
//      自动解包: ref属性不需要通过 .value 来访问值，这种情况就是自动解包
//      若 ref 内的数据是对象类型 ref 内会自动通过 reactive 进行响应式转换
//      若 ref 中嵌套 ref 那么嵌套的 ref 将自动解包
//      shallowRef 不会自动解包的 ref
// reactive 将对象类型中所有属性深层次的转换成响应式属性
//      reactive 中嵌套的 ref 会自动解包
//      注意 reactive 数组成员若是一个 ref 对象，则访问它时不会自动解包
//      shallowReactive 不会自动解包的 reactive
// 只读属性
// toRefs


// 总结
// ref: 几乎所有的响应式属性都能通过 ref 来声明，对象和数组也可以用ref声明，那么对象内的属性和数组成员都是响应式的
// reactive: 数组或对象数据 需要其所有的 对象属性 或 数组成员都是 响应式的 则可以考虑使用 reactive


import {ref, shallowRef, reactive, shallowReactive, readonly, toRefs} from 'vue'

// 使用 ref 创建响应式的数据
// 参数是响应式属性的初始值

const count = ref(0)

// const obj = ref({name: '张三', count})
const obj = shallowRef({name: '张三', count})


// 使用 reactive 声明响应式的 数组或对象
// const obj2 = reactive({name: '张三', sex: 'female', age: ref(17)})
const obj2 = shallowReactive({name: '张三', sex: 'female', age: ref(17), info: ref({ money: 100, other: ref({msg: 'hello world'}) })})
const arr = reactive([1, {name: '老王'}, false, 'hello world', count])

// 若希望完整替换 reactive 包裹的数组或对象 那么可以使用 ref 进行包裹
const arr2 = ref(arr)

function modifyObj() {
    // ref 创建的响应式属性，通过value来读值和赋值
    // obj.value = {a: 1, sex: 'female'}
    // obj.value.name = '李四'
    obj.value.count.value = 10
}

function modifyObj2() {
    // console.log(obj2.age)
    // console.log(obj2.age.value)
    // obj2.age.value = 30

    console.log(obj2.info)
    console.log(obj2.info.value.other)
    obj2.info.value.other.msg = '123456'
}

function modifyArr() {
    // arr[0] = 10
    // arr[1].name = '隔壁老王'
    // arr = [1, 2, 3, 4, 5]

    // arr2.value = reactive([1, 2, 3, 4, 5])
    // arr.count = 50
    // arr[2] = 50
    // arr.value[2] = 50
    // console.log(arr[4])
    // console.log(arr[4].value)
    // arr[4].value = 50

    console.log(arr[4])
    console.log(arr[4].value)
    arr[4].value = 50
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
        <div>obj2: {{ obj2 }}</div>
        <div>
            <button @click="modifyObj2">修改obj2</button>
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
