const Post = require("../models/PostModel");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

exports.getPosts = async (req, res) => {
  try {
    const keyword = req.body.keyword || "";
    const posts = await Post.find({ title: { $regex: keyword } }).populate(
      "owner",
      "name"
    );
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.find({ _id: id }).populate("owner", "name");
    // console.log("post", post);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.createPost = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    } else {
      const post = new Post({
        _id: new mongoose.Types.ObjectId(),
        owner: req.body.owner,
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags,
      });
      await post.save();
      res.status(200).json(post);
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    } else {
      const id = req.params.id;
      const post = await Post.find({ _id: id });
      if (!post) {
        res
          .status(404)
          .json({ message: "Not found this post you want to update" });
      }
      if (post.owner !== req.userId) {
        post.title = req.body.title;
        post.content = req.body.content;
        await post.save();
        res.status(200).json(post);
      }
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.find({ _id: id });
    if (!post) {
      res
        .status(404)
        .json({ message: "Not found this post you want to delete" });
    } else {
      const result = await Post.deleteOne({ _id: id });
      res.status(200).json(result);
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
