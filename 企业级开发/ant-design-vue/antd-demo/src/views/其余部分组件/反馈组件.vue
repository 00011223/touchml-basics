<script setup>
import {reactive, ref} from 'vue'
// 引入全局消息
import {message} from 'ant-design-vue'

const loading = ref(false)
// 骨架屏的加载状态
const loading2 = ref(true)

const showDrawer = ref(false)

const showDialog = ref(false)

// 对话框中的表单组件
const form = ref(null)

const user = reactive({
    name: '张三',
    sex: 'male',
    age: 17
})

// 提交数据
function onFinish(values) {
    // 开启按钮加载提示
    loading.value = true
    console.log('开始发请求')
    // setTimeout(() => {
    //     console.log('请求完成')
    //     // 关闭加载提示
    //     loading.value = false
    // }, 3000)


    // 假装发送了一个 axios 的请求，得到了一个 promise 对象
    new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve()
            reject(new Error('请求超时'))
        }, 2000)
    }).then(() => {
        console.log('请求完成')
        message.success('操作成功')
    }).catch(reason => {
        console.error(reason)
        // message.error('操作失败')
        message.warn('警告')
        message.info('信息')
        message.loading('加载')

        // api
        // message.success(msg, duration, onClose)
        // duration 单位是秒
        message.error('操作失败', 10, () => {
            console.log('轻提示已关闭')
        })

    }).finally(() => {
        // 关闭加载提示
        loading.value = false
    })
}

// 抽屉可见性变化事件
function afterVisibleChange(visible) {
    // 当前可见性
    console.log(visible)
}

// 对话框确定事件
function handleOk() {
    console.log('ok')
}

// 提交对话框表单
function onSubmit() {
    loading.value = true

    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
            // reject(new Error('姓名异常'))
        }, 1000)
    }).then(() => {
        message.success('操作成功')
        closeDialog()
    }).catch(reason => {
        console.error(reason)
        message.error(reason.message)
    }).finally(() => {
        loading.value = false
    })
}

// 关闭对话框
function closeDialog() {
    showDialog.value = false
    // 重置表单
    console.log(form.value.resetFields)
    form.value.resetFields()
}

// 气泡确认框的确定和取消事件
function confirm() {
    console.log('确定')
}

function cancel() {
    console.log('取消')
}
</script>

<template>
    <div>
        <a-card style="width: 500px">
            <a-form @finish="onFinish" :label-col="{span: 4}" :model="user">
                <a-form-item label="姓名" name="name">
                    <a-input v-model:value="user.name"></a-input>
                </a-form-item>
                <a-form-item label="性别" name="sex">
                    <a-radio-group v-model:value="user.sex">
                        <a-radio value="male">男</a-radio>
                        <a-radio value="female">女</a-radio>
                        <a-radio value="other">其他</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item label="年龄" name="age">
                    <a-input-number v-model:value.number="user.age"></a-input-number>
                </a-form-item>
                <a-row>
                    <a-col :span="4"></a-col>
                    <a-col :flex="1">
                        <a-button html-type="submit" :loading="loading" type="primary">提交</a-button>
                    </a-col>
                </a-row>
            </a-form>
        </a-card>

        <!-- 抽屉 -->
        <a-drawer
            v-model:visible="showDrawer"
            title="标题"
            placement="bottom"
            @after-visible-change="afterVisibleChange"
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </a-drawer>

        <a-button type="primary" @click="showDrawer = true">开启抽屉</a-button>

        <!-- 对话框 -->
        <a-modal v-model:visible="showDialog" title="标题" @ok="handleOk">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </a-modal>

        <!-- 自定义按钮 对话框 -->
        <a-modal v-model:visible="showDialog" title="标题">
            <a-form ref="form" @finish="onFinish" :label-col="{span: 4}" :model="user">
                <a-form-item label="姓名" name="name">
                    <a-input v-model:value="user.name"></a-input>
                </a-form-item>
                <a-form-item label="性别" name="sex">
                    <a-radio-group v-model:value="user.sex">
                        <a-radio value="male">男</a-radio>
                        <a-radio value="female">女</a-radio>
                        <a-radio value="other">其他</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item label="年龄" name="age">
                    <a-input-number v-model:value.number="user.age"></a-input-number>
                </a-form-item>
            </a-form>

            <template #footer>
                <a-button :loading="loading" type="primary" @click="onSubmit">确定</a-button>
                <a-button @click="closeDialog">取消</a-button>
            </template>
        </a-modal>

        <a-button type="primary" @click="showDialog = true">开启对话框</a-button>

        <!-- 确认气泡框 -->
        <a-popconfirm
            title="确定删除吗？"
            ok-text="我确信，你就删除吧"
            cancel-text="我不想删除了"
            @confirm="confirm"
            @cancel="cancel"
        >
            <a-button type="primary" danger>删除</a-button>
        </a-popconfirm>


        <!-- 骨架屏 -->
        <a-skeleton :active="loading2" :loading="loading2" avatar>
            <div>hello 加载完成后的结果</div>
        </a-skeleton>

        <a-button @click="loading2 = !loading2">开关加载</a-button>
    </div>
</template>

<style scoped>

</style>
