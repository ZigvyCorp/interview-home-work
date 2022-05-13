const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  owener: {
    type: String,
    required: true
  },
  post: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  create_at: String
}, { versionKey: false });

module.exports = mongoose.model('Comment', commentSchema);

/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id
 *         owener:
 *           type: string
 *           description: The author
 *         post:
 *           type: string
 *           description: The id of post
 *         content:
 *           type: string
 *           description: The content of comment
 *         create_at:
 *           type: string
 *           description: The time its created (Auto)
 *       required:
 *         - _id
 *         - owener
 *         - post 
 *       example:
 *          post: ""
 *          content: ""
*/