import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostService } from './services/post.service';
import { PostController } from './controllers/post.controller';
import { CommentEntity, PostEntity, UserEntity} from './entities';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      CommentEntity, PostEntity, UserEntity
    ]),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class ZigvyModule {}
