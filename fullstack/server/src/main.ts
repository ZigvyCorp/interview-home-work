import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //CORS
  app.enableCors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "HEAD", "POST", "PUT", "DELETE", "OPTION"],
    credentials: true
  });
  //Helmet
  app.use(helmet());
  await app.listen(5000);
}
bootstrap();
