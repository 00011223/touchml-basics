<script setup>
import {useRoute, useRouter} from 'vue-router'
import {computed, ref} from 'vue'
import {getById, submit as sub} from '@/api/qtAnswer'
import {message} from 'ant-design-vue'

const route = useRoute()
const router = useRouter()
// 获取卷子id
const id = route.params.id
// 卷子数据
const qta = ref({
    _id: '1',
    name: 'wj222',
    nickname: '张三222',
    done: true,
    score: 60,
    questions: [
        {
            question: 'lgsk爱上了更加了解',
            score: 15,
            type: 'multiple',
            options: ['a', 'b', 'c']
        },
        {
            question: '会发个链接',
            score: 20,
            type: 'single',
            options: ['x', 'y', 'z']
        },
    ],
    answers: [[0, 1], 2]
})

// 按题目新增双向绑定用的答案
if (qta.value.answers.length === 0)
    qta.value.questions.forEach(q => {
        qta.value.answers.push(q.type === 'single' ? null : [])
    })

// 卷子总分
const total = computed(() => qta.value.questions.map(q => q.score).reduce((p, n) => p + n))

// 交卷
async function submit() {
    console.log(qta.value.answers)
    await sub({qtaId: id, answers: qta.value.answers})
    message.success('提交成功')
    await query()
}

// 查询卷子信息
async function query() {
    qta.value = await getById(id)
}

query()
</script>

<template>
    <div class="animated-container">
        <a-card size="small">
            <a-descriptions :title="`问卷名: ${qta.name}`">
                <a-descriptions-item label="答题人">{{ qta.nickname }}</a-descriptions-item>
                <a-descriptions-item label="总分">{{ total }}</a-descriptions-item>
                <a-descriptions-item label="是否交卷">
                    <a-tag v-if="qta.done" color="green">已交卷</a-tag>
                    <a-tag v-else color="red">未交卷</a-tag>
                </a-descriptions-item>
                <a-descriptions-item v-if="qta.done" label="得分">{{ qta.score }}</a-descriptions-item>
                <template #extra>
                    <a-space>
                        <a-button :disabled="qta.done" size="small" type="primary" @click="submit">交卷</a-button>
                        <a-button size="small" @click="router.back()">返回</a-button>
                    </a-space>
                </template>
            </a-descriptions>
        </a-card>
        <a-space direction="vertical" style="width: 100%;">
            <a-card size="small" v-for="(q, i) in qta.questions" :key="i">
                <a-space direction="vertical">
                    <div class="title" :style="{color: q.wong? '#f00': '#000'}">{{ i }}.
                        {{ q.type === 'single' ? '单选题' : '多选题' }} {{
                            q.question
                        }}（{{ q.score }}分）
                    </div>
                    <div v-if="q.wong" style="color: #f00">
                        {{ q.msg }} 正确答案: {{ q.type === 'single' ? q.right : q.rights }}
                    </div>
                    <div>
                        <a-radio-group :disabled="qta.done" v-if="q.type === 'single'" v-model:value="qta.answers[i]">
                            <a-radio v-for="(item, ii) in q.options" :value="ii">{{ item }}</a-radio>
                        </a-radio-group>
                        <a-checkbox-group :disabled="qta.done" v-else v-model:value="qta.answers[i]">
                            <a-checkbox v-for="(item, ii) in q.options" :value="ii">{{ item }}</a-checkbox>
                        </a-checkbox-group>
                    </div>
                </a-space>
            </a-card>
        </a-space>
    </div>
</template>

<style scoped>
.title {
    font-weight: bolder;
}

.animated-container {
    height: 100vh;
    background-color: #f0f2f5;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>
