import { Module } from '@nestjs/common';
import { CommentsModule } from './modules/comments/comments.module';
import { PostsModule } from './modules/posts/posts.module';
import { UsersModule } from './modules/users/users.module';
import { globalModules } from './utils/global-modules';
import { DataModule } from './modules/data/data.module';

@Module({
  imports: [
    ...globalModules,
    UsersModule,
    PostsModule,
    CommentsModule,
    DataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
