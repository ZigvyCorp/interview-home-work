import { objectToQueryString } from '../utils/FuntionHelpers';
import axiosClient from './axiosClient';
import {  PostParams } from '../models/PostModel';

const URL = '/post';

const postApi = {
	getPosts(params: PostParams) {
		const query = objectToQueryString(params);

		return axiosClient.get(URL + query);
	},
	getPostInfo(id: string) {
		return axiosClient.get(URL + '/' + id);
	},
};

export default postApi;
