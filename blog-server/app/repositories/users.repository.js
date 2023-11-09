const pool = require("../config/db.config");

/**
 * Get all users
 */
const getUsers = async () => {
	const query = `SELECT id, username, name, email, created_time
	FROM ua_user_attr 
	WHERE deleted = FALSE`;

	const result = await pool.query(query);
	return result.rows;
};

/**
 * Add a single user
 */
const addUser = async (user) => {
	const { username, name, email } = user;
	const query = `INSERT INTO ua_user_attr(
    username, name, email)
    VALUES ('${username}', '${name}', '${email}')
    RETURNING id`;

	const res = await pool.query(query);
	return res.rows;
};

/**
 * Add multiple users
 */
const addUsers = async (users = []) => {
	let query = `INSERT INTO ua_user_attr(
    username, name, email)
    VALUES `;

	const userValues = users.map(
		({ username, name, email }) => `('${username}', '${name}', '${email}')`
	);
	query += userValues.join(", ");
	query += " RETURNING id";

	const res = await pool.query(query);
	return res.rows;
};

module.exports = {
	getUsers,
	addUser,
	addUsers,
};
