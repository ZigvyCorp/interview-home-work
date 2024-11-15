import { Types } from "mongoose";

export interface CreatePostDto {
  title: string;
  content: string;
  tags: string[];
  owner: Types.ObjectId;
}