import validateConfig from 'src/utils/validate-config';
import { registerAs } from '@nestjs/config';
import { IsString } from 'class-validator';
import { AppFrontEndConfig } from './type/app-front-end.type';

class EnvironmentVariablesValidator {
  @IsString()
  APP_URL: string;
}

export default registerAs<AppFrontEndConfig>('app', () => {
  console.info(`Register AppFrontEndConfig from environment variables`);
  validateConfig(process.env, EnvironmentVariablesValidator);

  return {
    appFrontEndUrl: process.env.APP_URL,
  };
});
