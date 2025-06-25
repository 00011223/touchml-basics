<template>
  <div>
    <ul>
      <li>姓名: {{ name }}</li>
      <li>性别: {{ sex }}</li>
      <li>年龄: {{ age }}</li>
    </ul>
    <input type="text" :value="name" @input="onNameInput">
  </div>
</template>

<script>
export default {
  name: "PropsChild",
  // 声明props
  // 使用数组声明三个props分别是name，sex，age
  // props: ['name', 'sex', 'age'],

  // props 校验
  props: {
    // 使用对象来声明需要校验的属性
    // 校验写法有以下几种:
    // 1. 只校验类型
    // name: String,
    sex: Boolean,
    // 若该属性接收多种类型，可以写成数组
    age: [Number, String],

    // 2. 具有多种校验规则
    name: {
      // 是否必填
      required: false,
      // 定义类型
      // type: String,
      type: [String, Boolean],
      // 默认值
      default() {
        // 返回该属性默认值
        return '张三'
      }
    }
  },
  created() {
    console.log(this.$props)
  },
  methods: {
    onNameInput(ev) {
      // props 是只读的，无法赋值，此处的代码会报错
      // 所以若想要修改 props 只能在提供 props 的组件中修改值
      this.name = ev.target.value
    }
  }
}
</script>

<style scoped>

</style>
