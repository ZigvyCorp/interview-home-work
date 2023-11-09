import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as moment from 'moment';
import { map } from 'lodash';
import { UserEntity, PostEntity, CommentEntity } from '../entities';


import * as UserJson from './../../mock/users.json';
import * as PostJson from './../../mock/posts.json';
import * as CommentJson from './../../mock/comments.json';


@Injectable()
export class InitialService implements OnModuleInit {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>
  ) { }

  onModuleInit() {
    this.initialData();
  }

  async initialData(): Promise<any> {
    // Create user
    const [eUser, ePost, eComment] = await Promise.all([
      this.userRepository.find(),
      this.postRepository.find(),
      this.commentRepository.find(),
    ]);
    if (eUser.length <= 0) {
      const users = map(UserJson, u => {
        return {
          name: u.name,
          username: u.username,
          password: u.password,
          dob:  moment()
        }
      });
      await this.userRepository.save(users);
    }
    if (ePost.length <= 0) {
      const posts = map(PostJson,p => {
        return {
          title: p.title,
          content: p.content,
          tags: p.tags,
          owner: p.owner,
        }
      }) as any;
      await this.postRepository.save(posts);
    }
    if(eComment.length<=0) {
      const comments = map(CommentJson,p => {
        return {
          content: p.content,
          post: p.post,
          owner: p.owner,
        }
      }) as any;
      await this.commentRepository.save(comments);
    }
  }

}
