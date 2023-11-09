import { CustomBaseEntity } from "src/common/entities/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { UserEntity } from "./user.entity";
import { CommentEntity } from "./comment.entity";

@Entity("post")
export class PostEntity extends CustomBaseEntity {
    @Column({ type: 'varchar', name: 'title', nullable: false })
    title: string;

    @Column({ type: 'varchar', name: 'content', nullable: false })
    content: string;

    @Column({ type: 'jsonb', name: 'tags', nullable: false })
    tags: string[];

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'owner' })
    owner: UserEntity | number;

    @OneToMany(() => CommentEntity, comment => comment.post)
    comments: CommentEntity[];
}
