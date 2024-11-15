import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import path = require('path');
import { typeOrmAsyncConfig } from './configs/typeorm.config';
import { LoggerModule } from './modules/logger/logger.module';
import { AppLoggerMiddleware } from './middlewares/logger/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: path.join(__dirname, `../.env`),
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    LoggerModule.register('blog-app'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
