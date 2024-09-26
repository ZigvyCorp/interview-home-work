import pool from '../config/db.js';

class Comment {
    static async getAllComments() {
        const res = await pool.query('SELECT * FROM comments');
        return res.rows;
    }

    static async getCommentsByPostId(postId) {
        const res = await pool.query('SELECT * FROM comments WHERE post = $1', [postId]);
        return res.rows;
    }

    static async createComment(data) {
        const res = await pool.query(
            'INSERT INTO comments (owner, post, content, created_at) VALUES ($1, $2, $3, $4) RETURNING *',
            [data.owner, data.post, data.content, data.created_at]
        );
        return res.rows[0];
    }

    static async updateComment(id, data) {
        const res = await pool.query(
            'UPDATE comments SET owner = $1 , content= $2 WHERE id= $3 RETURNING *',
            [data.owner || null, data.content || null, id]
        );
        return res.rows[0];
    }

    static async deleteComment(id) {
        const res = await pool.query('DELETE FROM comments WHERE id=$1 RETURNING*', [id]);
        return res.rows[0];
    }
}

export default Comment;