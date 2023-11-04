export class CommentResponseDto {
    id: number;
    owner: number;
    ownerName: string;
    post: number;
    content: string;
    createdAt: Date;
}