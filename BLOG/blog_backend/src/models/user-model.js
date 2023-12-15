const mongoose = require("mongoose");

const GeoSchema = new mongoose.Schema({
  lat: { type: String },
  lng: { type: String },
});

const AddressSchema = new mongoose.Schema({
  street: { type: String },
  suite: { type: String },
  city: { type: String },
  zipcode: { type: String },
  geo: { type: GeoSchema },
});

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  catchPhrase: { type: String },
  bs: { type: String },
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: AddressSchema,
  },
  phone: {
    type: String,
  },
  website: {
    type: String,
  },
  company: {
    type: CompanySchema,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
