import * as dotenv from 'dotenv';
import { ConnectionOptions } from "typeorm";
dotenv.config();

const typeOrmConfig:ConnectionOptions = {
  type:'postgres',
  host: process.env.HOST || "localhost",
  port: parseInt(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_DATABASE || "root",
  entities: ["dist/src/**/*.entity{.ts,.js}"],
  synchronize: false, // true is Unsafe not use for product and migration
  migrationsRun: true,
  migrations: ["dist/src/migrations/*{.ts,.js}"],
  migrationsTableName: "migrations",
  cli:{
    migrationsDir: "src/migrations",
  },
}
export default typeOrmConfig