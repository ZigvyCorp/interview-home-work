import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from '~/common/entities/post.entity';
import { UserModule } from '../users/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity]), UserModule],
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService],
})
export class PostModule {}
