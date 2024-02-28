const jwt = require('jsonwebtoken');
const { pool } = require('../config/connectDB');

const verifyToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(400).json({ success: false, message: 'Token không được cung cấp' });
    }

    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(400).json({ success: false, message: 'Token không được cung cấp' });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {

        if (err) {
            return res.status(400).json({ success: false, message: 'Token không hợp lệ' });
        }
        try {

            const client = await pool.connect();

            const result = await client.query('SELECT * FROM users WHERE id = $1', [decoded.id]);

            if (result.rows.length === 0) {
                client.release();
                return res.status(404).json({ success: false, message: 'Người dùng không tồn tại' });
            }

            req.user = result.rows[0];
            client.release();
            next();
        } catch (error) {
            console.error('Lỗi trong quá trình xác thực token:', error);
            return res.status(500).json({ success: false, message: 'Đã xảy ra lỗi trong quá trình xác thực token' });
        }
    });
};

module.exports = verifyToken;