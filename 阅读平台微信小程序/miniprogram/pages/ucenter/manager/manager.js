const db = getApp().globalData.db
const books = db.collection('books')

// pages/ucenter/manager/manager.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 当前页
    page: 1,
    // 每页多少条数据
    size: 10,
    // 列表数据
    listData: [],
    // 是否已经查询完所有的数据了
    isDone: false
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
    this.reset()
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
    this.reset()
  },

  // 重置列表
  reset() {
    // 重置状态 重新查询
    this.setData({
      page: 1,
      size: 10,
      listData: [],
      isDone: false
    })

    this.query(() => {
      // 关闭下拉刷新
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // 切换下一页
    this.setData({
      page: this.data.page + 1
    })

    this.query()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  // 查询列表
  // callback 回调函数
  query(callback) {
    if (this.data.isDone) return

    books.orderBy('updateTime', 'desc')
      .limit(this.data.size)
      .skip((this.data.page - 1) * this.data.size)
      .get({
        success: res => {
          if (res.data.length === 0) {
            this.setData({
              isDone: true
            })
          } else {
            // 追加数据到原有数据的后面
            this.data.listData = [...this.data.listData, ...res.data]

            this.setData({
              listData: this.data.listData
            })
          }
        },
        complete: () => {
          // 若存在函数 callback 就调用该函数
          if (typeof callback === 'function') callback()
        }
      })
  },

  // 删除
  remove(ev) {
    console.log(ev);
    wx.showModal({
      title: '确定',
      content: '确定删除吗?',
      success: res => {
        if (res.confirm) {
          // 删除

          // 获取要删除的数据id
          let id = ev.target.dataset.id
          books.where({
            _id: id
          }).remove({
            success: () => {
              this.reset()
            }
          })
        }
      }
    })
  },

  // 跳转到编辑页
  toEdit(ev) {
    // 获取要编辑的数据id
    let id = ev.target.dataset.id
    wx.navigateTo({
      url: `/pages/ucenter/edit/edit?id=${id}`
    })
  }
})