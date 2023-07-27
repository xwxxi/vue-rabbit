/**
 * @description: 获取banner图
 */
import httpInstance from '@/utils/http'
export function getBannerAPI() {
    return httpInstance({
        url: 'home/banner'
    })
}

export function findNewAPI(){
    return httpInstance({
        url: '/home/new'
    })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export function findHotAPI(){
    return httpInstance({
        url:'/home/hot'
    })
}
