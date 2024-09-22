import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CommentsData from '../../data/comments.json';
import PostsData from '../../data/posts.json';
import UsersData from '../../data/users.json';
import { CommentType } from '../comments/comment';
import { Comment } from '../comments/comment.entity';
import { PostType } from '../posts/post';
import { Post } from '../posts/post.entity';
import { UserType } from '../users/user';
import { User } from '../users/user.entity';

@Injectable()
export class DataService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<UserType>,
    @InjectRepository(Post) private postRepository: Repository<PostType>,
    @InjectRepository(Comment)
    private commentRepository: Repository<CommentType>,
  ) {}
  async importMockData() {
    try {
      // Import users
      const users = await Promise.all(
        UsersData.map((userData) =>
          this.userRepository.save(this.userRepository.create(userData)),
        ),
      );

      // Import posts
      const posts = await Promise.all(
        PostsData.map((postData) => {
          const post = this.postRepository.create(postData);
          post.user = users.find((user) => user.id === postData.userId);
          return this.postRepository.save(post);
        }),
      );

      // Import comments
      await Promise.all(
        CommentsData.map((commentData) => {
          const comment = this.commentRepository.create(commentData);
          comment.post = posts.find((post) => post.id === commentData.postId);
          comment.user = users.find((user) => user.id === commentData.userId);
          return this.commentRepository.save(comment);
        }),
      );

      console.log('Mock data imported successfully');
    } catch (error) {
      console.error('Error importing mock data:', error);
    }
  }
}
