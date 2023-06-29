import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/Layout'

export const useCategoryStore = defineStore('category', () => {
    // 导航列表的数据管理
    // state 导航表数据
    const navData = ref([])

    // action 获取导航数据的方法
    const getCategory = async () => {
        let res = await getCategoryAPI();
        navData.value = [...res.result]
    }

    return {
        navData,
        getCategory
    }
})
