import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  CustomLogger,
  GlobalExceptionFilter,
  LoggingInterceptor,
  TransformInterceptor,
} from '@common';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true, // make sure all logs will be buffered until a custom logger is attached
  });
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useLogger(new CustomLogger());
  app.useGlobalInterceptors(
    new LoggingInterceptor(),
    new TransformInterceptor(),
  );
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
