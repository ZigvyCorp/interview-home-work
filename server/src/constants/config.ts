import dotenv from 'dotenv';
dotenv.config();

export const ENV_CONFIG = {
  PORT: process.env.PORT as string
} as const;
