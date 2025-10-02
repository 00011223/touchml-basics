<script setup>
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons-vue'
import {ref} from 'vue'

const selectedKeys = ref(['1'])
const collapsed = ref(false)

function toggle() {
    debugger
    collapsed.value = !collapsed.value
}

function onBreakPoint() {
    console.log('breakpoint')
}
</script>

<template>
    <div>
        <!-- 分割线
            orientation: 方向 文本放在分割线的哪个位置
         -->
        <a-divider>Text</a-divider>
        <a-divider orientation="left">Left Text</a-divider>
        <a-divider orientation="right">Right Text</a-divider>
        <a-divider style="border-width: 10px; border-color: #f00;" dashed>Text</a-divider>
        a
        <a-divider type="vertical"></a-divider>
        b
        <a-divider type="vertical"></a-divider>
        c


        <!-- 栅格布局 -->
        <a-row type="flex" justify="center" align="middle">
            <a-col :span="8">
                <div style="background-color: aqua; height: 50px;">1-1</div>
            </a-col>
            <a-col :span="8">
                <div style="background-color: aqua; height: 150px;">1-2</div>
            </a-col>
            <a-col :span="8">
                <div style="background-color: aqua; height: 100px;">1-3</div>
            </a-col>
        </a-row>

        <!-- 类似 flex-grow 单元格可以指定一行中占据多少份 -->
        <a-row>
            <a-col :flex="5">5/8</a-col>
            <a-col :flex="3">3/8</a-col>
        </a-row>

        <!-- gutter 设置单元格间距
            数组形式: 水平间距  竖直间距
            数组成员可以是一个对象，对象中包含响应式断点
         -->
        <!--        <a-row :gutter="[50, 25]" style="background-color: #f00;">-->
        <a-row :gutter="[{ xs: 8, sm: 16, md: 24, lg: 32 }, 25]" style="background-color: #f00;">
            <a-col :span="8">
                <div style="border: 3px solid #000; background-color: #00f">1-1</div>
            </a-col>
            <a-col :span="8">
                <div style="border: 3px solid #000; background-color: #00f">1-2</div>
            </a-col>
            <a-col :span="8">
                <div style="border: 3px solid #000; background-color: #00f">1-3</div>
            </a-col>
            <a-col :span="8">
                <div style="border: 3px solid #000; background-color: #00f">2-1</div>
            </a-col>
            <a-col :span="8">
                <div style="border: 3px solid #000; background-color: #00f">2-2</div>
            </a-col>
            <a-col :span="8">
                <div style="border: 3px solid #000; background-color: #00f">2-3</div>
            </a-col>
        </a-row>


        <!-- 偏移 -->
        <a-row style="background-color: #f00;">
            <a-col :span="8">
                <div style="border: 3px solid #000; background-color: #00f">1-1</div>
            </a-col>
            <a-col :span="8" :offset="8">
                <div style="border: 3px solid #000; background-color: #00f">1-2</div>
            </a-col>
            <a-col :span="12" :offset="12">
                <div style="border: 3px solid #000; background-color: #00f">2-1</div>
            </a-col>
        </a-row>

        <!-- 单元格的响应式 -->
        <a-row style="background-color: #f00;">
            <a-col :xs="{span: 12, offset: 12}" :md="{span: 8, offset: 0}">
                <div style="border: 3px solid #000; background-color: #00f">1-1</div>
            </a-col>
            <a-col :xs="{span: 12, offset: 12}" :md="{span: 8, offset: 0}">
                <div style="border: 3px solid #000; background-color: #00f">1-2</div>
            </a-col>
            <a-col :xs="{span: 12, offset: 12}" :md="{span: 8, offset: 0}">
                <div style="border: 3px solid #000; background-color: #00f">1-3</div>
            </a-col>
        </a-row>

        <!-- layout 整体布局 -->
        <a-layout>
            <a-layout-header>header</a-layout-header>
            <!--            <a-layout-content>content</a-layout-content>-->
            <a-layout-content>
                <!-- 嵌套layout -->
                <a-layout>
                    <a-layout-content>content</a-layout-content>
                    <a-layout-sider>sider</a-layout-sider>
                </a-layout>
            </a-layout-content>
            <a-layout-footer>footer</a-layout-footer>
        </a-layout>


        <a-layout>
            <!-- collapsed 折叠
             collapsible 开启可折叠
             -->
            <a-layout-sider breakpoint="md" @breakpoint="onBreakPoint" v-model:collapsed="collapsed" collapsible
                            :trigger="null">
                <!--                <template #trigger>
                                    <a-button type="primary" danger @click="toggle">开关</a-button>
                                </template>-->

                <!-- a-menu 菜单
                    selectedKeys 所选选项集合
                 -->
                <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
                    <a-menu-item key="1">
                        <user-outlined/>
                        <span>nav 1</span>
                    </a-menu-item>
                    <a-menu-item key="2">
                        <video-camera-outlined/>
                        <span>nav 2</span>
                    </a-menu-item>
                    <a-menu-item key="3">
                        <upload-outlined/>
                        <span>nav 3</span>
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout-content>
                <a-layout>
                    <a-layout-header>
                        <menu-unfold-outlined
                            v-if="collapsed"
                            class="trigger"
                            @click="() => (collapsed = !collapsed)"
                        />
                        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)"/>
                    </a-layout-header>
                    <a-layout-content>content</a-layout-content>
                    <a-layout-footer>footer</a-layout-footer>
                </a-layout>
            </a-layout-content>
        </a-layout>


        <!-- 间距
            size: 间距大小 可以是 small | middle | large | number
         -->
        <a-space :size="100" direction="vertical">
            <a-button type="primary">1</a-button>
            <a-button type="primary" danger>2</a-button>
            <a-button danger dashed>3</a-button>
        </a-space>
    </div>
</template>

<style scoped>
.trigger {
    font-size: 32px;
    color: #fff;
}
</style>
