const { validationResult } = require("express-validator");
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.cretePost = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("Validation failed, entered data is incorrect.");
      error.statusCode = 422;
      error.data = errors.array()
      throw error;
    }

    const { ownerId, title, content, tags = [] } = req.body;
    const newPost = new Post({ owner: ownerId, title, content, tags });
    await newPost.save();
    res.status(201).json({
      message: "Post created successfully!",
      post: newPost,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updatePost = async (req, res, next) => {
  const postId = req.params.postId;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed, entered data is incorrect.");
    error.statusCode = 422;
    throw error;
  }

  const { title, content, tags = [] } = req.body;

  try {
    const post = await Post.findById(postId).populate("owner","-password");
    if (!post) {
      const error = new Error("Could not find post");
      error.statusCode = 404;
      throw error;
    }
    if (post.creator._id.toString() !== req.userId) {
      const error = new Error("Not authenticated!");
      error.statusCode = 403;
      throw error;
    }

    post.title = title;
    post.content = content;
    post.tags = tags;
    const result = await post.save();
    res.status(200).json({ message: "Post updated!", post: result });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  const postId = req.params.postId;
  try {
    const post = await Post.findById(postId);

    if (!post) {
      const error = new Error("Could not find post");
      error.statusCode = 404;
      throw error;
    }
    if (post.creator.toString() !== req.userId) {
      const error = new Error("Not authenticated!");
      error.statusCode = 403;
      throw error;
    }
    await Post.findByIdAndDelete(postId);
    res.status(200).json({ message: "Deleted post." });
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({title:{$regex:title}}).populate("owner","-password");
    res.status(200).json({ message: "Fetched posts successfully.", posts });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getPostsAndPaginate = async (req, res, next) => {
  const title = req.query.title || ""
  const currentPage = req.query.page || 1;
  const perPage = req.query.perPage || 1;
  let totalItems;

  try {
    totalItems = await Post.find({title:{$regex:title}}).countDocuments();
    const posts = await Post.find({title:{$regex:title}})
      .populate("owner","-password")
      .sort({ createdAt: -1 })
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    res.status(200).json({
      message: "Fetched posts successfully.",
      posts: posts,
      totalItems: totalItems,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const id = req.params.postId;
    const post = await Post.findById(id).populate("owner","-password");
    if (!post) {
      const error = new Error("Could not find post");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      message: "Post fetched.",
      post,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getCommentInPost = async(req, res, next)=>{
  const id = req.params.postId
  const comments = awaitComment.find({post:id}).populate("owner","-password");

  res.status(200).json({
    message: "Search posts fetched.",
    comments,
  });
}
