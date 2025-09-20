<script setup>
// 知识点：
// 了解vue响应式属性更新页面是异步的
// 什么是nextTick
// nextTick的用法
// 选项式API中nextTick的使用


// 什么是nextTick?
// 下一次渲染完成后
// nextTick的参数是一个回调函数，这个回调函数将在下一次渲染完成后调用


import {nextTick, ref} from 'vue'

const box = ref(null)

const boxStyle = ref({
    width: '100px'
})

function modifyWidth() {
    // 赋值宽度是异步的
    // 该值将在下一次渲染页面的时候被赋值给元素
    boxStyle.value.width = '200px'
    // 下面的值不会立即改变
    // 所以修改响应式属性的值，实际上是异步更新
    // console.log(getComputedStyle(box.value).width)
    nextTick(() => {
        console.log(getComputedStyle(box.value).width)
    })
}
</script>

<script>
export default {
    data() {
        return {
            boxStyle2: {width: '100px'}
        }
    },
    methods: {
        widthChange() {
            this.boxStyle2.width = '200px'
            // 选项式API中的nextTick
            this.$nextTick(()=>{
                console.log(getComputedStyle(this.$refs.box2).width)
            })
        }
    }
}
</script>

<template>
    <div>
        <div ref="box" class="box" :style="boxStyle"></div>
        <button @click="modifyWidth">组合式API修改宽度</button>
        <div ref="box2" class="box" :style="boxStyle2"></div>
        <button @click="widthChange">选项式API修改宽度</button>
    </div>
</template>

<style scoped>
.box {
    width: 100px;
    height: 100px;
    background-color: #f00;
}
</style>
