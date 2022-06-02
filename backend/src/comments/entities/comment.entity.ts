import { Post } from "src/posts/entities/post.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity("Comments")
export class Comment {
  @PrimaryColumn({
    name: "id",
    type: 'number'
  })
  id: number;

  @Column({
    name: "content",
    type: "varchar"
  })
  content: string;

  @ManyToOne(() => User, (User) => User.comment)
  owner: User;

  @ManyToOne(() => Post, (Post) => Post.comment)
  post: Post;
}
