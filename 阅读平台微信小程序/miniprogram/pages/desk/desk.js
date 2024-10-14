const db = getApp().globalData.db
const desk = db.collection('desk')
const books = db.collection('books')
const _ = db.command

// pages/desk/desk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 导航按钮
    navBtns: [
      // 每一个数组成员代表是否被激活
      true, false, false
    ],
    // 图书数据
    booksData: [],
    // 当前显示的索引
    currentIndex: 0,
    // 是否开启整理模式
    tidy: false,
    // 书桌数组数据
    deskData: [{
        deskId: '',
        cover: 'cloud://cloud1-6gmm9gic002fb420.636c-cloud1-6gmm9gic002fb420-1306170251/books/QF7G3AOs606cf9a87126ed88be5a8f65358dc87c72d5.png',
        name: '神曲',
        // 是否勾选
        checked: false
      },
      {
        deskId: '',
        cover: 'cloud://cloud1-6gmm9gic002fb420.636c-cloud1-6gmm9gic002fb420-1306170251/books/QF7G3AOs606cf9a87126ed88be5a8f65358dc87c72d5.png',
        name: '神曲',
        // 是否勾选
        checked: false
      },
      {
        deskId: '',
        cover: 'cloud://cloud1-6gmm9gic002fb420.636c-cloud1-6gmm9gic002fb420-1306170251/books/QF7G3AOs606cf9a87126ed88be5a8f65358dc87c72d5.png',
        name: '神曲',
        // 是否勾选
        checked: false
      },
      {
        deskId: '',
        cover: 'cloud://cloud1-6gmm9gic002fb420.636c-cloud1-6gmm9gic002fb420-1306170251/books/QF7G3AOs606cf9a87126ed88be5a8f65358dc87c72d5.png',
        name: '神曲',
        // 是否勾选
        checked: false
      },
      {
        deskId: '',
        cover: 'cloud://cloud1-6gmm9gic002fb420.636c-cloud1-6gmm9gic002fb420-1306170251/books/QF7G3AOs606cf9a87126ed88be5a8f65358dc87c72d5.png',
        name: '神曲',
        // 是否勾选
        checked: true
      },
      {
        deskId: '',
        cover: 'cloud://cloud1-6gmm9gic002fb420.636c-cloud1-6gmm9gic002fb420-1306170251/books/QF7G3AOs606cf9a87126ed88be5a8f65358dc87c72d5.png',
        name: '神曲',
        // 是否勾选
        checked: true
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 查询书桌数据
    desk.limit(3).get({
      success: res => {
        console.log(res);
        // 获取图书的id数组
        let ids = res.data.map(item => item.bookId)
        console.log(ids);
        // 查询图书
        books.where({
          _id: _.in(ids)
        }).get({
          success: _res => {
            console.log(_res);
            this.setData({
              booksData: _res.data
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

  },

  // 滚动屏发生变化事件
  onSwiperChange(ev) {
    // console.log(ev);
    // 获取 swiper 当前的索引
    let index = ev.detail.current
    for (let i = 0; i < this.data.navBtns.length; i++) {
      this.data.navBtns[i] = index === i
    }
    this.setData({
      navBtns: this.data.navBtns,
      currentIndex: index
    })
  },

  // 整理按钮
  onTidy() {
    this.setData({
      tidy: true
    })
  },

  onCancel() {
    // 取消所有已选项
    this.data.deskData.forEach(item => {
      item.checked = false
    })

    this.setData({
      tidy: false,
      deskData: this.data.deskData
    })
  },

  // 选项被点击事件
  onItemClick(ev) {
    if (!this.data.tidy) return
    console.log(ev);
    // 获取被点击选项的索引
    let index = ev.currentTarget.dataset.index
    this.data.deskData[index].checked = !this.data.deskData[index].checked
    this.setData({
      deskData: this.data.deskData
    })
  }
})