// components/my-button/myButton.js
Component({
  // 组件的生命周期
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的属性列表
   */
  properties: {
    // tit 属性名
    tit: {
      // 属性类型
      type: String,
      // 属性默认值
      value: '这是组件的标题'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    value: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    now() {
      console.log(new Date().toLocaleString());

      // 修改组件data
      this.setData({
        value: Date.now()
      })

      // 触发组件事件
      // 第一个参数: 事件名
      // 第二个参数: 自定义事件的参数
      this.triggerEvent('my-event', 'hello world')
    }
  }
})