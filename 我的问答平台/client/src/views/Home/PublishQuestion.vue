<script setup>
import {reactive, ref} from 'vue'
import {page as pg} from '@/api/questionTemplate'
import {close as cs, list, publish as pb} from '@/api/publish'
import {getQtAnswerPeople} from '@/api/qtAnswer'
import {message} from 'ant-design-vue'
import {useRouter} from 'vue-router'

const router = useRouter()

const activeKey = ref('my')
const tableData = ref([])
const columns = [
    {
        title: '序号',
        dataIndex: '_id',
        key: '_id'
    },
    {
        title: '问卷名',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '操作',
        key: 'op'
    },
]
const model = reactive({
    name: ''
})
const listData = ref([])
const qtaList = ref([
    {
        qtaId: '1',
        name: '问卷名1',
        nickname: '答题人1',
        score: 55,
        done: true
    },
    {
        qtaId: '2',
        name: '问卷名2',
        nickname: '答题人2',
        score: 0,
        done: false
    },
])

// 分页配置
const pagination = reactive({
    // 分页组件的位置
    position: ['bottomCenter'],
    current: 1, // 当前页
    defaultPageSize: 10, // 默认每页显示多少条数据
    pageSize: 10, // 当前每页显示多少条数据
    pageSizeOptions: ['10', '30', '50'], // 每页显示数据量的选项
    showQuickJumper: true, // 是否显示快捷跳转框
    showSizeChanger: true, // 是否显示每页显示数量的选项框
    total: tableData.value.length, // 总数据量
    showTotal: (total, range) => {
        // 显示总数据量
        return `总共 ${total} 条` // 返回的内容将显示到分页上
    }
})

// 对话框的开关
const visible = ref(false)

// 选项卡变化事件
async function onActiveKeyChange(key) {
    activeKey.value = key
    if (key === 'published') {
        // 查询已发布列表
        await getList()
    }
}

async function getList() {
    listData.value = await list()
}

async function page() {
    const data = await pg({name: model.name, page: pagination.current, pageSize: pagination.pageSize})
    tableData.value = data.data
    pagination.total = data.total
}

async function onTableChange(_pagination) {
    pagination.current = _pagination.current
    pagination.pageSize = _pagination.pageSize
    await page()
}

// 发布
async function publish(qtId) {
    await pb(qtId)
    message.success('发布成功')
}

// 关闭题目
async function close(id) {
    await cs(id)
    message.success('关闭成功')
    await getList()
}

// 查看
async function view(qtId) {
    qtaList.value = await getQtAnswerPeople(qtId)
    visible.value = true
}

page()
</script>

<template>
    <div class="animated-container">
        <a-card size="small">
            <a-tabs v-model:active-key="activeKey" @change="onActiveKeyChange">
                <a-tab-pane key="my" tab="我的问卷">
                    <a-form @finish="page" layout="inline" :model="model" style="margin-bottom: 16px;">
                        <a-form-item label="问卷名" name="name">
                            <a-input v-model:value.trim="model.name"></a-input>
                        </a-form-item>
                        <a-button html-type="submit">查询</a-button>
                    </a-form>
                    <a-table :data-source="tableData" :columns="columns"
                             :pagination="pagination" @change="onTableChange">
                        <template #bodyCell="{column, record}">
                            <template v-if="column.key === 'op'">
                                <a-space>
                                    <a-button @click="publish(record._id)">发布</a-button>
                                    <a-button type="primary" @click="view(record._id)">查看</a-button>
                                </a-space>
                            </template>
                        </template>
                    </a-table>
                </a-tab-pane>
                <a-tab-pane key="published" tab="已发布">
                    <a-list item-layout="horizontal" :data-source="listData">
                        <template #renderItem="{ item }">
                            <a-list-item>
                                <a-list-item-meta>
                                    <template #title>
                                        <div>问卷名</div>
                                    </template>
                                </a-list-item-meta>
                                <template #actions>
                                    <a-space>
                                        <a-button danger @click="close(item._id)">关闭</a-button>
                                        <a-button type="primary" @click="view(item.qtId)">查看</a-button>
                                    </a-space>
                                </template>

                                <div>
                                    {{ item.name }}
                                </div>
                            </a-list-item>
                        </template>
                    </a-list>
                </a-tab-pane>
            </a-tabs>
        </a-card>


        <!-- 显示答题人列表 -->
        <a-modal v-model:visible="visible" title="答题人列表">
            <a-list item-layout="horizontal" :data-source="qtaList">
                <template #renderItem="{ item }">
                    <a-list-item>
                        <a-list-item-meta>
                            <template #title>
                                <div>答题人: {{ item.nickname }}</div>
                            </template>
                        </a-list-item-meta>
                        <template #actions>
                            <a-button size="small" type="primary" @click="router.push(`/qtAnswer/${item.qtaId}`)">查看
                            </a-button>
                        </template>

                        <div>
                            <a-tag v-if="item.done" color="green">已交卷</a-tag>
                            <a-tag v-else color="red">未交卷</a-tag>
                            &nbsp;&nbsp;
                            分数: {{ item.score }}
                        </div>
                    </a-list-item>
                </template>
            </a-list>

            <template #footer>
                <a-button type="primary" @click="visible = false">确定</a-button>
            </template>
        </a-modal>
    </div>
</template>

<style scoped>
.ant-form-item {
    margin-right: 8px;
}
</style>
