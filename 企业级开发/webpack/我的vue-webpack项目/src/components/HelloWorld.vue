<script setup>

import {ref} from 'vue'

const title = ref('hello my vue project')
const count = ref(0)
</script>

<template>
    <div>
        <h1>{{ title }}</h1>
        <div>count: {{ count }}</div>
        <button @click="count++">+</button>
    </div>
</template>

<style scoped>

</style>
