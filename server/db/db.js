const mongoose = require('mongoose');
const config = require('../config/config');

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongodbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect to MongoDB success');
    } catch (error) {
        console.error('Faild to connect to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
