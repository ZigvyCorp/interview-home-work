import { CommentQueryDto } from "@dto/CommentQueryDto";
import { CommentResponseDto } from "@dto/response/CommentResponseDto";

export const multipleCommentMapper = (comments: CommentQueryDto[]): CommentResponseDto[] => {
    return comments.map(comment => singleCommentMapper(comment));
}

export const singleCommentMapper = (comment: CommentQueryDto): CommentResponseDto => {
    const { id, content, createdAt, owner } = comment;
    const response = new CommentResponseDto();
    response.id = id;
    response.content = content;
    response.createdAt = createdAt;
    response.ownerName = owner.name;
    return response;
}