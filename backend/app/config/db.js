import pkg from 'pg';
const { Pool } = pkg;
import { config } from 'dotenv';
config();
import fs from 'node:fs'

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
                created_at TIMESTAMP \
            ); \
            CREATE TABLE IF NOT EXISTS posts ( \
                id SERIAL PRIMARY KEY, \
                owner INT REFERENCES users(id), \
                title VARCHAR(100) NOT NULL, \
                content TEXT NOT NULL, \
                created_at TIMESTAMP, \
                tags TEXT[] \
            ); \
            CREATE TABLE IF NOT EXISTS comments ( \
                id SERIAL PRIMARY KEY, \
                owner INT REFERENCES users(id), \
                post INT REFERENCES posts(id), \
                content TEXT NOT NULL, \
                created_at TIMESTAMP \
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

async function readJSONFiles() {
    try {
        // Helper function to read a JSON file using streams
        const readJSONFile = async (filePath) => {
            const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });
            let chunkStream = '';
            for await (const chunk of readStream) {
                chunkStream += chunk;
            }
            return JSON.parse(chunkStream);
        };

        // Read all the JSON files asynchronously
        const [commentsData, postsData, usersData] = await Promise.all([
            readJSONFile('../data/comments.json'),
            readJSONFile('../data/posts.json'),
            readJSONFile('../data/users.json')
        ]);

        return {
            comments: commentsData,
            posts: postsData,
            users: usersData
        };
    } catch (error) {
        console.error("Error reading files:", error);
    }
}

async function insertData(data) {
    const { comments, posts, users } = data;
    try {
        // Insert Users
        for (let user of users) {
            await pool.query(
                'INSERT INTO users (id, username, password, name, dob, created_at) VALUES ($1, $2, $3, $4, $5, to_timestamp($6 / 1000))',
                [user.id, user.username, user.password, user.name, user.dob.split('/').reverse().join('-'), user.created_at]
            );
        }
        // Insert Posts
        for (let post of posts) {
            await pool.query(
                'INSERT INTO posts (id, owner, title, content, created_at, tags) VALUES ($1, $2, $3, $4, to_timestamp($5 / 1000), $6)',
                [post.id, post.owner, post.title.replace(/"/g, '""'), post.content.replace(/"/g, '""'), post.created_at, post.tags]
            );
        }
        // Insert Comments
        for (let comment of comments) {
            await pool.query(
                'INSERT INTO comments (id, owner, post_id , content , created_at) VALUES ($1,$2,$3,$4,to_timestamp($5 / 1000))',
                [comment.id, comment.owner, comment.post, comment.content.replace(/"/g, '""'), comment.created_at]
            );
        }
    } catch (error) {
        console.error("Error inserting data:", error);
    }
}

export default pool;
export { createBlogTable, readJSONFiles, insertData };
