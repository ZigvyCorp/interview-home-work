import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envKeys } from './env.key';
import { globalEntities } from './global-entities';

export const globalModules = [
  ConfigModule.forRoot(),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get(envKeys.DATABASE_HOST),
      port: configService.get(envKeys.DATABASE_PORT),
      username: configService.get(envKeys.DATABASE_USERNAME),
      password: configService.get(envKeys.DATABASE_PASSWORD),
      database: configService.get(envKeys.DATABASE_NAME),
      url: configService.get(envKeys.DATABASE_URL),
      entities: globalEntities,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    inject: [ConfigService],
  }),
];
