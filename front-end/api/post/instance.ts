import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { config } from 'config/appConfig'

const apiConfig = {
	baseUrl: `${config.API_URL}/api`
}

export const authHeader_X = async () => {
	const accessToken = localStorage.getItem('accessToken')

	return accessToken ? { Authorization: 'Bearer ' + accessToken } : {}
}

const instance = axios.create({
	baseURL: apiConfig.baseUrl,
	headers: {
		Accept: 'application/json'
	},
	timeout: 30000 // 30 seconds
})

export const setToken = (token: string) => {
	instance.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

export default instance
