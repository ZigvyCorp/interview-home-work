import { CommentQueryDto } from "./CommentQueryDto";
import { UserQueryDto } from "./UserQueryDto";

export class PostQueryDto {
    id: number;
    title: string;
    content: string;
    tags: string[];
    owner: UserQueryDto;
    comments: CommentQueryDto[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}