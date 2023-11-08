import { Module } from '@nestjs/common';

import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { PostModule } from './modules/post/post.module';
import { UserModule } from './modules/user/user.module';
import { CommentModule } from './modules/comment/comment.module';

@Module({
  imports: [
    ConfigModule.forRoot({ env: process.env.NODE_ENV || 'dev' }),
    DatabaseModule,
    PostModule,
    UserModule,
    CommentModule,
  ],
})
export class AppModule {}
