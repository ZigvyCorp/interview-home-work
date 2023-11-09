const pool = require("../config/db.config");

const getCommentsByPost = async (postId) => {
	const query = `SELECT pc.id, 
    pc.post_id, 
    pc.body, 
    pc.created_time,
    pc.user_id, 
    ua.username,
		ua.name as user_display_name
	FROM pc_post_comment pc
  JOIN ua_user_attr ua
    ON pc.user_id = ua.id
  WHERE pc.deleted = FALSE AND pc.post_id = '${postId}'
  ORDER BY created_time DESC`;

	const res = await pool.query(query);
	return res.rows;
};

const addComment = async (comment) => {
	const { postId, userId, body } = comment;
	const query = `INSERT INTO public.pc_post_comment(
    post_id, user_id, body)
    VALUES (${postId}, ${userId}, '${body}')
    RETURNING id`;

	const res = await pool.query(query);
	return res.rows;
};

const addComments = async (comments = []) => {
	let query = `INSERT INTO pc_post_comment(
    post_id, user_id, body)
    VALUES `;

	const cmtValues = comments.map(
		({ postId, userId, body }) => `(${postId}, ${userId}, '${body}')`
	);

	query += cmtValues.join(", ");
	query += " RETURNING id";

	const res = await pool.query(query);
	return res.rows;
};

module.exports = {
	getCommentsByPost,
	addComment,
	addComments,
};
