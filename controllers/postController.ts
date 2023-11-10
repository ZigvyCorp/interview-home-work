import { Request, Response } from "express";
import { slugify } from "../utils/functions";
import { PostSchema } from "../models/postSchema";
import { CommentSchema } from "../models/commentSchema";

const postController = {
  insertPost: async (req: Request, res: Response) => {
    try {
      const postData = req.body;
      postData.slug = slugify(postData.title);
      const newPost = await PostSchema.create(postData);

      return res.status(200).json(newPost);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  getAll: async (req: Request, res: Response) => {
    try {
      const posts = await PostSchema.find()
        .populate("owner", 'name')
        .populate("comments", 'content');

      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  getDetail: async (req: Request, res: Response) => {
    try {
      const slug = req.params.slug;
      const post =
        (await PostSchema.findOne({ slug })
          .populate("owner")
          .populate("comments")) ?? [];

      return res.status(200).json(post);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  searchPost: async (req: Request, res: Response) => {
    try {
      const searchValue = req.query.q;
      const regexSearch = new RegExp(searchValue, "i");
      const posts =
        (await PostSchema.find({ title: { $regex: regexSearch } })
          .populate("owner")
          .populate("comments")) ?? [];
      const totalCount =
        (await PostSchema.find({ title: { $regex: regexSearch } })
          .populate("owner")
          .populate("comments")
          .countDocuments({})) ?? 0;

      return res.status(200).json({ posts, totalCount });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  updatePost: async (req: Request, res: Response) => {
    try {
      const postId = req.params.postId;
      const { ...data } = req.body;
      if (data.title) {
        data.slug = slugify(data.title);
      }

      await PostSchema.findByIdAndUpdate(postId, {
        ...data,
      });

      return res.status(200).json("Updated succesfully!");
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  deletePost: async (req: Request, res: Response) => {
    try {
      const postId = req.params.postId;
      const deletedPost = await PostSchema.findByIdAndDelete(postId);
      //   Xoá cả comment có trong post đó luôn vì post không tồn tại nữa
      await CommentSchema.deleteMany({ postId });

      return res.status(200).json("Deleted successfully!");
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

export default postController;
