<template>
  <div>
<!--    <ComponentBasic></ComponentBasic>-->
<!--    <global-component></global-component>-->
    <ComponentProps></ComponentProps>
  </div>
</template>

<script>
import ComponentBasic from './components/组件基础.vue'
import ComponentProps from './components/组件props.vue'

export default {
  name: 'App',
  components: {
    ComponentBasic,
    ComponentProps
  }
}
</script>

<!-- 若创建项目的时候 选择了 css 预编译器 则此处可以添加 lang 属性来指定预编译语法 -->
<!--
<style lang="scss">
-->
<style>

</style>
