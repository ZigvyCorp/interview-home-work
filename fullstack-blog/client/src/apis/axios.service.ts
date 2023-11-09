import axios, { InternalAxiosRequestConfig } from "axios";

const axiosService = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API,
});

axiosService.interceptors.request.use(
	function (config: InternalAxiosRequestConfig<any>) {
		if (typeof window !== "undefined") {
			if (localStorage.getItem("token") && config.headers) {
				config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
			}
		}
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

axiosService.interceptors.response.use(
	function (response) {
		return response.data;
	},

	function (error) {
		if (error.response?.status === 401) {
			localStorage.removeItem("token");
		}
		return Promise.reject(error.response?.data);
	}
);

export default axiosService;
