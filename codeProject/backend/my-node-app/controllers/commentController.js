const Comment = require("../models/Comment");

const getCommentsByPostId = (req, res) => {
  const post = req.params.postId; // Giá trị postId có thể được truyền vào từ yêu cầu hoặc tham số khác

  Comment.find({ post })
    .then((comments) => {
      // Gửi danh sách bình luận về client
      res.json({ comments: comments });
    })
    .catch((error) => {
      // Xử lý lỗi
      res.status(500).json({ error: "Internal server error123" });
    });
};

// Hàm để tạo mới một Comment
const createComment = async (req, res) => {
  try {
    const comment = new Comment(req.body);
    const newComment = await comment.save();
    res.json(newComment);
  } catch (error) {
    res.status(500).json({ error: "Failed to create comment" });
  }
};

// Hàm để lấy thông tin một Comment theo ID
const getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    res.json(comment);
  } catch (error) {
    res.status(404).json({ error: "Comment not found" });
  }
};

// Hàm để cập nhật một Comment theo ID
const updateCommentById = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(comment);
  } catch (error) {
    res.status(404).json({ error: "Comment not found" });
  }
};

// Hàm để xóa một Comment theo ID
const deleteCommentById = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    res.json(comment);
  } catch (error) {
    res.status(404).json({ error: "Comment not found" });
  }
};

module.exports = {
  getCommentsByPostId,
  createComment,
  getCommentById,
  updateCommentById,
  deleteCommentById,
};
