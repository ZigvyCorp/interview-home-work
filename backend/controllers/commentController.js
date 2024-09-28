const Comment = require('../models/commentModel');
const User = require('../models/userModel');

exports.getComments = async (req, res) => {
    try {
        const comments = await Comment.find({});
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Server error: ' + error });
    }
};

exports.getCommentsByPostId = async (req, res) => {
    try {
        const comments = await Comment.find({ post: req.params.postId }).sort({ created_at: -1 });
        const userIds = comments.map(comment => comment.owner);
        const users = await User.find({ id: { $in: userIds } }, 'id name');

        const userMap = {};
        users.forEach(user => {
            userMap[user.id] = user.name;
        });

        const commentsWithUserNames = comments.map(comment => ({
            ...comment.toObject(),
            ownerName: userMap[comment.owner] || 'Unknown'
        }));

        res.json(commentsWithUserNames);
    } catch (error) {
        res.status(500).json({ message: 'Server error: ' + error });
    }
};


exports.createComment = async (req, res) => {
    const { owner, post, content } = req.body;

    const comment = new Comment({
        owner,
        post,
        content,
        created_at: Date.now()
    });

    try {
        const savedComment = await comment.save();
        res.status(201).json(savedComment);
    } catch (error) {
        res.status(500).json({ message: 'Server error: ' + error });
    }
};

exports.deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);

        if (comment) {
            await Comment.deleteOne({ _id: req.params.id });
            res.json({ message: 'Comment deleted' });
        } else {
            res.status(404).json({ message: 'Comment not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error: ' + error });
    }
};
