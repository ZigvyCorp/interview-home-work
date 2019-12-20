const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 8080,
  DATABASE_NAME: 'DummySocialClub',
  DATABASE_URL: 'mongodb://localhost',
};
