import { ListPostPagination } from '@features/PostList/postListSlice';
import { axiosInstance } from '.';

export const getPostListAsync = (params: ListPostPagination) => {
	return axiosInstance.get('/posts', { params });
};

export const searchPostListAsync = (params: { page: number; q: string }) => {
	return axiosInstance.get('/posts', {
		params,
	});
};

export const getDetailPostAsync = (postId: string) => {
	return axiosInstance.get(`/posts/${postId}?_embed=comments`);
};
