import { Request, Response } from "express";
import commentModel from "../models/commentModel";

export const getComments = async (req: Request, res: Response) => {
  try {
    const queries: any = {};
    if (req.query.postId) {
      queries["postId"] = +req.query.postId;
    }

    const comments = await commentModel.find(queries);
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comments", error });
  }
}