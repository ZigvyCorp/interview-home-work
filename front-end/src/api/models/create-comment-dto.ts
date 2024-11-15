import { Types } from "mongoose";

export interface CreateCommentDto {
  content: string;
  owner: Types.ObjectId;
  postId: string;
}