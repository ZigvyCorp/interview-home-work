import pkg from 'pg';
const { Pool } = pkg;
import { config } from 'dotenv';
config();

const pool = new Pool({
    user: process.env.POSTGRE_USER,
    host: process.env.POSTGRE_HOST,
    database: process.env.POSTGRE_DATABASE,
    password: process.env.POSTGRE_PASSWORD,
    port: process.env.POSTGRE_PORT,
});

export default pool;
