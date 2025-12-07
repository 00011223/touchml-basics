<script setup>
import {ref} from 'vue'

const listData = ref([
    {
        name: 'name',
        creator: '张三的老师'
    },
    {
        name: 'name2',
        creator: '张三的老师2'
    },
])
</script>

<template>
    <div class="animated-container">
        <a-card size="small">
            <a-button>刷新</a-button>
        </a-card>
        <a-card size="small">
            <a-list item-layout="horizontal" :data-source="listData">
                <template #renderItem="{ item }">
                    <a-list-item>
                        <a-list-item-meta>
                            <template #title>
                                <div>问卷名: {{item.name}}</div>
                            </template>
                        </a-list-item-meta>
                        <template #actions>
                            <a-space>
                                <a-button type="primary">开始答题</a-button>
                            </a-space>
                        </template>

                        <div>
                            出题人: {{ item.creator }}
                        </div>
                    </a-list-item>
                </template>
            </a-list>
        </a-card>
    </div>
</template>

<style scoped>

</style>
