const express = require('express');
const CommentsRouter = express.Router();
const CommentSchema = require('../../../database/models/comment');
const { isAuthenticated, isCommentAuthor } = require('../../../middlewares/middlewares');

// Create new comment
CommentsRouter.post('/', isAuthenticated, async (req, res, next) => {
    const postId = req.body.postId;
    const content = req.body.content;
    if (typeof postId === 'undefined') return res.status(400).send({ error: 'Post id is required to create a new comment' });
    try {
        await CommentSchema.create({ owner: req.headers.username, post: postId, content: content });
        return res.send({ msg: 'The comment is created successfully' });
    } catch (err) {
        next(err);
    }
});

// Get comments by post id
CommentsRouter.get('/:postid', async (req, res, next) => {
    const postId = req.params.postid;
    if (typeof postId === 'undefined') {
        return res.status(400).send({ error: 'Post id is required to fetch comments' });
    }

    try {
        // TODO: have not remove unused fields
        const comments = await CommentSchema.find({ post: postId });
        return res.send({ data: comments });
    } catch (err) {
        next(err);
    }
});

// TODO: have not tested
CommentsRouter.put('/:commentid', [isAuthenticated, isCommentAuthor], async (req, res, next) => {
    const commentId = req.params.commentid;

    try {
        const targetComment = CommentSchema.findById(commentId);
        if (typeof targetComment === 'undefined') return res.status(400).send({ error: 'The target comment id does not exist' });

        const content = req.body.content;
        if (typeof content !== 'undefined') {
            targetComment.content = content;
        }
        await targetComment.save();
        return res.send({ msg: 'The comment is updated successfully' });
    } catch (err) {
        next(err);
    }
});

// TODO: have not tested
CommentsRouter.delete('/:commentid', [isAuthenticated, isCommentAuthor], async (req, res, next) => {
    const commentId = req.params.commentid;

    try {
        const targetComment = CommentSchema.findById(commentId);
        if (typeof targetComment === 'undefined') return res.status(400).send({ error: 'The target comment id does not exist' });

        await CommentSchema.deleteOne({_id: commentId});
        return res.send({ msg: 'The comment is deleted successfully' });
    } catch (err) {
        next(err);
    }
});

module.exports = CommentsRouter;