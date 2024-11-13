import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { PrismaService } from './prisma/prisma.service';
import { CommentModule } from './comment/comment.module';
import { UserModule } from './user/user.module';
import * as cors from 'cors';

@Module({
  imports: [PostsModule, CommentModule, UserModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {
  configure(comsumer: MiddlewareConsumer) {
    comsumer.apply(cors()).forRoutes('*');
  }
}
