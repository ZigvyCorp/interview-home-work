const httpStatus = require('http-status');
const Comments = require('../models/commentModel');
const Posts = require('../models/postModel');

const commentController = {
    createComment: async (req, res) => {
        try {
            const { postId, content } = req.body;

            const newComment = new Comments({ postId, content, owner: req.user._id });

            await Posts.findOneAndUpdate({ _id: postId }, {
                $push: { comments: newComment._id }
            }, { new: true });

            await newComment.save();

            return res.status(httpStatus.CREATED).send({
                message: "Create comment success",
                newComment: {
                    ...newComment._doc,
                    owner: req.user
                }
            });

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
    },
    getCommentByPostId: async (req, res) => {
        try {
            const comments = await Comments.find({ postId: req.query.postId }).sort({ created_at: -1 }).populate('owner');

            return res.status(httpStatus.OK).send({
                message: "Get comments successfully!",
                postId: req.query.postId,
                comments
            });

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
    }
};

module.exports = commentController;