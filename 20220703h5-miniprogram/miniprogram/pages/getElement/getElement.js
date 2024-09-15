// pages/getElement/getElement.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // 在 onReady 事件中可以获取页面元素 请不要在 onLoad 中读取页面元素

    // 创建一个查询选择器
    let query = wx.createSelectorQuery()

    // 查询元素
    let nodeRef = query.select('.box')
    // 通过查询出来的元素，指定要查询的具体数据
    // fields 接收两个参数,
    // 第一个参数：查询属性的配置
    // 第二个参数：查询结束的回调
    nodeRef.fields({
      dataset: true, // 自定义属性，也就是标签上 data- 开头的属性
      size: true, // 元素的宽高
      rect: true, // 元素的位置 top left right bottom
      properties: ['src', 'bindtap'], // 元素的固有属性，不能查询 id class style 属性和绑定的事件属性
      computedStyle: ['backgroundColor', 'padding', 'width'] // 查询样式
    }, (res) => {
      // 该 res 就是查询的结果
      console.log(res)
    })

    // 当调用完 fields 后 ，一定要执行 exec
    query.exec()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})