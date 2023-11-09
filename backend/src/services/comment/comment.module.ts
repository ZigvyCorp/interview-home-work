import { Module } from '@nestjs/common';
import { CommentSevice } from './comment.service';
import { CommentController } from 'src/controller/comment/comment.controller';
import { DatabaseModule } from 'src/framework/database-mongodb/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [CommentSevice],
  controllers: [CommentController],
  exports: [],
})
export class CommentModule {}
