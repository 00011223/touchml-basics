// 导出一个对象作为模块
export default {
    // 开启vuex严格模式
    // vuex严格模式下仅支持页面使用action来修改状态
    strict: true,
    // 开启命名空间
    namespaced: true,
    state() {
        return {
            age: 17
        }
    },
    mutations: {
        mAge(state, payload) {
            state.age = payload
        }
    },
    actions: {
        aAge({commit}, payload) {
            commit('mAge', payload)
        }
    }
}
