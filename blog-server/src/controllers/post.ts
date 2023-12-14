import { Request, Response } from "express";
import Post from "../models/post";
import mongoose from "mongoose";

async function getAllPosts(req: Request, res: Response) {
  const { pageNumber, pageSize } = req.body;
  const skip = (pageNumber - 1) * pageSize;
  try {
    const totalPosts = await Post.countDocuments();
    const totalPages = Math.ceil(totalPosts / pageSize);

    const posts = await Post.find({})
      // .populate("owner", "name dob created_at")
      // .skip(skip)
      // .limit(pageSize);

    if (posts) {
      res.json({
        success: true,
        message: "",
        Pagination: {
          currentPage: pageNumber,
          pageSize: pageSize,
          totalPage: totalPages,
        },
        data: posts,
      });
    } else {
      res.json({
        success: false,
        message: "fail",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

function createPost(req: Request, res: Response) {
  const post = new Post({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    content: req.body.content,
  });

  return post
    .save()
    .then((newPost: any) => {
      return res.status(201).json({
        success: true,
        message: "New post published successfully",
        post: newPost,
      });
    })
    .catch((error: Error) => {
      console.error(error);
      res.status(500).json({
        success: true,
        message: "Server error. Please try again.",
        error: error.message,
      });
    });
}

const postController = { getAllPosts, createPost };

export default postController;
