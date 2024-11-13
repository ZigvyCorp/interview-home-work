import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { globalEntities } from '../../utils/global-entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature(globalEntities)],
  providers: [PostsService],
  exports: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
