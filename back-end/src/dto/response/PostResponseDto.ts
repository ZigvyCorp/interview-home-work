import { Expose } from "class-transformer";
import { CommentResponse } from "./CommentResponseDto";

export class PostResponse {
    id: number;
    owner: number;
    ownerName: string;
    title: string;
    content: string;
    createdAt: number;
    tags: string[];
    comments: CommentResponse[];
}

export class GetAllPostsResponseDto {

    @Expose()
    name!: string;
}