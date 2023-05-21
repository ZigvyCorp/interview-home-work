import { BlogEntity } from 'src/modules/blog/entities/blog.entity';
import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, VersionColumn, BaseEntity, ManyToOne } from 'typeorm';

@Entity('Comment')
export class CommentEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    content: string;

    @Column()
    author: string;

    @ManyToOne(() => BlogEntity, (blog) => blog.comments)
    blog: BlogEntity

    @Column({ name: 'likeCount', default: 0 })
    likeCount: number;

    @Column({ name: 'dislikeCount', default: 0 })
    dislikeCount: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @VersionColumn()
    version: number;

}
