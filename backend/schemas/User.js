const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 6,
    maxlength: 12,
    required: true
  },
  password: {
    type: String,
    minlength: 6,
    maxlength: 12,
    required: true
  },
  name: {
    type: String,
    minlength: 3,
    maxlength: 12,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  create_at: String
}, { versionKey: false });

module.exports = mongoose.model('User', userSchema);

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id
 *         username:
 *           type: string
 *           description: The username
 *         password:
 *           type: string
 *           description: The password
 *         name:
 *           type: string
 *           description: The name
 *         dob:
 *           type: string
 *           description: The date of birthday
 *         create_at:
 *           type: string
 *           description: The time its created (Auto)
 *       required:
 *         - _id
 *         - username
 *         - password
 *       example:
 *          username: ""
 *          password: ""
 *          name: ""
 *          dob: ""
 * 
*/