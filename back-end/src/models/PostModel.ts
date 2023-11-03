import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseModel } from "../common/BaseModel";
import { UserModel } from "./UserModel";
import { CommentModel } from "./CommentModel";

@Entity('post')
export class PostModel extends BaseModel {
  @Column({ type: 'varchar', name: 'title', nullable: false })
  title: string;

  @Column({ type: 'varchar', name: 'content', nullable: false })
  content: string;

  @Column({ type: 'jsonb', name: 'tags', nullable: false })
  tags: string[];

  @OneToOne(() => UserModel, { cascade: true })
  @JoinColumn({ name: 'owner' })
  owner: UserModel;

  @OneToMany(() => CommentModel, comment => comment.post)
  comments: CommentModel[];
}