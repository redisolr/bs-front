import http from './public';
import {UserAPI} from './domain';

// 登陆
export const userLogin = (params) => {
	return http.fetchPost(UserAPI + '/user/login', params)
}
// 用户信息
export const userInfo = (params) => {
	return http.fetchGet(UserAPI + '/user/checkLogin', params)
}
// 注册账号
export const register = (params) => {
	return http.fetchPost(UserAPI + '/user/register', params)
}

// 极验验证码
export const geetest = (params) => {
	return http.fetchGet(UserAPI + '/user/geetestInit?t=' + (new Date()).getTime(), params)
}



// 获取购物车列表
export const getCartList = (params) => {
	return http.fetchGet(UserAPI + '/cart/get', params)
}
// 加入购物车
export const addCart = (params) => {
	return http.fetchPost(UserAPI + '/cart/add', params)
}
// 删除购物车勾选商品
export const delCartChecked = (params) => {
	return http.fetchDelete(UserAPI + '/cart/deleteChecked', params)
}
// 编辑购物车
export const cartEdit = (params) => {
	return http.fetchPut(UserAPI + '/cart/updatePurchaseNumber', params)
}
// 全选
export const editCheckAll = (params) => {
	return http.fetchPut(UserAPI + '/cart/checkedAll', params)
}
// 删除购物车单挑记录
export const cartDel = (params) => {
	return http.fetchDelete(UserAPI + '/cart/delete', params)
}


// 获取用户地址
export const addressList = (params) => {
	return http.fetchGet(UserAPI + '/receivingAddress/findAll', params)
}
// 通过id获取地址
export const getAddress = (params) => {
	return http.fetchGet(UserAPI + '/receivingAddress/findById/'+params)
}
// 修改收货地址
export const addressUpdate = (params) => {
	return http.fetchPut(UserAPI + '/receivingAddress/update', params)
}
// 添加收货地址
export const addressAdd = (params) => {
	return http.fetchPost(UserAPI + '/receivingAddress/insert', params)
}
// 删除收货地址
export const addressDel = (params) => {
	return http.fetchDelete(UserAPI + '/receivingAddress/delete', params)
}


// 上传图片
export const upload = (params) => {
	return http.fetchPost('/member/imgaeUpload', params)
}
// 修改头像
export const updateheadimage = (params) => {
	return http.fetchPost('/member/updateheadimage', params)
}

