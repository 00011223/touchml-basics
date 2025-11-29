<script setup>
import {useRouter} from 'vue-router'
import {reactive} from 'vue'
import {getPkByAccount, signIn as si} from '@/api/user'
import {message} from 'ant-design-vue'

const router = useRouter()

const model = reactive({
    account: '',
    pwd: '',
    remember: false
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
}

async function signIn({account, pwd, remember}) {
    console.log(remember)

    // // 获取公钥
    // let {pk} = await getPkByAccount(account)
    // // 加密密码
    // let key = new NodeRSA({b: 512})
    // key.importKey(pk, 'pkcs1-public')
    // pwd = key.encrypt(pwd)
    // // 发送请求
    // await si({
    //     account, pwd: JSON.stringify(pwd), remember
    // })
    // router.push('/').then(() => {
    //     message.success('登录成功')
    // })
}
</script>

<template>
    <div class="bg">
        <a-page-header
            class="page-header"
            title="登录"
            sub-title="欢迎登录问答平台"
        />
        <a-card title="登录" class="form">
            <template #extra><a href="#">忘记密码?</a></template>
            <a-form @finish="signIn" :rules="rules" :model="model" :label-col="{span: 24}">
                <a-form-item label="账号" name="account">
                    <a-input :maxlength="10" v-model:value.trim="model.account"></a-input>
                </a-form-item>
                <a-form-item label="密码" name="pwd">
                    <a-input type="password" :maxlength="20" v-model:value.trim="model.pwd"></a-input>
                </a-form-item>
                <a-form-item name="remember">
                    <a-checkbox v-model:checked="model.remember">记住我</a-checkbox>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" block html-type="submit">登录</a-button>
                </a-form-item>
                <a-form-item>
                    <a-button @click="router.push('/signUp')" block>注册</a-button>
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
