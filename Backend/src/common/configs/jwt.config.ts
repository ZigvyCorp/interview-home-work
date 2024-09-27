import validateConfig from 'src/utils/validate-config';
import { registerAs } from '@nestjs/config';
import { IsString } from 'class-validator';
import { JwtConfig } from './type/jwt.type';

class EnvironmentVariablesValidator {
  @IsString()
  JWT_PRIVATE_KEY: string;
}

export default registerAs<JwtConfig>('jwt', () => {
  console.info(`Register JwtConfig from environment variables`);
  validateConfig(process.env, EnvironmentVariablesValidator);

  return {
    jwtPrivateKey: process.env.JWT_PRIVATE_KEY,
  };
});
