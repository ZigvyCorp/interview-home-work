const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    address: {
        street: {
            type: String,
        },
        suite: {
            type: String,
        },
        city: {
            type: String,
        },
        zipcode: {
            type: String,
        },
        geo: {
            lat: {
                type: String,
            },
            lng: {
                type: String,
            },
        },
    },
    phone: {
        type: String,
        require: true
    },
    website: {
        type: String,
    },
    company: {
        name: {
            type: String,
        },
        catchPhrase: {
            type: String,
        },
        bs: {
            type: String,
        }
    }
});

const Users = mongoose.model('Users', userSchema);
module.exports = Users;