import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';
import { MongooseModule } from '@nestjs/mongoose';
import { IMongoDbServices } from 'src/core/abstract/data-services/data-mongodb-service.abstract';
import { UserSchema } from '../../core/schema/user.schema';
import { PostSchema } from '../../core/schema/post.schema';
import { CommentSchema } from '../../core/schema/comment.schema';
import { MongoDbServices } from './mongodb-dataservices';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'users',
        schema: UserSchema,
      },
      {
        name: 'posts',
        schema: PostSchema,
      },
      {
        name: 'comments',
        schema: CommentSchema,
      },
    ]),
  ],
  providers: [
    ...databaseProviders,

    {
      provide: IMongoDbServices,
      useClass: MongoDbServices,
    },
  ],
  exports: [...databaseProviders, IMongoDbServices],
})
export class DatabaseModule {}
