import { IComment } from "../types/api-response/comment";
import { IResposeSuccess } from "../types/common";
import axiosInstance from "./axios-instance";

const resource = "/comment";

const commentAPI = {
	getCommentsPost: async (postId: string) => {
		const response = await axiosInstance.get<IResposeSuccess<IComment[]>>(`${resource}?postId=${postId}`);

		return response.data.data;
	},
};

export default commentAPI;
