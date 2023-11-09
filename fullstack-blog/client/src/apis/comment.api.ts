import axiosService from "./axios.service";

const ENDPOINT = "comments";

export const commentApi = {
	getAllCommentByPostId: (id: string, page: number) =>
		axiosService.get(`/${ENDPOINT}/post/${id}?page=${page}`),

	getCommentById: (id: string) => axiosService.get(`/${ENDPOINT}/${id}`),

	createComment: (data: ICommentCreate) => axiosService.post(`/${ENDPOINT}/create-comment`, data),
};
