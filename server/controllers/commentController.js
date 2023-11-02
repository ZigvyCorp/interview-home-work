const asyncHandler = require("express-async-handler");
const Post = require("../models/postSchema");
const User = require("../models/userSchema");
const Comment = require("../models/commentSchema");

const createComment = asyncHandler(async (req, res) => {
  try {
    const postId = req.body.postId;
    const body = req.body.body;
    const name = req.body.name;
    const post = await Post.findOne({ id: postId });
    const userId = post.userId
 
    if (!post) {
      return res.status(404).json({ message: "post not found" });
    } else {
      const user = await User.findOne({ id: userId });
      const comment = {
        body: body,
        postId: post.id,
        name: name,
        email: user.email,
      };
      const newComment = await Comment.create(comment);
      res.status(200).json(newComment);
    }
  } catch (error) {
    throw new Error(error);
  }
});

const updateComment = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findById(id);
    if (post) {
      const updateComment = await Post.findOneAndUpdate(id, req.body, {
        new: true,
      });
      res.json(updateComment);
    }
  } catch (error) {
    throw new Error(error);
  }
});

const deleteComment = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findById(id);
    if (post) {
      const deleteComment = await Post.findOneAndDelete(id);
      res.json(deleteComment);
    }
  } catch (error) {
    throw new Error(error);
  }
});

const getComments = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findById(id);
    if (post) {
      const comments = await Post.find({ postId: id });
      res.json(comments);
    }
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createComment,
  updateComment,
  deleteComment,
  getComments,
};
