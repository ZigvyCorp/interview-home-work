import { CommentQueryDto } from "@dto/CommentQueryDto";
import { PostQueryDto } from "@dto/PostQueryDto";
import { PostResponseDto } from "@dto/response/PostResponseDto";
import { multipleCommentMapper } from "./CommentResponseMapper";

export const multiplePostPaginationMapper = (posts: PostQueryDto[]): PostResponseDto[] => {
    return posts.map(post => postPaginationMapper(post));
}


export const postPaginationMapper = (post: PostQueryDto): PostResponseDto => {
    const { id, title, content, tags, createdAt, owner, comments } = post;
    const response = new PostResponseDto();
    response.id = id;
    response.title = title;
    response.content = content;
    response.tags = tags;
    response.createdAt = createdAt;
    response.owner = owner.id;
    response.ownerName = owner.name;
    response.totalComments = comments.length;
    return response;
}

export const singlePostMapper = (post: PostQueryDto, comments: CommentQueryDto[]): PostResponseDto => {
    const { id, title, content, createdAt, tags, owner } = post;
    const response = new PostResponseDto();
    response.id = id;
    response.title = title;
    response.content = content;
    response.createdAt = createdAt;
    response.tags = tags;
    response.ownerName = owner.name;
    response.comments = multipleCommentMapper(comments);
    return response;
}