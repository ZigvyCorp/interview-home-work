import axios from 'axios'
import { apiURL } from '../utils/constant'

export const getPosts = async (skip = 0, limit = 10, title = '') => {
	const { data } = await axios.get(apiURL + `/posts?skip=${skip}&limit=${limit}&title=${title}` )
	return data
}

export const getPostById = async id => {
	const { data } = await axios.get(apiURL + `/posts/${id}`)
	return data
}

export const getPostComments = async id => {
	const { data } = await axios.get(apiURL + `/posts/${id}/comments`)
	return data
}
