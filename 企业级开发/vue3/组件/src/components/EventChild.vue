<template>
  <div>
    <h1>msg: {{ msg }}</h1>
    <input type="text" :value="msg" @input="onInput">
  </div>
</template>

<script>
export default {
  // 事件声明
  // 通过 events 来声明事件
  events: ['msgChange'],

  props: ['msg'],
  methods: {
    onInput(ev) {
      // 触发事件
      // 第一个参数: 事件名
      // 第二个参数: 事件参数
      this.$emit('msgChange', ev.target.value)
    }
  }
}
</script>

<style scoped>

</style>
