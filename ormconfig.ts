import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { BlogEntity } from 'src/modules/blog/entities/blog.entity';

config();

const configService = new ConfigService();

export default new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: String(process.env.DB_PASSWORD),
    database: process.env.DB_DATABASE_NAME,
    entities: ["dist/src/modules/**/entities/**/*{.js,.ts}"],
    migrations: ["dist/migrations/**/*{.js,.ts}"],
    migrationsTableName: process.env.MIGRATIONS_TABLE_NAME,
    logging: true,
} as any);
