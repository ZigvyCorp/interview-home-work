import { Module } from '@nestjs/common';

import {
  CommentModule,
  UserModule,
  PostModule,
  DatabaseModule,
  ConfigModule,
} from '@modules';

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
