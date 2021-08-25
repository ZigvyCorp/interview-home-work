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

    addPost: (req, res) => {
        // TODO: Error no user
        let data = req.body;
        try {
            let newComment = PostService.addPost(data);
            res.status(httpStatus.CREATED).send(newComment);
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(UNEXPECTED_ERROR);
        }
    },

    getPost: async (req, res) => {
        let postId = req.params.postId;
        // TODO: Error not found
        try {
            let post = await PostService.getPost(postId);
            res.status(httpStatus.OK).send(post);
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(UNEXPECTED_ERROR);
        }
    },

    updatePost: async (req, res) => {
        let postId = req.params.postId;
        let data = req.body;
        // TODO: Error no Post
        try {
            let post = await PostService.updatePost(postId, data);
            res.status(httpStatus.OK).send(post);
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(UNEXPECTED_ERROR);
        }
    },

    // eslint-disable-next-line no-unused-vars
    deletePost: async (req, res) => { },
    // eslint-disable-next-line no-unused-vars
    getCommentsByPost: async (req, res) => { },
    // eslint-disable-next-line no-unused-vars
    addCommentToPost: async (req, res) => { }
};
