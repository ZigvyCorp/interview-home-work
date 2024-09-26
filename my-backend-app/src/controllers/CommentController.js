const Comment = require("../models/CommentModel");
const Post = require("../models/PostModel");

exports.addComment = async (req, res) => {
  const { postId, content, owner } = req.body; // Lấy thông tin từ request body

  try {
    // 1. Tạo bình luận với trường post được cung cấp
    const newComment = new Comment({
      content,
      owner, // ID của người dùng bình luận
      post: postId, // ID của bài viết mà bình luận thuộc về
    });

    // 2. Lưu bình luận
    await newComment.save();

    // 3. Cập nhật bài viết để thêm ID của bình luận vào mảng comments
    const post = await Post.findById(postId);
    post.comments.push(newComment._id); // Thêm ID của bình luận vào mảng
    await post.save(); // Lưu thay đổi vào bài viết

    res.status(201).json(newComment); // Trả về bình luận mới
  } catch (error) {
    console.error(error); // Ghi lại lỗi để dễ dàng kiểm tra
    res.status(500).json({ message: "Failed to add comment", error });
  }
};

exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate("owner post");
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve comments", error });
  }
};

exports.getCommentById = async (req, res) => {
  const { id } = req.params;

  try {
    const comment = await Comment.findById(id).populate("owner post");
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve comment", error });
  }
};

exports.updateComment = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      id,
      { content },
      { new: true }
    );
    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ message: "Failed to update comment", error });
  }
};

exports.deleteComment = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedComment = await Comment.findByIdAndDelete(id);
    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete comment", error });
  }
};
