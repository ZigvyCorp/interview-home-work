import { Types } from "mongoose";

export interface UpdateCommentDto {
  content: string;
  owner: Types.ObjectId;
}