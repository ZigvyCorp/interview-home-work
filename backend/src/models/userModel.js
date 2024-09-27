const db = require('./db');

// Get all users
const getAllUsers = async () => {
  const result = await db.query('SELECT * FROM users');
  return result.rows;
};

// Get user by ID
const getUserById = async (id) => {
  const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

// Create new user
const createUser = async (user) => {
  const { username, password, name, dob } = user;
  const result = await db.query(
    'INSERT INTO users (username, password, name, dob, created_at) VALUES ($1, $2, $3, $4, NOW()) RETURNING *',
    [username, password, name, dob]
  );
  return result.rows[0];
};

// Update user by ID
const updateUser = async (id, user) => {
  const { username, password, name, dob } = user;
  const result = await db.query(
    'UPDATE users SET username = $1, password = $2, name = $3, dob = $4 WHERE id = $5 RETURNING *',
    [username, password, name, dob, id]
  );
  return result.rows[0];
};

// Delete user by ID
const deleteUser = async (id) => {
  const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
