import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostRepository } from './repositories/posts.repository';

@Module({
  imports:[
    TypeOrmModule.forFeature([PostRepository])
  ],
  controllers: [PostsController],
  providers: [PostsService],
  exports:[PostsService],
})
export class PostsModule {}
