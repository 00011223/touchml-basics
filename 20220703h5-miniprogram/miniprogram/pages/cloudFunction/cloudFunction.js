// pages/cloudFunction/cloudFunction.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a: 0,
    b: 0,
    result: ''
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

  onAInput(ev) {
    this.setData({
      a: Number(ev.detail.value)
    })
  },

  onBInput(ev) {
    this.setData({
      b: Number(ev.detail.value)
    })
  },

  add() {
    // 调用云函数
    wx.cloud.callFunction({
      // 函数名
      name: 'add',
      // 函数参数
      data: {
        a: this.data.a,
        b: this.data.b
      },
      // 成功回调
      success: (res) => {
        console.log(res);
        // 设置数据到页面显示
        this.setData({
          result: res.result
        })
      },
      // 失败回调
      fail(err) {
        console.error(err);
      },
      // 完成回调
      complete(res) {
        console.log('云函数调用完成');
        console.log(res);
      }
    })
  }
})