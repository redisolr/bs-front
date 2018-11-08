import http from './public'
import {SearchAPI} from './domain'
// 商品查询
export const getSearch = (params) => {
  return http.fetchGet(SearchAPI + '/es/goods/search', params)
}
