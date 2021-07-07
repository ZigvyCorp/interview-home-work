const mongoose = require('mongoose');
const db = mongoose.connection;
const config = require('../config/config');


function connectMongoDB () {
  let mongoConfig = config.MONGODB.getConfig();
  mongoose.connect(mongoConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4
  }, (err) => {
    if (err) {
      console.log('Can not connect to DB. Please Check Again.');
      throw err;
    }
    console.log('Connect Successfully To DB Server');
  });
}
module.exports = {
  // MONGODB
  getMongoClientWrite: () => {
    db.on('disconnected', () => {
      console.log('MongoDB disconnected!');
      connectMongoDB();
    });
    connectMongoDB();
    mongoose.set('debug', process.env.MONGO_DEBUG === 'true');
    mongoose.Promise = global.Promise;
  }
};
