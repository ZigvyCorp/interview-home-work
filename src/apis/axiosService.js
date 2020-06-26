import axios from 'axios';
import {URL_BACK_END} from './../constants';
class axiosService{
	constructor(){
		let token = JSON.parse(localStorage.getItem('token'));
		const instance = axios.create({
			baseURL: URL_BACK_END,
			headers:{
				Authorization: `Bearer ${token}`,
			},
		});
		instance.interceptors.response.use();
		this.instance = instance;
	}
	handleSuccess(response){
		return response;
	}	
	handleError(error){
		return Promise.reject(error);
	}
	get(url){
		return this.instance.get(url);
	}

	post(url,data){
		return this.instance.post(url,data);
	}

	put(url,data){
		return this.instance.put(url,data);
	}

	delete(url,id){
		return this.instance.delete(url,id);
	}

}

export default new axiosService();





























/*import axios from 'axios';

class AxiosService{
	constructor(){
		const instance = axios.create();
		instance.interceptors.response.use(this.handleSuccess,this.handleError);
		this.instance = instance;
	}
	handleSuccess(response){
		return response;
	}

	handleError(error){
		return Promise.reject(error);
	}

	get(url){
		return this.instance.get(url);
	}

	post(url,data){
		return this.instance.post(url,data);
	}

	put(url,data){
		return this.instance.put(url,data);
	}

	delete(url,id){
		return this.instance.delete(url,id);
	}
}

export default new AxiosService();*/