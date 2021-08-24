import httpStatus from 'http-status-codes';
import { UNEXPECTED_ERROR } from '../helpers/constants/Errors';
import { PostService } from '../services';

export default {
    getPosts: async (req, res) => {
        try {
            let posts = await PostService.getPosts();
            res.status(httpStatus.OK).send(posts);
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(UNEXPECTED_ERROR);
        }
    },

    addPost: async (req, res) => {
        // TODO: Error no user
        let data = req.body;
        try {
            let newComment = await PostService.addPost(data);
            res.status(httpStatus.CREATED).send(newComment);
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(UNEXPECTED_ERROR);
        }
    },

    getPost: async (req, res) => { },

    updatePost: async (req, res) => { },

    deletePost: async (req, res) => { },

    getCommentsByPost: async (req, res) => { },

    addCommentToPost: async (req, res) => { }
};
