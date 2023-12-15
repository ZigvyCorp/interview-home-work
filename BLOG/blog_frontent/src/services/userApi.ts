import { UserType } from "types/userType";
import axios from "axios";

const getUserByEmail = (body: string): Promise<UserType> => {
	const options = {
		method: 'GET',
		url: process.env.REACT_APP_API_LOGIN,
		params: { email: body }
	};
	return axios
		.request<UserType>(options)
		.then(function (response) { 
			console.log(response.data)
			return response.data;
		})
		.catch(function (error: any) {
			console.error(error);
			return Promise.reject(error);
		});
}

const userApi = {
	login: getUserByEmail,
}

export default userApi;