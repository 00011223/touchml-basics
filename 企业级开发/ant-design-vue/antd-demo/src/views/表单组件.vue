<script setup>
// 知识点
// 使用a-form和a-form-item来创建表单
//      1. a-form 绑定 model 属性
//      2. a-form-item 设置 label 和 value
//      3. 使用a-button提交和重置表单

import {reactive} from 'vue'

const formData = reactive({
    name: '张三',
    age: 17,
    birthday: null,
    sex: 'female',
    hobbies: ['dlq', 'ymq'],
    clazz: '',
    desc: '传奇一生\n从出生到入土'
})

function submit() {
    console.log(formData)
    // birthday 使用的 datepicker 组件 默认的时间值用的是一个 moment 对象
    // moment对象使用toDate方法可以获得一个时间对象
    console.log(formData.birthday && formData.birthday.toDate())
}
</script>

<template>
    <div>
        <a-card style="width: 500px;">
            <!-- a-form 表单组件
                model: 表单数据对象
             -->
            <a-form :label-col="{span: 4}" :model="formData">
                <!-- a-form-item: 表单项
                    label 文本提示
                    value 数据模型model中的字段名
                 -->
                <a-form-item label="姓名" value="name">
                    <a-input type="text" v-model:value="formData.name"></a-input>
                </a-form-item>
                <a-form-item label="年龄" value="age">
                    <a-input-number v-model:value="formData.age"></a-input-number>
                </a-form-item>
                <a-form-item label="生日" value="birthday">
                    <a-date-picker v-model:value="formData.birthday"/>
                </a-form-item>
                <a-form-item label="性别" value="sex">
                    <a-radio-group v-model:value="formData.sex">
                        <a-radio value="male">男</a-radio>
                        <a-radio value="female">女</a-radio>
                        <a-radio value="other">其他</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item label="爱好" value="hobbies">
                    <a-checkbox-group v-model:value="formData.hobbies">
                        <a-checkbox value="dlq">打篮球</a-checkbox>
                        <a-checkbox value="tzq">踢足球</a-checkbox>
                        <a-checkbox value="ymq">羽毛球</a-checkbox>
                    </a-checkbox-group>
                </a-form-item>
                <a-form-item label="班级" value="clazz">
                    <a-select v-model:value="formData.clazz">
                        <a-select-option value="" disabled>请选择</a-select-option>
                        <a-select-option value="1">一班</a-select-option>
                        <a-select-option value="2">二班</a-select-option>
                        <a-select-option value="3">三班</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="简介" value="desc">
                    <a-textarea v-model:value="formData.desc" :rows="4"></a-textarea>
                </a-form-item>
                <a-form-item>
                    <a-row>
                        <a-col :span="4"></a-col>
                        <a-col :flex="1">
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
