// 1. 引入数据库连接
const db = getApp().globalData.db
// 2. 创建数据库集合对象
// db.collection 参数是集合的名称
// 返回值是集合对象
const students = db.collection('students')
// 获取指令集
const _ = db.command

// pages/crud/crud.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 模糊查询的关键字
    kw: ''
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

  add() {
    // 3. 调用集合对象的方法来操纵集合
    students.add({
      // 要保存的数据
      data: {
        name: '李四4',
        sex: 'female',
        age: 24,
        // 约定俗成会存入时间字段
        // 数据的创建时间
        createdAt: new Date(),
        // 数据的修改时间
        updatedAt: new Date()
      },
      // 保存成功的回调
      success: (res) => {
        console.log('保存成功');
        console.log(res);
      },
      fail(err) {
        console.log('保存失败');
        console.error(err);
      },
      complete(res) {
        console.log('保存完成');
        console.log(res);
      }
    })
  },

  // 分页查询
  queryPage() {
    // 分页查询的重点:
    // 1. 当前页 page
    // 2. 每页多少条数据 size
    let page = 1
    let size = 2

    // skip 跳过多少条数据
    // limit 查询多少条数据
    // orderBy 按字段排序 第一个参数: 排序字段  第二个参数: 排序方式 升序 asc 降序 desc
    // where 约束条件
    students.orderBy('updatedAt', 'desc')
      .skip((page - 1) * size)
      .limit(size)
      // .where({
      //   name: '张三',
      //   age: 18
      // })
      .where({
        // name: _.neq('张三')
        // age: _.gte(24)
        // name: _.nin(['张三', '李四'])

        // age: _.gte(10).and(_.lte(20))
        // age: _.lte(20).or(_.gte(25))

        // 通过正则表达式进行模糊查询
        name: /^[\s\S]*$/
      })
      .get({
        success: (res) => {
          console.log(res);
        }
      })
  },

  onKwInput(ev) {
    this.setData({
      kw: ev.detail.value
    })
  }
})