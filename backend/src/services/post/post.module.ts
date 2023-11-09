import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from 'src/controller/post/post.controller';
import { DatabaseModule } from 'src/framework/database-mongodb/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [PostService],
  controllers: [PostController],
  exports: [],
})
export class PostModule {}
