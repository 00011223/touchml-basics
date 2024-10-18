const db = getApp().globalData.db
const books = db.collection('books')
const desk = db.collection('desk')

// pages/bookDetail/bookDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 选项卡数据
    tabs: [{
        // 选项卡名称
        label: '详情',
        // 该选项卡是否被激活
        active: true
      },
      {
        label: '目录',
        active: false
      },
    ],
    id: '',
    // 封面图
    cover: 'cloud://cloud1-6gmm9gic002fb420.636c-cloud1-6gmm9gic002fb420-1306170251/books/QF7G3AOs606cf9a87126ed88be5a8f65358dc87c72d5.png',
    // 书名
    name: '神话2',
    // 作者
    author: '蛋定',
    // 详情
    desc: '圣经地狱描述',
    // 目录
    dir: ['地狱一层', '地狱二层', '地狱三层'],
    // 收藏的书桌id
    deskId: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(options);
    this.setData({
      id: options.id
    })

    // 查询id对应的图书
    books.where({
      _id: this.data.id
    }).get({
      success: res => {
        console.log(res);
        let data = res.data[0]
        this.setData({
          cover: data.fileID,
          name: data.name,
          author: data.author,
          desc: data.desc,
          dir: data.dir.split('\n')
        })
      }
    })

    // 查询是否存在对应的书桌id
    desk.where({
      bookId: this.data.id
    }).get({
      success: res => {
        if (res.data.length > 0) {
          // 存在收藏
          this.setData({
            deskId: res.data[0]._id
          })
        }
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

  switchTab(ev) {
    // 获取自定义属性index
    // console.log(ev);
    let index = ev.target.dataset.index
    // 遍历每一个选项卡 设置active属性
    this.data.tabs.forEach((tab, i) => {
      tab.active = i === index
    })
    this.setData({
      tabs: this.data.tabs
    })
  },

  // 加入书桌按钮
  addToDesk() {
    // 加入书桌
    if (this.data.deskId.trim() === '') {
      // 添加图书到书桌
      desk.add({
        data: {
          // 记录图书id
          bookId: this.data.id
        },
        success: res => {
          this.setData({
            deskId: res._id
          })
          console.log('收藏成功');
        },
        complete: () => {
          wx.showToast({
            title: '收藏成功',
            icon: 'success'
          })
        }
      })
    } else {
      // 移除书桌
      desk.where({
        _id: this.data.deskId
      }).remove({
        success: res => {
          this.setData({
            deskId: ''
          })
        },
        complete: () => {
          wx.showToast({
            title: '移出成功',
            icon: 'success'
          })
        }
      })
    }
  }
})