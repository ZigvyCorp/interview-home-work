const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  owener: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  tags: {
    type: Array
  },
  create_at: String
}, { versionKey: false });

postSchema.index({ title: 'text' });
module.exports = mongoose.model('Post', postSchema);

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id
 *         owener:
 *           type: string
 *           description: The author
 *         title:
 *           type: string
 *           description: The title of post
 *         content:
 *           type: string
 *           description: The content of post
 *         tags:
 *           type: array
 *           description: The tags of post
 *         create_at:
 *           type: string
 *           description: The time its created (Auto)
 *       required:
 *         - _id
 *         - owener
 *         - title 
 *       example:
 *          title: ""
 *          content: ""
 *          tags: []
*/