import { NextFunction, Request, Response } from "express";

import Post from "../models/post.model";
import catchAsync from "../utils/catch-async";
import Comments from "../models/comment.model";

export const getPosts = catchAsync(
  async (req: Request, res: Response, _: NextFunction) => {
    const { page = 1, search = "", limit = 10 } = req.query; // Extract page and search from query
    const currentPage = +page;
    const limitPost = +limit;

    const skip = (currentPage - 1) * limitPost;

    let query = {};
    if (search) {
      const lowercaseSearch = (search as string).toLowerCase();
      query = { title: { $regex: lowercaseSearch, $options: "i" } }; // Case-insensitive search
    }

    const postCount = await Post.countDocuments(query);

    const posts = await Post.find(query)
      .populate({
        path: "user",
        select: "name",
      })
      .skip(skip)
      .limit(limitPost);

    const postsWithComments = await Promise.all(
      posts.map(async (post) => {
        const comments = await Comments.find({ post: post._id }).populate({
          path: "user",
          select: "name email",
        });
        return { ...post.toObject(), comments };
      })
    );
    const nextPageValue =
      currentPage * limitPost < postCount ? currentPage + 1 : null;

    res.status(200).json({
      status: "success",
      result: { data: postsWithComments },
      nextPage: nextPageValue,
      currentPage,
      postCount,
    });
  }
);

export const getPost = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const postId = req.params.id;

      const post = await Post.findById(postId).populate("user");

      if (!post) {
        return res
          .status(404)
          .json({ status: "fail", message: "Post not found" });
      }

      const comments = await Comments.find({ post: post._id }).populate({
        path: "user",
        select: "name email",
      });

      const data = { ...post.toObject(), comments };
      res.status(200).json({
        status: "success",
        result: { data },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  }
);

export const createPosts = catchAsync(
  async (req: Request, res: Response, _: NextFunction) => {
    try {
      const newPosts = await Post.insertMany(req.body);

      res.status(201).json({
        status: "success",
        data: {
          post: newPosts,
        },
      });
    } catch (error) {
      const err = error as { message: string };
      res.status(400).json({
        status: "fail",
        message: err.message,
      });
    }
  }
);
