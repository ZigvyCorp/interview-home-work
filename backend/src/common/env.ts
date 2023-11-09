import 'dotenv/config';

import { Database, Environment } from './../types';
import { join } from 'path';
export const environment = (): Environment => ({
    server: {
        port: parseInt(process.env.SERVER_PORT)
    },
    database: {
        type: 'postgres',
        host: process.env.PG_HOST,
        port: parseInt(process.env.PG_PORT),
        database: process.env.PG_DBNAME,
        username: process.env.PG_USER,
        password: process.env.PG_PASS,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        autoLoadEntities: true,
        keepConnectionAlive: true,
        synchronize: true,
    },
});

/* Use for migration TypeORM */
export const typeOrmConfig: Database & any = {
    type: 'postgres',
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT),
    database: process.env.PG_DBNAME,
    username: process.env.PG_USER,
    password: process.env.PG_PASS,
    entities: ['src/**/*.entity.{js,ts}', join(__dirname, '../../../src/**/*.entity.{js,ts}')],
    migrations: ['database/**/*.{js,ts}'],
    cli: {
        migrationsDir: 'database/migrations'
    },
    extra: {
        charset: 'utf8mb4_unicode_ci'
    },
    synchronize: true,
    logging: true
};

