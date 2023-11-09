import { IPost } from "../types/api-response/post";
import { IPagination, IResposeSuccess } from "../types/common";
import axiosInstance from "./axios-instance";

const resource = "/post";

const postAPI = {
	getMany: async (page: number, limit: number, search?: string) => {
		let path = `${resource}?page=${page}&limit=${limit}`;

		if (search) {
			path += `&search=${search}`;
		}

		const response = await axiosInstance.get<IResposeSuccess<IPagination<IPost>>>(path);

		return response.data.data;
	},
};

export default postAPI;
