import axiosInstance from "./axiosInstance";

const postService = {
    createPost: (formData) => {
        return axiosInstance.post('/posts', formData);
    },
    getPosts: () => {
        return axiosInstance.get('/posts', {
            params: {

            }
        });
    },
    getPost: (id) => {
        return axiosInstance.get('/posts/' + id);
    }
};

export default postService;