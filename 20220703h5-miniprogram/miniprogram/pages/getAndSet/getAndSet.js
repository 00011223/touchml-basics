// pages/getAndSet/getAndSet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '射雕英雄传'
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

  // 修改标题的事件处理程序
  modifyTitle(ev) {
    // ev 事件对象
    console.log(ev);

    // 读取data中的值
    console.log(this.data.title);

    // 赋值
    // 赋值时直接赋值属性将不会更新页面
    this.data.title = '天龙八部'
    console.log(this.data.title);
    // setData 方法在修改数据的同时会更新页面
    // 所以只要需要更新页面就必须调用setData方法
    this.setData({
      title: '天龙八部'
    })
  }
})