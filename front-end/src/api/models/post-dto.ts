import { TimeStamps } from "@/types";
import { UserDto } from "@/api/models/user-dto.ts";
import { CommentDto } from "@/api/models/comment-dto.ts";

export interface PostDto extends TimeStamps {
  id: string;
  title: string;
  content: string;
  slug: string;
  tags: string[];
  owner: UserDto;
  comments: CommentDto[]
}