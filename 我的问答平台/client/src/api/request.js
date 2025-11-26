import axios from 'axios'
import {message} from 'ant-design-vue'

// 通过环境变量设置请求前缀
const instance = axios.create({baseURL: process.env.VUE_APP_BASE_URL})

// 添加相应拦截器
instance.interceptors.response.use(res => {
    // 请求状态码为200时 调用该回调

    // 判断服务器的响应是否成功
    if (res.data.success === false) {
        // 统一显示异常信息
        message.error(res.data.msg)
        // 异常的时候返回异常消息
        return Promise.reject(new Error(res.data.msg))
    }
    // 成功的时候返回服务器的响应数据
    return Promise.resolve(res.data.data)
}, reason => {
    // 请求状态码不是200时 调用该回调
    return Promise.reject(reason)
})

export default instance
