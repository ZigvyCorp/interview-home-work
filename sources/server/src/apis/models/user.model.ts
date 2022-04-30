import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

import { IUser, UserModel } from '../types';
import { Post } from './post.model';

const { Schema } = mongoose;

const UserSchema = new Schema<IUser, UserModel>(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
            minlength: 6,
            validate(value: String) {
                if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
                    throw new Error('Password must contain at least one letter and one number');
                }
            },
            private: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        dob: {
            type: Date,
        },
        posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'posts' }],
    },
    {
        timestamps: true,
    },
);

UserSchema.statics.isUsernameTaken = async function (username) {
    const user = await this.findOne({ username });
    return !!user;
};

UserSchema.methods.checkPasswordMatch = function (password: string) {
    return bcrypt.compareSync(password, this.password);
};

UserSchema.pre('save', { document: true, query: false }, async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 10);
    }
    next();
});

const User = mongoose.model<IUser, UserModel>('users', UserSchema);

export { UserSchema, User };
