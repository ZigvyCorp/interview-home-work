var mongoose = require('mongoose');
require('dotenv').config();
var dbUrl =
  'mongodb://' +
  process.env.DB_HOST +
  ':' +
  process.env.DB_PORT +
  '/' +
  process.env.DB_NAME;
if (process.env.DB_USERNAME && process.env.DB_PASSWORD) {
  dbUrl =
    'mongodb://' +
    process.env.DB_USERNAME +
    +':' +
    process.env.DB_PASSWORD +
    '@' +
    process.env.DB_HOST +
    ':' +
    process.env.DB_PORT +
    '/' +
    process.env.DB_NAME;
}

var connection = mongoose.connect(
  dbUrl,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  function (error) {
    if (error) console.log(error);
    console.log('Your Mongo Database is connect on 27017');
  }
);

module.exports = connection;
