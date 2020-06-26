import axiosService from './axiosService';
import {URL_BACK_END} from './../constants';
import qs from 'query-string';

const END_POINT = 'posts';

export const fetchPostAlls = (params={}) =>{
	let queryParams = '';
	if(Object.keys(params).length>0){
		queryParams = `?${qs.stringify(params)}`;
	}
	return axiosService.get(`${URL_BACK_END}/${END_POINT}${queryParams}`);
}

export const fetchPostUsers = () =>{
	return axiosService.get(`${URL_BACK_END}/${END_POINT}/user`);
}

export const addPosts = data =>{
	return axiosService.post(`${URL_BACK_END}/${END_POINT}/add`,data);
}

export const countPostAlls = () =>{
	return axiosService.get(`${URL_BACK_END}/${END_POINT}/count`);
}