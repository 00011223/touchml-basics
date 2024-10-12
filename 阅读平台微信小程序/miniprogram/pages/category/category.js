const db = getApp().globalData.db
// 指令集
const _ = db.command
const category = db.collection('category')
const books = db.collection('books')
// 计时器 用于防抖
let timer

// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowSearch: false,
    list: [],
    kw: '',
    // 查询结果集
    result: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.queryCategory()
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

  // 开启搜索
  openSearch() {
    this.setData({
      isShowSearch: true
    })
  },

  // 关闭搜索
  closeSearch() {
    this.setData({
      isShowSearch: false,
      result: [],
      kw: ''
    })
  },

  // 扫描二维码
  scanQRCode() {
    wx.scanCode({
      onlyFromCamera: true,
      success: res => {
        console.log(res);
      }
    })
  },

  // 查询分类信息
  queryCategory() {
    category.get({
      success: res => {
        console.log(res);
        this.setData({
          list: res.data
        })
      }
    })
  },

  onKwInput(ev) {
    this.setData({
      kw: ev.detail.value
    })

    clearTimeout(timer)

    if (this.data.kw.trim() === '') return

    // 用户停止输入后 500 毫秒后 在查询数据库
    timer = setTimeout(() => {

      console.log(this.data.kw);

      // 跨字段的或查询
      // https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.or.html
      books.where(_.or([{
          name: new RegExp(`^[\\s\\S]*${this.data.kw}[\\s\\S]*$`)
        },
        {
          author: new RegExp(`^[\\s\\S]*${this.data.kw}[\\s\\S]*$`)
        }
      ])).get({
        success: res => {
          this.setData({
            result: res.data
          })
        }
      })
    }, 500)
  }
})