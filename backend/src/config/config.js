require('dotenv').config();

const config = {
    PORT: process.env.PORT,
    SECRET: process.env.SECRET,
    JWT_ACCESS_EXPIRATION_MINUTES: process.env.JWT_ACCESS_EXPIRATION_MINUTES,
    JWT_REFRESH_EXPIRATION_DAYS: process.env.JWT_REFRESH_EXPIRATION_DAYS,
    MONGO_URI: process.env.MONGO_URI
}

module.exports = config;