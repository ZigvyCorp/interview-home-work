// controllers/postController.js
const PostModel = require("../models/post.model");

exports.getAllPosts = (req, res) => {
  const posts = PostModel.getAllPosts();
  res.json(posts);
};

exports.getPostById = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = PostModel.getPostById(postId);

  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
};

exports.addPost = (req, res) => {
  const newPost = req.body;
  PostModel.addPost(newPost);
  res.status(201).json(newPost);
};

exports.updatePost = (req, res) => {
  const updatedPost = req.body;
  PostModel.updatePost(updatedPost);
  res.json(updatedPost);
};

exports.deletePost = (req, res) => {
  const postId = parseInt(req.params.id);
  PostModel.deletePost(postId);
  res.status(204).send();
};
