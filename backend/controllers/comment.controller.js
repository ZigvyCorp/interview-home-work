const httpStatus = require('http-status');
const Comments = require('../models/commentModel');

const commentController = {
    createComment: async (req, res) => {
        try {
            const { postId, content } = req.body;

            const newComment = new Comments({ postId, content, owner: req.user._id });
            await newComment.save();

            return res.status(httpStatus.CREATED).send({
                message: "Create comment success",
                newComment
            });

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
    },
    getCommentByPostId: async (req, res) => {
        try {
            const comments = await Comments.find({ postId: req.query.postId });

            return res.status(httpStatus.OK).send({
                message: "Get comments successfully!",
                comments
            });

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
    }
};

module.exports = commentController;