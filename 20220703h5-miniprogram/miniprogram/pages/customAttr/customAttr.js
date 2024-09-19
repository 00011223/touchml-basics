// pages/customAttr/customAttr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        id: 3,
        name: '张三',
        sex: 'male',
        age: 17
      },
      {
        id: 1,
        name: '李四',
        sex: 'female',
        age: 24
      },
      {
        id: 2,
        name: '老王',
        sex: 'other',
        age: 30
      },
    ]
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

  // 单个删除
  remove(ev) {
    console.log(ev);
    // 获取被删除的数据id
    let id = ev.target.dataset.id
    // // 查找id所对应的数据索引
    // let i = this.data.list.findIndex(item => {
    //   return item.id === id
    // })
    // // 然后删除对应索引的数据
    // this.data.list.splice(i, 1)

    // 通过过滤来删除元素
    this.data.list = this.data.list.filter(item => item.id !== id)

    // let fn = () => ({
    //   a: 1,
    //   b: 2
    // })

    this.setData({
      list: this.data.list
    })
  }
})