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
        checked: false
      },
      {
        deskId: '',
        cover: 'cloud://cloud1-6gmm9gic002fb420.636c-cloud1-6gmm9gic002fb420-1306170251/books/QF7G3AOs606cf9a87126ed88be5a8f65358dc87c72d5.png',
        name: '神曲',
        // 是否勾选
        checked: false
      }
    ],

    // 是否显示删除按钮
    isShowRemoveBtn: false,

    // 是否显示整理书桌的cover
    isShowCover: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  // 查询用户的书桌内容
  query() {
    // 查询书桌数据
    desk.get({
      success: res => {
        console.log(res);
        // 获取图书的id数组
        let ids = res.data.map(item => item.bookId)
        console.log(ids);
        let tempMap = {}
        res.data.forEach(item => {
          // 使用图书id为key
          // 保存desk id 为value
          tempMap[item.bookId] = item._id
        })
        // 查询图书
        books.where({
          _id: _.in(ids)
        }).get({
          success: _res => {
            console.log(_res);
            // 处理以下图书数据 让书桌可以使用
            _res.data.forEach(item => {
              item.deskId = tempMap[item._id]
              item.cover = item.fileID
              item.checked = false
            })
            this.setData({
              // 设置书桌数据
              deskData: _res.data,
              // 截取前三个数据用滚动屏显示
              booksData: _res.data.slice(0, 3)
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
    console.log('show');
    this.query()
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
      deskData: this.data.deskData,
      isShowRemoveBtn: false
    })
  },

  // 选项被点击事件
  onItemClick(ev) {
    if (!this.data.tidy) return
    // console.log(ev);
    // 获取被点击选项的索引
    let index = ev.currentTarget.dataset.index
    this.data.deskData[index].checked = !this.data.deskData[index].checked
    this.setData({
      deskData: this.data.deskData,
      isShowRemoveBtn: this.data.deskData.some(item => item.checked)
    })
  },

  // 关闭
  onClose() {
    this.onCancel()

    this.setData({
      isShowCover: false,
      isShowRemoveBtn: false
    })
  },

  // 打开遮罩
  openCover() {
    this.setData({
      isShowCover: true
    })
  },

  onRemove() {
    wx.showModal({
      title: '确认',
      content: '真的要删除数据吗?',
      success: res => {
        if (res.confirm) {
          // 用户点击确定
          // 执行删除操作


          // 获取要删除的书桌id结合
          let deskIds = this.data.deskData
            .filter(item => item.checked)
            .map(item => item.deskId)

          // 删除指定id的数据
          desk.where({
            _id: _.in(deskIds)
          }).remove({
            success: res => {
              // 提示
              wx.showToast({
                title: '删除成功',
                icon: 'success'
              })

              // 重新查询新数据
              this.query()

              // 取消整理状态
              this.onCancel()

              // 隐藏删除按钮
              this.setData({
                isShowRemoveBtn: false
              })
            }
          })
        }
      }
    })
  }
})