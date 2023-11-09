import axiosService from "./axios.service";

const ENDPOINT = "posts";

export const postApi = {
	getAllPosts: (page: number, title = "") => {
		const queryParams = title ? `&title=${title}` : "";
		return axiosService.get(`/${ENDPOINT}/get-all-post?page=${page}${queryParams}`);
	},

	getPostById: (id: string) => axiosService.get(`/${ENDPOINT}/${id}`),

	createPost: (data: IPostCreate) => axiosService.post(`/${ENDPOINT}/create-post`, data),
};
