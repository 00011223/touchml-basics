// 获取全局app对象
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: ''
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

  },

  onInput(ev) {
    // 将输入框的值保存到全局对象 这样的话 该值就可以跨页面访问
    // app.globalData.value = ev.detail.value

    // 也可以使用数据持久化全局保存数据
    wx.setStorage({
      // 数据名称
      key: 'inputValue',
      // 数据值
      data: ev.detail.value
    })
  }
})