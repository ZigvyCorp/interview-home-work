const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    await mongoose
        .connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
        .catch((error) => console.log(error.reason));
};

module.exports = connectDB;
