import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';
import { Environment } from './types';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api');
  app.enableCors();

  const configs = app.get(ConfigService);
  const selfConfig = configs.get<Environment['server']>('server');
  await app.listen(selfConfig.port);
  Logger.log(`🚀 HTTP Port is listening on port ${selfConfig.port}`, 'Server');

}
bootstrap();
