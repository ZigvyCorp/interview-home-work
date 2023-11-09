const pool = require("../config/db.config");

const getPosts = async (page, size, search) => {
	const searchCondition = search ? `AND pa.title LIKE '%${search}%'` : "";
	const offset = Math.max(page - 1, 0) * size;

	const query = `SELECT pa.id, 
			pa.title, 
			pa.body,
			pa.created_time,
			pa.user_id, 
			ua.username,
			ua.name as user_display_name,
			(SELECT COUNT(*) FROM pc_post_comment pc 
				WHERE pc.post_id = pa.id 
				AND pc.deleted = FALSE) AS comments_count
    FROM pa_post_attr pa
		JOIN ua_user_attr ua
			ON pa.user_id = ua.id
    WHERE pa.deleted = FALSE
			${searchCondition}
		ORDER BY pa.created_time DESC 
		OFFSET ${offset} LIMIT ${size}`;

	const result = await pool.query(query);
	return result.rows;
};

const getPostById = async (id) => {
	if (!id) return null;

	const query = `SELECT pa.id, 
		pa.title, 
		pa.body,
		pa.created_time,
		pa.user_id, 
		ua.username,
		ua.name as user_display_name,
		(SELECT COUNT(*) FROM pc_post_comment pc 
			WHERE pc.post_id = pa.id 
			AND pc.deleted = FALSE) AS comments_count
	FROM pa_post_attr pa
	JOIN ua_user_attr ua
		ON pa.user_id = ua.id
	WHERE pa.deleted = FALSE AND pa.id = ${id}`;

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
