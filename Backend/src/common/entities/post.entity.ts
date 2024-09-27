import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { Timestamp } from './common';
import { CommentEntity } from './comment.entity';

@Entity('posts', {
  schema: 'public',
})
export class PostEntity {
  constructor(data?: Partial<PostEntity>) {
    Object.assign(this, data);
  }

  @PrimaryGeneratedColumn({
    primaryKeyConstraintName: 'post_pkey',
  })
  id: number;

  @Column({
    name: 'title',
    type: 'varchar',
    length: 255,
  })
  title: string;

  @Column({
    name: 'body',
    type: 'text',
  })
  body: string;

  @ManyToOne(() => UserEntity, (user) => user.posts)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'post_user_fkey',
  })
  user: UserEntity;

  @OneToMany(() => CommentEntity, (comment) => comment.post)
  comments: CommentEntity[];

  @Column(() => Timestamp, { prefix: false })
  timestamp: Timestamp;
}
