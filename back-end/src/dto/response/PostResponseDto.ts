import { Expose } from "class-transformer";
import { CommentResponseDto } from "./CommentResponseDto";

export class PostResponseDto {
    id: number;
    owner: number;
    ownerName: string;
    title: string;
    content: string;
    createdAt: Date;
    tags: string[];
    totalComments: number;
    comments: CommentResponseDto[];
}

export class GetAllPostsResponseDto {
    @Expose()
    name!: string;
}