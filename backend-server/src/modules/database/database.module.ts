import { DATABASE_URL } from '@common';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ConfigService } from 'src/modules/config/config.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.getEnv(DATABASE_URL),
        ...configService.get('mongo.options'),
      }),
    }),
  ],
})
export class DatabaseModule {}
