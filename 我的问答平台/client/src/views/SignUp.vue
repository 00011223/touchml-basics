<script setup>
import {useRouter} from 'vue-router'
import {reactive} from 'vue'
import {getPk, signUp as su} from '@/api/user'
import {message} from 'ant-design-vue'

const router = useRouter()

const model = reactive({
    account: '',
    pwd: '',
    twice: '',
    nickname: '',
})

const rules = {
    account: [
        {
            trigger: 'blur',
            message: '请输入账号',
            required: true
        },
        {
            trigger: 'blur',
            message: '请输入6~10位账号',
            min: 6,
            max: 10
        }
    ],
    pwd: [
        {
            trigger: 'blur',
            message: '请输入密码',
            required: true
        },
        {
            trigger: 'blur',
            message: '请输入8~20位密码',
            min: 8,
            max: 20
        }
    ],
    twice: [
        {
            trigger: 'blur',
            validator: (_rules, value) => {
                return value === model.pwd ? Promise.resolve() : Promise.reject(new Error('两次输入密码不一致'))
            }
        }
    ],
    nickname: [
        {
            trigger: 'blur',
            message: '请输入昵称',
            required: true
        },
        {
            trigger: 'blur',
            message: '请输入2~10位昵称',
            min: 2,
            max: 10
        }
    ]
}

// 注册
async function signUp({account, pwd, nickname}) {
    // 获取公钥
    const data = await getPk()
    console.log(data)
    let {pk} = data
    // 加密密码
    const key = new NodeRSA({b: 512})
    key.importKey(pk, 'pkcs1-public')
    // 加密并返回buffer对象
    let r = key.encrypt(pwd)
    // 发起注册请求
    const result = await su({
        account,
        pwd: JSON.stringify(r),
        nickname,
        pk
    })
    console.log(result)
    // 跳转登录页
    router.push('/signIn').then(() => {
        message.success('注册成功')
    })
}
</script>

<template>
    <div class="bg">
        <a-page-header
            class="page-header"
            title="注册"
            sub-title="欢迎在本平台注册"
            @back="() => router.back()"
        />
        <a-card title="注册" class="form">
            <template #extra><a href="/signIn">已有账号?</a></template>
            <a-form @finish="signUp" :rules="rules" :model="model" :label-col="{span: 24}">
                <a-form-item label="账号" name="account">
                    <a-input :maxlength="10" v-model:value.trim="model.account"></a-input>
                </a-form-item>
                <a-form-item label="密码" name="pwd">
                    <a-input type="password" :maxlength="20" v-model:value.trim="model.pwd"></a-input>
                </a-form-item>
                <a-form-item label="再次输入密码" name="twice">
                    <a-input type="password" :maxlength="20" v-model:value.trim="model.twice"></a-input>
                </a-form-item>
                <a-form-item label="昵称" name="nickname">
                    <a-input :maxlength="10" v-model:value.trim="model.nickname"></a-input>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" block html-type="submit">注册</a-button>
                </a-form-item>
                <a-form-item>
                    <a-button @click="router.push('/signIn')" block>登录</a-button>
                </a-form-item>
            </a-form>
        </a-card>
    </div>
</template>

<style lang="scss" scoped>
.bg {
    height: 100vh;
    background-color: #f0f2f5;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form {
    width: 350px;
    margin-top: 50px;
}
</style>
