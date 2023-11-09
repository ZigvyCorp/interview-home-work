import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://localhost:8000",
});
axiosInstance.interceptors.request.use(
	async function (config) {
		// if (token && config.headers) {
		// 	config.headers.Authorization = `Bearer ${token}`;
		// }
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		return Promise.reject(error.response.data);
	}
);
export default axiosInstance;
