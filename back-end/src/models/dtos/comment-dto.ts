import { TimeStamps } from "@/types";
import { UserDto } from "@/models/dtos/user-dto";
import { Types } from "mongoose";

export interface CommentDto extends TimeStamps {
  id: string;
  content: string;
  owner: UserDto;
  postID: string;
}