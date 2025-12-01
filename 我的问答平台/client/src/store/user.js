import {getUserInfo} from '@/api/user'

export default {
    // 严格模式，开启后无法在页面使用 store.commit 直接调用 mutation
    strict: true,
    // 开启命名空间
    namespaced: true,
    state() {
        return {
            userInfo: null
        }
    },
    mutations: {
        // 用于修改用户信息
        // payload 是一个包含用户信息的对象
        mUserInfo(state, payload) {
            state.userInfo = {...payload}
        }
    },
    actions: {
        // 获取用户信息
        async getUserInfo({commit, state}) {
            // 若存在用户信息的状态，则返回用户信息
            if (state.userInfo) {
                return state.userInfo
            }
            // 否则 从服务器获取用户信息
            else {
                const userInfo = await getUserInfo()
                if (userInfo) {
                    // 若用户信息存在就保存状态
                    commit('mUserInfo', userInfo)
                }
                return userInfo
            }
        }
    }
}
