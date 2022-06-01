import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from 'ormconfig';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // setup for using global for config module
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule, PostsModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService, ConfigModule],
})
export class AppModule {}
