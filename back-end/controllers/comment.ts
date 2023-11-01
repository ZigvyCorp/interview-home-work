import User from "../models/user";
import Post from "../models/post";
import Comment from "../models/comment";
import { Request, Response } from "express";
import { IComment } from "../interfaces/comment";

const getComments = async (req: Request, res: Response) => {
  try {
    const { postId } = req.query;

    if (postId) {
      const findCommentsByPostId = await Comment.find({
        post: postId,
      });

      return res.status(200).json({
        message: "Get comments by post successfully",
        data: findCommentsByPostId,
      });
    }

    const findComments = await Comment.find({});

    return res.status(200).json({
      message: "Get comments successfully",
      data: findComments,
    });
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({
        message: "Internal server error",
        error,
      });
  }
};

const getComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const findCommentById = await Comment.findById(id);

    if (!findCommentById)
      return res.status(404).json({
        message: "CComment not found",
      });

    return res.status(200).json({
      message: "Get comment successfully",
      data: findCommentById,
    });
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({
        message: "Internal server error",
        error,
      });
  }
};

const createComment = async (req: Request, res: Response) => {
  try {
    const { owner, post, content }: IComment = req.body;

    const findPostById = await Post.findById(post);

    if (!findPostById)
      return res.status(404).json({
        message: "Post not found",
      });

    const findUserById = await User.findById(owner);

    if (!findUserById)
      return res.status(404).json({
        message: "User not found",
      });

    const newComment = new Comment({
      owner: owner,
      post: post,
      content: content,
    });

    await newComment.save();

    return res.status(201).json({
      message: "Create comment successfully",
      data: newComment,
    });
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({
        message: "Internal server error",
        error,
      });
  }
};

const updateComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { content }: IComment = req.body;

    const findCommentById = await Comment.findById(id);

    if (!findCommentById)
      return res.status(404).json({
        message: "Comment not found",
      });

    const updatedComment = await Comment.findOneAndUpdate(
      {
        _id: id,
      },
      {
        content: content,
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      message: "Update comment successfully",
      data: updatedComment,
    });
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({
        message: "Internal server error",
        error,
      });
  }
};

const deleteComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const findCommentById = await Comment.findById(id);

    if (findCommentById) {
      const deletedComment = await Comment.findByIdAndDelete(id);

      return res.status(200).json({
        message: "Delete comment successfully",
        data: deletedComment,
      });
    }

    return res.status(404).json({
      message: "Comment not found",
    });
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({
        message: "Internal server error",
        error,
      });
  }
};

export default {
  getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
};
