const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({}, { timestamps: true });

module.exports = mongoose.model("Blog", blogSchema);
