import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const nodeEnv = configService.get("NODE_ENV");
  const port = configService.get(`${nodeEnv}_PORT`) || 5000;
  await app.listen(port);
  console.log(`App listening on port: ${port}`);
}
bootstrap();
