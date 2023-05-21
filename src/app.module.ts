import { Module } from '@nestjs/common';
import { BlogModule } from './modules/blog/blog.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { migrations } from './database';
import { DataSource } from 'typeorm';
import { CommentModule } from './modules/comment/comment.module';
import { CloudinaryModule } from './modules/cloudinary/cloudinary.module';
import { BlogEntity } from './modules/blog/entities/blog.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: String(process.env.DB_PASSWORD),
      database: process.env.DB_DATABASE_NAME,
      migrations: migrations,
      autoLoadEntities: true,
      entities: ["dist/src/modules/**/entities/**/*{.js,.ts}"],
      migrationsTableName: process.env.MIGRATIONS_TABLE_NAME,
      logging: true,
      migrationsRun: Boolean(process.env.DB_MIGRATION_RUN),
    }),
    BlogModule,
    CommentModule,
    CloudinaryModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
