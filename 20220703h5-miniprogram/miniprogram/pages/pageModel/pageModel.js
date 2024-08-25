// pages/pageModel/pageModel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: 'hello world'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('页面加载完成');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('页面渲染完成');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('页面显示');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log('页面隐藏')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log('页面卸载完成');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   * 需要添加 enablePullDownRefresh 配置
   */
  onPullDownRefresh() {
    console.log('下拉刷新触发了');

    setTimeout(() => {
      console.log('time out');
      // 关闭下拉刷新
      wx.stopPullDownRefresh()
    }, 1000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('到达屏幕底部')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    console.log('分享按钮');
  }
})