import { NextFunction, Request, Response } from "express";
import postModel from "../models/post.model";

export const createPost = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const newPost = new postModel(req.body);
        await newPost.save();

        res.json(newPost);
    } catch (error) {
        next(error);
    }
};

export const getPost = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const posts = await postModel.find();

        res.json(posts);
    } catch (error) {
        next(error);
    }
};
