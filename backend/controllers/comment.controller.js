const Comment = require('../models/Comment');
const { StatusCodes } = require('http-status-codes');

//[GET] /comments?PostId=idPost
const getCommentsByPostId = (req, res) => {
    const { PostId } = req.query;
    if (!PostId) {
        return res.status(400).json({
            status: 'error',
            message: "Can't create comment",
            data: {},
        });
    }
    Comment.find({ post: PostId })
        .populate('owner')
        .then((comments) => {
            res.status(200).json({
                status: 'success',
                message: 'Get comments in post successfully',
                data: comments,
            });
        });
};
//[POST] /comments/create
const createComment = (req, res) => {
    const { userId, postId, content } = req.body;
    if (!userId || !postId || !content) {
        return res.status(400).json({
            status: 'error',
            message: "Can't create comment",
            data: {},
        });
    }
    const newComment = new Comment({
        content,
        owner: userId,
        post: postId,
    });
    newComment
        .save()
        .then((comment) => {
            res.status(200).json({
                status: 'success',
                message: 'Create comment successfully',
                data: comment,
            });
        })
        .catch((err) => {
            res.status(400).json({
                status: 'error',
                message: err,
                data: {},
            });
        });
};
module.exports = {
    getCommentsByPostId,
    createComment,
};
