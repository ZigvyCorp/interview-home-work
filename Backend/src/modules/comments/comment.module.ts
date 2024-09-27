import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from '~/common/entities/comment.entity';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { UserModule } from '../users/user.module';
import { PostModule } from '../posts/post.module';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity]), UserModule, PostModule],
  controllers: [CommentController],
  providers: [CommentService],
  exports: [CommentService],
})
export class CommentModule {}
