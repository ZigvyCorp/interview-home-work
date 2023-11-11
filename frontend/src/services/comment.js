import axiosInstance from './axiosInstance';

const commentService = {
    createComment: (formData) => {
        return axiosInstance.post('/comments', formData);
    },
    getCommentsByPostId: (postId) => {
        return axiosInstance.get(`/comments?postId=${postId}`);
    }
};

export default commentService;