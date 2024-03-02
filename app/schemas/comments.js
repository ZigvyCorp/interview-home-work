const mongoose = require('mongoose');
const databaseConfig  = require(__path_configs + 'database');
const {Schema} 			= require('mongoose');

var schema = new mongoose.Schema({
    postId: {type: Number, ref: 'posts', required: true},
    posts: {
        id: Number,
        title: String,
    },
    id: Number,
    name: String,
    email: String,
    body: String
})


module.exports = mongoose.model(databaseConfig.col_comments, schema)