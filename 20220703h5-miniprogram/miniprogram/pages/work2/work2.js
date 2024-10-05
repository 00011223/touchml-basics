// 获取数据库连接
const db = getApp().globalData.db
// 获取集合
const user = db.collection('user')

// pages/work2/work2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: '',
    pwd: '',
    newPwd: ''
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

  onAccountInput(ev) {
    this.setData({
      account: ev.detail.value
    })
  },

  onPwdInput(ev) {
    this.setData({
      pwd: ev.detail.value
    })
  },

  onNewPwdInput(ev) {
    this.setData({
      newPwd: ev.detail.value
    })
  },

  // 注册
  signUp() {
    user.add({
      data: {
        account: this.data.account,
        pwd: this.data.pwd,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      success: () => {
        wx.showModal({
          content: '添加成功',
        })
      }
    })
  },

  // 登录
  signIn() {
    user.where({
      account: this.data.account
    }).get({
      success: (res) => {
        console.log(res);

        // 判断账号是否存在
        if (res.data.length === 0) {
          wx.showModal({
            content: '账号未找到',
          })
          return
        }

        // 判断账号密码是否相等
        if (res.data[0].pwd !== this.data.pwd) {
          wx.showModal({
            content: '密码错误',
          })
          return
        }

        wx.showModal({
          content: '登录成功',
        })
      }
    })
  },

  // 修改密码
  modifyPwd() {
    user.where({
      account: this.data.account
    }).get({
      success: (res) => {
        if (res.data.length === 0) {
          wx.showModal({
            content: '账号不存在',
          })
          return
        }

        if (res.data[0].pwd !== this.data.pwd) {
          wx.showModal({
            content: '密码错误',
          })
          return
        }

        // 方法一 通过id修改数据
        // let doc = user.doc(res.data[0]._id)
        // doc.update({
        //   data: {
        //     pwd: this.data.newPwd,
        //     updatedAt: new Date()
        //   },
        //   success: () => {
        //     wx.showModal({
        //       content: '密码修改成功',
        //     })
        //   }
        // })

        // 方法二 通过其他字段修改数据
        user.where({
          account: this.data.account
        }).update({
          data: {
            pwd: this.data.newPwd,
            updatedAt: new Date()
          },
          success: () => {
            wx.showModal({
              content: '密码修改成功',
            })
          }
        })
      }
    })
  },

  remove() {
    // 方法一 使用id删除

    // user.where({
    //   account: this.data.account
    // }).get({
    //   success: res => {
    //     if (res.data.length === 0) {
    //       wx.showModal({
    //         content: '账号不存在',
    //       })
    //       return
    //     }

    //     let doc = user.doc(res.data[0]._id)
    //     doc.remove({
    //       success: () => {
    //         wx.showModal({
    //           content: '账号注销成功',
    //         })
    //       }
    //     })
    //   }
    // })

    // 方法二 使用查询条件删除数据
    user.where({
      account: this.data.account
    }).remove({
      success: (res) => {
        console.log(res);
        if (res.stats.removed === 0) {
          wx.showModal({
            content: '账号注销失败',
          })
        } else
          wx.showModal({
            content: '账号注销成功',
          })
      },
    })
  }
})