<template>
    <div class="demo-container">
        <h2>父组件示例：三级联动演示</h2>
        <myLinkedSelect v-model="chosenSchool"
                                    :data="demoData" />
        <p>当前选中的学校：<strong>{{ chosenSchool || '未选择' }}</strong></p>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import myLinkedSelect from './myLinkedSelect.vue'

    // 用于展示的假数据
    const demoData = [
        {
            country: '台湾',
            cities: [
                { city: '台北', schools: ['台北一中', '建国中学', '中山女中'] },
                { city: '高雄', schools: ['高雄中学', '成功高中', '中正高中'] },
                { city: '台中', schools: ['台中一中', '女中', '文华高中'] }
            ]
        },
        {
            country: '日本',
            cities: [
                { city: '东京', schools: ['东京大学', '早稻田大学', '庆应义塾大学'] },
                { city: '大阪', schools: ['大阪大学', '关西大学'] }
            ]
        },
        {
            country: '美国',
            cities: [
                { city: '加州', schools: ['斯坦福大学', '加州大学伯克利分校'] },
                { city: '麻省', schools: ['麻省理工学院', '哈佛大学'] }
            ]
        }
    ]

    const chosenSchool = ref('')
</script>

<style scoped>
    .demo-container {
        padding: 16px;
    }

    h2 {
        margin-bottom: 12px;
    }
</style>
