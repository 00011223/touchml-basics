// 知识点
// 什么是getter
// 应用场景
// 使用方法


// 什么是getter？
// getter就是一个访问控制的函数，可以控制读取 state 时得到的值

// 应用场景
// getter 可以理解成类似组件的 computed 计算属性，所以应用场景类似计算属性

import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            date: new Date()
        }
    },
    mutations: {
        mDate(state, payload) {
            state.date = payload
        }
    },
    actions: {
        aDate(store, payload) {
            store.commit('mDate', payload)
        }
    },
    getters: {
        // getter 实际是一个函数，接收一个 state 参数
        // state 是当前 store 的状态
        dateString(state) {
            let d = state.date
            return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
        }
    }
})

export default store
