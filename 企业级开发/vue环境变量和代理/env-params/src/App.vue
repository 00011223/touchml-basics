<template>
    <div>
        <button @click="postRequest">请求服务器</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'App',
    components: {},
    methods: {
        postRequest() {
            let xhr = new XMLHttpRequest()
            // xhr.open('post', 'http://127.0.0.1:1024/test')
            // 使用代理时请不要使用完整请求路径
            // xhr.open('post', '/test')
            // 若代理存在前缀，则可以添加前缀访问接口
            // xhr.open('post', '/api/test')
            // 从环境变量中读取请求前缀
            // xhr.open('post', `${process.env.VUE_APP_URL === '/'? '/': (process.env.VUE_APP_URL + '/')}test`)
            // xhr.addEventListener('load', ev => {
            //     console.log(ev.currentTarget.responseText)
            // })
            // xhr.send()

            // 创建axios实例对象
            // 且将基础的请求地址设置成环境变量值
            const instance = axios.create({baseURL: process.env.VUE_APP_URL})
            instance.post('/test').then(data => {
                console.log(data.data)
            })
        }
    }
}
</script>

<style>
</style>
