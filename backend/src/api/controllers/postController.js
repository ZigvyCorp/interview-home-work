import httpStatus from 'http-status-codes';
import { UNEXPECTED_ERROR } from '../helpers/constants/Errors';
import { CommentService, PostService } from '../services';
import HTTPError from '../helpers/class/httpErrors';

export default {
    getPosts: async (req, res) => {
        try {
            let posts = await PostService.getPosts();
            res.status(httpStatus.OK).send(posts);
        } catch (error) {
            if (error instanceof HTTPError) {
                res.status(error.status).send(error.data);
                return;
            }
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(UNEXPECTED_ERROR);
        }
    },

    addPost: async (req, res) => {
        // TODO: Error no user
        let data = req.body;
        try {
            let newPost = await PostService.addPost(data);
            res.status(httpStatus.CREATED).send(newPost);
        } catch (error) {
            if (error instanceof HTTPError) {
                res.status(error.status).send(error.data);
                return;
            }
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
            if (error instanceof HTTPError) {
                res.status(error.status).send(error.data);
                return;
            }
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
            if (error instanceof HTTPError) {
                res.status(error.status).send(error.data);
                return;
            }
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(UNEXPECTED_ERROR);
        }
    },

    deletePost: async (req, res) => {
        let postId = req.params.postId;
        try {
            await PostService.deletePost(postId);
            res.status(httpStatus.NO_CONTENT).send(null);
        } catch (error) {
            if (error instanceof HTTPError) {
                res.status(error.status).send(error.data);
                return;
            }
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(UNEXPECTED_ERROR);
        }
    },

    getCommentsByPost: async (req, res) => {
        let postId = req.params.postId;
        try {
            let comments = await CommentService.getComments(postId);
            res.status(httpStatus.OK).send(comments);
        } catch (error) {
            if (error instanceof HTTPError) {
                res.status(error.status).send(error.data);
                return;
            }
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(UNEXPECTED_ERROR);
        }

    },

    addCommentToPost: async (req, res) => {
        let data = req.body;
        let postId = req.params.postId;
        data.postId = postId;

        try {
            let newComment = await CommentService.addComment(data);
            res.status(httpStatus.CREATED).send(newComment);
        } catch (error) {
            if (error instanceof HTTPError) {
                res.status(error.status).send(error.data);
                return;
            }
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(UNEXPECTED_ERROR);
        }
    }
};
