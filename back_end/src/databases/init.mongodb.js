const mongoose = require('mongoose');
const { MONGODB_URI } = require('../configs/app');

const newConnection =(uri) => {
    const conn = mongoose.createConnection(uri);

    conn.on('connected', () => {
        console.log('Mongodb connected: ', uri);
    });

    conn.on('disconnected', () => {
        console.log('Mongodb disconnected: ', uri);
    });

    conn.on('error', (error) => {
        console.log('Mongodb connection error: ', error);
    });

    return conn;
};

const blogDb = newConnection(MONGODB_URI);

module.exports = {
  blogDb,
};
