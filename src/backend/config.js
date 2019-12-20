const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 8080,
  DATABASE_NAME: 'DummySocialClub',
  DATABASE_URL: 'mongodb://localhost:27017',
  SALT_ROUND: 10 // The explanation of salt round: https://stackoverflow.com/questions/46693430/what-are-salt-rounds-and-how-are-salts-stored-in-bcrypt
};
