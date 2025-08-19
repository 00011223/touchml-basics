<template>
    <!--    知识点-->
    <!--    配置组件setup生命周期-->
    <!--         选项式API中配置-->
    <!--         在script标签中配置-->
    <!--         普通script标签和setup script标签同时使用-->

    <div>
        <h1>基本用法</h1>
        <div>count: {{ count }}</div>
        <div>
            <button @click="increase">+</button>
        </div>
    </div>
</template>

<!--<script>
import {defineComponent, ref} from 'vue'

export default defineComponent({
    // 组合式API写在setup生命周期中
    setup() {
        // 声明响应式属性
        const count = ref(0)
        const increase = () => {
            // count++
            // 通过ref创建的响应式属性，应该通过value属性进行赋值
            count.value++
        }

        // 将页面中要使用的内容返回出去
        return {
            count,
            increase
        }
    }
})
</script>-->

<!-- script 标签上添加 setup 属性 标志着此脚本将在 组件的setup生命周期中运行 -->
<!--<script setup>
import {ref} from 'vue'

const count = ref(0)

// const increase = () => {
//     count.value++
// }

function increase() {
    count.value++
}

// <script setup> 标签中声明的属性和方法 可以在页面中直接访问
</script>-->



<script>
export default {
    methods: {
        increase() {
            this.count++
        }
    }
}
</script>

<script setup>
import {ref} from 'vue'

const count = ref(0)
</script>

<style>
</style>
