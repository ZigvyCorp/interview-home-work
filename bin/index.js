require('dotenv').config();
const conn = require('../connections/mongodb');

// Connect to DB
conn.getMongoClientWrite();

// Start Server
let server = require('./server');
server.listen(process.env.PORT);

module.exports = server;
