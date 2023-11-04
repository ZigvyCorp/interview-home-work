import { Column, Entity, OneToMany } from "typeorm";
import { BaseModel } from "../common/BaseModel";
import { CommentModel } from "./CommentModel";

@Entity('user')
export class UserModel extends BaseModel {
  @Column({ type: 'varchar', name: 'name', nullable: false })
  name: string;

  @Column({ type: 'varchar', name: 'username', nullable: false })
  username: string;

  @Column({ type: 'varchar', name: 'password', nullable: false })
  password: string;

  @Column({ type: 'timestamp', name: 'dob', nullable: false })
  dob: Date;

  @OneToMany(() => CommentModel, comment => comment.post)
  comments: CommentModel[];
}