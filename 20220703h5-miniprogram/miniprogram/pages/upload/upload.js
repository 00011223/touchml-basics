// pages/upload/upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  // 上传图片
  uploadImage() {
    // 步骤
    // 1. 选择图片
    // 2. 上传图片

    // 选择图片
    wx.chooseMedia({
      count: 2,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        console.log(res);
        // res.tempFiles 选择的图片的数组
        // 数组中的每一个成员用于描述所选图片
        // res.tempFiles[0].tempFilePath 所选图片的临时路径


        // 截取文件名
        let str = res.tempFiles[0].tempFilePath
        // let fileName = str.substring(str.lastIndexOf('/') + 1)
        // console.log(fileName);
        // console.log(str.split('/'))
        let fileName = str.match(/\/([^\/]+)$/)[1]
        console.log(fileName);

        // 上传图片
        wx.cloud.uploadFile({
          // 要上传的文件路径，此处可以使用 res.tempFiles[0].tempFilePath
          filePath: res.tempFiles[0].tempFilePath,
          // 在云存储中的路径
          cloudPath: 'test/' + fileName,
          success: (res) => {
            // res.fileID 是上传的文件的唯一标识，且可以直接在 image 标签 src 处使用
            console.log(res);
            console.log('上传成功');
          }
        })
      }
    })
  }
})