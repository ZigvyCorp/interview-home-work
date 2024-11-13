// controllers/PostController.js
const Post = require("../models/PostModel");
const Comment = require("../models/CommentModel"); // Import mô hình Comment

// Tạo bài viết mới
exports.createPost = async (req, res) => {
  const { title, content, owner, tags } = req.body;

  try {
    const newPost = new Post({
      title,
      content,
      owner,
      tags,
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: "Failed to create post", error });
  }
};
// Lấy tất cả bài viết
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("owner").populate("comments");
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error retrieving posts:", error); // Log chi tiết lỗi
    res
      .status(500)
      .json({ message: "Failed to retrieve posts", error: error.message });
  }
};
// Lấy bài viết theo ID
exports.getPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id).populate("owner").populate("comments");
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve post", error });
  }
};
// Cập nhật bài viết theo ID
exports.updatePostById = async (req, res) => {
  const postId = req.params.id; // Lấy ID từ tham số route
  const { title, content, tags } = req.body; // Lấy dữ liệu từ req.body

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { title, content, tags },
      { new: true, runValidators: true } // new: true để trả về bài viết đã được cập nhật, runValidators: true để kiểm tra các ràng buộc
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: "Failed to update post", error });
  }
};
// Xóa bài viết theo ID
exports.deletePostById = async (req, res) => {
  const postId = req.params.id; // Lấy ID từ tham số route

  try {
    const deletedPost = await Post.findByIdAndDelete(postId); // Tìm và xóa bài viết theo ID

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete post", error });
  }
};
