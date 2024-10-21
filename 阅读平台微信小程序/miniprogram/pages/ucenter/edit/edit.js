const db = getApp().globalData.db
const books = db.collection('books')
const category = db.collection('category')

// pages/ucenter/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 分类选项列表
    categoryOptions: [
      '神话', '人文社会', '小说'
    ],
    // 分类选项当前所选索引
    categroyIndex: 0,

    // 要存储的数据
    name: '',
    author: '',
    category: '',
    fileID: '',
    desc: '',
    dir: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 读取分类列表
    category.get({
      success: res => {
        let temp = res.data.map(item => item.name)
        this.setData({
          categoryOptions: temp,
          category: temp[this.data.categroyIndex]
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

  // 分类变化事件
  onCategoryChange(ev) {
    console.log(ev);
    let index = Number(ev.detail.value)
    this.setData({
      categroyIndex: index,
      category: this.data.categoryOptions[index]
    })
  },

  // 上传封面图
  uploadCover() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      success: res => {
        // 获取文件路径
        let filePath = res.tempFiles[0].tempFilePath
        console.log(filePath);

        // 获取文件名
        let fileName = filePath.match(/\/([^\/]+)$/)[1]
        console.log(fileName);

        // 打开loading
        wx.showLoading({
          title: '上传中...'
        })

        // 上传图片
        wx.cloud.uploadFile({
          filePath,
          cloudPath: 'bookCover/' + fileName,
          success: res => {
            this.setData({
              fileID: res.fileID
            })
          },
          complete: () => {
            // 关闭loading 提示
            wx.hideLoading()
          }
        })
      }
    })
  },

  // 提交
  submit() {
    console.log(this.data);

    wx.showLoading({
      title: '保存中...',
    })

    books.add({
      data: {
        name: this.data.name,
        author: this.data.author,
        category: this.data.category,
        fileID: this.data.fileID,
        desc: this.data.desc,
        dir: this.data.dir,
        createTime: Date.now(),
        updateTime: Date.now()
      },
      success: res => {
        // 返回上级菜单
        wx.navigateBack({
          success: () => {
            wx.showToast({
              title: '保存成功',
            })
          }
        })
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  },

  onNameInput(ev) {
    this.setData({
      name: ev.detail.value
    })
  },

  onAuthorInput(ev) {
    this.setData({
      author: ev.detail.value
    })
  },

  onDescInput(ev) {
    this.setData({
      desc: ev.detail.value
    })
  },

  onDirInput(ev) {
    this.setData({
      dir: ev.detail.value
    })
  }
})