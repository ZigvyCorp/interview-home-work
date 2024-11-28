const Post = require("../models/Post");
const User = require("../models/User");

const postController = {
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.find().populate({
        path: "owner",
        select: "name",
        model: "User",
        foreignField: "id",
      });
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createPost: async (req, res) => {
    const { owner, title, content, tags } = req.body;
    try {
      const user = await User.findOne({ id: Number(req.params.id) });

      if (!user) return res.status(400).json({ message: "Invalid owner ID" });
      const maxPost = await Post.findOne().sort({ id: -1 });
      const post = new Post({
        id: maxPost ? maxPost.id + 1 : 1,
        owner,
        title,
        content,
        tags,
      });
      const newPost = await post.save();
      res.status(201).json(newPost);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  getPostById: async (req, res) => {
    try {
      const post = await Post.findOne({ id: Number(req.params.id) }).populate({
        path: "owner",
        select: "name",
        model: "User",
        foreignField: "id",
      });
      if (!post) return res.status(404).json({ message: "Post not found" });
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updatePost: async (req, res) => {
    try {
      const { title, content, tags } = req.body;
      const post = await Post.findOne({ id: Number(req.params.id) }).populate({
        path: "owner",
        select: "name",
        model: "User",
        foreignField: "id",
      });
      if (!post) return res.status(404).json({ message: "Post not found" });

      if (title) post.title = title;
      if (content) post.content = content;
      if (tags) post.tags = tags;

      const updatedPost = await post.save();
      res.json(updatedPost);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  deletePost: async (req, res) => {
    try {
      const post = await Post.findOneAndDelete({ id: Number(req.params.id) });
      if (!post) return res.status(404).json({ message: "Post not found" });
      res.json({ message: "Post deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getPostByTitle: async (req, res) => {
    try {
      const regex = new RegExp(req.params.title, "i");
      console.log(regex);
      const posts = await Post.find({ title: regex }).populate({
        path: "owner",
        select: "name",
        model: "User",
        foreignField: "id",
      });
      if (!posts.length)
        return res.status(404).json({ message: "Post not found" });
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = postController;
