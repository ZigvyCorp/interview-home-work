import pool from '../config/db.js';

class User {
    static async getAllUsers() {
        const res = await pool.query('SELECT*FROM users');
        return res.rows;
    }

    static async getUserById(id) {
        const res = await pool.query('SELECT*FROM users WHERE id=$1', [id]);
        return res.rows[0];
    }

    static async createUser(data) {
        const res = await pool.query(
            'INSERT INTO users (username,password,name,dob ,created_at ) VALUES ($1,$2,$3,$4,$5 ) RETURNING*',
            [data.username, data.password, data.name, data.dob, data.created_at]
        );

        return res.rows[0];
    }

    static async updateUser(id, data) {
        const res = await pool.query(
            'UPDATE users SET username = $1,password=$2,name=$3,dob=$4 WHERE id=$5 RETURNING*',
            [data.username || null, data.password || null, data.name || null, data.dob || null, id]
        );
        return res.rows[0];
    }

    static async deleteUser(id) {
        const res = await pool.query('DELETE FROM users WHERE id=$1 RETURNING*', [id]);
        return res.rows[0];
    }
}

export default User;