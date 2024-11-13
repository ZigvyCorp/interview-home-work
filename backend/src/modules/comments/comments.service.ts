import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostType } from '../posts/post';
import { Post } from '../posts/post.entity';
import { UserType } from '../users/user';
import { User } from '../users/user.entity';
import { CommentType } from './comment';
import { Comment } from './comment.entity';
import { CreateCommentForm } from './dtos/create-comment.form';
import { UpdateCommentForm } from './dtos/update-comment.form';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<PostType>,
    @InjectRepository(User) private userRepository: Repository<UserType>,
    @InjectRepository(Comment)
    private commentRepository: Repository<CommentType>,
  ) {}
  async create(createCommentForm: CreateCommentForm) {
    const user = await this.userRepository.findOne({
      where: { id: createCommentForm.userId },
    });

    if (!user) {
      throw new NotFoundException(
        `User with ID ${createCommentForm.userId} not found`,
      );
    }

    const post = await this.postRepository.findOne({
      where: { id: createCommentForm.postId },
    });

    if (!post) {
      throw new NotFoundException(
        `Post with ID ${createCommentForm.postId} not found`,
      );
    }

    const newComment = this.commentRepository.create({
      ...createCommentForm,
      user: user,
      post: post,
    });

    return this.commentRepository.save(newComment);
  }

  async findById(id: number) {
    const comment = await this.commentRepository.findOne({
      where: { id },
      relations: ['user', 'post'],
    });
    if (!comment) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }
    return comment;
  }

  getAll() {
    return this.commentRepository.find({ relations: ['user', 'post'] });
  }

  async update(id: number, updateCommentForm: UpdateCommentForm) {
    const comment = await this.commentRepository.findOne({
      where: { id },
      relations: ['user', 'post'],
    });
    if (!comment) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }

    Object.assign(comment, updateCommentForm);

    return this.commentRepository.save(comment);
  }

  delete(id: number) {
    this.commentRepository.delete(id);
    return null;
  }
}
