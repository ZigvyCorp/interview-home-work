import { errorHandler } from "../handlers/error.js";
import Comment from "../models/comment.model.js";
import Post from "../models/post.model.js";

// Get all Posts
export const getAllPosts = async (req, res, next) => {
  try {
    const { limit, skip } = req.query;
    const data = await Post.find(
      {},
      {},
      {
        limit: limit && limit < 100 ? limit : 100,
        skip: skip ? skip : 0,
        lean: true,
      }
    );
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

// Get a single Post by ID
export const getPostById = async (req, res, next) => {
  try {
    const item = await Post.findOne({ id: req.params.id }).lean();
    if (!item) {
      return next(errorHandler(400, "Post not found"));
    }
    res.status(200).json(item);
  } catch (error) {
    next(error);
  }
};

// Create a new Post
export const createPost = async (req, res, next) => {
  try {
    const newItem = await Post.create(req.body);
    const savedItem = newItem._doc;
    res.status(201).json(savedItem);
  } catch (error) {
    next(error);
  }
};

// Update a Post by ID (PUT)
export const updatePostById = async (req, res, next) => {
  try {
    const updatedItem = await Post.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      {
        new: true,
        lean: true,
      }
    );
    if (!updatedItem) {
      return next(errorHandler(400, "Post not found"));
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    next(error);
  }
};

// Partially update a Post by ID (PATCH)
export const patchPostById = async (req, res, next) => {
  try {
    const updatedItem = await Post.findOneAndUpdate(
      { id: req.params.id },
      { $set: req.body },
      {
        new: true,
        lean: true,
      }
    );
    if (!updatedItem) {
      return next(errorHandler(400, "Post not found"));
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    next(error);
  }
};

// Delete a Post by ID
export const deletePostById = async (req, res, next) => {
  try {
    const deletedItem = await Post.findOneAndDelete({ id: req.params.id });
    if (!deletedItem) {
      return next(errorHandler(400, "Post not found"));
    }
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const getCommentsByPost = async (req, res, next) => {
  try {
    const { limit, skip } = req.query;
    const data = await Comment.find(
      { postId: req.params.id },
      {},
      {
        limit: limit && limit < 100 ? limit : 100,
        skip: skip ? skip : 0,
        lean: true,
      }
    );
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

