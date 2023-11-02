import User from "../models/user";
import Post from "../models/post";
import Comment from "../models/comment";
import { Request, Response } from "express";
import { IPost } from "../interfaces/post";

const getCommentsByPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const findPostById = await Post.findById(id);

    if (!findPostById)
      return res.status(404).json({
        message: "Post not found",
      });

    const getCommentsByPostId = await Comment.find({
      post: id,
    });

    return res.status(200).json({
      message: "Get comment by post successfully",
      data: getCommentsByPostId,
    });
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({
        message: "Internal server error",
        error,
      });
  }
};

const getPosts = async (req: Request, res: Response) => {
  try {
    const { limit, skip } = req.query;
    const countPosts = await Post.find({}).countDocuments();

    if (!limit || !skip) {
      const findPosts = await Post.find({}).populate("owner", "name");

      return res.status(200).json({
        message: "Get posts successfully",
        data: findPosts,
        size: countPosts,
      });
    }

    const parsedLimit = parseInt(limit.toString());
    const parsedSkip = parseInt(skip.toString());

    const findPosts = await Post.find({})
      .populate("owner", "name")
      .limit(parsedLimit)
      .skip((parsedSkip - 1) * parsedLimit);

    return res.status(200).json({
      message: "Get posts successfully",
      data: findPosts,
      size: countPosts,
    });
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({
        message: "Internal server error",
        error,
      });
  }
};

const getPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const findPostById = await Post.findById(id);

    if (!findPostById)
      return res.status(404).json({
        message: "Post not found",
      });

    return res.status(200).json({
      message: "Get post successfully",
      data: findPostById,
    });
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({
        message: "Internal server error",
        error,
      });
  }
};

const createPost = async (req: Request, res: Response) => {
  try {
    const { owner, title, content, tags }: IPost = req.body;

    const findUserById = await User.findById(owner);

    if (!findUserById)
      return res.status(404).json({
        message: "User not found",
      });

    const newPost = new Post({
      owner: owner,
      title: title,
      content: content,
      tags: tags,
    });

    await newPost.save();

    return res.status(201).json({
      message: "Create post successfully",
      data: newPost,
    });
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({
        message: "Internal server error",
        error,
      });
  }
};

const updatePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, content, tags }: IPost = req.body;

    const findPostById = await Post.findById(id);

    if (!findPostById)
      return res.status(404).json({
        message: "Post not found",
      });

    const updatedPost = await Post.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $set: {
          title: title,
          content: content,
          tags: tags,
        },
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      message: "Update post successfully",
      data: updatedPost,
    });
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({
        message: "Internal server error",
        error,
      });
  }
};

const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;

  const findPostById = await Post.findById(id);

  if (findPostById) {
    const deletedPost = await Post.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Delete post successfully",
      data: deletedPost,
    });
  }

  return res.status(404).json({
    message: "Post not found",
  });
};

export default {
  getCommentsByPost,
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
