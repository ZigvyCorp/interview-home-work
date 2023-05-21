import { TypeOrmBaseEntity } from 'src/commons/abstract-entity/type-orm-base-entity.entity';
import { CommentEntity } from 'src/modules/comment/entities/comment.entity';
import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, VersionColumn, OneToMany } from 'typeorm';

@Entity('Blog')
export class BlogEntity extends TypeOrmBaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    author: string;

    @Column('json', { default: [] })
    images: Array<string>;

    @OneToMany(() => CommentEntity, (comment) => comment.blog)
    comments: CommentEntity[]

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
