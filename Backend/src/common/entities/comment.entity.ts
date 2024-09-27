import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { CommentTypeEnum } from '../enums';
import { Timestamp } from './common';
import { UserEntity } from './user.entity';
import { PostEntity } from './post.entity';

@Entity('comments', {
  schema: 'public',
})
export class CommentEntity {
  constructor(data?: Partial<CommentEntity>) {
    Object.assign(this, data);
  }

  @PrimaryGeneratedColumn({
    primaryKeyConstraintName: 'comment_pkey',
  })
  id: number;

  @Column({
    name: 'body',
    type: 'text',
  })
  body: string;

  @Column({
    name: 'type',
    type: 'varchar',
    length: 20,
    default: CommentTypeEnum.comment,
  })
  type: CommentTypeEnum;

  @ManyToOne(() => UserEntity, (user) => user.comments)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'comment_user_fkey',
  })
  user: UserEntity;

  @ManyToOne(() => PostEntity, (post) => post.comments)
  @JoinColumn({
    name: 'post_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'comment_post_fkey',
  })
  post: PostEntity;

  @Column(() => Timestamp, { prefix: false })
  timestamp: Timestamp;
}
