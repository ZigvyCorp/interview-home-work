const { mongoose, Schema } = require('mongoose')

const DOCUMENT_NAME = 'User'
const COLLECTION_NAME = 'Users'


var geoSchema = new Schema(
  {
    lat: { type: String },
    lng: { type: String },
  },
  { _id: false },
)
var addressSchema = new Schema(
  {
    street: { type: String },
    suite: { type: String },
    city: { type: String },
    zipcode: { type: String },
    geo: geoSchema,
  },
  { _id: false },
)
var companySchema = new Schema(
  {
    name: { type: String, required: true },
    catchPhrase: { type: String },
    bs: { type: String },
  },
  { _id: false },
)

var userSchema = new Schema(
  {
    _id: Number,
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
    address: addressSchema,
    phone: {
      type: String,
    },
    website: {
      type: String,
    },
    company: {
      type: companySchema,
    },
  },
  {
    _id: false,
    collection: COLLECTION_NAME,
    timestamps: true,
  },
)

const user = mongoose.model(DOCUMENT_NAME, userSchema);
module.exports = user;
