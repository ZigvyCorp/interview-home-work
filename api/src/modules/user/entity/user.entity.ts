import { CommentEntity } from 'src/modules/comment/entity/comment.entity';
import { PostsEntity } from 'src/modules/posts/entity/posts.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({
    nullable: true,
  })
  dob: Date;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

  @OneToMany(() => PostsEntity, (post) => post.owner)
  posts: PostsEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.owner)
  comments: CommentEntity[];
}
