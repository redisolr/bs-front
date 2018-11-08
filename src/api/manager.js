import http from './public'
import {ManagerAPI} from './domain'

// 首页接口
export const productHome = (params) => {
	return http.fetchGet(ManagerAPI + '/home/home', params)
}
