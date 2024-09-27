import { Request, Response } from "express";
import { CommentService } from "../services/commentService";

export class CommentController {
  static async getAllComments(req: Request, res: Response) {
    try {
      const comments = await CommentService.getAllComments();
      res.json(comments);
    } catch (error) {
      res.status(500).json({ message: "Error fetching comments", error });
    }
  }

  static async getCommentsByPostId(req: Request, res: Response) {
    try {
      const comments = await CommentService.getCommentsByPostId(req.params.postId);
      res.json(comments);
    } catch (error) {
      res.status(500).json({ message: "Error fetching comments", error });
    }
  }

  static async createComment(req: Request, res: Response) {
    try {
      const savedComment = await CommentService.createComment(req.body);
      res.status(201).json(savedComment);
    } catch (error) {
      res.status(400).json({ message: "Error creating comment", error });
    }
  }

  static async updateComment(req: Request, res: Response) {
    try {
      const updatedComment = await CommentService.updateComment(req.params.id, req.body);
      if (updatedComment) {
        res.json(updatedComment);
      } else {
        res.status(404).json({ message: "Comment not found" });
      }
    } catch (error) {
      res.status(400).json({ message: "Error updating comment", error });
    }
  }

  static async deleteComment(req: Request, res: Response) {
    try {
      await CommentService.deleteComment(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Error deleting comment", error });
    }
  }
}
