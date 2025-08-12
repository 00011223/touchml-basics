<template>
    <div>
        <div>
            title: <input type="text" v-model="title">
        </div>
        <InjectChild></InjectChild>
    </div>
</template>

<script>
// 知识点：
// 什么是依赖注入？
// 应用场景
// 声明供应商
// 声明消费者
// 消费者别名
// 消费者默认值
// 响应式注入
//    响应式属性使用 .value 取值
//    自动解包配置 app.config.unwrapInjectedRef = true;
// 应用层 Provide


// 什么是依赖注入？
// 依赖注入就是，一个先辈组件提供一些属性，他的后辈组件都可以读取该属性的值


// 应用场景
// 国际化(i18n)和页面主题等需要全局切换属性的地方


// 应用层 Provide
// 在main.js中使用 app.provide 提供全局的数据

import InjectChild from './InjectChild.vue'
import {computed} from 'vue'

export default {
    components: {
        InjectChild
    },
    // 声明供应商
    // provide: {
    //     title: '这是供应商提供的title'
    // }

    // 供应商提供一个可以修改的响应式属性
    provide() {
        return {
            // 通过 computed 函数创建一个计算属性来充当供应商提供的参数
            title: computed(() => this.title)
        }
    },

    data() {
        return {
            title: '响应式数据title'
        }
    }
}
</script>

<style scoped>

</style>
