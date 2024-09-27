import databaseConfig from '~/common/configs/database.config';
import authConfig from '~/common/configs/auth.config';
import { TypeOrmConfigService } from '~/common/configs/typeorm-config.service';

import { ModuleMetadata } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiModule } from '~/modules/api.module';

import { DataSource, DataSourceOptions } from 'typeorm';
import jwtConfig from '~/common/configs/jwt.config';

import appFrontEndConfig from '~/common/configs/app-front-end.config';

function generateModulesSet() {
  const imports: ModuleMetadata['imports'] = [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [authConfig, databaseConfig, jwtConfig, appFrontEndConfig],
      envFilePath: ['.env'],
    }),
  ];

  const dbModule = TypeOrmModule.forRootAsync({
    useClass: TypeOrmConfigService,
    dataSourceFactory: async (options: DataSourceOptions) => {
      if (!options) {
        throw new Error('Invalid options passed');
      }

      return new DataSource(options).initialize();
    },
  });

  const customModules: ModuleMetadata['imports'] = [ApiModule, dbModule];

  return imports.concat(customModules);
}

export default generateModulesSet;
