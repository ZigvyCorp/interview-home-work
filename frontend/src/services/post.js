import axiosInstance from "./axiosInstance";

const postService = {
    createPost: (formData) => {
        return axiosInstance.post('/posts', formData);
    },
    getPosts: ({ currentPage, perPage, ...restParams }) => {
        return axiosInstance.get('/posts', {
            params: {
                page: currentPage,
                perPage,
                ...restParams
            }
        });
    },
    getPost: (id) => {
        return axiosInstance.get('/posts/' + id);
    }
};

export default postService;