import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export type Database = TypeOrmModuleOptions;


export type Environment = {
  server: {
    port: number;
  }
  database: Database;
};
