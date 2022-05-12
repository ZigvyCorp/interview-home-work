const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  level: Number
}, { versionKey: false });

module.exports = mongoose.model('Item', itemSchema);