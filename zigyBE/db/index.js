const config = require('config.json');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;
console.log('connected database')

module.exports = {
    User: require('./user.model'),
    Post: require('./post.model')
};