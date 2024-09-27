import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Timestamp } from './common';
import { PostEntity } from './post.entity';
import { CommentEntity } from './comment.entity';

@Entity('users', {
  schema: 'public',
})
export class UserEntity {
  constructor(data?: Partial<UserEntity>) {
    Object.assign(this, data);
  }

  @PrimaryGeneratedColumn({
    primaryKeyConstraintName: 'user_pkey',
  })
  id: number;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 30,
  })
  name: string;

  @Column({
    name: 'username',
    type: 'varchar',
    length: 30,
  })
  username: string;

  @Column({
    name: 'email',
    type: 'varchar',
    length: 50,
  })
  email: string;

  @Column({
    name: 'password',
    type: 'varchar',
    length: 100,
    select: false,
  })
  password: string;

  @Column({
    name: 'address',
    type: 'json',
  })
  address: string;

  @Column({
    name: 'phone',
    type: 'varchar',
    length: 30,
  })
  phone: string;

  @Column({
    name: 'website',
    type: 'varchar',
    length: 50,
  })
  website: string;

  @Column({
    name: 'company',
    type: 'json',
  })
  company: string;

  @OneToMany(() => PostEntity, (post) => post.user)
  posts: PostEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.user)
  comments: CommentEntity[];

  @Column(() => Timestamp, { prefix: false })
  timestamp: Timestamp;
}
