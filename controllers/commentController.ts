import { Request, Response } from "express";
import { CommentSchema } from "../models/commentSchema";
import { PostSchema } from "../models/postSchema";

const commentController = {
  insertComment: async (req: Request, res: Response) => {
    try {
      const newComment = await CommentSchema.create(req.body);
      const postId = req.body.postId;

      if (postId) {
        // Thêm comment vào post
        await PostSchema.findById(postId).updateOne({
          $push: { comments: newComment._id },
        });
      }

      return res.status(200).json(newComment);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  getAll: async (req: Request, res: Response) => {
    try {
      const comments = await CommentSchema.find();

      return res.status(200).json(comments);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  updateComment: async (req: Request, res: Response) => {
    try {
      const commentId = req.params.commentId;
      await CommentSchema.findByIdAndUpdate({ _id: commentId }, req.body);

      return res.status(200).json("Updated Successfully");
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  deleteComment: async (req: Request, res: Response) => {
    try {
      const commentId = req.params.commentId;
      //   Tìm và pull comment ra khỏi post khi xoá comment
      await PostSchema.updateOne(
        { comments: commentId },
        { $pull: { comments: commentId } }
      );
      await CommentSchema.findByIdAndDelete(commentId);

      return res.status(200).json("Deleted Successfully!");
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

export default commentController;
