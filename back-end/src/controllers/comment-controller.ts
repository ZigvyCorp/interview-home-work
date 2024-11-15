import { Response, Request } from "express";
import {
  countComments,
  createComment,
  deleteComment,
  getComments,
} from "@/repositories/comment-repo";
import { AuthenticatedRequest } from "@/types";
import { Types } from "mongoose";
import { UserDto } from "@/models/dtos/user-dto";

export const getCommentsRequest = async (
  req: Request,
  res: Response
) => {
  const postID = req.params.id;
  const { page = "1", limit = "5" } = req.query;
  const totalComments = await countComments(postID);
  const comments = await getComments(postID, {
    page: parseInt(page as string),
    limit: parseInt(limit as string),
  });
  res.status(200).json({
    total: totalComments,
    comments,
  });
};

export const createCommentRequest = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { postID, content } = req.body;
  const user = req.user as UserDto;
  const comment = await createComment({
    content,
    owner: new Types.ObjectId(user.id),
    postID,
  });
  res.status(201).json(comment);
};

export const deleteCommentRequest = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const id = req.params.id;
  await deleteComment(id);
  res.status(204).json({ message: "Comment deleted" });
};
