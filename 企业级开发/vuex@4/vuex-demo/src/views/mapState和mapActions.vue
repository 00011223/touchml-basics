<template>
    <div>
        <div>
            <label>姓名: <input type="text" :value="nickname" @input="actionName($event.target.value)"></label>
        </div>
        <div>
            <label>性别:
                <label><input :checked="mySex === 'male'" type="radio" value="male"> 男</label>
                <label><input :checked="mySex === 'female'" type="radio" value="female"> 女</label>
                <label><input :checked="mySex === 'other'" type="radio" value="other"> 其他</label>
            </label>
        </div>
        <div>
            <label>年龄: <input type="number" :value="myAge"></label>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    data() {
        return {
            name: '老王',
            sex: 'sex',
            age: 30
        }
    },
    computed: {
        // 将store中的状态映射到computed中成为一个计算属性

        // mapState 参数有两种类型
        // 1. 使用一个数组为参数，每一个成员就是要映射的状态名称
        // ...mapState(['name', 'sex', 'age'])
        // 2. 使用对象作为参数，对象成员是一个计算函数
        ...mapState({
            // key: 计算属性的名称
            // value: 计算函数，参数为当前状态state，返回值为计算属性的结果
            nickname: state => state.name,
            mySex: state => state.sex,
            myAge: state => state.age
        })
    },
    methods: {
        // 将 store 中的 actions 映射到 methods 中

        // 参数类型有两种
        // 1. 数组类型，每个成员是要映射的 actions 名称
        // ...mapActions(['aName']),

        // 2. 对象
        ...mapActions({
            // key: actions 映射到 methods 中的名称
            // value: 对应的 action 名称
            actionName: 'aName'
        }),

        onNameInput(ev) {
            // 修改状态
            // this.$store.dispatch('aName', ev.target.value)

            // 由于 mapActions 进行了映射 所以此处可以访问 this.aName 来直接访问 action
            this.aName(ev.target.value)
        },

        aName() {
            console.log('this is aName')
        }
    }
}
</script>

<style scoped>

</style>
