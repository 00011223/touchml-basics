<template>
  <div>
    <input type="text" v-model="name">
    <PropsChild :name="name" :sex="false" :age="'17'"></PropsChild>
  </div>
</template>

<script>
// 知识点：
// 什么是props？
// 应用场景
// 声明和访问props
// props 校验
// props 是只读的

// 什么是props？
// 组件上的 html 属性就是 props

// 应用场景
// 组件需要一些参数的时候就可以使用 props

import PropsChild from "@/components/PropsChild.vue";

export default {
  components: {
    PropsChild
  },
  data() {
    return {
      name: '老王'
    }
  }
}
</script>

<style scoped>

</style>
