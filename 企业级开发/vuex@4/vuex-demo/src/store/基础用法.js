// 知识点
// 集成步骤
//      1. 创建 store 对象
//      2. 添加 store 配置
//      3. 至少配置 state mutations actions
//      4. 导出 store
//      5. 在 main.js 中 安装 store 插件
// 页面中读取状态
// 修改状态
//      1. 通过commit调用mutation修改状态
//      2. 通过dispatch调用action修改状态
// 异步 action 的使用，返回值的获取

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
    mutations: {
        // nickname属性的mutation
        // 这一个mutation用于修改 nickname 状态
        mNickname(state, payload) {
            // state: store对象的当前状态
            // payload: 承载的数据
            state.nickname = payload
        }
    },
    // 3. actions 用来触发状态更新的操作集合
    actions: {
        // 此action用于操作nickname
        // aNickname(store, payload) {
        //     // store: 当前仓库对象
        //     // payload: 承载的数据
        //     // 调用 commit 通过 mutation 修改昵称
        //     store.commit('mNickname', payload)
        // }


        // 异步的action
        async aNickname(store, payload) {
            // 假装做网络请求
            // result 就是网络请求的结果
            let result = await new Promise(resolve => {
                setTimeout(() => {
                    // 假装接收到网络请求的返回值
                    // 并将请求结果保存到状态中
                    store.commit('mNickname', payload)
                    resolve(payload)
                }, 2000)
            })

            // action 返回请求得到的结果
            return result
        }
    }
})

// 3. 导出 store
export default store
