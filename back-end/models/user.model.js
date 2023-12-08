const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: Number,
    name: Number,
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
});

const User = mongoose.model('User', userSchema);

module.exports = User;