import { CustomBaseEntity } from "src/common/entities/base.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
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

    @OneToOne(() => UserEntity, { cascade: true })
    @JoinColumn({ name: 'owner' })
    owner: UserEntity;

    @OneToMany(() => CommentEntity, comment => comment.post)
    comments: CommentEntity[];
}
