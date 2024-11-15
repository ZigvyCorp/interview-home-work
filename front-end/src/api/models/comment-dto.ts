import { TimeStamps } from "@/types";
import { UserDto } from "@/api/models/user-dto.ts";

export interface CommentDto extends TimeStamps {
  id: string;
  content: string;
  owner: UserDto;
  postID: string;
}