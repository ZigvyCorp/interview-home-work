import axiosInstance from './axiosInstance';

const commentService = {
    createComment: (formData) => {
        axiosInstance.post('/comments', formData);
    },
    getCommentsByPostId: (postId) => {
        axiosInstance.get('/comment?postId=' + postId);
    }
};

export default commentService;