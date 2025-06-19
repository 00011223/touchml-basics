<template>
  <div>
    <my-component></my-component>
    <global-component></global-component>
  </div>
</template>

<script>
// 知识点：
// 什么是组件？
// 应用场景
// 声明组件
// 注册组件
// 使用组件

// 什么是组件？
// 组件就是一个独立可用的页面内容

// 应用场景
// 需要重复使用的页面内容就可以做成一个组件

// 声明组件
// 组件声明的时候本质上就是声明一个json对象

// 关于组件的命名
// 通常来说可以用连字符来命名组件， 例如 hello-world.vue
// 或者用驼峰式命名 例如: HelloWorld.vue
// 总结: 命名规范请根据未来开发的项目来决定

import {h} from 'vue'

let MyComponent = {
  render() {
    // 返回VNode
    return h('div', null, [
      h('span', null, 'count: ' + this.count)
    ])
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add() {
      this.count++
    }
  },
  mounted() {
    console.log('mounted')
  },
}


// 组件注册
// 1. 局部注册: 局部注册的组件，只能在注册的地方使用
// 2. 全局注册: 全局注册的组件，整个项目中都能使用，请参考 main.js 全局注册的写法

export default {
  // 局部注册
  components: {
    // key: 组件在模板中使用时的标签名
    // value: 组件的配置对象
    MyComponent
  }
}
</script>

<style scoped>

</style>
