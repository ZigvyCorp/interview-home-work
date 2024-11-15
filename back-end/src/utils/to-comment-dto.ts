import { CommentDto } from "@/models/dtos/comment-dto";
import { IPopulatedComment } from "@/models/comment";
import { toUserDto } from "@/utils/to-user-dto";

export const toCommentDto = (comment: IPopulatedComment): CommentDto => {
  return {
    id: comment._id.toString(),
    owner: toUserDto(comment.owner),
    content: comment.content,
    postId: comment.post.toString(),
    createdAt: comment.createdAt,
    updatedAt: comment.updatedAt
  };
};
