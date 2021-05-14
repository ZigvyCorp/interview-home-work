const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  _id: String,
  name: String,
  username: String,
  email: String,
  address: {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: {
      lat: String,
      lng: String,
    },
  },
  phone: String,
  website: String,
  company: {
    name: String,
    catchPhrase: String,
    bs: String,
  },
});

module.exports = mongoose.model('User', usersSchema);
