<template>
    <el-row :gutter="16">
        <!-- 第一列：国家清单 -->
        <el-col :span="4">
            <el-card class="list-card">
                <el-menu :default-active="selectedCountry"
                         @select="onCountrySelect"
                         class="menu-list">
                    <el-menu-item v-for="item in countries"
                                  :key="item"
                                  :index="item">
                        {{ item }}
                    </el-menu-item>
                </el-menu>
            </el-card>
        </el-col>

        <!-- 第二列：城市清单 -->
        <el-col v-if="selectedCountry" :span="4">
            <el-card class="list-card">
                <el-menu :default-active="selectedCity"
                         @select="onCitySelect"
                         class="menu-list">
                    <el-menu-item v-for="city in cities"
                                  :key="city"
                                  :index="city">
                        {{ city }}
                    </el-menu-item>
                </el-menu>
            </el-card>
        </el-col>

        <!-- 第三列：学校清单 + 搜索 -->
        <el-col v-if="selectedCity" :span="4">
            <el-card class="list-card">
                <el-input v-model="schoolFilter"
                          placeholder="Search"
                          clearable
                          size="small"
                          class="search-box">
                    <template #suffix>
                        <el-icon><i class="el-icon-search" /></el-icon>
                    </template>
                </el-input>

                <el-menu :default-active="selectedSchool"
                         @select="onSchoolSelect"
                         class="menu-list with-search">
                    <el-menu-item v-for="school in filteredSchools"
                                  :key="school"
                                  :index="school">
                        {{ school }}
                    </el-menu-item>
                    <el-empty v-if="filteredSchools.length === 0"
                              description="无匹配项" />
                </el-menu>
            </el-card>
        </el-col>
    </el-row>
</template>

<script setup>
    import { ref, computed } from 'vue'
    import { ElRow, ElCol, ElCard, ElMenu, ElMenuItem, ElInput, ElEmpty, ElIcon } from 'element-plus'
    import { Search } from '@element-plus/icons-vue'

    const props = defineProps({
        /**
         * 接收父组件传入的三级联动数据
         * 格式：
         * [
         *   { country: string, cities: [ { city: string, schools: string[] } ] }
         * ]
         */
        data: {
            type: Array,
            required: true
        }
    })
    const emit = defineEmits(['update:modelValue'])

    const selectedCountry = ref('')
    const selectedCity = ref('')
    const selectedSchool = ref(props.modelValue || '')
    const schoolFilter = ref('')

    // 计算可选国家列表
    const countries = computed(() => props.data.map(d => d.country))

    // 根据选中的国家，计算城市列表
    const cities = computed(() => {
        const entry = props.data.find(d => d.country === selectedCountry.value)
        return entry ? entry.cities.map(c => c.city) : []
    })

    // 根据选中的城市，拿到原始学校列表
    const schools = computed(() => {
        const countryEntry = props.data.find(d => d.country === selectedCountry.value)
        const cityEntry = countryEntry?.cities.find(c => c.city === selectedCity.value)
        return cityEntry ? cityEntry.schools : []
    })

    // 实时过滤
    const filteredSchools = computed(() =>
        schools.value.filter(s => s.toLowerCase().includes(schoolFilter.value.trim().toLowerCase()))
    )

    function onCountrySelect(country) {
        selectedCountry.value = country
        selectedCity.value = ''
        selectedSchool.value = ''
        schoolFilter.value = ''
        emit('update:modelValue', '')
    }

    function onCitySelect(city) {
        selectedCity.value = city
        selectedSchool.value = ''
        schoolFilter.value = ''
        emit('update:modelValue', '')
    }

    function onSchoolSelect(school) {
        selectedSchool.value = school
        emit('update:modelValue', school)
    }
</script>

<style scoped>
    .list-card {
        width: 100%;
        padding: 8px;
    }

    .menu-list {
        max-height: 300px;
        overflow-y: auto;
    }

    .search-box {
        margin-bottom: 8px;
    }
</style>
