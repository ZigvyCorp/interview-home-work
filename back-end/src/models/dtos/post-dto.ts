import { TimeStamps } from "@/types";
import { UserDto } from "@/models/dtos/user-dto";
import { CommentDto } from "@/models/dtos/comment-dto";

export interface PostDto extends TimeStamps {
  id: string;
  title: string;
  content: string;
  slug: string;
  tags: string[];
  owner: UserDto;
}