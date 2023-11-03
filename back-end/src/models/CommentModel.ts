import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseModel } from "../common/BaseModel";
import { UserModel } from "./UserModel";
import { PostModel } from "./PostModel";

@Entity('comment')
export class CommentModel extends BaseModel {
    @Column({ type: 'varchar', name: 'content', nullable: false })
    content: string;

    @ManyToOne(() => PostModel, post => post.comments)
    @JoinColumn({ name: 'post' })
    post: PostModel;

    @ManyToOne(() => UserModel, user => user.comments)
    @JoinColumn({ name: 'owner' })
    owner: UserModel;
}