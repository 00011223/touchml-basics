<template>
    <div>
        <h1>动态组件</h1>
        <div>
            <button @click="toSRD1">SRD1</button>
            <button @click="toSRD2">SRD2</button>
        </div>
        <!-- 声明动态组件 -->
        <!-- 通过 keep-alive 让动态组件能够保持状态 -->
        <keep-alive>
            <component :is="component"></component>
        </keep-alive>
    </div>
</template>

<script>
// 知识点：
// 什么是动态组件？
// 应用场景
// 声明动态组件
// shallowRef
//    引入同步组件
//    引入异步组件
// KeepAlive


// 什么是动态组件？
// 通过变量赋值的方式可以动态修改某个组件，这个能被动态修改的组件就是动态组件
// 应用场景
// 动态组件多用于一个页面中的多个选项卡的切换

// 动态组件不会保留组件的状态，所以切换组件后，组件状态就消失了
// 若想要保留组件状态，那么可以使用 keep-alive 组件


// 引入组件充当动态组件的待选方案
// 1. 同步引入
import D1 from './D1.vue'
import {shallowRef, defineComponent, defineAsyncComponent} from 'vue'

// 使用 shallowRef 包装组件 D1
// 得到一个新的组件
const SRD1 = shallowRef(D1)

// 2. 异步引入
// 通过 shallowRef 包裹一个异步组件得到一个新组件
const SRD2 = shallowRef(defineAsyncComponent(() => import('./D2.vue')))

export default defineComponent({
    components: {
        SRD1,
        SRD2
    },
    data() {
        return {
            component: SRD1
        }
    },
    methods: {
        toSRD1() {
            if (this.component !== SRD1)
                this.component = SRD1
        },
        toSRD2() {
            if (this.component !== SRD2)
                this.component = SRD2
        }
    }
})
</script>

<style scoped>

</style>
