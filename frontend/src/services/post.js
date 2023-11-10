import axiosInstance from "./axiosInstance";

const postService = {
    createPost: (formData) => {
        return axiosInstance.post('/posts', formData);
    },
    getPosts: (currentPage, perPage) => {
        return axiosInstance.get('/posts', {
            params: {
                page: currentPage,
                perPage,
            }
        });
    },
    getPost: (id) => {
        return axiosInstance.get('/posts/' + id);
    }
};

export default postService;