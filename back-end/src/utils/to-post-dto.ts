import { PostDto } from "@/models/dtos/post-dto";
import { IPopulatedPost, IPost } from "@/models/post";
import { Document, MergeType, Types } from "mongoose";
import { IUser } from "@/models/user";
import { toUserDto } from "@/utils/to-user-dto";
import { IComment } from "@/models/comment";
import { MongoDocument } from "@/types";
import { toCommentDto } from "@/utils/to-comment-dto";

export const toPostDto = (post: IPopulatedPost): PostDto => {
  return {
    id: post._id.toString(),
    title: post.title,
    owner: toUserDto(post.owner),
    slug: post.slug,
    tags: post.tags,
    content: post.content,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
    comments: post.comments.map(toCommentDto)
  };
};