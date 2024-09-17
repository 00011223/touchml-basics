// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '张三',
    sex: 'female',
    hobbies: ['dlq', 'tzq'],
    // 爱好的选项
    hobbiesOptions: [{
        label: '打篮球',
        value: 'dlq',
        checked: true
      },
      {
        label: '踢足球',
        value: 'tzq',
        checked: true
      },
      {
        label: '羽毛球',
        value: 'ymq',
        checked: false
      },
    ],
    clazz: 0,
    clazzRange: ['一班', '二班', '三班'],
    desc: '这是一个\n混世魔王'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

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

  submit() {
    console.log(this.data);
  },

  // 输入框输入事件
  onNameInput(ev) {
    // ev.detail.value 输入框的值
    // 修改data中的数据保存输入框的值
    this.setData({
      name: ev.detail.value
    })
  },

  onSexChange(ev) {
    // ev.detail.value 当前所选的值
    this.setData({
      sex: ev.detail.value
    })
  },

  onHobbiesChange(ev) {
    // ev.detail.value 被选中的数组
    // console.log(ev.detail.value);
    this.data.hobbiesOptions.forEach(option => {
      // 判断当前选项是否被勾选了
      // 将判断结果的 boolean 值 直接赋值给 checked 属性
      option.checked = ev.detail.value.includes(option.value)
    })
    // 重新赋值
    this.setData({
      hobbiesOptions: this.data.hobbiesOptions
    })
  },

  onClazzChange(ev) {
    // console.log(ev.detail.value);
    // ev.detail.value 选择器当前选择的索引值
    this.setData({
      clazz: Number(ev.detail.value)
    })
  },

  onDescInput(ev) {
    // ev.detail.value 文本域的值
    // console.log(ev.detail.value);
    this.setData({
      desc: ev.detail.value
    })
  }
})