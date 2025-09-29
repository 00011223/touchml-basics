// 知识点
// 如何在组合式API的组件中使用 store

import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            nickname: '哈哈'
        }
    },
    mutations: {
        mNickname(state, payload) {
            state.nickname = payload
        }
    },
    actions: {
        aNickname({commit}, payload) {
            commit('mNickname', payload)
        }
    }
})

export default store
