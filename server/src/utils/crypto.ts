import { createHash } from 'crypto';
import { ENV_CONFIG } from '~/constants/config';

export const sha256 = (content: string) => {
  return createHash('sha256').update(content).digest('hex');
};

export const hashPassword = (password: string) => {
  return sha256(password + ENV_CONFIG.PASSWORD_SECRET);
};
