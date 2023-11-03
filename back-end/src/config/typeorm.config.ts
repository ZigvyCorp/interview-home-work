import 'reflect-metadata';
import { ConnectionOptions } from 'typeorm';

require('dotenv').config();
const typeOrmConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [__dirname + '/../models/*.model.{js,ts}'],
  migrations: [__dirname + '/../database/migrations/*.{js,ts}'],
  subscribers: [],
  cli: {
    migrationsDir: __dirname + '/../database/migrations',
  },
};


export = typeOrmConfig;
