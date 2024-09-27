const Comment = require("../models/Comment");
const User = require("../models/User");
const Post = require("../models/Post");

const commentController = {
  getAllComments: async (req, res) => {
    try {
      const comments = await Comment.find()
        .populate({
          path: "owner",
          select: "name",
          model: "User",
          foreignField: "id",
        })
        .populate({
          path: "post",
          select: "title",
          model: "Post",
          foreignField: "id",
        });
      res.json(comments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createComment: async (req, res) => {
    const { owner, post, content } = req.body;
    try {
      const user = await User.findOne({ id: Number(owner) });
      if (!user) return res.status(400).json({ message: "Invalid owner ID" });

      const postExists = await Post.findOne({ id: Number(post) });
      if (!postExists)
        return res.status(400).json({ message: "Invalid post ID" });

      const maxComment = await Comment.findOne().sort({ id: -1 });
      const comment = new Comment({
        id: maxComment ? maxComment.id + 1 : 1,
        owner,
        post,
        content,
      });
      const newComment = await comment.save();
      res.status(201).json(newComment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  getCommentById: async (req, res) => {
    try {
      const comment = await Comment.findOne({ id: Number(req.params.id) })
        .populate({
          path: "owner",
          select: "name",
          model: "User",
          foreignField: "id",
        })
        .populate({
          path: "post",
          select: "title",
          model: "Post",
          foreignField: "id",
        });
      if (!comment)
        return res.status(404).json({ message: "Comment not found" });
      res.json(comment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateComment: async (req, res) => {
    try {
      const { content } = req.body;
      const comment = await Comment.findOne({ id: Number(req.params.id) });
      if (!comment)
        return res.status(404).json({ message: "Comment not found" });

      if (content) comment.content = content;

      const updatedComment = await comment.save();
      res.json(updatedComment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  deleteComment: async (req, res) => {
    try {
      const comment = await Comment.findOneAndDelete({
        id: Number(req.params.id),
      });
      if (!comment)
        return res.status(404).json({ message: "Comment not found" });
      res.json({ message: "Comment deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = commentController;
