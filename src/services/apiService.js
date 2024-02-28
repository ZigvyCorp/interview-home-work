const { pool } = require('../config/connectDB');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require("dotenv").config();

// Register
const register = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const client = await pool.connect();


            const usernameCheckQuery = 'SELECT * FROM users WHERE username = $1';
            const usernameCheckResult = await client.query(usernameCheckQuery, [data.username]);

            if (usernameCheckResult.rows.length > 0) {
                client.release();
                return resolve({
                    returnCode: -1,
                    status: 'error',
                    content: 'Tên người dùng đã tồn tại',
                    access_token: null
                });
            }


            const hashedPassword = await bcrypt.hash(data.password, 10);


            const insertUserQuery = `
          INSERT INTO users (username, password, name, dob, created_at)
          VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP)
          RETURNING id
        `;
            const insertUserValues = [
                data.username,
                hashedPassword,
                data.name,
                data.dob
            ];
            const insertUserResult = await client.query(insertUserQuery, insertUserValues);
            const userId = insertUserResult.rows[0].id;


            const token = jwt.sign({
                id: userId,
                username: data.username,
                dob: data.dob,
                name: data.name
            }, process.env.JWT_SECRET);

            client.release();

            resolve({
                returnCode: 1,
                status: 'success',
                content: 'Đã tạo thành công',
                access_token: token
            });
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
            reject(error);
        }
    });
};



// Login
const login = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const client = await pool.connect();

            const userQuery = 'SELECT * FROM users WHERE username = $1';
            const userResult = await client.query(userQuery, [data.username]);

            if (userResult.rows.length === 0) {
                client.release();
                return resolve({
                    returnCode: -1,
                    status: 'error',
                    content: 'Tên người dùng không tồn tại',
                    access_token: null
                });
            }

            const user = userResult.rows[0];
            const passwordMatch = await bcrypt.compare(data.password, user.password);

            if (!passwordMatch) {
                client.release();
                return resolve({
                    returnCode: -1,
                    status: 'error',
                    content: 'Mật khẩu không đúng',
                    access_token: null
                });
            }


            const token = jwt.sign({
                id: user.id,
                username: user.username,
                dob: user.dob,
                name: user.name
            }, process.env.JWT_SECRET);


            const updateTokenQuery = 'UPDATE users SET token = $1 WHERE id = $2';
            await client.query(updateTokenQuery, [token, user.id]);

            client.release();

            resolve({
                returnCode: 1,
                status: 'success',
                content: 'Đăng nhập thành công',
                access_token: token
            });
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
            reject(error);
        }
    });
};




// Get All Posts + Search
const getPosts = async (page, search) => {
    try {
        const pages = page.page;
        const limits = page.limit;
        const orderby = page.order;
        const offset = (pages - 1) * limits;

        let queryString = `
            SELECT posts.*, owners.name AS author 
            FROM posts 
            LEFT JOIN owners ON posts.owner = owners.id
        `;

        if (search) {
            queryString += ` WHERE posts.title LIKE '%${search}%'`;
        }

        queryString += ` ORDER BY ${orderby} OFFSET $1 LIMIT $2`;

        const result = await pool.query(
            queryString,
            [offset, limits]
        );

        const posts = result.rows;

        return posts;
    } catch (err) {
        console.log(err);
        return [];
    }
};



// Get Comments off Post
const getComments = async (page) => {
    try {

        const pages = page.page
        const limits = page.limit
        const orderby = page.order
        const post_id = page.id
        const offset = (pages - 1) * limits;


        const result = await pool.query(
            `SELECT * FROM comments WHERE post = $1 ORDER BY ${orderby} OFFSET $2 LIMIT $3`,
            [post_id, offset, limits]
        );


        const comments = result.rows;

        return comments;
    } catch (err) {
        console.log(err);
        return [];
    }
};







module.exports =
{
    register,
    login,
    getPosts,
    getComments

}
