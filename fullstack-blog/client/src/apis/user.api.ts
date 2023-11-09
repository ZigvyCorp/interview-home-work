import axiosService from "./axios.service";

const ENDPOINT = "users";

export const userApi = {
	getAllUsers: () => axiosService.get(`/${ENDPOINT}/get-all-user`),

	getUserById: (id: string) => axiosService.get(`/${ENDPOINT}/${id}`),
};
