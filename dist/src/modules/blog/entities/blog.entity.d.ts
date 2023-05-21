import { TypeOrmBaseEntity } from 'src/commons/abstract-entity/type-orm-base-entity.entity';
import { CommentEntity } from 'src/modules/comment/entities/comment.entity';
export declare class BlogEntity extends TypeOrmBaseEntity {
    id: string;
    title: string;
    content: string;
    author: string;
    images: Array<string>;
    comments: CommentEntity[];
    likeCount: number;
    dislikeCount: number;
    createdAt: Date;
    updatedAt: Date;
    version: number;
}
