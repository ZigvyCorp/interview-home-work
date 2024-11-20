import { PostsModel } from "../models/PostsModel.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostsModel.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = req.body;
    const post = new PostsModel(newPost);
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatePost = req.body;
    const post = await PostsModel.findOneAndUpdate(
      { _id: updatePost._id }.updatePost,
      { new: true }
    );
    res.status(200).json(post);
  } catch (error) {
    console.log(err);
  }
};
