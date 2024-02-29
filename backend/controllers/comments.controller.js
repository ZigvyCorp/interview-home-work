const Comment = require("../models/comment.model");
const Post = require("../models/post.model");
const User = require("../models/user.model");

// Create a new comment: POST /api/v1/comments
const createComment = async (req, res) => {
  try {
    const { owner, post, content } = req.body;

    const existOwner = await User.findById(owner);
    const existPost = await Post.findById(post);

    if (!existOwner || !existPost) {
      return res.status(404).json({ message: "Owner or post not found" });
    }

    const newComment = await Comment.create({
      owner,
      post,
      content,
    });

    res
      .status(201)
      .json({ message: "Comment created successfully", comment: newComment });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a comment by id: PATCH /api/v1/comments/:id
const updateComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const { content } = req.body;

    const existComment = await Comment.findById(commentId);

    if (!existComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    existComment.content = content;
    await existComment.save();

    res
      .status(200)
      .json({ message: "Comment updated successfully", comment: existComment });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a comment by id: DELETE /api/v1/comments/:id
const deleteComment = async (req, res) => {
  try {
    const commentId = req.params.id;

    const existComment = await Comment.findById(commentId);
    if (!existComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    await existComment.remove();

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createComment,
  updateComment,
  deleteComment,
};
