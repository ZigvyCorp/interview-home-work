const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/news');
        console.log('connection successfully');
    } catch (err) {
        console.log('connection Failer');
    }
}

module.exports = { connect };
