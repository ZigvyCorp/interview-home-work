const mongoose = require('mongoose');
const databaseConfig  = require(__path_configs + 'database');
const {Schema} 			= require('mongoose');

var schema = new mongoose.Schema({
	userId: {type: Number, ref: 'users', required: true},
    id: Number,
    title: String,
    body: String

    
})
schema.virtual('comments', {
	ref: 'comments', //The Model to use
	localField: 'id', //Find in Model, where localField 
	foreignField: 'postId', // is equal to foreignField
 });
 
 // Set Object and Json property to true. Default is set to false
 schema.set('toObject', { virtuals: true });
 schema.set('toJSON', { virtuals: true });
 
 

module.exports = mongoose.model(databaseConfig.col_posts, schema)