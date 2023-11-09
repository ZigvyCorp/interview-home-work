const pool = require("../config/db.config");

const getPosts = async () => {
	const query = `SELECT id, user_id, title, body, created_time
    FROM pa_post_attr
    WHERE deleted = FALSE`;

	const result = await pool.query(query);
	return result.rows;
};

const getPostById = async (id) => {
	if (!id) return null;

	const query = `SELECT id, user_id, title, body, created_time
    FROM pa_post_attr
    WHERE deleted = FALSE AND id = ${id}`;

	const result = await pool.query(query);
	return result.rows?.[0] || null;
};

const addPost = async (post) => {
	const { user_id, title, body } = post;

	const query = `INSERT INTO pa_post_attr(
    user_id, title, body)
    VALUES (${user_id}, '${title}', '${body}')
    RETURNING id`;

	const res = await pool.query(query);
	return res.rows;
};

const addPosts = async (posts = []) => {
	let query = `INSERT INTO pa_post_attr(
    user_id, title, body)
    VALUES `;

	const postValues = posts.map(
		({ userId, title, body }) => `(${userId}, '${title}', '${body}')`
	);
	query += postValues.join(", ");
	query += " RETURNING id";

	const res = await pool.query(query);
	return res.rows;
};

module.exports = {
	getPosts,
	getPostById,
	addPost,
	addPosts,
};
