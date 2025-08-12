<template>
    <div>
        <!--    <ComponentBasic></ComponentBasic>-->
        <!--    <global-component></global-component>-->
        <!--    <ComponentProps></ComponentProps>-->
<!--            <ComponentEvent></ComponentEvent>-->
<!--        <ComponentSlot></ComponentSlot>-->
<!--        <ComponentDynamic></ComponentDynamic>-->
<!--        <Parent></Parent>-->
<!--        <AttrComponent></AttrComponent>-->
        <InjectComponent></InjectComponent>
    </div>
</template>

<script>
import ComponentBasic from './components/组件基础.vue'
import ComponentProps from './components/组件props.vue'
import ComponentEvent from './components/组件事件.vue'
import ComponentSlot from './components/插槽.vue'
import ComponentDynamic from './components/异步组件.vue'
import Parent from '@/components/Parent.vue'
import AttrComponent from '@/components/Attribute属性继承.vue'
import InjectComponent from '@/components/依赖注入.vue'

export default {
    name: 'App',
    components: {
        ComponentBasic,
        ComponentProps,
        ComponentEvent,
        ComponentSlot,
        ComponentDynamic,
        Parent,
        AttrComponent,
        InjectComponent,
    }
}
</script>

<!-- 若创建项目的时候 选择了 css 预编译器 则此处可以添加 lang 属性来指定预编译语法 -->
<!--
<style lang="scss">
-->
<style>

</style>
