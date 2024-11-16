import { ConfigService } from '@nestjs/config';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/exception-filter/all-exception.filter';
import { setupSwagger } from './configs/swagger.config';
import { LoggerService } from './modules/logger/logger.service';

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);
  const swaggerPrefix: string = config.get<string>('SWAGGER_PREFIX');
  const httpAdapter = app.get(HttpAdapterHost);
  const port: number = config.get<number>('PORT');
  const loggerService = app.get(LoggerService);
  const nodeEnv: string = config.get<string>('NODE_ENV');
  app.setGlobalPrefix('v1/api');

  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
  });

  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  if (nodeEnv !== 'production') {
    setupSwagger({
      app,
      swaggerPrefix,
    });
  }

  await app.listen(port, () => {
    loggerService.log(`Server started on port ${port}`);
  });
}

bootstrap();
