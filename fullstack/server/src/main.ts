import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //api prefix
  app.setGlobalPrefix('api');
  //CORS
  app.enableCors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTION"],
    credentials: true
  });
  //Helmet
  app.use(helmet());
  //start server
  await app.listen(5000);
}
bootstrap();
