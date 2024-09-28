const Comment = require('../models/Comment');

exports.getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find().populate('owner');
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi lấy danh sách bình luận', error });
    }
};

exports.createComment = async (req, res) => {
    try {
        const { owner, post, content } = req.body;
        const newComment = new Comment({ owner, post, content });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo bình luận mới', error });
    }
};

exports.updateComment = async (req, res) => {
    try {
        const commentId = req.params.id;
        const updatedComment = await Comment.findByIdAndUpdate(commentId, req.body, { new: true });
        if (!updatedComment) {
            return res.status(404).json({ message: 'Không tìm thấy bình luận' });
        }
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi cập nhật bình luận', error });
    }
};

exports.deleteComment = async (req, res) => {
    try {
        const commentId = req.params.id;
        const deletedComment = await Comment.findByIdAndDelete(commentId);
        if (!deletedComment) {
            return res.status(404).json({ message: 'Không tìm thấy bình luận' });
        }
        res.status(200).json({ message: 'Đã xóa bình luận thành công' });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi xóa bình luận', error });
    }
};
