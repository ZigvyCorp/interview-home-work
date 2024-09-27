const db = require('./db');

// Get all comments
const getAllComments = async () => {
  const result = await db.query('SELECT * FROM comments');
  return result.rows;
};

// Get comment by ID
const getCommentById = async (id) => {
  const result = await db.query('SELECT * FROM comments WHERE id = $1', [id]);
  return result.rows[0];
};

// Create new comment
const createComment = async (comment) => {
  const { owner, post, content } = comment;
  const result = await db.query(
    'INSERT INTO comments (owner, post, content, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *',
    [owner, post, content]
  );
  return result.rows[0];
};

// Update comment by ID
const updateComment = async (id, comment) => {
  const { content } = comment;
  const result = await db.query(
    'UPDATE comments SET content = $1 WHERE id = $2 RETURNING *',
    [content, id]
  );
  return result.rows[0];
};

// Delete comment by ID
const deleteComment = async (id) => {
  const result = await db.query('DELETE FROM comments WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};
