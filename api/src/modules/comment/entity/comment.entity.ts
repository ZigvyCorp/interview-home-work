import { PostsEntity } from 'src/modules/posts/entity/posts.entity';
import { UserEntity } from 'src/modules/user/entity/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('comments')
export class CommentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.comments)
  @JoinColumn({ name: 'owner_id' })
  owner: UserEntity;

  @ManyToOne(() => PostsEntity, (post) => post.comments)
  @JoinColumn({ name: 'post_id' })
  post: PostsEntity;
}
