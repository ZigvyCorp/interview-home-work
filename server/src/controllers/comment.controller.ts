import { NextFunction, Request, Response } from "express";
import { create, getAll } from "../services/comment.service";
import { ICommentsModel } from "../models/comment.model";

export const getAllComments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const comments = await getAll();

    return res.status(200).json(comments).end();
  } catch (e) {
    next(e);
  }
};

export const createComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const comment: ICommentsModel = req.body;
    const newComment = await create(comment);
    return res.status(200).json(newComment).end();
  } catch (e) {
    next(e);
  }
};
