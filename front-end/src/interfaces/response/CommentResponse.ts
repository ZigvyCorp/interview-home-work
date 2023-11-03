export interface CommentResponse {
    id: number;
    owner: number;
    ownerName: string;
    post: number;
    content: string;
    createdAt: number;
}