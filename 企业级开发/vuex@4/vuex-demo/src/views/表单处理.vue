<template>
    <div>
        <h1>表单处理</h1>
        <div>
            <div>
                <label>姓名: <input type="text" v-model="name"></label>
            </div>
            <div>
                <label>性别:
                    <label><input v-model="sex" type="radio" value="male"> 男</label>
                    <label><input v-model="sex" type="radio" value="female"> 女</label>
                    <label><input v-model="sex" type="radio" value="other"> 其他</label>
                </label>
            </div>
            <div>
                <label>爱好:
                    <label><input v-model="hobbies" type="checkbox" value="dlq"> 打篮球</label>
                    <label><input v-model="hobbies" type="checkbox" value="tzq"> 踢足球</label>
                    <label><input v-model="hobbies" type="checkbox" value="ymq"> 羽毛球</label>
                </label>
            </div>
            <div>
                <label>班级:
                    <select v-model="clazz">
                        <option value="" disabled>请选择</option>
                        <option value="1">1班</option>
                        <option value="2">2班</option>
                        <option value="3">3班</option>
                    </select>
                </label>
            </div>
            <div>
                <label>简介: <textarea v-model="desc" rows="4"></textarea></label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        // 添加计算属性用于双向绑定
        name: {
            get() {
                // 读取状态
                return this.$store.state.name
            },
            set(value) {
                // 修改状态
                this.$store.dispatch('aName', value)
            }
        },
        sex: {
            get() {
                return this.$store.state.sex
            },
            set(value) {
                this.$store.dispatch('aSex', value)
            }
        },
        hobbies: {
            get() {
                return this.$store.state.hobbies
            },
            set(value) {
                this.$store.dispatch('aHobbies', value)
            }
        },
        clazz: {
            get() {
                return this.$store.state.clazz
            },
            set(value) {
                this.$store.dispatch('aClazz', value)
            }
        },
        desc: {
            get() {
                return this.$store.state.desc
            },
            set(value) {
                return this.$store.dispatch('aDesc', value)
            }
        }
    }
}
</script>

<style scoped>

</style>
