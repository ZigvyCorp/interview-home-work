import axiosService from "./axios.service";

const ENDPOINT = "users";

export const userApi = {
	signUp: (data: ISignUp) => {
		return axiosService.post(`/${ENDPOINT}/sign-up`, data);
	},

	signIn: (data: ISignIn) => {
		return axiosService.post(`/${ENDPOINT}/sign-in`, data);
	},

	getProfile: () => axiosService.get(`/${ENDPOINT}/me`),

	getAllUsers: () => axiosService.get(`/${ENDPOINT}/get-all-user`),

	getUserById: (id: string) => axiosService.get(`/${ENDPOINT}/${id}`),
};
