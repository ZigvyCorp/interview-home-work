import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostService, CommentService, InitialService, UserService } from './services';
import { PostController, CommentController, UserController } from './controllers';
import { CommentEntity, PostEntity, UserEntity} from './entities';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      CommentEntity, PostEntity, UserEntity
    ]),
  ],
  controllers: [PostController, CommentController, UserController],
  providers: [PostService, CommentService, InitialService, UserService],
})
export class ZigvyModule {}
