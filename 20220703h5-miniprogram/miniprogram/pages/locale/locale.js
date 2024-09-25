// pages/locale/locale.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: ''
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

  // 扫描二维码
  scanQRCode() {
    wx.scanCode({
      // 成功
      success: (res) => {
        console.log(res);
      },
      // 失败
      fail: err => {
        console.error(err);
      },
      complete: () => {
        console.log('扫码完成');
      }
    })
  },
  takePhoto() {
    // 获取用户当前的权限
    wx.getSetting({
      success: res => {
        console.log(res);

        // 判断是否存在相机权限

        // 当  res.authSetting['scope.camera'] 为 undefined 说明用户从未授权过
        if (res.authSetting['scope.camera'] === undefined) {
          // 不存在就授权
          wx.authorize({
            // scope 要授予的权限名称
            scope: 'scope.camera',
            success: () => {
              // 授权成功就可以拍照了
              doTakePhoto.apply(this)
            }
          })
        } else if (res.authSetting['scope.camera'] === false) {
          // 当 res.authSetting['scope.camera'] 存在且值为 false 代表用户拒绝了授权
          // 用户拒绝过授权，就可以打开设置菜单 引导用户手动授权
          wx.openSetting()
        } else {
          // 存在权限就直接拍照
          doTakePhoto.apply(this)
        }
      }
    })


    function doTakePhoto() {
      // 创建相机组件上下文
      const ctx = wx.createCameraContext()
      // 通过上下文拍照
      ctx.takePhoto({
        success: (res) => {
          console.log(res);
          // res.tempImagePath 拍摄完成的临时图片
          this.setData({
            src: res.tempImagePath
          })
        }
      })
    }



  }
})