<script setup>
import {reactive} from 'vue'

const state = reactive({
    num1: 0,
    num2: 0,
    result: 0
})

function div() {
    if (state.num2 === 0) throw new Error('除数不能为0')
    state.result = state.num1 / state.num2
}
</script>

<template>
    <div>
        num1: <input type="number" v-model.number="state.num1"> /
        num2: <input type="number" v-model.number="state.num2">
        <button @click="div">=</button>
        {{ state.result }}
    </div>
</template>

<style scoped>

</style>
