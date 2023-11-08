import dotenv from 'dotenv';
dotenv.config();

export const ENV_CONFIG = {
  PORT: process.env.PORT as string,
  DB_USERNAME: process.env.DB_USERNAME as string,
  DB_PASSWORD: process.env.DB_PASSWORD as string,
  DB_NAME: process.env.DB_NAME as string,
  DB_BLOGS_COLLECTION: process.env.DB_BLOGS_COLLECTION as string
} as const;
