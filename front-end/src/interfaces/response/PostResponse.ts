import { CommentResponse } from "./CommentResponse";

export interface PostResponse {
    id: number;
    owner: number;
    ownerName: string;
    title: string;
    content: string;
    createdAt: number;
    tags: string[];
    comments: CommentResponse[];
}