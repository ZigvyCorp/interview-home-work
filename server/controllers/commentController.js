const Comment = require('../models/comment');

exports.getCommentsByPostId = async (req, res) => {
    const { postId } = req.params;
    try {
        const comments = await Comment.find({ postId });
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Error get comments' });
    }
};

exports.createComment = async (req, res) => {
    const newComment = new Comment(req.body);
    try {
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (error) {
        res.status(400).json({ message: 'Error create comment', error });
    }
};
