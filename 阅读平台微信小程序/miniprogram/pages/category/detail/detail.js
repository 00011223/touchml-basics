const db = getApp().globalData.db
const category = db.collection('category')
const books = db.collection('books')

// pages/category/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    desc: '',
    authorIcon: '',
    author: '',
    // 分类名称
    name: '',
    // 列表数据
    listData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获取分类id 用于查询
    this.setData({
      id: options.id
    })

    // 查找分类数据
    category.where({
      // 通过id为参数查找对应数据
      _id: this.data.id
    }).get({
      success: res => {
        let data = res.data[0]
        this.setData({
          desc: data.desc,
          authorIcon: data.authorIcon,
          author: data.author,
          name: data.name
        })

        // 设置导航栏标题
        wx.setNavigationBarTitle({
          title: data.name,
        })

        // 查询对应分类下的图书列表
        books.where({
          category: this.data.name
        }).get({
          success: res => {
            console.log(res);
            this.setData({
              listData: res.data
            })
          }
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

  }
})