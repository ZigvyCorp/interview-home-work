const mongoose = require('mongoose');
const { DATABASE_NAME, DATABASE_URL } = require('../config');

module.exports = {
  connect() {
    try {
      mongoose.Promise = global.Promise;
      mongoose.connect(`${DATABASE_URL}/${DATABASE_NAME}`, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });
    } catch (err) {
      throw new Error(err);
    }
  },
};
