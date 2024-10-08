// pages/userInfo/userInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headIcon: '',
    nickname: ''
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

  onNickNameInput(ev) {
    this.setData({
      nickname: ev.detail.value
    })
  },

  // 选择头像事件
  onChooseAvatar(ev) {
    console.log(ev);
    // ev.detail.avatarUrl 相当于 chooseMedia 中的 res.tempFiles[0].tempFilePath

    let fileName = ev.detail.avatarUrl.match(/\/([^\/]+)$/)[1]

    // 上传头像
    wx.cloud.uploadFile({
      filePath: ev.detail.avatarUrl,
      cloudPath: 'test/' + fileName,
      success: res => {
        // res.fileID 上传成功后的文件路径
        this.setData({
          headIcon: res.fileID
        })
      }
    })
  }
})