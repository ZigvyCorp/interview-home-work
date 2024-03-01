import { Comment } from "../models/comment.js";

// add data
export const addCommentService = async (data) => {
  let result = await Comment.insertMany(data);
  return result;
};

export const getCmtByPostService = async (id) => {
  let result = await Comment.find({ postId: id })
    .populate({ path: "userId", select: "name" })
    .exec();
  return result;
};
