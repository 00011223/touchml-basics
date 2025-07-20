// 知识点
// 集成步骤
//      1. 创建 store 对象
//      2. 添加 store 配置
//      3. 至少配置 state mutations actions
//      4. 导出 store
//      5. 在 main.js 中 安装 store 插件

// 1. 引入 createStore
import {createStore} from 'vuex'

// 2. 创建 store 对象
const store = createStore({
    // 有以下几个必填项
    // 1. state 状态
    // 写法类似于响应式属性 data 是一个方法 返回状态值
    state() {
        return {
            nickname: '给点阳光就灿烂'
        }
    },
    // 2. mutations 用来修改状态的方法集合
    mutations: {},
    // 3. actions 用来触发状态更新的操作集合
    actions: {}
})

// 3. 导出 store
export default store
