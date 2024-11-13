import pool from '../config/db.js';

class Post {
    static async getAllPosts() {
        const res = await pool.query('SELECT * FROM posts');
        return res.rows;
    }

    static async getPostById(id) {
        const res = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
        return res.rows[0];
    }

    static async createPost(data) {
        const res = await pool.query(
            'INSERT INTO posts (owner, title, content, created_at, tags) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [data.owner, data.title, data.content, data.created_at, JSON.stringify(data.tags)]
        );
        return res.rows[0];
    }

    static async updatePost(id, data) {
        const res = await pool.query(
            'UPDATE posts SET owner = $1, title = $2, content = $3 WHERE id = $4 RETURNING *',
            [data.owner || null, data.title || null, data.content || null, id]
        );
        return res.rows[0];
    }

    static async deletePost(id) {
        const res = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
        return res.rows[0];
    }
}

export default Post;