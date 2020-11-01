import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: 'String', required: true },
  password: { type: 'String', required: true },
  name: { type: 'String', required: true },
  dob: { type: 'String', required: true },
  created_at: { type: 'Number', default: new Date().getTime(), required: true },
});

export default mongoose.model('User', userSchema);

