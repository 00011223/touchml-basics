<script setup>
// 知识点
// 表单验证
//      1. a-form 设置 rules
//      2. rules 中添加要验证的验证规则 rules 对象中属性请参考 https://www.antdv.com/components/form-cn#%E6%A0%A1%E9%AA%8C%E8%A7%84%E5%88%99
//      3. validator 自定义验证器的使用
//      4. form.validate 函数进行手动验证
import {reactive, ref} from 'vue'

const form = ref(null)

const formData = reactive({
    name: '张三',
    sex: 'male',
    hobbies: ['dlq', 'ymq'],
    age: 17
})

function onFinish(values) {
    console.log('验证通过')
    console.log(values)
}

function submit() {
    // 调用 validate 方法将触发表单验证, 返回一个promise对象
    form.value.validate().then(values => {
        // 验证通过触发 then
        // values 验证通过的表单数据
        console.log(values)
    }).catch(reason => {
        // 验证失败触发 catch
        console.error(reason)
    })
}

const rules = {
    // key: 要验证的表单项名称
    // value: 验证规则数组
    name: [
        {
            // 验证器的触发规则
            trigger: 'blur',
            // 验证失败的提示信息
            message: '请输入姓名',
            // 是否必填
            required: true
        },
        {
            trigger: 'blur',
            message: '不能包含"共产党"',
            // 正则匹配
            pattern: /^((?!共产党).)*$/
        },
        {
            // 最小长度
            min: 2,
            // 最大长度
            // max: 5,
            message: '请输入至少2个字的姓名',
            trigger: 'blur'
        }
    ],
    hobbies: [
        {
            // 自定义验证器
            validator: (_rules, value) => {
                // _rules: 当前验证规则对象
                console.log('_rules: ', _rules)
                console.log('value: ', value)
                // value 要验证的当前值
                if (value.length === 0) return Promise.reject(new Error('请至少选择一个爱好'))

                // 验证通过时 请返回一个 resolve 的 promise 对象
                return Promise.resolve()
            }
        }
    ]
}
</script>

<template>
    <div>
        <a-card style="width: 500px">
            <a-form ref="form" :rules="rules" :label-col="{span: 4}" :model="formData">
                <a-form-item label="姓名" name="name">
                    <a-input :maxlength="10" v-model:value="formData.name"></a-input>
                </a-form-item>
                <a-form-item label="性别" name="sex">
                    <a-radio-group v-model:value="formData.sex">
                        <a-radio value="male">男</a-radio>
                        <a-radio value="female">女</a-radio>
                        <a-radio value="other">其他</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item label="爱好" name="hobbies">
                    <a-checkbox-group v-model:value="formData.hobbies">
                        <a-checkbox value="dlq">打篮球</a-checkbox>
                        <a-checkbox value="tzq">踢足球</a-checkbox>
                        <a-checkbox value="ymq">羽毛球</a-checkbox>
                    </a-checkbox-group>
                </a-form-item>
                <a-form-item label="年龄" name="age">
                    <a-input-number v-model:value="formData.age"></a-input-number>
                </a-form-item>
                <a-form-item>
                    <a-row>
                        <a-col :span="4"></a-col>
                        <a-col :flex="1">
                            <!--                            <a-button type="primary" html-type="submit">提交</a-button>-->
                            <a-button type="primary" @click="submit">提交</a-button>
                        </a-col>
                    </a-row>
                </a-form-item>
            </a-form>
        </a-card>
    </div>
</template>

<style scoped>

</style>
