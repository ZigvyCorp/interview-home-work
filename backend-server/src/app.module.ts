import { Module } from '@nestjs/common';

import {
  CommentModule,
  UserModule,
  PostModule,
  DatabaseModule,
  ConfigModule,
  CommonModule,
} from '@modules';

@Module({
  imports: [
    ConfigModule.forRoot({ env: process.env.NODE_ENV || 'dev' }),
    DatabaseModule,
    PostModule,
    UserModule,
    CommentModule,
    CommonModule,
  ],
})
export class AppModule {}
