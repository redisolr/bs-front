import http from './public'
import {OrderAPI} from './domain'

// 生成订单
export const submitOrder = (params) => {
	return http.fetchPost(OrderAPI + '/order/insert', params)
}
// 支付
export const payMent = (params) => {
	return http.fetchPost('/member/payOrder', params)
}
// 获取用户订单
export const orderList = (params) => {
	return http.fetchGet(OrderAPI + '/order/list', params)
}
// 获取单个订单详情
export const getOrderDet = (params) => {
	return http.fetchGet(OrderAPI + '/order/get/' + params)
}
// 取消订单
export const cancelOrder = (params) => {
	return http.fetchGet(OrderAPI + '/order/cancel', params)
}
// 删除订单
export const delOrder = (params) => {
	return http.fetchDelete(OrderAPI + '/order/delete', params)
}


