<script setup>
import {useRoute, useRouter} from 'vue-router'
import {onMounted, ref} from 'vue'
import {getById, saveQuestions} from '@/api/questionTemplate'
import {message} from 'ant-design-vue'

const route = useRoute()
const router = useRouter()
const name = ref('')
const questions = ref([])

onMounted(async () => {
    const doc = await getById(route.params.id)
    name.value = doc.name
    // 回显题目
    questions.value = doc.questions
})

// 取消
function cancel() {
    router.back()
}

// 添加问题
function addQuestion() {
    questions.value.push({
        question: '',
        score: 0,
        type: 'single',
        options: [],
        rights: [],
        right: null
    })
}

// 删除题目
function deleteQuestion(index) {
    questions.value.splice(index, 1)
}

// 添加选项
function addOption(index) {
    questions.value[index].options.push('')
}

// 删除题目选项
function deleteOption(questionIndex, optionIndex) {
    questions.value[questionIndex].options.splice(optionIndex, 1)
}

// 保存
async function save() {
    await saveQuestions({qtId: route.params.id, questions: questions.value})
    router.back()
    message.success('保存成功')
}
</script>

<template>
    <div>
        <a-card size="small" style="position: sticky; top: 0; left: 0; z-index: 999;">
            <a-descriptions title="编辑问题">
                <a-descriptions-item label="id">{{ route.params.id }}</a-descriptions-item>
                <a-descriptions-item label="问卷名">{{ name }}</a-descriptions-item>
                <template #extra>
                    <a-space>
                        <a-button size="small" type="primary" @click="addQuestion">添加题目</a-button>
                        <a-button size="small" @click="cancel">取消</a-button>
                        <a-button size="small" type="primary" @click="save">保存</a-button>
                    </a-space>
                </template>
            </a-descriptions>
        </a-card>
        <!-- 题目列表 -->
        <a-space direction="vertical" style="width: 100%; position: relative; z-index: 0;">
            <a-card v-for="(q, index) in questions" size="small" :title="`题目${index}`" :key="index">
                <template #extra>
                    <a-button size="small" type="primary" danger @click="deleteQuestion(index)">删除</a-button>
                </template>
                <a-form :model="q">
                    <a-form-item label="题目" name="question">
                        <a-input v-model:value.trim="q.question"></a-input>
                    </a-form-item>
                    <a-form-item label="分数" name="score">
                        <a-input-number v-model:value.number="q.score"></a-input-number>
                    </a-form-item>
                    <a-form-item label="类型" name="type">
                        <a-radio-group v-model:value="q.type">
                            <a-radio value="single">单选题</a-radio>
                            <a-radio value="multiple">多选题</a-radio>
                        </a-radio-group>
                    </a-form-item>
                    <a-form-item label="选项">
                        <a-space direction="vertical">
                            <div>
                                <a-button type="primary" size="small" @click="addOption(index)">添加选项</a-button>
                            </div>
                            <div v-for="(item, i) in q.options" :key="i">
                                <a-space>
                                    <a-input v-model:value="q.options[i]" class="item" size="small"></a-input>
                                    <a-button type="primary" danger size="small" @click="deleteOption(index, i)">删除
                                    </a-button>
                                </a-space>
                            </div>
                        </a-space>
                    </a-form-item>
                    <a-form-item label="答案" name="right">
                        <a-radio-group v-if="q.type === 'single'" v-model:value="q.right">
                            <a-radio v-for="(item, i) in q.options" :key="i" :value="i">{{ item }}</a-radio>
                        </a-radio-group>
                        <a-checkbox-group v-else v-model:value="q.rights">
                            <a-checkbox v-for="(item, i) in q.options"
                                        :key="i" :value="i">
                                {{ item }}
                            </a-checkbox>
                        </a-checkbox-group>
                    </a-form-item>
                </a-form>
            </a-card>
        </a-space>
    </div>
</template>

<style scoped>
.item {
    width: 200px;
}
</style>
