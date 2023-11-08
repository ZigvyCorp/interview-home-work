import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

import { Inject, Injectable } from '@nestjs/common';
import { MODULE_OPTIONS_TOKEN } from './config.module-definition';
import { ConfigModuleOptions, EnvConfig } from './interfaces';

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(@Inject(MODULE_OPTIONS_TOKEN) options: ConfigModuleOptions) {
    // cannot access extra prop `isGlobal` in `options`
    const filePath = `${process.env.NODE_ENV || 'dev'}.env`;
    const envFile = path.resolve(__dirname, '../../', options.folder, filePath);
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
