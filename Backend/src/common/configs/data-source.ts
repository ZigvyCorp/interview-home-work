import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

export const AppDataSource = new DataSource({
  type: process.env.DATABASE_TYPE,
  url: process.env.DATABASE_URL,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT
    ? parseInt(process.env.DATABASE_PORT, 10)
    : 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
  dropSchema: true,
  keepConnectionAlive: true,
  logging: process.env.DATABASE_LOGGING === 'true',
  entities: [__dirname + '../../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '../../migrations/**/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  poolSize: process.env.DATABASE_MAX_CONNECTIONS
    ? parseInt(process.env.DATABASE_MAX_CONNECTIONS, 10)
    : 100,
  seeds: [__dirname + '../../seeds/**/*{.ts,.js}'],
  seedTracking: true,
  factories: [__dirname + '../../factories/**/*{.ts,.js}'],
} as DataSourceOptions & SeederOptions);
