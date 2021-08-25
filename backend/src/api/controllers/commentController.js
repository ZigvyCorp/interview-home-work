import httpStatus from 'http-status-codes';
import { UNEXPECTED_ERROR } from '../helpers/constants/Errors';
import { CommentService } from '../services';

export default {
    getComments: async (req, res) => {
        let postId = req.query.postId;
        try {
            let comments = await CommentService.getComments(postId);
            res.status(httpStatus.OK).send(comments);
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(UNEXPECTED_ERROR);
        }
    },

    addComment: async (req, res) => {
        // TODO: Error no post, no user
        let data = req.body;
        try {
            let newComment = await CommentService.addComment(data);
            res.status(httpStatus.CREATED).send(newComment);
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(UNEXPECTED_ERROR);
        }
    }
};
