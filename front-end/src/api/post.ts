import axiosClient from './axios-client';
import { ArrayOfPostsSchema, PostSchema } from './zod-schema';

export const postApi = {
    getAll: async (page: number, keyword: string) => {
        try {
            const res = await axiosClient.get(`/posts?page=${page}&keyword=${keyword}`);
            const posts = ArrayOfPostsSchema.parse(res.data.posts);
            return posts;
        } catch (error: any) {
            console.error('Error:', error.message);
        }
    },
    getOne: async (id: number) => {
        const res = await axiosClient.get(`/posts/${id}`);
        const post = PostSchema.parse(res.data.post);
        return post;
    }
};
