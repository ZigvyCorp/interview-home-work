const mongoose = require('mongoose')
const Schema = mongoose.Schema



const Commnet = new Schema({
  postId: Number,
  id: Number,
  name: String,
  email: String,
  body: String,
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now }
}, {_id: false})

module.exports = mongoose.model('Comment', Comment)