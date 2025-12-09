<script setup>
import {reactive, ref} from 'vue'
import {add as ad, page as pag, removeAll as ra, getById, update} from '@/api/questionTemplate'
import {message} from 'ant-design-vue'
import {useRouter} from 'vue-router'
import moment from 'moment'

const router = useRouter()

const form = ref(null)
const model = reactive({
    name: ''
})
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
        title: '创建时间',
        dataIndex: 'createdAt',
        key: 'createdAt'
    },
    {
        title: '更新时间',
        dataIndex: 'updatedAt',
        key: 'updatedAt'
    },
    {
        title: '操作',
        key: 'op'
    }
]
// 当前选项
const selection = ref([])
const rowSelection = {
    onChange(selectedKeys) {
        selection.value = selectedKeys
    }
}
const visible = ref(false)
const editModel = reactive({
    _id: null,
    name: ''
})
const rules = {
    name: [
        {
            trigger: 'blur',
            message: '请输入问卷名',
            required: true
        }
    ]
}
// 分页配置
const pagination = reactive({
    // 分页组件的位置
    position: ['bottomCenter'],
    current: 1, // 当前页
    defaultPageSize: 10, // 默认每页显示多少条数据
    pageSize: 10, // 当前每页显示多少条数据
    pageSizeOptions: ['3', '6', '10'], // 每页显示数据量的选项
    showQuickJumper: true, // 是否显示快捷跳转框
    showSizeChanger: true, // 是否显示每页显示数量的选项框
    total: tableData.value.length, // 总数据量
    showTotal: (total, range) => {
        // 显示总数据量
        return `总共 ${total} 条` // 返回的内容将显示到分页上
    }
})

// 批量删除
async function removeAll() {
    await ra(selection.value)
    message.success('删除成功')
    await page()
}

// 单个删除
async function remove(id) {
    await ra([id])
    message.success('删除成功')
    await page()
}

// 编辑
async function edit(id) {
    // 查询服务器对应id的数据
    const qt = await getById(id)
    // 回显数据
    editModel._id = id
    editModel.name = qt.name
    // 开启模态
    visible.value = true
}

// 添加
function add() {
    visible.value = true
}

async function confirm() {
    form.value.validate().then(async ({name}) => {
        if (!editModel._id) {
            // 添加数据
            await ad({name})
            message.success('添加成功')
        } else {
            // 修改数据
            await update({_id: editModel._id, name: editModel.name})
            message.success('修改成功')
        }
        cancel()
        await page()
    }).catch(reason => {
        console.error(reason)
    })
}

// 取消
function cancel() {
    // form.value.resetFields()
    editModel._id = null
    editModel.name = ''
    visible.value = false
}

// 分页查询
async function page() {
    const data = await pag({
        name: model.name,
        page: pagination.current,
        pageSize: pagination.pageSize
    })
    tableData.value = data.data
    pagination.total = data.total
}

// 分页变化时间
async function onTableChange(_pagination) {
    pagination.current = _pagination.current
    pagination.pageSize = _pagination.pageSize
    await page()
}

page()
</script>

<template>
    <div class="animated-container">
        <a-card size="small">
            <a-space>
                <a-form @finish="page" layout="inline" :model="model">
                    <a-form-item label="问卷名" name="name">
                        <a-input v-model:value.trim="model.name"></a-input>
                    </a-form-item>
                    <a-button html-type="submit">查询</a-button>
                </a-form>
                <a-button type="primary" @click="add">添加问卷</a-button>
                <a-popconfirm
                    title="确定删除吗?"
                    @confirm="removeAll"
                >
                    <a-button type="primary" danger>批量删除</a-button>
                </a-popconfirm>
            </a-space>
        </a-card>
        <a-table :data-source="tableData" :columns="columns" row-key="_id"
                 :row-selection="rowSelection" :pagination="pagination"
                 @change="onTableChange">
            <template #bodyCell="{column, record}">
                <template v-if="column.key === 'op'">
                    <a-space>
                        <a-button type="primary" @click="router.push(`/question/${record._id}`)">编辑题目</a-button>
                        <a-button @click="edit(record._id)">编辑</a-button>
                        <a-popconfirm title="确定删除吗?" @confirm="remove(record._id)">
                            <a-button type="primary" danger>删除</a-button>
                        </a-popconfirm>
                    </a-space>
                </template>
                <template v-else-if="column.key === 'createdAt'">
                    {{ moment(record.createdAt).format('YYYY/MM/DD HH:mm:ss') }}
                </template>
                <template v-else-if="column.key === 'updatedAt'">
                    {{ moment(record.updatedAt).format('YYYY/MM/DD HH:mm:ss') }}
                </template>
            </template>
        </a-table>

        <a-modal v-model:visible="visible" :title="editModel._id? '编辑问卷': '添加问卷'"
                 @ok="confirm" @cancel="cancel">
            <a-form :rules="rules" ref="form" :model="editModel" :label-col="{span: 4}">
                <a-form-item v-if="editModel._id" label="_id" name="_id">
                    <a-input readOnly v-model:value="editModel._id"></a-input>
                </a-form-item>
                <a-form-item label="问卷名" name="name">
                    <a-input v-model:value.trim="editModel.name"></a-input>
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>

<style scoped>
.ant-form-item {
    margin-right: 8px;
}
</style>
