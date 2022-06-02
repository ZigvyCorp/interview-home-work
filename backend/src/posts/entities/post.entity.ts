
import { Comment } from 'src/comments/entities/comment.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity("Posts")
export class Post {
  @PrimaryGeneratedColumn({
    name: "id",
    type: "int"
  })
  id: number;
  
  @Column({
    name: "title",
    type: "varchar"
  })
  title: string;

  @Column({
    name: "content",
    type: "varchar"
  })
  content: string;

  @CreateDateColumn({
    name: "create_at",
  })
  createAt: Date;

  @Column({
    name: "tags",
    type: "varchar",
    array: true,
  })
  tags: string[];

  @ManyToOne(() => User, (User) => User.post)
  owner: User;

  @OneToMany(() => Comment, (Comment) => Comment.post)
  comment: Comment[];
}
