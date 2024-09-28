import { Response, Request } from "express";
import postModel from "../models/postModel";
import commentModel from "../models/commentModel";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await postModel.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts", error });
  }
};

export const getPost = async (req: Request, res: Response) => {
  try {
    const post = await postModel.findOne({ id: +req.params.id }).populate('user').exec();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error fetching post", error });
  }
}

export const createPost = async (req: Request, res: Response) => {
  try {
    const post = await postModel.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error creating post", error });
  }
}

export const updatePost = async (req: Request, res: Response) => {
  try {
    const post = await postModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error updating post", error });
  }
}

export const deletePost = async (req: Request, res: Response) => {
  try {
    const post = await postModel.findByIdAndDelete(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error deleting post", error });
  }
}

export const getCommentsByPostId = async (req: Request, res: Response) => {
  try {
    const comments = await commentModel.find({ postId: req.params.id });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comments", error });
  }
}