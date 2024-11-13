const dotenv = require('dotenv');

dotenv.config();

const config = {
    port: process.env.PORT || 5000, 
    mongodbURI: process.env.MONGODB_URI,
};

module.exports = config;
