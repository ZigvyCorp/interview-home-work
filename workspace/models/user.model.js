import mongoose from 'mongoose';

const GeoSchema = new mongoose.Schema({
  lat: {
    type: String, 
    required: true
  },
  lng: {
    type: String,
    required: true
  }
}, { _id: false }); 

const AddressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true
  },
  suite: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: true
  },
  zipcode: {
    type: String,
    required: true
  },
  geo: {
    type: GeoSchema,
    required: true
  }
}, { _id: false }); 

const UserSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true 
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true 
  },
  email: {
    type: String,
    required: true,
    unique: true, 
    match: [/.+@.+\..+/, 'Please fill a valid email address']
  },
  address: {
    type: AddressSchema,
    required: true
  }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

export default User;
