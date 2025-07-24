// 知识点
// 如何对vuex的状态进行双向绑定
//        1. 给要进行双向绑定的状态添加计算属性
//        2. 计算属性分别定义 set get 函数来为状态赋值
//        3. 页面使用 v-model 绑定对应的计算属性

import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            name: '张三',
            sex: 'male',
            hobbies: ['dlq', 'ymq'],
            clazz: '2',
            desc: '法外狂徒\n亡命之徒'
        }
    },
    mutations: {
        mName(state, payload) {
            state.name = payload
        },
        mSex(state, payload) {
            state.sex = payload
        },
        mHobbies(state, payload) {
            state.hobbies = payload
        },
        mClazz(state, payload) {
            state.clazz = payload
        },
        mDesc(state, payload) {
            state.desc = payload
        },
    },
    actions: {
        aName({commit}, payload) {
            commit('mName', payload)
        },
        aSex({commit}, payload) {
            commit('mSex', payload)
        },
        aHobbies({commit}, payload) {
            commit('mHobbies', payload)
        },
        aClazz({commit}, payload) {
            commit('mClazz', payload)
        },
        aDesc({commit}, payload) {
            commit('mDesc', payload)
        },
    }
})

export default store
