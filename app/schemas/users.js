const mongoose = require('mongoose');
const databaseConfig  = require(__path_configs + 'database');
const {Schema} 			= require('mongoose');

var schema = new mongoose.Schema({
    id: Number,
    name: String,
    username: String,
    email: String,
    address: {
      street: String,
      suite: String,
      city: String,
      zipcode: String,
      geo: {
        lat: String,
        lng: String
      }
    },
    phone: String,
    website: String,
    company: {
      name: String,
      catchPhrase: String,
      bs: String
    }
})


schema.virtual('posts', {
	ref: 'posts', //The Model to use
	localField: 'id', //Find in Model, where localField 
	foreignField: 'userId', // is equal to foreignField
 });
 
 // Set Object and Json property to true. Default is set to false
 schema.set('toObject', { virtuals: true });
 schema.set('toJSON', { virtuals: true });
 
 


module.exports = mongoose.model(databaseConfig.col_users, schema)