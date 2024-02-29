import { NextFunction, Request, Response } from "express";
import commentModel from "../models/comment.model";

export const createComment = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const newComment = new commentModel(req.body);
        await newComment.save();

        res.json(newComment);
    } catch (error) {
        next(error);
    }
};

export const getComment = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const comments = await commentModel.find();

        res.json(comments);
    } catch (error) {
        next(error);
    }
};
