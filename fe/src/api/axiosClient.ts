import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from 'axios';

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
	headers: AxiosRequestHeaders;
}

const axiosClient = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
	withCredentials: true,
});


// Add a request interceptor
axiosClient.interceptors.request.use(
	async (config: AdaptAxiosRequestConfig) => {
		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	},
);

// Add a response interceptor
axiosClient.interceptors.response.use(
	(response: AxiosResponse) => {
		return response;
	},
	async (error: AxiosError<AdaptAxiosRequestConfig>) => {
		return Promise.reject(error);
	},
);

export default axiosClient;
