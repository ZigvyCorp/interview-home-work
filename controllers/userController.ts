import { Request, Response } from "express";
import { UserSchema } from "../models/userSchema";
import { PostSchema } from "../models/postSchema";
import { CommentSchema } from "../models/commentSchema";

const userController = {
  insertUser: async (req: Request, res: Response) => {
    try {
      const newUser = await UserSchema.create(req.body);

      return res.status(200).json(newUser);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  getAll: async (req: Request, res: Response) => {
    try {
      const users = await UserSchema.find();

      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  getDetail: async (req: Request, res: Response) => {
    try {
      const user = await UserSchema.findById(req.params.userId);

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  updateUser: async (req: Request, res: Response) => {
    try {
      const userId = req.params.userId;
      await UserSchema.findOneAndUpdate({ _id: userId }, req.body);

      return res.status(200).json("Updated succesfully!");
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  deleteUser: async (req: Request, res: Response) => {
    try {
      const userId = req.params.userId;
      await UserSchema.findByIdAndDelete(userId);
      //   Xoá luôn các record liên quan tới user
      await PostSchema.deleteMany({ owner: userId });
      await CommentSchema.deleteMany({ owner: userId });

      return res.status(200).json("User Deleted!");
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

export default userController;
