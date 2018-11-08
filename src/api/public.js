import axios from 'axios'
import {getStore} from '../utils/storage.js'

axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
axios.interceptors.request.use(
	config => {
		if (getStore('token') != null) {
			config.headers.Authorization = getStore('token');
		}
		config.headers['application-name'] = 'QTF';
		return config;
	},
	err => {
		return Promise.reject(err);
});
export default {
	fetchGet(url, params = {}) {
		return new Promise((resolve, reject) => {
			axios.get(url, params).then(res => {
				resolve(res.data)
			}).catch(error => {
				reject(error)
			})
		})
	},
	fetchPost(url, params = {}) {
		return new Promise((resolve, reject) => {
			axios.post(url, params).then(res => {
				resolve(res.data)
			}).catch(error => {
				reject(error)
			})
		})
	},
	fetchPut(url, params = {}) {
		return new Promise((resolve, reject) => {
			axios.put(url, params).then(res => {
				resolve(res.data);
			}).catch(error => {
				reject(error);
			});
		});
	},
	fetchDelete(url, params = {}) {
		return new Promise((resolve, reject) => {
			axios.delete(url, params).then(res => {
				resolve(res.data);
			}).catch(error => {
				reject(error);
			});
		});
	}
}
