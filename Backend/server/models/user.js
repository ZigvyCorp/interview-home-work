import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment'

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    dob: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now,
        required: true,
    }
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'User');
export default mongoose.model('User', userSchema);