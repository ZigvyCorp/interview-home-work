import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PostsEntity } from './entity/posts.entity';
import { CommentModule } from '../comment/comment.module';

@Module({
  imports: [TypeOrmModule.forFeature([PostsEntity]), CommentModule],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [],
})
export class PostsModule {}
