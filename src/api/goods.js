import http from './public'
import {GoodsAPI} from './domain'


// 支付
export const payMent = (params) => {
	return http.fetchPost('/member/payOrder', params)
}


// 商品详情
export const productDet = (params) => {
	return http.fetchGet(GoodsAPI + '/goods/get', params)
}

