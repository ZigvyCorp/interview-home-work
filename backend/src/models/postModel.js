const db = require('./db');

// Get all posts
const getAllPosts = async () => {
  const result = await db.query('SELECT * FROM posts');
  return result.rows;
};

// Get post by ID
const getPostById = async (id) => {
  const result = await db.query('SELECT * FROM posts WHERE id = $1', [id]);
  return result.rows[0];
};

// Create new post
const createPost = async (post) => {
  const { owner, title, content, tags } = post;
  const result = await db.query(
    'INSERT INTO posts (owner, title, content, tags, created_at) VALUES ($1, $2, $3, $4, NOW()) RETURNING *',
    [owner, title, content, tags]
  );
  return result.rows[0];
};

// Update post by ID
const updatePost = async (id, post) => {
  const { owner, title, content, tags } = post;
  const result = await db.query(
    'UPDATE posts SET owner = $1, title = $2, content = $3, tags = $4 WHERE id = $5 RETURNING *',
    [owner, title, content, tags, id]
  );
  return result.rows[0];
};

// Delete post by ID
const deletePost = async (id) => {
  const result = await db.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
