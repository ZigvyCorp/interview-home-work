import { CreateCommentDto } from "@/models/dtos/create-comment-dto";
import Comment, { IPopulatedComment } from "@/models/comment";
import { toCommentDto } from "@/utils/to-comment-dto";
import Post from "@/models/post";
import { Types } from "mongoose";
import { UpdateCommentDto } from "@/models/dtos/update-comment-dto";
import populateComment from "@/utils/populate-comment";

export const getComments = async (
  postID: string,
  { page, limit }: { page: number; limit: number }
) => {
  const skip = (page - 1) * limit;
  const comments = await populateComment(
    Comment.find({
      post: new Types.ObjectId(postID),
    })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
  ).lean<IPopulatedComment[]>();
  return comments.map(toCommentDto);
};

export const countComments = async (postID: string) => {
  const count = await Comment.countDocuments({
    post: new Types.ObjectId(postID),
  });
  return count
}

export const getCommentById = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) {
    return null;
  }
  let comment = await populateComment(
    Comment.findById(id)
  ).lean<IPopulatedComment>();
  if (!comment) return null;
  return toCommentDto(comment);
};

export const createComment = async ({
  owner,
  content,
  postID,
}: CreateCommentDto) => {
  const post = await Post.findById(postID);
  if (!post) return null;
  const newComment = await Comment.create({
    content: content,
    owner: owner,
    post: post._id,
  });
  return getCommentById(newComment._id.toString());
};
export const updateComment = async (
  id: string,
  updateData: UpdateCommentDto
) => {
  const comment = await populateComment(
    Comment.findByIdAndUpdate(id, updateData, {
      new: true, // return new data
      runValidators: true,
    })
  ).lean<IPopulatedComment>();
  if (!comment) return null;
  return toCommentDto(comment);
};
export const deleteComment = async (id: string) => {
  return Comment.findByIdAndDelete(id);
};
