<script setup>
import {ref} from 'vue'
import {list as ls, getQtAnswer} from '@/api/publish'
import {useRouter} from 'vue-router'

const router = useRouter()

const listData = ref([])
const loading = ref(false)

// 查询所有已发布题目的列表
async function list() {
    loading.value = true
    try {
        listData.value = await ls()
    } finally {
        loading.value = false
    }
}

// 开始答题
async function start(qtId) {
    // 领卷子
    const qtaId = await getQtAnswer(qtId)
    await router.push(`/qtAnswer/${qtaId}`)
}

list()
</script>

<template>
    <div class="animated-container">
        <a-card size="small">
            <a-button :loading="loading" @click="list">刷新</a-button>
        </a-card>
        <a-card size="small">
            <a-list item-layout="horizontal" :data-source="listData">
                <template #renderItem="{ item }">
                    <a-list-item>
                        <a-list-item-meta>
                            <template #title>
                                <div>问卷名: {{ item.name }}</div>
                            </template>
                        </a-list-item-meta>
                        <template #actions>
                            <a-space>
                                <a-button type="primary" @click="start(item.qtId)">开始答题</a-button>
                            </a-space>
                        </template>

                        <div>
                            出题人: {{ item.nickname }}
                        </div>
                    </a-list-item>
                </template>
            </a-list>
        </a-card>
    </div>
</template>

<style scoped>

</style>
