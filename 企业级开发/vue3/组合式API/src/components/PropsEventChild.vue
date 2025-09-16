<script setup>

// 定义 props
// defineProps(['data'])

// 校验 props
defineProps({
    modelValue: String,
    firstName: String,
    lastName: String,
    data: {
        type: Array,
        required: false,
        default() {
            return [
                {
                    name: 'Lion',
                    sex: 'male',
                    age: 32
                }
            ]
        }
    }
})

// 定义事件
// 返回值是一个函数，用于发出事件
const emit = defineEmits(['remove', 'update:modelValue', 'update:firstName', 'update:lastName'])

function remove(userId) {
    // 发出事件
    emit('remove', userId)
}
</script>

<template>
    <div>
        <ul>
            <li v-for="user in data">姓名: {{ user.name }}; 性别: {{ user.sex }}; 年龄: {{ user.age }};
                <button @click="remove(user.id)">删除</button>
            </li>
        </ul>
        <div>
            <h1>自定义组件v-model</h1>
            默认v-model <input type="text" :value="modelValue"
                               @input="ev=>{emit('update:modelValue', ev.target.value)}"><br>
            firstName: <input type="text" :value="firstName" @input="ev=>{emit('update:firstName', ev.target.value)}">
            lastName: <input type="text" :value="lastName" @input="ev=>{emit('update:lastName', ev.target.value)}">
        </div>
    </div>
</template>

<style scoped>

</style>
