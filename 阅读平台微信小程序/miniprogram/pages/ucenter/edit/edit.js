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

    // 此处保存一个由导航传递的id值
    // 若此值存在则说明此时在修改数据
    // 否则为新增数据
    id: '',
    // 用于指示是否是编辑
    isEdit: false,
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


    // 保存id
    this.setData({
      id: options.id,
      isEdit: Boolean(options.id)
    })

    if (this.data.isEdit) {
      // 修改标题
      wx.setNavigationBarTitle({
        title: '编辑图书',
      })

      // 查询图书id对应的数据 然后进行回显
      books.where({
        _id: this.data.id
      }).get({
        success: res => {
          if (res.data.length === 0) {
            wx.showToast({
              title: '编辑的图书不存在',
            })
            return
          }

          this.setData({
            name: res.data[0].name,
            author: res.data[0].author,
            category: res.data[0].category,
            fileID: res.data[0].fileID,
            desc: res.data[0].desc,
            dir: res.data[0].dir,
          })
        }
      })
    }
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

    wx.showLoading({
      title: '保存中...',
    })

    if (!this.data.isEdit) {
      // 新增数据
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
    } else {
      // 编辑数据
      let doc = books.doc(this.data.id)
      doc.update({
        data: {
          name: this.data.name,
          author: this.data.author,
          category: this.data.category,
          fileID: this.data.fileID,
          desc: this.data.desc,
          dir: this.data.dir,
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
    }
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