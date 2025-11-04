<template>
    <div>
<!--        <FirstDemo></FirstDemo>-->
<!--        <Bar></Bar>-->
        <Other></Other>
    </div>
</template>

<script>
import FirstDemo from './components/第一个echarts程序.vue'
import Bar from './components/柱状图.vue'
import Other from './components/常用API.vue'

export default {
    name: 'App',
    components: {
        FirstDemo,
        Bar,
        Other
    }
}
</script>

<style>
</style>
