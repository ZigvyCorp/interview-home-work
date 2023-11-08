import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { environment } from './common/env';
import { Database } from './types';
import { ZigvyModule } from './zigvy/zigvy.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
      load: [environment]
    }),
    TypeOrmModule.forRootAsync({
      name: "default",
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const database = configService.get<Database>('database');
        return { ...database, logging: false };
      },
      inject: [ConfigService]
    }),
    ZigvyModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
