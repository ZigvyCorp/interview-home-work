import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      url: configService.get<string>('DB_URL'),
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: false,
      logging: false,
      schema: configService.get<string>('DB_SCHEMA'),
      applicationName: configService.get<string>('DB_APP_NAME') || 'blog-api',
    };
  },
};
