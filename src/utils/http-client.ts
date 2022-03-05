import axios, { AxiosInstance, AxiosResponse, ResponseType } from "axios"
import qs from "qs"

const API_URL = ""

const axiosInstance = (
	contentType: string = "application/json",
	responseType: ResponseType = "json"
): AxiosInstance => {
	const instance = axios.create({
		baseURL: API_URL,
		headers: {
			"Content-Type": contentType,
			Authorization: ``,
		},
		responseType: responseType,
	})

	instance.interceptors.response.use(
		(response) => {
			return response
		},
		(error) => {
			return Promise.reject(error)
		}
	)
	return instance
}

export const getAsync = (url: string, params?: { [key: string]: any }): Promise<AxiosResponse> => {
	return axiosInstance("application/json", "json").get(url, {
		params: params,
		paramsSerializer: function (params) {
			return qs.stringify(params, { arrayFormat: "repeat" })
		},
	})
}

export const postAsync = (url: string, json?: object): Promise<AxiosResponse> => {
	return axiosInstance().post(url, json)
}

export const putAsync = (url: string, json?: object): Promise<AxiosResponse> => {
	return axiosInstance().put(url, json)
}

export const deleteAsync = (url: string): Promise<AxiosResponse> => {
	return axiosInstance().delete(url)
}
