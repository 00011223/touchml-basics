<script setup>

</script>

<template>
    <div>
        <!--
            type: 按钮类型，待选项:
                primary: 主要按钮
                dashed: 虚线框按钮
                text: 纯文本按钮
                link: 连接按钮

            danger: 危险标识，将按钮转换成红色
        -->
        <a-button type="primary" danger>Primary Button</a-button>
        <a-button :loading="true">Default Button</a-button>
        <a-button type="dashed">Dashed Button</a-button>
        <a-button type="text">Text Button</a-button>
        <a-button type="link">Link Button</a-button>
    </div>
</template>

<style scoped>

</style>
