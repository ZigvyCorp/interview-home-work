const pool = require("../config/db.config");

const getCommentsByPost = async (postId) => {
	const query = `SELECT id, post_id, user_id, body, created_time
	FROM pc_post_comment 
  WHERE deleted = FALSE AND post_id = '${postId}'
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
