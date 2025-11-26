import request from '@/api/request'

export function signIn() {

}

export function signUp() {

}

// 获取公钥
export function getPk() {
    return request.post('/user/getPk')
}
