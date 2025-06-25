<template>
  <div>
    <EventChild :msg="msg" @msgChange="onChildMsgChange"></EventChild>
  </div>
</template>

<script>
// 知识点：
// 什么是组件事件？
// 应用场景
// 事件声明
// 事件触发
// 事件参数
// 实现组件的v-model


// 什么是组件事件？
// 由组件自己发出的事件就是组件事件，组件的事件可以通过 @ (v-on) 绑定事件处理程序

// 应用场景
// 1. 需要组件发出事件通知父组件的时候
// 2. 需要子组件主动传递参数给父组件时


import EventChild from './EventChild.vue'

export default {
  components: {
    EventChild
  },
  data() {
    return {
      msg: 'hello message'
    }
  },
  methods: {
    onChildMsgChange(data) {
      console.log('接收到子组件的 msgChange 事件')
      console.log(data)
      // 修改父组件自身的数据
      this.msg = data
    }
  }
}
</script>

<style scoped>

</style>
