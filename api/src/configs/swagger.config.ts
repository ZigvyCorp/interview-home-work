import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import fs = require('fs');
const json = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// eslint-disable-next-line prettier/prettier
const setupSwagger = ({ app, swaggerPrefix }: { app: NestExpressApplication; swaggerPrefix: string }) => {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Blog API')
    .setDescription('Blog API description')
    .setVersion(json.version)
    .addTag('API V1')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup(swaggerPrefix || 'v1/api/docs', app, document);
};

export { setupSwagger };
