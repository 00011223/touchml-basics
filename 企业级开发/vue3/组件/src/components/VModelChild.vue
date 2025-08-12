<template>
    <div>
        <h1>自定义组件的v-model</h1>
        <input type="text" :value="modelValue" @input="onInput">
        <div>
            姓: <input type="text" :value="xing" @input="ev=>{$emit('update:xing', ev.target.value)}">
        </div>
        <div>
            名: <input type="text" :value="ming" @input="ev=>{$emit('update:ming', ev.target.value)}">
        </div>
    </div>
</template>

<script>
// 要实现组件的 v-model
// 需要分别做以下两件事情
// 1. 添加组件 props
// 2. 发出组件事件


// 添加v-model的情况有两种
// 1. 默认的 v-model
// 给组件添加 默认的 v-model
// 那么需要给组件添加一个 modelValue 的 props，和一个 update:modelValue 的事件

// 2. 带参数的 v-model
// 给带参数的 v-model 声明不同的参数名称对应的 props
// 给对应的props添加 update:<props> 的事件

export default {
    name: 'VModelChild',
    props: ['modelValue', 'xing', 'ming'],
    emits: ['update:modelValue', 'update:xing', 'update:ming'],
    methods: {
        onInput(ev) {
            this.$emit('update:modelValue', ev.target.value)
        }
    }
}
</script>

<style scoped>

</style>
