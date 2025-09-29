// 导出一个对象作为模块
export default {
    // 开启vuex严格模式
    // vuex严格模式下仅支持页面使用action来修改状态
    strict: true,
    // 开启命名空间
    namespaced: true,
    state() {
        return {
            age: 17,
            count: 0,
            money: 500
        }
    },
    mutations: {
        mAge(state, payload) {
            state.age = payload
        },
        mCount(state, payload) {
            state.count = payload
        },
        mMoney(state, payload) {
            state.money = payload
        },
    },
    actions: {
        aAge({commit}, payload) {
            commit('mAge', payload)
        },
        aCount: {
            // root 为 true 代表将此 action 注册到根节点
            root: true,
            // handler 为 action 具体的处理函数
            handler(context, payload) {
                console.log(context)
                // 模块内可以通过 context.rootGetters 和 context.rootState 来访问根节点的 getters 和 state\
                console.log(context.rootState)
                context.commit('mCount', payload)
            }
        },
        aMoney({commit}, payload) {
            commit('mMoney', payload)
        },
    }
}
