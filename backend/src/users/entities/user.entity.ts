import { Comment } from "src/comments/entities/comment.entity";
import { Post } from "src/posts/entities/post.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("Users")
export class User {
  @PrimaryGeneratedColumn({
    name: "id",
    type: "int"
  })
  id: number;

  @Column({
    name: "username",
    type: 'varchar',
    length:20
  })
  username: string;

  @Column({
    name: 'password',
    type: 'varchar',
    length: 60
  })
  password: string;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 40,
  })
  name: string;

  @Column({
    name: 'dob',
    type: 'date',
  })
  dob: Date;

  @CreateDateColumn({
    name: 'create_at',
  })
  createAt: Date;

  @Column({
    name: 'removed',
    type: 'bool',
    default: false,
  })
  removed: boolean

  @OneToMany(() => Post, (Post) => Post.owner)
  post:Post[];

  @OneToMany(() => Comment, (Comment) => Comment.owner)
  comment:Comment[]
}
