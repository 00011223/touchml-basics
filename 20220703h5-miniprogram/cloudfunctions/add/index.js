// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // event 中包含了云函数的参数

  const wxContext = cloud.getWXContext()
  // wxContext.OPENID 微信用户的唯一id
  // wxContext.APPID 应用id 也就是小程序被分配的id
  // wxContext.UNIONID 用户在微信产品中的通用id

  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }

  return event.a + event.b

}