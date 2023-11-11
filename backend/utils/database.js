const mongoose = require('mongoose');

const MONGO_DB_URI = process.env.MONGO_DB_URI;

const connectDB = () => {
    mongoose.connect(MONGO_DB_URI).then(() => {
        console.log("Connect to mongoDB server successfully!");
    }, (err) => {
        console.log("Unable connect to mongoDB server: ", err);
    });
};

module.exports = connectDB;

