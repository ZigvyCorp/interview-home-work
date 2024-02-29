import pkg from 'pg';

const { Pool } = pkg;

export default async () => {
  return new Pool({
    user: 'postgres',
    host: 'postgres-db.c96gy480w8v7.ap-southeast-2.rds.amazonaws.com',
    database: 'postgres',
    password: 'deltora1234',
    port: 5432,
    ssl: {
      rejectUnauthorized: false,
    },
  });
};
