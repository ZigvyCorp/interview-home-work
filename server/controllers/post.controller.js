import Post from "../models/post.model.js";
import createError from "../utils/createError.js";

export const deletePost = async (req, res, next) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).send("Your account has been deleted.");
  } catch (error) {
    next(error);
  }
};
export const getPost = async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  res.status(200).send(post);
};
export const getPosts = async (req, res, next) => {
  const post = await Post.find();
  res.status(200).send(post);
};
export const createPost = async (req, res, next) => {
  const newPost = new Post({
    owner: req.owner,
    ...req.body,
  });
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    next(err);
  }
};

export const updatePost = async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (req.postId !== post._id.toString()) {
    return next(createError(403, "Bạn chỉ được cập nhật tài khoản của bạn!"));
  }
  await Post.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).send("Tài khoản của bạn đã được cập nhật!");
};
