import express, { Express } from 'express';
import { createConnection } from 'typeorm';
import routes from './routes';
import typeOrmConfig from './config/typeorm.config';
import { pathsConfig } from './config/typescript';

require('dotenv').config();
const bootstrap = async () => {
  try {
    await createConnection(typeOrmConfig);
  }
  catch(error) {
    console.error("Connect to db error")
    console.log(error);
    return;
  }

  const app: Express = express();
  pathsConfig();

  const PORT = process.env.PORT;
  routes(app);

  app.listen(PORT, () => {
    console.info(`Server is running on http://localhost:${PORT}`);
  });
}
bootstrap()
