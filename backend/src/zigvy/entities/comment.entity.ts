import { CustomBaseEntity } from "src/common/entities/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { PostEntity } from "./post.entity";
import { UserEntity } from "./user.entity";

@Entity('comment')
export class CommentEntity extends CustomBaseEntity {
    @Column({ type: 'varchar', name: 'content', nullable: false })
    content: string;

    @ManyToOne(() => PostEntity, post => post.comments)
    @JoinColumn({ name: 'post' })
    post: PostEntity;

    @ManyToOne(() => UserEntity, user => user.comments)
    @JoinColumn({ name: 'owner' })
    owner: UserEntity;

}
