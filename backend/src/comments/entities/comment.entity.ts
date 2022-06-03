import { Post } from "src/posts/entities/post.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity("Comments")
export class Comment {
  @PrimaryColumn({
    name: "id",
    type: 'int'
  })
  id: number;

  @Column({
    name: "content",
    type: "varchar"
  })
  content: string;

  @CreateDateColumn({
    name: "create_at"
  })
  createAt: Date;

  @Column({
    name: "removed",
    type: 'bool',
    default: false
  })
  removed: boolean;

  @ManyToOne(() => User, (User) => User.comment)
  owner: User;

  @ManyToOne(() => Post, (Post) => Post.comment)
  post: Post;
}
