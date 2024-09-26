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

async function createBlogTable() {
    try {
        await pool.query(
            "\
            CREATE TABLE IF NOT EXISTS users ( \
                id SERIAL PRIMARY KEY, \
                username VARCHAR(50) NOT NULL, \
                password VARCHAR(255) NOT NULL, \
                name VARCHAR(100), \
                dob DATE, \
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP \
            ); \
            CREATE TABLE IF NOT EXISTS posts ( \
                id SERIAL PRIMARY KEY, \
                owner INT REFERENCES users(id), \
                title VARCHAR(100) NOT NULL, \
                content TEXT NOT NULL, \
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, \
                tags TEXT[] \
            ); \
            CREATE TABLE IF NOT EXISTS comments ( \
                id SERIAL PRIMARY KEY, \
                owner INT REFERENCES users(id), \
                post INT REFERENCES posts(id), \
                content TEXT NOT NULL, \
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP \
            );",
            (error) => {
                if (error) {
                    throw error;
                }
            }
        );
    } catch (error) {
        console.log(error.message);
    }
}

export default pool;
export { createBlogTable };
