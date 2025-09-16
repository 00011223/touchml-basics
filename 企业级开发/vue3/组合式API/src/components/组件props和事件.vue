<script setup>
// 知识点：
// 定义props
// props 校验
// 声明事件
// 触发事件
// 自定义组件的 v-model

import PropsEventChild from '@/components/PropsEventChild.vue'
import {ref} from 'vue'

const users = ref([
    {
        id: 0,
        name: '张三',
        sex: 'male',
        age: 17
    },
    {
        id: 1,
        name: '李四',
        sex: 'female',
        age: 24
    },
    {
        id: 2,
        name: '老王',
        sex: 'other',
        age: 30
    },
])

const defaultValue = ref('')
const firstName = ref('')
const lastName = ref('')

function removeHandler(userId) {
    console.log(userId)
    let i = users.value.findIndex(item => item.id === userId)
    users.value.splice(i, 1)
}
</script>

<template>
    <div>
        <div>defaultValue: {{ defaultValue }}</div>
        <div>firstName: {{ firstName }}</div>
        <div>lastName: {{ lastName }}</div>
        <PropsEventChild :data="users" @remove="removeHandler" v-model="defaultValue"
                         v-model:firstName="firstName" v-model:lastName="lastName"></PropsEventChild>
    </div>
</template>

<style scoped>

</style>
