/*
 * @Date: 27/03/2021 17.05.43 +0800
 * @Author: KnowsCount
 * @LastEditTime: 27/03/2021 17.33.54 +0800
 * @FilePath: /md/src/api/fetch.js
 */
import axios from "axios";

// 创建axios实例
const service = axios.create({
	baseURL: "",
	timeout: 10 * 1000, // 请求超时时间
});

service.interceptors.request.use(
	(config) => {
		if (/^(post)|(put)|(delete)$/i.test(config.method)) {
			if (config.data && config.data.upload) {
				config.headers["Content-Type"] = "multipart/form-data";
			}
		}
		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);

service.interceptors.response.use(
	(res) => {
		return res.data ? res.data : Promise.reject(res);
	},
	(error) => Promise.reject(error)
);

export default service;
