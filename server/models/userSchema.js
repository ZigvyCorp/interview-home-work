const mongoose = require("mongoose");

const geoSchema = new mongoose.Schema({
  lat: {
    type: String,
  },
  lng: {
    type: String,
  },
});

const companySchema = mongoose.Schema({
  name: {
    type:String
  },
  catchPhrase: {
    type:String
  },
  bs: {
    type:String
  }
})

const addressSchema = new mongoose.Schema({
  street: {
    type: String,
  },
  suite: {
    type: String,
  },
  city: {
    type: String,
  },
  zipcode: {
    type: String,
  },
  geo: geoSchema,
});

const userSchema = mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
      index: true,
      required: true,
      unique: true,
      default: new mongoose.Types.ObjectId()
    },
    name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
    },
    email: {
      type: String,
      unique:true,
      required: true,
    },
    address: addressSchema,
    phone: {
      type: String,
      unique: true,
      required: true,
    },
    website: {
      type: String,
    },
    company: companySchema,

  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
