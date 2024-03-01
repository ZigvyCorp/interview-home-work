import { PostModel } from "../models/post.model.js";

export const handleGetPost = async (req, res, next) => {
  try {
    const posts = await PostModel.getPosts();
    res.status(200).json({ data: posts });
  } catch (error) {
    next(error);
  }
};
