var mongoose = require('mongoose');
var user = new mongoose.Schema(
    {
        id: Number,
        username: String,
        password: String,
        name: String,
        dob:String,
        created_at: Number,
    },
    { collection: 'Users' }
);
module.exports = mongoose.model('user', user);