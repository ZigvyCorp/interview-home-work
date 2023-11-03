import { UserQueryDto } from "./UserQueryDto";

export class CommentQueryDto {
    id: number;
    content: string;
    owner: UserQueryDto;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}