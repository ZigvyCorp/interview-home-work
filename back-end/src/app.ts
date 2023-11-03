import express, { Express } from 'express';
import { createConnection } from 'typeorm';
import routes from './routes';
import typeOrmConfig from './config/typeorm.config';
import { pathsConfig } from './config/typescript';
import bodyParser from 'body-parser';
import cors from 'cors';

require('dotenv').config();

const option = {
  "origin": "http://localhost:3000",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
};

const bootstrap = async () => {
  try {
    await createConnection(typeOrmConfig);
  }
  catch (error) {
    console.error("Connect to db error")
    console.log(error);
    return;
  }

  const app: Express = express();
  const PORT = process.env.PORT;

  app.use(bodyParser.json())
  app.use(cors(option))

  pathsConfig();
  routes(app);

  app.listen(PORT, () => {
    console.info(`Server is running on http://localhost:${PORT}`);
  });
}
bootstrap()
