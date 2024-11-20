import { BlogEntity } from 'src/modules/blog/entities/blog.entity';
import { BaseEntity } from 'typeorm';
export declare class CommentEntity extends BaseEntity {
    id: string;
    content: string;
    author: string;
    blog: BlogEntity;
    likeCount: number;
    dislikeCount: number;
    createdAt: Date;
    updatedAt: Date;
    version: number;
}
