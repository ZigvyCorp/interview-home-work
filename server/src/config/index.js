import { config } from 'dotenv';
config();

const {
  PORT,
  DB_URI,
  USER,
  HOST,
  DATABASE,
  PASSWORD,
  DB_PORT,
} = process.env;

export const port = PORT || 3001;
// export const dbUri = DB_URI;
// export const user = USER;
// export const host = HOST;
// export const database = DATABASE;
// export const password = PASSWORD;
// export const dbPort = DB_PORT || 5433;
export const prefix = '/api';
