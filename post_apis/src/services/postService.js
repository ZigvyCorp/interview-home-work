import { Comment } from "../models/comment.js";
import { Post } from "../models/post.js";

//add data
export const createPostService = async (data) => {
  let result = await Post.insertMany(data);
  return result;
};

export const getAllPostService = async () => {
  let posts = await Post.find({}).populate({ path: "userId", select: "name" }).lean();
  for (const post of posts) {
    const comments = await Comment.find({ postId: post._id })
      .select("userId content createdAt")
      .populate({ path: "userId", select: "name" })
      .lean();
    post.comments = comments;
  }
  return posts;
};

export const searchPostService = async (data) => {
  let { tuKhoa } = data;
  let result = await Post.find({ title: { $regex: tuKhoa, $options: "i" } }).lean();
  for (const post of result) {
    const comments = await Comment.find({ postId: post._id })
      .select("userId content createdAt")
      .populate({ path: "userId", select: "name" })
      .lean();
    post.comments = comments;
  }
  return result;
};

export const getPostService = async (data) => {
  let { postId } = data;
  let result = await Post.findById(postId)
    .populate({ path: "userId", select: "-updatedAt -__v" })
    .exec();

  return result;
};
