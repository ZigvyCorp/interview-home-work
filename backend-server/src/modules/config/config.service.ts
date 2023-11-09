import * as _ from 'lodash';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { Inject, Injectable } from '@nestjs/common';

import * as appConfig from '@configs';
import { MODULE_OPTIONS_TOKEN } from './config.module-definition';
import { ConfigModuleOptions, EnvConfig } from './interfaces';

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(@Inject(MODULE_OPTIONS_TOKEN) options: ConfigModuleOptions) {
    // cannot access extra prop `isGlobal` in `options`
    const filePath = `${options.env}.env`;
    const envFile = path.resolve(__dirname, '../../../', filePath);
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
  }

  get(key: string): any {
    return _.get(appConfig, key);
  }

  getEnv(key: string): string {
    return this.envConfig[key];
  }
}
