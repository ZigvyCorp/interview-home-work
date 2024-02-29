import pkg from 'pg';
import { user, host, database, password, dbPort } from '#root/config/index.js';

const { Pool } = pkg;

export default async () => {
  return new Pool({
    user: user,
    host: host,
    database: database,
    password: password,
    port: dbPort,
  });
};
