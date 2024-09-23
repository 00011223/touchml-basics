const app = getApp()

// pages/globalData/child/child.js
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
    // this.setData({
    //   // 使用全局对象app 读取全局对象的参数value
    //   value: app.globalData.value
    // })

    // 读取持久化的值
    wx.getStorage({
      // 数据名
      key: 'inputValue',
      // 读取成功的回调函数
      success: (res) => {
        console.log(res);
        // res.data 读出来的值
        this.setData({
          value: res.data
        })
      }
    })
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

  removeValue() {
    // 删除持久化数据
    wx.removeStorage({
      // 删除的属性名
      key: 'inputValue',
      success() {
        // getStorageSync 同步读取持久化的数据
        let result = wx.getStorageSync('inputValue')
        console.log(result);
      }
    })
  }
})