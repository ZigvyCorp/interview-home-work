import { AuthConfig } from './auth.type';
import { DatabaseConfig } from './db.type';
import { JwtConfig } from './jwt.type';

import { AppFrontEndConfig } from './app-front-end.type';

export type AllConfigType = {
  auth: AuthConfig;
  database: DatabaseConfig;
  jwt: JwtConfig;
  app: AppFrontEndConfig;
};
