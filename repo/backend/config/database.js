const mongoose = require('mongoose');

require('dotenv').config();

/**
 * -------------- DATABASE ----------------
 */

/**
 * Connect to MongoDB Server using the connection string in the `.env` file.  To implement this, place the following
 * string into the `.env` file
 * 
 * CONNECTION_STRING=mongodb://<user>:<password>@localhost:27017/database_name
 * CONNECTION_STRING_PROD=<your production database string>
 */ 

const devConnection = process.env.CONNECTION_STRING;
const prodConnection = 'mongodb://' + process.env.MONGO_USER + ':' + process.env.MONGO_PASSWORD + '@' + process.env.CONNECTION_STRING;

// Connect to the correct environment database
if (process.env.NODE_ENV === 'production') {
    mongoose.connect(prodConnection);

    mongoose.connection.on('connected', () => {
        console.log('Database connected');
    });
} else {
    mongoose.connect(devConnection);

    mongoose.connection.on('connected', () => {
        console.log('Database connected');
    });
}