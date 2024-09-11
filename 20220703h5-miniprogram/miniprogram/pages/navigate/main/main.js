// pages/navigate/main/main.js
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

  toPage2() {
    // 入栈导航
    wx.navigateTo({
      // 导航的路径
      url: '../page2/page2',
    })
  },

  reLaunchPage1() {
    // 重启页面 清空栈中数据
    wx.reLaunch({
      url: '../page1/page1',
    })
  },

  switchPage1() {
    // 切换选项卡
    wx.switchTab({
      url: '../page1/page1',
    })
  },

  toPage1() {
    wx.navigateTo({
      url: '../page1/page1?x=1&y=2&z=3'
    })
  }
})