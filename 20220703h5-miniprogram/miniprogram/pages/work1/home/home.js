// pages/work1/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num1: '这是num1',
    num2: '这是num2'
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

  showValue() {
    console.log(this.data.num1);
    console.log(this.data.num2);
  },

  num1Input(ev) {
    // ev.detail 包含了输入框的值
    console.log(ev.detail);
    // 将输入框中的值保存到data对象中
    this.setData({
      num1: ev.detail.value
    })
  },

  num2Input(ev) {
    console.log(ev.detail);
    this.setData({
      num2: ev.detail.value
    })
  }
})