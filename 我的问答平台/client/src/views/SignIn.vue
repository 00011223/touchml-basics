<script setup>
import axios from 'axios'

function test() {
    axios.get('/api/test').then(data => {
        console.log(data)
    })
}
</script>

<template>
    <div>
        <a-button type="primary" @click="test">网络请求test</a-button>
    </div>
</template>

<style scoped>

</style>
