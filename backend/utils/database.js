const mongoose = require('mongoose');

const MONGO_DB_URI = "mongodb+srv://khang15:khang15@cluster0.h1y2tri.mongodb.net/?retryWrites=true&w=majority";

const connectDB = () => {
    mongoose.connect(MONGO_DB_URI).then(() => {
        console.log("Connect to mongoDB server successfully!");
    }, (err) => {
        console.log("Unable connect to mongoDB server: ", err);
    });
};

module.exports = connectDB;

