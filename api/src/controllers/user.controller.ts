import { NextFunction, Request, Response } from "express";
import userModel from "../models/user.model";

export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const newUser = new userModel(req.body);
        await newUser.save();

        res.json(newUser);
    } catch (error) {
        next(error);
    }
};

export const getUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const users = await userModel.find();

        res.json(users);
    } catch (error) {
        next(error);
    }
};
