import axiosService from './axiosService';
import {URL_BACK_END} from './../constants';

const END_POINT = 'users';

export const addUsers = data =>{
	return axiosService.post(`${URL_BACK_END}/${END_POINT}/register`,data);
}

export const loginUsers = data =>{
	return axiosService.post(`${URL_BACK_END}/${END_POINT}/login`,data);
}

export const fetchUsers = () =>{
	return axiosService.get(`${URL_BACK_END}/${END_POINT}`);
}