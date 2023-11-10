import dotenv from 'dotenv';
dotenv.config();

export const ENV_CONFIG = {
  PORT: process.env.PORT as string,
  PASSWORD_SECRET: process.env.PASSWORD_SECRET as string,
  CLIENT_URL: process.env.CLIENT_URL as string,

  DB_USERNAME: process.env.DB_USERNAME as string,
  DB_PASSWORD: process.env.DB_PASSWORD as string,
  DB_NAME: process.env.DB_NAME as string,
  DB_BLOGS_COLLECTION: process.env.DB_BLOGS_COLLECTION as string,
  DB_USERS_COLLECTION: process.env.DB_USERS_COLLECTION as string,
  DB_REFRESH_TOKENS_COLLECTION: process.env.DB_REFRESH_TOKENS_COLLECTION as string,
  DB_COMMENTS_COLLECTION: process.env.DB_COMMENTS_COLLECTION as string,

  JWT_SECRET_ACCESS_TOKEN: process.env.JWT_SECRET_ACCESS_TOKEN as string,
  JWT_SECRET_REFRESH_TOKEN: process.env.JWT_SECRET_REFRESH_TOKEN as string,
  ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN as string,
  REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN as string
} as const;
