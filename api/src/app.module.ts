import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './configs/typeorm.config';
import { AppLoggerMiddleware } from './middlewares/logger/logger.middleware';
import { AuthModule } from './modules/auth/auth.module';
import { CommentModule } from './modules/comment/comment.module';
import { LoggerModule } from './modules/logger/logger.module';
import { PostsModule } from './modules/posts/posts.module';
import { UserModule } from './modules/user/user.module';
import path = require('path');
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: path.join(__dirname, `../.env`),
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    LoggerModule.register('blog-app'),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: configService.get<string>('JWT_EXPIRES_IN') },
      }),
      global: true,
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
    PostsModule,
    CommentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
